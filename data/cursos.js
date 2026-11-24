/* Cursos, módulos y unidades según los currículos estatales:
   SMR (RD 1691/2007), ASIR (RD 1629/2009), DAM (RD 450/2010), DAW (RD 686/2010)
   y QSA, Química y Salud Ambiental (RD 283/2019).
   Cada unidad corresponde a un bloque de «contenidos básicos» del real decreto.
   u: [ ["Nombre de la unidad", ["id-tema", ...]], ... ]  (lista vacía = en preparación) */

const LM = {c:"0373", n:"Lenguajes de marcas y sistemas de gestión de información", u:[
  ["Características de los lenguajes de marcas", ["html-xml"]],
  ["Lenguajes de marcas en entornos web", ["html5"]],
  ["Sindicación de contenidos (RSS y Atom)", ["sindicacion"]],
  ["Esquemas y vocabularios XML: DTD y XSD", ["dtd-xsd"]],
  ["Conversión y adaptación de documentos XML (XPath y XSLT)", ["xpath-xslt"]],
  ["Almacenamiento de información en XML", ["xquery"]],
  ["Sistemas de gestión empresarial", ["erp"]]
]};

const COMUN_DAM_DAW = [
  {c:"0485", n:"Programación", u:[
    ["Elementos de un programa: variables, tipos y operadores", ["programacion"]],
    ["Utilización de objetos", ["objetos-java"]],
    ["Estructuras de control", ["control-flujo"]],
    ["Desarrollo de clases", ["poo"]],
    ["Lectura y escritura de información", ["entrada-salida"]],
    ["Estructuras de almacenamiento: arrays y colecciones", ["colecciones"]],
    ["Utilización avanzada de clases: herencia e interfaces", ["herencia-interfaces"]],
    ["Persistencia de los objetos", ["persistencia"]],
    ["Gestión de bases de datos relacionales desde el programa", ["jdbc"]]
  ]},
  {c:"0484", n:"Bases de datos", u:[
    ["Almacenamiento de la información", ["almacenamiento-info"]],
    ["Bases de datos relacionales y modelo E-R", ["modelo-er"]],
    ["Realización de consultas", ["bd-sql","sql-avanzado"]],
    ["Tratamiento de datos", ["edicion-datos"]],
    ["Programación de bases de datos", ["guiones-sql"]]
  ]},
  {c:"0483", n:"Sistemas informáticos", u:[
    ["Explotación de sistemas microinformáticos", ["hardware"]],
    ["Instalación de sistemas operativos", ["so","instalacion-so"]],
    ["Gestión de la información", ["gestion-almacenamiento"]],
    ["Configuración de sistemas operativos", ["linux-comandos"]],
    ["Conexión de sistemas en red", ["integracion-red"]],
    ["Gestión de recursos en una red", ["dominios"]],
    ["Aplicaciones informáticas de propósito general", ["instalar-software"]]
  ]},
  {c:"0487", n:"Entornos de desarrollo", u:[
    ["Desarrollo de software", ["ciclo-software"]],
    ["Instalación y uso de entornos de desarrollo", ["entornos"]],
    ["Diseño y realización de pruebas", ["pruebas"]],
    ["Optimización y documentación", ["refactorizacion"]],
    ["Diagramas de clases", ["uml-clases"]],
    ["Diagramas de comportamiento", ["uml-comportamiento"]]
  ]},
  LM
];

