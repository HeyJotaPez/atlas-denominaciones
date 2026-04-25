// ── definitions.js ──
// Definiciones para los tooltips/popovers de cada columna temática.

const DEFS = {

  /* ══════════════════════════════════════════
     FAMILIAS TEOLÓGICAS
  ══════════════════════════════════════════ */
  familias: {
    title: "Familias Teológicas",
    intro: "Una familia teológica agrupa denominaciones que comparten un origen histórico común, documentos confesionales y énfasis doctrinales afines. No implica comunión formal entre ellas.",
    items: [
      {
        name: "Católica",
        icon: "✝",
        color: "#4c1d95",
        bg: "#ede9fe",
        desc: "La Iglesia Católica Romana se considera la continuación directa de la Iglesia apostólica fundada por Cristo. Su autoridad se estructura en torno al Papa (obispo de Roma) como sucesor de Pedro, el Magisterio como intérprete auténtico de la fe, y la Tradición Sagrada como fuente coextensa con la Escritura. Posee los siete sacramentos, la doctrina de la transubstanciación en la Eucaristía y una rica tradición mariana y de santos.",
        keyDocs: "Catecismo de la Iglesia Católica (1992), Concilio Vaticano II (1962–65), Pastor Aeternus (1870)"
      },
      {
        name: "Ortodoxa",
        icon: "☦",
        color: "#1e3a8a",
        bg: "#dbeafe",
        desc: "Las Iglesias Ortodoxas (Orientales y Orientales Antiguas) son la continuación histórica del Patriarcado de Constantinopla y las iglesias orientales. Rechazan la autoridad papal y el Filioque. Se gobiernan por concilios de patriarcas autocéfalos. Enfatizan la Theosis (deificación del creyente), la liturgia divina y la Tradición sagrada como guía hermenéutica. Incluyen Griega, Rusa, Copta, Armenia, Etíope, entre otras.",
        keyDocs: "Los 7 Concilios Ecuménicos (325–787), Liturgia de San Juan Crisóstomo, Filocalía"
      },
      {
        name: "Luterana",
        icon: "L",
        color: "#065f46",
        bg: "#d1fae5",
        desc: "Iniciada por Martín Lutero en 1517 con las 95 Tesis, la familia luterana es la primera rama del protestantismo. Su eje teológico son los tres 'solas': Sola Scriptura (la Biblia como única autoridad), Sola Fide (justificación solo por fe) y Sola Gratia (salvación solo por gracia). Mantiene bautismo de infantes y la presencia real de Cristo en la Eucaristía (consubstanciación).",
        keyDocs: "Confesión de Augsburgo (1530), Catecismo Menor de Lutero (1529), Libro de Concordia (1580)"
      },
      {
        name: "Reformada",
        icon: "R",
        color: "#134e4a",
        bg: "#ccfbf1",
        desc: "Derivada de Juan Calvino (Ginebra, 1536) y Ulrico Zuinglio (Zúrich). Enfatiza la soberanía absoluta de Dios, la predestinación (doctrina TULIP), la teología del pacto y la regla normativa de adoración. Se gobierna por presbiterios de ancianos. Incluye Presbiterianos, Iglesias Reformadas (RCA, CRC) y tradiciones calvinistas en Corea, Suiza, Escocia y Países Bajos.",
        keyDocs: "Confesión de Westminster (1647), Catecismo de Heidelberg (1563), Cánones de Dort (1618–19)"
      },
      {
        name: "Anglicana",
        icon: "A",
        color: "#164e63",
        bg: "#cffafe",
        desc: "La Comunión Anglicana nació de la reforma de Enrique VIII (1534) y fue teológicamente articulada por Thomas Cranmer. Se posiciona como 'vía media' entre el catolicismo y el protestantismo: conserva el episcopado histórico apostólico pero abraza la justificación por fe. Presente en 165 países, incluye corrientes evangélicas, anglocatólicas y liberales bajo el mismo paraguas.",
        keyDocs: "39 Artículos de Religión (1563), Libro de Oración Común (1662), Lambeth Quadrilateral (1888)"
      },
      {
        name: "Anabautista",
        icon: "~",
        color: "#14532d",
        bg: "#dcfce7",
        desc: "El movimiento radical de la Reforma (1525, Zúrich). Rechazaron el bautismo de infantes (de ahí 'ana-bautistas' = re-bautizadores), la unión iglesia-Estado, la violencia y el juramento. Enfatizan la comunidad de discípulos, el seguimiento literal de Cristo (Nachfolge) y la separación del mundo. Incluyen menonitas, amish, hermanos en Cristo y otras comunidades de paz.",
        keyDocs: "Confesión de Schleitheim (1527), Dordrecht Confession (1632), Confession of Faith in a Mennonite Perspective (1995)"
      },
      {
        name: "Metodista",
        icon: "M",
        color: "#713f12",
        bg: "#fef9c3",
        desc: "Fundada por John Wesley (1739) dentro del anglicanismo como movimiento de renovación espiritual. Su teología distintiva incluye la gracia preveniente (Dios obra en todos antes de la fe), el libre albedrío, la entera santificación (segunda obra de gracia) y el cuadrilátero wesleyano como método hermenéutico. Dio origen al movimiento de Santidad, el nazarenismo y el pentecostalismo.",
        keyDocs: "Los Artículos de Religión de Wesley (1784), Cuadrilátero Wesleyano, Disciplina de la Iglesia Metodista"
      },
      {
        name: "Bautista",
        icon: "B",
        color: "#7c2d12",
        bg: "#ffedd5",
        desc: "Surgida en Ámsterdam (1609) bajo John Smyth y Thomas Helwys, la tradición bautista insiste en el bautismo de creyentes adultos por inmersión, la autonomía de cada congregación local, la separación Iglesia-Estado y la libertad de conciencia. Se divide en 'Particular' (calvinista) y 'General' (arminiana). La Convención Bautista del Sur (SBC) es la mayor denominación protestante de EE.UU.",
        keyDocs: "Confesión de Londres (1644, 1689), Confesión de Fe de New Hampshire (1833), Abstract of Principles (1858)"
      },
      {
        name: "Pentecostal",
        icon: "🔥",
        color: "#7f1d1d",
        bg: "#fee2e2",
        desc: "Nacida en el Avivamiento de la Calle Azusa (Los Ángeles, 1906) bajo William J. Seymour. Los pentecostales enfatizan el bautismo del Espíritu Santo como experiencia post-conversión, con la glosolalia (hablar en lenguas) como evidencia inicial. También practican la sanidad divina y esperan la segunda venida inminente. Es la familia cristiana de mayor crecimiento en el mundo global.",
        keyDocs: "Declaración de Verdades Fundamentales de las Asambleas de Dios (1916), Statement of Fundamental Truths"
      },
      {
        name: "Carismática",
        icon: "✨",
        color: "#831843",
        bg: "#fce7f3",
        desc: "Desde los años 1960, el movimiento carismático llevó los dones del Espíritu (glosolalia, sanidad, profecía) a denominaciones históricas (anglicana, católica, luterana, etc.) sin separarse de ellas. La 'tercera ola' (1980s) incluyó iglesias independientes. Se diferencia del pentecostalismo clásico en que no exige la glosolalia como evidencia necesaria del bautismo del Espíritu.",
        keyDocs: "Full Gospel Business Men's Fellowship, Duquesne Weekend (1967), Vineyard Movement"
      },
      {
        name: "Neopentecostal",
        icon: "💎",
        color: "#991b1b",
        bg: "#fef2f2",
        desc: "Evolución del pentecostalismo desde los años 1980, caracterizada por la Teología de la Prosperidad (la fe garantiza bendición material), la confesión positiva ('nombra y reclama'), liderazgo apostólico-profético centralizado, ausencia de la ética de santidad tradicional y fuerte énfasis en la guerra espiritual. Muy extendida en Latinoamérica, África y Asia. Diferencias clave con el pentecostalismo clásico: enfoque en el éxito económico como señal de bendición, gobierno eclesial más autoritario y menor énfasis en la santidad personal.",
        keyDocs: "Escritos de Kenneth Hagin, Word of Faith Movement, Nueva Reforma Apostólica (Peter Wagner)"
      },
      {
        name: "Adventista",
        icon: "📅",
        color: "#166534",
        bg: "#f0fdf4",
        desc: "Surge del Movimiento Milerita (EE.UU., 1844) tras el 'Gran Chasco'. Sus doctrinas distintivas incluyen el sábado del séptimo día, el sueño del alma (estado inconsciente entre la muerte y la resurrección), el Investigative Judgment (juicio investigador iniciado en 1844) y la salud holística. Ellen G. White es considerada portadora del don profético menor.",
        keyDocs: "Creencias Fundamentales Adventistas (28 doctinas), Escritos de Ellen G. White, Santuario y Juicio Investigador"
      },
      {
        name: "Restauracionista",
        icon: "📜",
        color: "#334155",
        bg: "#f8fafc",
        desc: "El Movimiento Stone-Campbell (EE.UU., 1800s) buscó restaurar el cristianismo del Nuevo Testamento rechazando credos humanos ('sin más credo que el NT'). Se divide en: Iglesias de Cristo (sin instrumentos, más conservadoras), Iglesias Independientes Cristianas y Discípulos de Cristo (más liberales). Énfasis en el bautismo como parte de la conversión y la Cena del Señor semanal.",
        keyDocs: "Last Will and Testament of the Springfield Presbytery (1804), Declaration and Address (1809)"
      },
      {
        name: "Cuáquera",
        icon: "🕊",
        color: "#166534",
        bg: "#f0fdf4",
        desc: "Fundada por George Fox (Inglaterra, 1650). Los Cuáqueros (Friends) enfatizan la Luz Interior del Cristo presente en todo ser humano, rechazando sacramentos, liturgia, credos formales y clero. Se reúnen en silencio esperando la iluminación del Espíritu. Conocidos por su pacifismo radical, compromiso con la igualdad social y oposición a la esclavitud. Muchos grupos actuales tienen teología muy pluralista.",
        keyDocs: "Apology (Robert Barclay, 1678), Faith and Practice (varios anuarios regionales)"
      },
      {
        name: "No trinitaria",
        icon: "⚠",
        color: "#a16207",
        bg: "#fef9c3",
        desc: "Tradiciones que se autoidentifican como cristianas pero rechazan la doctrina trinitaria ortodoxa (formulada en los Concilios de Nicea 325 y Constantinopla 381). Incluyen: Testigos de Jehová (arrianismo moderno), Mormones (politeísmo social), Unitarios (unitarismo), Pentecostales Unicitarios (modalismo). Bajo el triaje bíblico, estas posiciones comprometen doctrinas de orden primario.",
        keyDocs: "Cada grupo tiene sus propias fuentes; ninguno acepta la Definición de Calcedonia (451)"
      }
    ]
  },

  /* ══════════════════════════════════════════
     GOBIERNO ECLESIÁSTICO
  ══════════════════════════════════════════ */
  gobierno: {
    title: "Formas de Gobierno Eclesiástico",
    intro: "El gobierno eclesiástico define quién tiene autoridad en la Iglesia: cómo se toman decisiones, quién puede enseñar con autoridad y cómo se estructura la jerarquía (o su ausencia).",
    items: [
      {
        name: "Papal",
        icon: "👑",
        color: "#4c1d95",
        bg: "#ede9fe",
        desc: "El Papa (obispo de Roma) posee la autoridad suprema, ordinaria e inmediata sobre toda la Iglesia universal. Definido dogmáticamente en el Concilio Vaticano I (1870) con el dogma de la infalibilidad papal cuando habla ex cathedra en materia de fe y moral. La estructura jerárquica desciende: Papa → Cardenales → Obispos → Presbíteros → Diáconos. Exclusivo del catolicismo romano.",
        keyDocs: "Pastor Aeternus (Vaticano I, 1870), Lumen Gentium (Vaticano II, 1964)"
      },
      {
        name: "Episcopal",
        icon: "⛪",
        color: "#1e3a8a",
        bg: "#dbeafe",
        desc: "El gobierno episcopal coloca la autoridad en los obispos (del griego epíscopos = supervisor), quienes forman la cima de la jerarquía eclesiástica. Muchas tradiciones episcopales afirman la 'sucesión apostólica': la línea ininterrumpida de imposición de manos desde los apóstoles hasta los obispos actuales. Utilizado por: Católicos, Ortodoxos, Anglicanos, Metodistas, Luteranos (en parte), Pentecostales jerárquicos.",
        keyDocs: "Didajé (siglo I), Epístolas de Ignacio de Antioquía, Documentos conciliares"
      },
      {
        name: "Presbiteriano",
        icon: "🏛",
        color: "#065f46",
        bg: "#d1fae5",
        desc: "Del griego presbýteros (anciano). El gobierno lo ejercen consejos de ancianos elegidos por la congregación, organizados en niveles: Sesión local → Presbiterio regional → Sínodo → Asamblea General. Nadie tiene autoridad individual suprema; las decisiones son colegiadas. Teológicamente vinculado a la tradición reformada-calvinista. También utilizado por Adventistas y algunas iglesias luteranas.",
        keyDocs: "Forma de Gobierno Presbiteriana, Confesión de Westminster Cap. XXX–XXXI"
      },
      {
        name: "Congregacional",
        icon: "🫂",
        color: "#7c2d12",
        bg: "#ffedd5",
        desc: "Cada congregación local es autónoma y soberana bajo Cristo: toma sus propias decisiones doctrinales, disciplinarias y administrativas. No hay autoridad eclesiástica superior que pueda imponerse. Las asociaciones o convenciones son voluntarias y sin poder coercitivo. Usado por Bautistas, Anabautistas, Iglesias de Cristo, Congregacionalistas y muchas iglesias independientes.",
        keyDocs: "Savoy Declaration (1658), Confesión de Cambridge (1648), Schleitheim Confession (1527)"
      },
      {
        name: "Apostólico / Episcopal",
        icon: "✋",
        color: "#7c2d12",
        bg: "#ffedd5",
        desc: "Variante utilizada principalmente en el movimiento neopentecostal y la Nueva Reforma Apostólica (NAR). Afirma que Dios ha restaurado en el siglo XX el oficio de Apóstol y Profeta (Ef. 4:11) con autoridad gubernamental sobre iglesias y regiones. El 'apóstol' suele ser el fundador del ministerio y detenta un poder personal amplio, a veces sin los mecanismos de rendición de cuentas de las estructuras históricas.",
        keyDocs: "Escritos de Peter Wagner (NAR), International Coalition of Apostolic Leaders"
      },
      {
        name: "Teocrático",
        icon: "📖",
        color: "#a16207",
        bg: "#fef9c3",
        desc: "Exclusivo de los Testigos de Jehová. El 'Cuerpo Gobernante' en Brooklyn/Warwick (EE.UU.) se considera el canal exclusivo de Dios para interpretar la Biblia en la actualidad. Sus directrices son vinculantes para todos los Testigos del mundo. No hay elección de líderes por las congregaciones; los 'ancianos' locales son designados jerárquicamente. La estructura es altamente centralizada y verticalista.",
        keyDocs: "Watchtower Society publications, Organizado para hacer la voluntad de Jehová"
      },
      {
        name: "Sin estructura formal",
        icon: "🌿",
        color: "#475569",
        bg: "#f1f5f9",
        desc: "Los Cuáqueros (Amigos) rechazan toda jerarquía eclesial formal. No hay pastor, sacerdote ni predicador designado. En las reuniones de adoración, cualquier miembro puede hablar si siente que el Espíritu le mueve. Las decisiones se toman por 'sentido de la reunión' (consenso guiado por el Espíritu). Hay comités y 'secretarios de registro', pero ningún cargo detenta autoridad doctrinal.",
        keyDocs: "Quaker Faith & Practice (London Yearly Meeting), Apology (Barclay, 1678)"
      }
    ]
  },

  /* ══════════════════════════════════════════
     BAUTISMO
  ══════════════════════════════════════════ */
  bautismo: {
    title: "Doctrina del Bautismo",
    intro: "El bautismo es el rito de iniciación cristiana. Las controversias giran en torno a dos ejes: ¿A quién se bautiza? (infantes o creyentes) y ¿Qué efecto tiene? (regeneración, señal de pacto, obediencia pública o mero símbolo).",
    items: [
      {
        name: "Bautismo de Infantes (Paidobautismo)",
        icon: "👶",
        color: "#1e3a8a",
        bg: "#dbeafe",
        desc: "Se bautiza a los hijos de creyentes desde recién nacidos. Las justificaciones varían: (1) Teología sacramental: el bautismo confiere gracia bautismal y regeneración (Católicos, Luteranos, Anglicanos); (2) Teología del pacto: el bautismo es la señal del Nuevo Pacto equivalente a la circuncisión del Antiguo Pacto, administrado a los hijos del pacto (Reformados, Presbiterianos); (3) Confirmación posterior: en muchas tradiciones, la fe personal se confirma en la adolescencia.",
        keyDocs: "Catecismo de la Iglesia Católica §1213–1284, Confesión de Westminster Cap. XXVIII"
      },
      {
        name: "Bautismo de Creyentes (Credobautismo)",
        icon: "🙏",
        color: "#7c2d12",
        bg: "#ffedd5",
        desc: "Solo se bautiza a quienes han profesado fe personal en Cristo. El bautismo es una declaración pública de conversión, no el medio de la gracia en sí. Los anabautistas lo iniciaron como ruptura radical con el modelo cristiano-estatal medieval. Los bautistas insisten en la inmersión completa como forma más fiel al griego baptídzo (sumergir) y al simbolismo de muerte y resurrección (Ro. 6:4). Incluye variantes por aspersión (algunos metodistas) e inmersión.",
        keyDocs: "Confesión de Londres (1689) Cap. XXIX, Schleitheim Confession Art. 1"
      },
      {
        name: "Bautismo de Creyentes por Inmersión",
        icon: "💧",
        color: "#7c2d12",
        bg: "#ffedd5",
        desc: "Variante específica del credobautismo que exige la inmersión total del candidato en agua. Defendida por Bautistas, Pentecostales, Adventistas e Iglesias de Cristo. Argumentan que la palabra griega baptídzo significa 'sumergir', que el Jordán no permitía mera aspersión, y que el simbolismo paulino de muerte-sepultura-resurrección (Ro. 6:3-4) requiere inmersión total. Algunos grupos pentecostales unicitarios exigen la fórmula 'en el nombre de Jesús'.",
        keyDocs: "Romanos 6:3-4, Hechos 8:36-39, Confesión de Fe Bautista (1689) Cap. XXIX"
      },
      {
        name: "No practicado",
        icon: "∅",
        color: "#475569",
        bg: "#f1f5f9",
        desc: "Los Cuáqueros (Amigos) y el Ejército de Salvación no practican ningún sacramento externo. Los Cuáqueros argumentan que Cristo bautiza directamente con el Espíritu Santo (Mt. 3:11) sin necesidad de ritual de agua; los ritos externos son visibles pero la realidad es invisible. El Ejército de Salvación (Booth, 1880) consideró que los sacramentos dividían a los creyentes y optó por omitirlos, enfocándose en el servicio social como verdadera adoración.",
        keyDocs: "Apology (Barclay) Cap. XII, William Booth: Orders and Regulations for SA"
      }
    ]
  },

  /* ══════════════════════════════════════════
     ESCATOLOGÍA
  ══════════════════════════════════════════ */
  escatologia: {
    title: "Escatología: Doctrina de las Últimas Cosas",
    intro: "La escatología estudia los eventos finales: la segunda venida de Cristo, el Milenio (Ap. 20), el juicio final y el estado eterno. El punto más debatido es la interpretación del reinado de 1000 años de Apocalipsis 20:1-6.",
    items: [
      {
        name: "Amilenialismo",
        icon: "∞",
        color: "#1e3a8a",
        bg: "#dbeafe",
        desc: "La posición más antigua y mayoritaria en la historia de la Iglesia. El 'milenio' de Ap. 20 no es un período literal de 1000 años, sino una descripción simbólica de la era de la Iglesia (desde Pentecostés hasta la segunda venida). Cristo ya reina espiritualmente sobre la Iglesia triunfante. Al final de la historia, Cristo vendrá visiblemente, habrá una resurrección general, un juicio universal y la eternidad comenzará directamente. Sin 'rapto secreto', sin tribulación literal de 7 años. Sostenida por: Católicos, Ortodoxos, Reformados/Presbiterianos, Luteranos, algunos Anglicanos.",
        keyDocs: "Agustín de Hipona: La Ciudad de Dios (Libro XX), Geerhardus Vos: The Pauline Eschatology"
      },
      {
        name: "Premilenialismo histórico",
        icon: "📅",
        color: "#7c2d12",
        bg: "#ffedd5",
        desc: "Cristo vendrá visiblemente ANTES de establecer un reinado literal de 1000 años en la tierra. La Iglesia pasará por la Gran Tribulación (sin rapto previo). Después del milenio viene la resurrección final y el juicio. Esta fue la posición de muchos padres de la Iglesia (Justino Mártir, Ireneo, Tertuliano). Se diferencia del dispensacionalismo en que no separa a Israel de la Iglesia ni postula un rapto secreto. Sostenida por: George Eldon Ladd, Gordon Fee, algunas Iglesias de Cristo.",
        keyDocs: "George E. Ladd: A Theology of the NT; Justino Mártir: Diálogo con Trifón"
      },
      {
        name: "Premilenialismo dispensacionalista",
        icon: "🗓",
        color: "#b45309",
        bg: "#fef3c7",
        desc: "Desarrollada por John Nelson Darby (Plymouth Brethren, siglo XIX) y popularizada por la Biblia Scofield (1909). Distingue radicalmente entre Israel (programa terrenal) y la Iglesia (programa celestial) como dos pueblos de Dios con destinos diferentes. Postula: (1) Rapto secreto de la Iglesia antes de la tribulación; (2) 7 años de Gran Tribulación sobre Israel; (3) Segunda venida visible de Cristo; (4) Reinado literal de 1000 años en Jerusalén; (5) Juicio final y eternidad. Muy popular en pentecostalismo, bautismo del sur y evangelicalismo norteamericano.",
        keyDocs: "Biblia Scofield (1909), Lewis Sperry Chafer: Systematic Theology, John Walvoord: The Revelation of Jesus Christ"
      },
      {
        name: "Posmilenialismo",
        icon: "🌅",
        color: "#166534",
        bg: "#dcfce7",
        desc: "Cristo vendrá DESPUÉS de un período de gran prosperidad espiritual (el 'milenio') en el que el evangelio habrá transformado las naciones y dominado culturalmente. La Iglesia, mediante la predicación y el poder del Espíritu, instaurará condiciones de justicia y paz antes de la parusía. Popular en el siglo XIX y asociado al optimismo del progreso. Sostenido por puritanos, algunos wesleyanos y en tiempos recientes por el Reconstructionismo cristiano (Rushdoony) y algunos reformados.",
        keyDocs: "Jonathan Edwards: History of Redemption, Loraine Boettner: The Millennium, R.J. Rushdoony: Theonomy"
      },
      {
        name: "Diverso",
        icon: "⚖",
        color: "#475569",
        bg: "#f1f5f9",
        desc: "Algunas denominaciones no tienen una posición escatológica oficial obligatoria, permitiendo diversidad interna. Esto es común en: Anglicanos (amplia variedad), Bautistas (diversidad entre ramas), Restauracionistas (algunos grupos), Cuáqueros (poco énfasis en escatología predictiva), algunas Iglesias carismáticas independientes. La escatología se trata como doctrina de tercer orden (tertiary) en el triaje bíblico, por lo que no justifica división eclesiástica.",
        keyDocs: "N/A — depende de cada congregación o teólogo particular"
      }
    ]
  }
};
