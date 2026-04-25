/* ── app.js — Atlas del Cristianismo ── */

/* ─── Counter animation ─── */
function animateCounters() {
  document.querySelectorAll('.stat-n').forEach(el => {
    const target = +el.dataset.target;
    const dur = 1800, step = 16;
    const inc = target / (dur / step);
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= target) { cur = target; clearInterval(timer); }
      el.textContent = Math.floor(cur).toLocaleString('es-CO');
    }, step);
  });
}

/* ─── Scroll reveal ─── */
function initReveal() {
  document.querySelectorAll('.triage-card, .table-header, .controls-bar, .warn-note, .glos-header, .glos-tabs').forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ─── Tag helpers ─── */
function familiaClass(f) { return `tag tag-familia-${f}`; }
function gobClass(g) {
  const keys = ['Episcopal','Papal','Presbiteriano','Congregacional'];
  const k = keys.find(k => (g||'').includes(k));
  return `tag tag-gob-${k||'default'}`;
}
function bauClass(b) {
  if (!b || b === 'No practicado') return 'tag tag-bau-No';
  if (b.toLowerCase().includes('infant')) return 'tag tag-bau-Infantes';
  return 'tag tag-bau-Creyentes';
}

/* ─── Sort state ─── */
let sortKey = 'year', sortDir = 1;

/* ─── Build row ─── */
function buildRow(d) {
  const tr = document.createElement('tr');
  if (d.nonOrthodox) tr.classList.add('non-orthodox');
  tr.addEventListener('click', () => openModal(d));
  tr.innerHTML = `
    <td class="cell-year">${d.year}</td>
    <td><div class="cell-name">${d.name}</div><div class="cell-region">${d.region}</div></td>
    <td><span class="${familiaClass(d.familia)}">${d.familia}</span></td>
    <td style="font-size:.78rem;color:#444;line-height:1.55">${d.doctrinas}</td>
    <td class="triage-t1">${d.t1}</td>
    <td class="triage-t2">${d.t2}</td>
    <td class="triage-t3">${d.t3}</td>
    <td><span class="${gobClass(d.gobierno)}">${d.gobierno}</span></td>
    <td><span class="${bauClass(d.bautismo)}">${d.bautismo}</span></td>
    <td class="escato-tag">${d.escato}</td>
    <td style="font-size:.75rem;font-family:'DM Mono',monospace;color:#666">${d.canon}</td>
    <td class="nota-cell">${d.nota}</td>
  `;
  return tr;
}

/* ─── Render table ─── */
function render() {
  const q    = document.getElementById('search').value.toLowerCase().trim();
  const fFam = document.getElementById('filtFamilia').value;
  const fGob = document.getElementById('filtGobierno').value;
  const fEsc = document.getElementById('filtEscato').value;

  let rows = DENOMINACIONES.filter(d => {
    if (fFam && d.familia !== fFam) return false;
    if (fGob && !d.gobierno.includes(fGob)) return false;
    if (fEsc && !d.escato.includes(fEsc)) return false;
    if (q) {
      const hay = [d.name,d.familia,d.doctrinas,d.gobierno,d.bautismo,
                   d.escato,d.nota,d.obs,String(d.year),d.region].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  rows.sort((a,b) => {
    const av = sortKey==='year' ? a.year : a.name;
    const bv = sortKey==='year' ? b.year : b.name;
    return av < bv ? -sortDir : av > bv ? sortDir : 0;
  });

  const tbody = document.getElementById('tbody');
  tbody.innerHTML = '';
  rows.forEach(d => tbody.appendChild(buildRow(d)));
  document.getElementById('count').textContent =
    `${rows.length} tradicion${rows.length!==1?'es':''}`;
}

/* ─── Sort headers ─── */
document.querySelectorAll('th.sortable').forEach(th => {
  th.addEventListener('click', () => {
    const col = th.dataset.col;
    sortKey===col ? sortDir*=-1 : (sortKey=col, sortDir=1);
    document.querySelectorAll('th').forEach(h => h.classList.remove('sorted'));
    th.classList.add('sorted');
    th.querySelector('.sort-ico').textContent = sortDir===1 ? '↑' : '↓';
    render();
  });
});

/* ─── Filters & search ─── */
document.getElementById('search').addEventListener('input', render);
document.getElementById('filtFamilia').addEventListener('change', render);
document.getElementById('filtGobierno').addEventListener('change', render);
document.getElementById('filtEscato').addEventListener('change', render);
document.getElementById('clear-search').addEventListener('click', () => {
  document.getElementById('search').value = ''; render();
});

/* ════════════════════════════════════════════
   GLOSARIO TABS
════════════════════════════════════════════ */
function buildDefCard(item) {
  return `
    <div class="def-card">
      <div class="def-card-head">
        <div class="def-icon" style="background:${item.bg||'#f1f5f9'};color:${item.color||'#334155'}">${item.icon||'·'}</div>
        <div class="def-name" style="color:${item.color||'var(--ink-2)'}">${item.name}</div>
      </div>
      <div class="def-card-body">
        <p class="def-desc">${item.desc}</p>
        ${item.keyDocs ? `<div class="def-docs">${item.keyDocs}</div>` : ''}
      </div>
    </div>`;
}

function buildPanel(key) {
  const section = DEFS[key];
  if (!section) return '';
  const cards = section.items.map(buildDefCard).join('');
  return `
    <div class="glos-panel${key==='familias'?' active':''}" id="panel-${key}">
      <div class="glos-intro">${section.intro}</div>
      <div class="def-grid">${cards}</div>
    </div>`;
}

function initGlosario() {
  const container = document.getElementById('glosPanels');
  if (!container) return;
  container.innerHTML = ['familias','gobierno','bautismo','escatologia'].map(buildPanel).join('');

  document.querySelectorAll('.glos-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.target;
      document.querySelectorAll('.glos-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.glos-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(`panel-${key}`);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ════════════════════════════════════════════
   COLUMN HEADER DEFINITION MODAL
════════════════════════════════════════════ */
function openDefModal(key) {
  const section = DEFS[key];
  if (!section) return;
  const cards = section.items.map(buildDefCard).join('');
  document.getElementById('defBody').innerHTML = `
    <div class="modal-eyebrow">Glosario de columna</div>
    <h2 class="modal-title">${section.title}</h2>
    <div class="glos-intro" style="margin:1rem 0 1.5rem">${section.intro}</div>
    <div class="def-grid">${cards}</div>
  `;
  document.getElementById('defOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDefModal() {
  document.getElementById('defOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('th.th-info').forEach(th => {
  th.addEventListener('click', e => {
    e.stopPropagation();
    openDefModal(th.dataset.def);
  });
});
document.getElementById('defClose').addEventListener('click', closeDefModal);
document.getElementById('defOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeDefModal();
});

/* ════════════════════════════════════════════
   ROW DETAIL MODAL
════════════════════════════════════════════ */
function openModal(d) {
  const overlay = document.getElementById('modalOverlay');
  const body    = document.getElementById('modalBody');
  const warnHtml = d.nonOrthodox
    ? `<div class="modal-warn">⚠ Esta tradición <strong>no es considerada cristiana trinitaria ortodoxa</strong> bajo el estándar del triaje primario, ya que rechaza la Trinidad bíblica o la deidad plena de Cristo.</div>`
    : '';

  body.innerHTML = `
    <div class="modal-eyebrow">Denominación · ${d.year} d.C.</div>
    <h2 class="modal-title">${d.name}</h2>
    <p class="modal-region">📍 ${d.region} &nbsp;·&nbsp; Familia: <strong>${d.familia}</strong></p>
    <div class="modal-triage">
      <h4>Triaje Bíblico</h4>
      <div class="triage-row"><div class="triage-pill p1">1°</div><div class="triage-row-text"><strong>Primario:</strong> ${d.t1}</div></div>
      <div class="triage-row"><div class="triage-pill p2">2°</div><div class="triage-row-text"><strong>Secundario:</strong> ${d.t2}</div></div>
      <div class="triage-row"><div class="triage-pill p3">3°</div><div class="triage-row-text"><strong>Terciario:</strong> ${d.t3}</div></div>
    </div>
    <div class="modal-grid">
      <div class="modal-field"><div class="modal-field-label">Posturas doctrinales</div><div class="modal-field-value">${d.doctrinas}</div></div>
      <div class="modal-field"><div class="modal-field-label">Gobierno eclesiástico</div><div class="modal-field-value">${d.gobierno}</div></div>
      <div class="modal-field"><div class="modal-field-label">Bautismo</div><div class="modal-field-value">${d.bautismo}</div></div>
      <div class="modal-field"><div class="modal-field-label">Escatología</div><div class="modal-field-value">${d.escato}</div></div>
      <div class="modal-field"><div class="modal-field-label">Canon bíblico</div><div class="modal-field-value">${d.canon}</div></div>
      <div class="modal-field"><div class="modal-field-label">Presencia global</div><div class="modal-field-value">${d.spread}</div></div>
      <div class="modal-field full"><div class="modal-field-label">Distintivo clave</div><div class="modal-field-value">${d.nota}</div></div>
      <div class="modal-field full"><div class="modal-field-label">Observaciones teológicas</div><div class="modal-field-value">${d.obs}</div></div>
    </div>
    ${warnHtml}
  `;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target===e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key==='Escape') { closeModal(); closeDefModal(); }
});

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  render();
  initGlosario();
  initReveal();
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(heroStats);
  }
});