const COURSES = [
  {id:"smr1", short:"1º SMR", family:"SMR", name:"Sistemas Microinformáticos y Redes", grade:"Grado medio", year:"Primer curso",
   desc:"Montar y reparar ordenadores, instalar sistemas operativos, conectar equipos en red y manejar aplicaciones ofimáticas.",
   modules:[
     {c:"0221", n:"Montaje y mantenimiento de equipos", u:[
       ["Selección de componentes", ["hardware","numeracion"]],
       ["Análisis del mercado de componentes", ["montaje"]],
       ["Ensamblado de equipos", ["montaje"]],
       ["Medición de parámetros eléctricos", ["electricidad"]],
       ["Mantenimiento de equipos", ["diagnostico","copias-imagenes"]],
       ["Instalación de software", ["instalar-software"]],
       ["Nuevas tendencias en equipos informáticos", ["tendencias"]],
       ["Mantenimiento de periféricos", ["perifericos"]],
       ["Prevención de riesgos laborales y protección ambiental", ["prl"]]
     ]},
     {c:"0222", n:"Sistemas operativos monopuesto", u:[
       ["Caracterización de sistemas operativos", ["so"]],
       ["Operación de sistemas de archivos", ["gestion-almacenamiento"]],
       ["Instalación de sistemas operativos libres y propietarios", ["instalacion-so"]],
       ["Tareas básicas en sistemas operativos", ["linux-comandos"]],
       ["Administración de los sistemas operativos", ["procesos-memoria"]],
       ["Configuración de máquinas virtuales", ["virtualizacion"]]
     ]},
     {c:"0225", n:"Redes locales", u:[
       ["Despliegue del cableado", ["cableado"]],
       ["Interconexión de equipos en redes locales", ["osi"]],
       ["Instalación y configuración de los equipos de red", ["switching","routers"]],
       ["Resolución de incidencias en una red local", ["integracion-red"]],
       ["Prevención de riesgos laborales y protección ambiental", ["prl"]]
     ]},
     {c:"0223", n:"Aplicaciones ofimáticas", u:[
       ["Instalación de aplicaciones", ["instalar-software"]],
       ["Procesadores de texto y hojas de cálculo", ["ofimatica"]],
       ["Bases de datos ofimáticas", ["bd-ofimaticas"]],
       ["Manipulación de imágenes", ["multimedia"]],
       ["Manipulación de vídeos", ["multimedia"]],
       ["Elaboración de presentaciones", ["presentaciones"]],
       ["Gestión de correo y agenda electrónica", ["correo-agenda"]],
       ["Técnicas de soporte al usuario", ["soporte-incidencias"]]
     ]}
   ]},
  {id:"smr2", short:"2º SMR", family:"SMR", name:"Sistemas Microinformáticos y Redes", grade:"Grado medio", year:"Segundo curso",
   desc:"Servidores y dominios, servicios de red, seguridad y aplicaciones web para pequeñas empresas.",
   modules:[
     {c:"0224", n:"Sistemas operativos en red", u:[
       ["Instalación de sistemas operativos en red", ["so-servidor"]],
       ["Gestión de usuarios y grupos", ["acceso-dominio"]],
       ["Gestión de dominios", ["dominios"]],
       ["Gestión de los recursos compartidos en red", ["gestion-almacenamiento"]],
       ["Monitorización y uso del sistema operativo en red", ["monitorizacion"]],
       ["Integración de sistemas libres y propietarios", ["samba-integracion"]]
     ]},
     {c:"0226", n:"Seguridad informática", u:[
       ["Medidas de seguridad pasiva", ["copias-imagenes"]],
       ["Gestión de dispositivos de almacenamiento", ["alta-disp"]],
       ["Mecanismos de seguridad activa", ["seguridad"]],
       ["Aseguramiento de la privacidad", ["privacidad-cifrado"]],
       ["Legislación y normas sobre seguridad", ["legislacion"]]
     ]},
     {c:"0227", n:"Servicios en red", u:[
       ["Configuración dinámica de sistemas (DHCP)", ["servicios"]],
       ["Resolución de nombres (DNS)", ["servicios"]],
       ["Transferencia de ficheros", ["ftp-ssh"]],
       ["Correo electrónico", ["servidor-correo"]],
       ["Servidores web", ["servidor-web"]],
       ["Acceso remoto", ["ftp-ssh"]],
       ["Despliegue de redes inalámbricas", ["wifi-empresa"]],
       ["Interconexión de redes privadas con redes públicas", ["nat-enrutamiento"]]
     ]},
     {c:"0228", n:"Aplicaciones web", u:[
       ["Gestores de contenidos", ["cms"]],
       ["Plataformas de aprendizaje a distancia", ["lms-moodle"]],
       ["Servicios de gestión de archivos web", ["nube-archivos"]],
       ["Aplicaciones de ofimática web", ["ofimatica-web"]],
       ["Aplicaciones web de escritorio", ["ofimatica-web"]]
     ]}
   ]},
  {id:"asir1", short:"1º ASIR", family:"ASIR", name:"Administración de Sistemas Informáticos en Red", grade:"Grado superior", year:"Primer curso",
   desc:"Las bases de la administración: hardware, sistemas operativos, redes, bases de datos y lenguajes de marcas.",
   modules:[
     {c:"0370", n:"Planificación y administración de redes", u:[
       ["Caracterización de redes: modelos y direccionamiento", ["osi","ipv4","ipv6"]],
       ["Integración de elementos en una red", ["integracion-red"]],
       ["Configuración y administración de conmutadores", ["switching"]],
       ["Configuración básica de routers", ["routers"]],
       ["Redes virtuales (VLAN)", ["vlan"]],
       ["Protocolos de enrutamiento dinámico", ["nat-enrutamiento"]],
       ["Acceso a Internet desde una LAN", ["acceso-internet"]]
     ]},
     {c:"0371", n:"Fundamentos de hardware", u:[
       ["Configuración de equipos y periféricos", ["hardware","numeracion"]],
       ["Software de utilidad y propósito general", ["diagnostico"]],
       ["Imágenes y respaldo del software base", ["copias-imagenes"]],
       ["Hardware en centros de proceso de datos (CPD)", ["virtualizacion"]],
       ["Prevención de riesgos laborales y protección ambiental", ["prl"]]
     ]},
     {c:"0369", n:"Implantación de sistemas operativos", u:[
       ["Instalación de software libre y propietario", ["so","instalacion-so"]],
       ["Administración de software de base", ["linux-comandos"]],
       ["Administración y aseguramiento de la información", ["gestion-almacenamiento"]],
       ["Administración de dominios", ["dominios"]],
       ["Administración del acceso al dominio", ["acceso-dominio"]],
       ["Supervisión del rendimiento del sistema", ["procesos-memoria"]],
       ["Directivas de seguridad y auditorías", ["directivas-auditoria"]],
       ["Resolución de incidencias y asistencia técnica", ["soporte-incidencias"]]
     ]},
     {c:"0372", n:"Gestión de bases de datos", u:[
       ["Sistemas de almacenamiento de la información", ["almacenamiento-info"]],
       ["Diseño lógico: modelo E-R y normalización", ["modelo-er"]],
       ["Diseño físico de bases de datos", ["bd-sql"]],
       ["Realización de consultas", ["sql-avanzado"]],
       ["Edición de los datos", ["edicion-datos"]],
       ["Construcción de guiones", ["guiones-sql"]],
       ["Gestión de la seguridad de los datos", ["seguridad-datos"]]
     ]},
     LM
   ]},
  {id:"asir2", short:"2º ASIR", family:"ASIR", name:"Administración de Sistemas Informáticos en Red", grade:"Grado superior", year:"Segundo curso",
   desc:"Administrar la infraestructura de una organización: servicios, servidores web, bases de datos, automatización y seguridad.",
   modules:[
     {c:"0374", n:"Administración de sistemas operativos", u:[
       ["Servicio de directorio", ["dominios"]],
       ["Administración de procesos del sistema", ["procesos-memoria"]],
       ["Información del sistema", ["monitorizacion"]],
       ["Acceso y administración remota", ["ftp-ssh"]],
       ["Servidores de impresión", ["impresion"]],
       ["Integración de sistemas libres y propietarios", ["samba-integracion"]],
       ["Lenguajes de scripting", ["scripting"]]
     ]},
     {c:"0375", n:"Servicios de red e Internet", u:[
       ["Servicio de nombres de dominio (DNS)", ["servicios"]],
       ["Configuración automática de red (DHCP)", ["servicios"]],
       ["Servidores web", ["servidor-web"]],
       ["Transferencia de archivos", ["ftp-ssh"]],
       ["Correo electrónico", ["servidor-correo"]],
       ["Mensajería instantánea, noticias y listas de distribución", ["mensajeria"]],
       ["Servicio de audio", ["streaming"]],
       ["Servicio de vídeo", ["streaming"]]
     ]},
     {c:"0376", n:"Implantación de aplicaciones web", u:[
       ["Servidores de aplicaciones web", ["servidores-aplicaciones"]],
       ["Instalación de gestores de contenidos", ["cms"]],
       ["Administración de gestores de contenidos", ["admin-cms"]],
       ["Ofimática web", ["ofimatica-web"]],
       ["Lenguajes de script de servidor", ["php-servidor"]],
       ["Acceso a bases de datos desde el servidor", ["php-bd"]],
       ["Adaptación de gestores de contenidos", ["admin-cms"]]
     ]},
     {c:"0377", n:"Administración de sistemas gestores de bases de datos", u:[
       ["Instalación y configuración de un SGBD", ["admin-sgbd"]],
       ["Acceso a la información: usuarios y privilegios", ["seguridad-datos"]],
       ["Guiones de administración", ["guiones-sql"]],
       ["Monitorización y optimización del rendimiento", ["optimizacion-bd"]],
       ["Bases de datos distribuidas y replicadas", ["replicacion-bd"]]
     ]},
     {c:"0378", n:"Seguridad y alta disponibilidad", u:[
       ["Pautas de seguridad informática", ["seguridad"]],
       ["Mecanismos de seguridad activa", ["directivas-auditoria"]],
       ["Acceso remoto y seguridad perimetral", ["acceso-internet"]],
       ["Cortafuegos", ["cortafuegos"]],
       ["Servidores proxy", ["proxy"]],
       ["Soluciones de alta disponibilidad", ["alta-disp"]],
       ["Legislación y normas sobre seguridad", ["legislacion"]]
     ]}
   ]},
  {id:"dam1", short:"1º DAM", family:"DAM", name:"Desarrollo de Aplicaciones Multiplataforma", grade:"Grado superior", year:"Primer curso",
   desc:"Programación, bases de datos y herramientas de desarrollo. Es el mismo primer curso que DAW.", modules:COMUN_DAM_DAW},
  {id:"dam2", short:"2º DAM", family:"DAM", name:"Desarrollo de Aplicaciones Multiplataforma", grade:"Grado superior", year:"Segundo curso",
   desc:"Aplicaciones de escritorio y móviles, acceso a datos, concurrencia y sistemas de gestión empresarial.",
   modules:[
     {c:"0486", n:"Acceso a datos", u:[
       ["Manejo de ficheros", ["acceso-datos"]],
       ["Conectores (JDBC)", ["jdbc"]],
       ["Mapeo objeto-relacional (ORM)", ["orm"]],
       ["Bases de datos objeto-relacionales y orientadas a objetos", ["bd-objetos"]],
       ["Bases de datos XML", ["xquery"]],
       ["Componentes de acceso a datos", ["componentes-datos"]]
     ]},
     {c:"0488", n:"Desarrollo de interfaces", u:[
       ["Confección de interfaces de usuario", ["interfaces"]],
       ["Interfaces a partir de documentos XML", ["interfaces"]],
       ["Componentes visuales", ["componentes-visuales"]],
       ["Usabilidad", ["usabilidad"]],
       ["Confección de informes", ["informes"]],
       ["Documentación de aplicaciones", ["refactorizacion"]],
       ["Distribución de aplicaciones", ["distribucion-apps"]],
       ["Realización de pruebas", ["pruebas"]]
     ]},
     {c:"0489", n:"Programación multimedia y dispositivos móviles", u:[
       ["Tecnologías para dispositivos móviles", ["android"]],
       ["Programación de aplicaciones móviles", ["android-avanzado"]],
       ["Librerías multimedia", ["multimedia-movil"]],
       ["Motores de juegos", ["videojuegos"]],
       ["Desarrollo de juegos 2D y 3D", ["videojuegos"]]
     ]},
     {c:"0490", n:"Programación de servicios y procesos", u:[
       ["Programación multiproceso", ["multiproceso"]],
       ["Programación multihilo", ["hilos"]],
       ["Comunicaciones en red: sockets", ["sockets"]],
       ["Servicios en red", ["api-rest"]],
       ["Programación segura", ["programacion-segura"]]
     ]},
     {c:"0491", n:"Sistemas de gestión empresarial", u:[
       ["Sistemas ERP-CRM", ["erp"]],
       ["Instalación y configuración de un ERP-CRM", ["odoo-uso"]],
       ["Organización y consulta de la información", ["odoo-uso"]],
       ["Implantación en una empresa", ["erp"]],
       ["Desarrollo de componentes", ["odoo-modulos"]]
     ]}
   ]},
  {id:"daw1", short:"1º DAW", family:"DAW", name:"Desarrollo de Aplicaciones Web", grade:"Grado superior", year:"Primer curso",
   desc:"Programación, bases de datos y herramientas de desarrollo. Es el mismo primer curso que DAM.", modules:COMUN_DAM_DAW},
  {id:"daw2", short:"2º DAW", family:"DAW", name:"Desarrollo de Aplicaciones Web", grade:"Grado superior", year:"Segundo curso",
   desc:"Aplicaciones web completas: la parte del navegador, la del servidor, el diseño de la interfaz y su puesta en producción.",
   modules:[
     {c:"0612", n:"Desarrollo web en entorno cliente", u:[
       ["Arquitecturas y herramientas de programación", ["arquitectura-web-dev"]],
       ["Sintaxis del lenguaje", ["javascript"]],
       ["Objetos predefinidos del lenguaje", ["js-objetos"]],
       ["Arrays, funciones y objetos propios", ["js-arrays-funciones"]],
       ["Eventos y formularios", ["js-eventos"]],
       ["Modelo de objetos del documento (DOM)", ["js-dom"]],
       ["Comunicación asíncrona", ["js-async"]]
     ]},
     {c:"0613", n:"Desarrollo web en entorno servidor", u:[
       ["Arquitecturas y herramientas de programación", ["arquitectura-web-dev"]],
       ["Inserción de código en páginas web", ["php-servidor"]],
       ["Lenguajes de marcas con código embebido", ["php-servidor"]],
       ["Aplicaciones web con código embebido", ["php-sesiones"]],
       ["Generación dinámica de páginas web", ["php-mvc"]],
       ["Acceso a datos", ["php-bd"]],
       ["Servicios web", ["api-rest"]],
       ["Páginas web interactivas", ["js-async"]],
       ["Aplicaciones web híbridas", ["apis-terceros"]]
     ]},
     {c:"0614", n:"Despliegue de aplicaciones web", u:[
       ["Arquitecturas web", ["servidores-aplicaciones"]],
       ["Administración de servidores web", ["servidor-web"]],
       ["Servidores de aplicaciones", ["servidores-aplicaciones"]],
       ["Servidores de transferencia de archivos", ["ftp-ssh"]],
       ["Servicios de red para el despliegue", ["servicios"]],
       ["Documentación y control de versiones", ["entornos"]]
     ]},
     {c:"0615", n:"Diseño de interfaces web", u:[
       ["Planificación de interfaces gráficas", ["diseno-planificacion"]],
       ["Uso de estilos (CSS)", ["css"]],
       ["Contenido multimedia", ["multimedia-web"]],
       ["Contenido interactivo", ["web-interactiva"]],
       ["Diseño de webs accesibles", ["accesibilidad-web"]],
       ["Usabilidad y diseño amigable", ["usabilidad"]]
     ]}
   ]}
  ,
  /* Química y Salud Ambiental (RD 283/2019), con el reparto por cursos de Cataluña (CFPS SMC0)
     tal como lo imparte el Institut Miquel Martí i Pol, incluidas sus dos optativas (MPO2 y MPO3).
     No se incluyen los Itineraris personals per a l'ocupabilitat (equivalentes a FOL y EIE),
     Anglès professional ni la estancia en empresa. */
  {id:"qsa1", short:"1º QSA", family:"QSA", name:"Química y Salud Ambiental", grade:"Grado superior", year:"Primer curso",
   desc:"Aguas, contaminación atmosférica, organismos nocivos, gestión ambiental, unidad de salud ambiental, digitalización y sostenibilidad. Reparto de Cataluña.",
   modules:[
     {c:"1546", n:"Sistemas de gestión ambiental", u:[
       ["Elementos de un sistema de gestión de calidad", ["gestion-calidad"]],
       ["Elaboración de procedimientos normalizados de trabajo", ["gestion-calidad"]],
       ["Aspectos medioambientales", ["sga-iso14001"]],
       ["Aplicación de sistemas de gestión ambiental", ["sga-iso14001"]],
       ["Prevención de riesgos laborales y protección ambiental", ["prl-laboratorio"]]
     ]},
     {c:"1548", n:"Control de aguas", u:[
       ["Focos de contaminación de aguas de uso y consumo", ["aguas-contaminacion"]],
       ["Deficiencias técnico-sanitarias de las aguas", ["aguas-contaminacion"]],
       ["Tratamiento de aguas potables", ["aguas-potabilizacion"]],
       ["Tratamiento de aguas residuales", ["aguas-residuales"]],
       ["Toma de muestras de aguas", ["aguas-muestreo"]],
       ["Control de calidad físico-químico", ["aguas-fisicoquimico", "calculos-laboratorio", "tecnicas-instrumentales"]],
       ["Control de calidad microbiológico", ["aguas-microbiologia"]],
       ["Protocolos para minimizar los efectos sobre la salud (legionela)", ["legionela"]]
     ]},
     {c:"1552", n:"Contaminación ambiental y atmosférica", u:[
       ["Focos de contaminación atmosférica", ["contaminacion-atmosferica"]],
       ["Toma de muestras de aire", ["calidad-aire"]],
       ["Determinación de la calidad del aire", ["calidad-aire"]],
       ["Depuración y control de emisiones", ["depuracion-emisiones"]],
       ["Contaminación de origen físico", ["ruido-radiaciones"]],
       ["Protocolos frente a la contaminación", ["depuracion-emisiones"]]
     ]},
     {c:"1553", n:"Control de organismos nocivos", u:[
       ["Inspección de establecimientos", ["plagas-vectores"]],
       ["Identificación y control de plagas y vectores", ["plagas-vectores", "otras-plagas"]],
       ["Métodos de lucha y biocidas", ["biocidas"]],
       ["Toma de muestras de biocidas y vectores", ["biocidas"]],
       ["Establecimientos y servicios biocidas", ["control-integral-plagas"]],
       ["Planes de control integral de plagas", ["control-integral-plagas"]]
     ]},
     {c:"1554", n:"Unidad de salud ambiental", u:[
       ["La unidad de salud ambiental", ["unidad-salud-ambiental", "salud-publica-catalunya"]],
       ["Documentación sanitaria y medioambiental", ["unidad-salud-ambiental"]],
       ["Gestión de recursos materiales", ["laboratorio-equipos"]],
       ["Preparación y mantenimiento de equipos", ["laboratorio-equipos"]],
       ["Informes y resúmenes de actividad", ["estadistica-informes"]]
     ]},
     {c:"1665", n:"Digitalización aplicada a los sectores productivos", u:[
       ["Transformación digital y tecnologías habilitadoras", ["digitalizacion-sectores"]],
       ["Herramientas digitales para el trabajo técnico", ["digitalizacion-herramientas"]]
     ]},
     {c:"1708", n:"Sostenibilidad aplicada al sistema productivo", u:[
       ["Desarrollo sostenible y Objetivos de Desarrollo Sostenible", ["sostenibilidad-ods"]],
       ["Economía circular, huella de carbono y eficiencia", ["economia-circular-huella"]]
     ]},
     {c:"MPO2", n:"Taxonomía de organismos nocivos (optativo)", u:[
       ["Artrópodos de interés sanitario", ["taxonomia-artropodos"]],
       ["Roedores y otros vertebrados", ["taxonomia-vertebrados"]]
     ]}
   ]},
  {id:"qsa2", short:"2º QSA", family:"QSA", name:"Química y Salud Ambiental", grade:"Grado superior", year:"Segundo curso",
   desc:"Educación para la salud, residuos, medio construido, seguridad alimentaria, análisis de alimentos y el proyecto intermodular. Reparto de Cataluña.",
   modules:[
     {c:"1547", n:"Educación para la salud y el medio ambiente", u:[
       ["Vigilancia epidemiológica", ["vigilancia-epidemiologica"]],
       ["Planificación de actividades de educación sanitaria", ["educacion-sanitaria"]],
       ["Información sobre problemas de salud ambientales", ["educacion-sanitaria"]],
       ["Técnicas de comunicación", ["comunicacion-salud"]],
       ["Evaluación de programas de educación sanitaria", ["comunicacion-salud"]]
     ]},
     {c:"1549", n:"Control de residuos", u:[
       ["Fuentes de contaminación del suelo", ["suelos-contaminados"]],
       ["Sistemas de gestión de residuos sólidos", ["gestion-residuos", "residuos-sanitarios"]],
       ["Toma de muestras de suelos y residuos", ["suelos-muestreo"]],
       ["Análisis de suelos y residuos", ["suelos-muestreo"]],
       ["Protocolos de actuación", ["suelos-contaminados", "gestion-residuos"]]
     ]},
     {c:"1550", n:"Salud y riesgos del medio construido", u:[
       ["Inspección y control en el medio construido", ["medio-construido"]],
       ["Control de actividades MINP", ["actividades-minp"]],
       ["Toma de muestras", ["medio-construido-muestras"]],
       ["Análisis físico-químicos in situ", ["medio-construido-muestras"]],
       ["Programas de vigilancia ambiental", ["vigilancia-ambiental"]]
     ]},
     {c:"1551", n:"Control y seguridad alimentaria", u:[
       ["Inspección y control sanitario de alimentos (APPCC)", ["appcc"]],
       ["Deficiencias técnico-sanitarias en alimentos", ["contaminacion-alimentos", "toxiinfecciones"]],
       ["Toma de muestras de alimentos", ["alimentos-analisis"]],
       ["Análisis de la calidad higiénico-sanitaria", ["alimentos-analisis"]],
       ["Programas formativos y campañas de seguridad alimentaria y consumo", ["seguridad-alimentaria-consumo"]]
     ]},
     {c:"MPO3", n:"Técnicas de análisis alimentario (optativo)", u:[
       ["Análisis físico-químico de alimentos", ["analisis-alimentos-quimico"]],
       ["Análisis microbiológico de alimentos", ["analisis-alimentos-micro"]]
     ]},
     {c:"1555", n:"Proyecto intermodular de química y salud ambiental", u:[
       ["Planificación, desarrollo y presentación del proyecto", ["proyecto-qsa"]]
     ]}
   ]}
];

/* Lista plana de temas de cada módulo (la usan el mapa y los contadores) */
COURSES.forEach(c => c.modules.forEach(m => { if(!m.t) m.t = [...new Set(m.u.flatMap(x => x[1]))]; }));
