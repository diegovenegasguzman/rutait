/* Cursos, módulos y unidades según los currículos estatales:
   SMR (RD 1691/2007), ASIR (RD 1629/2009), DAM (RD 450/2010) y DAW (RD 686/2010).
   Cada unidad corresponde a un bloque de «contenidos básicos» del real decreto.
   u: [ ["Nombre de la unidad", ["id-tema", ...]], ... ]  (lista vacía = en preparación) */

const LM = {c:"0373", n:"Lenguajes de marcas y sistemas de gestión de información", u:[
  ["Características de los lenguajes de marcas", ["html-xml"]],
  ["Lenguajes de marcas en entornos web", []],
  ["Sindicación de contenidos (RSS y Atom)", []],
  ["Esquemas y vocabularios XML: DTD y XSD", ["dtd-xsd"]],
  ["Conversión y adaptación de documentos XML (XPath y XSLT)", []],
  ["Almacenamiento de información en XML", []],
  ["Sistemas de gestión empresarial", ["erp"]]
]};

const COMUN_DAM_DAW = [
  {c:"0485", n:"Programación", u:[
    ["Elementos de un programa: variables, tipos y operadores", ["programacion"]],
    ["Utilización de objetos", []],
    ["Estructuras de control", []],
    ["Desarrollo de clases", ["poo"]],
    ["Lectura y escritura de información", []],
    ["Estructuras de almacenamiento: arrays y colecciones", []],
    ["Utilización avanzada de clases: herencia e interfaces", []],
    ["Persistencia de los objetos", []],
    ["Gestión de bases de datos relacionales desde el programa", []]
  ]},
  {c:"0484", n:"Bases de datos", u:[
    ["Almacenamiento de la información", []],
    ["Bases de datos relacionales y modelo E-R", ["modelo-er"]],
    ["Realización de consultas", ["bd-sql","sql-avanzado"]],
    ["Tratamiento de datos", []],
    ["Programación de bases de datos", []]
  ]},
  {c:"0483", n:"Sistemas informáticos", u:[
    ["Explotación de sistemas microinformáticos", ["hardware"]],
    ["Instalación de sistemas operativos", ["so","instalacion-so"]],
    ["Gestión de la información", []],
    ["Configuración de sistemas operativos", ["linux-comandos"]],
    ["Conexión de sistemas en red", []],
    ["Gestión de recursos en una red", []],
    ["Aplicaciones informáticas de propósito general", []]
  ]},
  {c:"0487", n:"Entornos de desarrollo", u:[
    ["Desarrollo de software", []],
    ["Instalación y uso de entornos de desarrollo", ["entornos"]],
    ["Diseño y realización de pruebas", []],
    ["Optimización y documentación", []],
    ["Diagramas de clases", []],
    ["Diagramas de comportamiento", []]
  ]},
  LM
];

const COURSES = [
  {id:"smr1", short:"1º SMR", family:"SMR", name:"Sistemas Microinformáticos y Redes", grade:"Grado medio", year:"Primer curso",
   desc:"Montar y reparar ordenadores, instalar sistemas operativos, conectar equipos en red y manejar aplicaciones ofimáticas.",
   modules:[
     {c:"0221", n:"Montaje y mantenimiento de equipos", u:[
       ["Selección de componentes", ["hardware","numeracion"]],
       ["Análisis del mercado de componentes", []],
       ["Ensamblado de equipos", []],
       ["Medición de parámetros eléctricos", []],
       ["Mantenimiento de equipos", ["diagnostico"]],
       ["Instalación de software", []],
       ["Nuevas tendencias en equipos informáticos", []],
       ["Mantenimiento de periféricos", []],
       ["Prevención de riesgos laborales y protección ambiental", []]
     ]},
     {c:"0222", n:"Sistemas operativos monopuesto", u:[
       ["Caracterización de sistemas operativos", ["so"]],
       ["Operación de sistemas de archivos", []],
       ["Instalación de sistemas operativos libres y propietarios", ["instalacion-so"]],
       ["Tareas básicas en sistemas operativos", ["linux-comandos"]],
       ["Administración de los sistemas operativos", ["procesos-memoria"]],
       ["Configuración de máquinas virtuales", ["virtualizacion"]]
     ]},
     {c:"0225", n:"Redes locales", u:[
       ["Despliegue del cableado", ["cableado"]],
       ["Interconexión de equipos en redes locales", ["osi"]],
       ["Instalación y configuración de los equipos de red", []],
       ["Resolución de incidencias en una red local", []],
       ["Prevención de riesgos laborales y protección ambiental", []]
     ]},
     {c:"0223", n:"Aplicaciones ofimáticas", u:[
       ["Instalación de aplicaciones", []],
       ["Procesadores de texto y hojas de cálculo", ["ofimatica"]],
       ["Bases de datos ofimáticas", []],
       ["Manipulación de imágenes", []],
       ["Manipulación de vídeos", []],
       ["Elaboración de presentaciones", []],
       ["Gestión de correo y agenda electrónica", []],
       ["Técnicas de soporte al usuario", []]
     ]}
   ]},
  {id:"smr2", short:"2º SMR", family:"SMR", name:"Sistemas Microinformáticos y Redes", grade:"Grado medio", year:"Segundo curso",
   desc:"Servidores y dominios, servicios de red, seguridad y aplicaciones web para pequeñas empresas.",
   modules:[
     {c:"0224", n:"Sistemas operativos en red", u:[
       ["Instalación de sistemas operativos en red", []],
       ["Gestión de usuarios y grupos", []],
       ["Gestión de dominios", ["dominios"]],
       ["Gestión de los recursos compartidos en red", []],
       ["Monitorización y uso del sistema operativo en red", []],
       ["Integración de sistemas libres y propietarios", []]
     ]},
     {c:"0226", n:"Seguridad informática", u:[
       ["Medidas de seguridad pasiva", []],
       ["Gestión de dispositivos de almacenamiento", ["alta-disp"]],
       ["Mecanismos de seguridad activa", ["seguridad"]],
       ["Aseguramiento de la privacidad", []],
       ["Legislación y normas sobre seguridad", []]
     ]},
     {c:"0227", n:"Servicios en red", u:[
       ["Configuración dinámica de sistemas (DHCP)", ["servicios"]],
       ["Resolución de nombres (DNS)", []],
       ["Transferencia de ficheros", []],
       ["Correo electrónico", []],
       ["Servidores web", ["servidor-web"]],
       ["Acceso remoto", []],
       ["Despliegue de redes inalámbricas", []],
       ["Interconexión de redes privadas con redes públicas", ["nat-enrutamiento"]]
     ]},
     {c:"0228", n:"Aplicaciones web", u:[
       ["Gestores de contenidos", ["cms"]],
       ["Plataformas de aprendizaje a distancia", []],
       ["Servicios de gestión de archivos web", []],
       ["Aplicaciones de ofimática web", []],
       ["Aplicaciones web de escritorio", []]
     ]}
   ]},
  {id:"asir1", short:"1º ASIR", family:"ASIR", name:"Administración de Sistemas Informáticos en Red", grade:"Grado superior", year:"Primer curso",
   desc:"Las bases de la administración: hardware, sistemas operativos, redes, bases de datos y lenguajes de marcas.",
   modules:[
     {c:"0370", n:"Planificación y administración de redes", u:[
       ["Caracterización de redes: modelos y direccionamiento", ["osi","ipv4","ipv6"]],
       ["Integración de elementos en una red", []],
       ["Configuración y administración de conmutadores", []],
       ["Configuración básica de routers", []],
       ["Redes virtuales (VLAN)", ["vlan"]],
       ["Protocolos de enrutamiento dinámico", ["nat-enrutamiento"]],
       ["Acceso a Internet desde una LAN", []]
     ]},
     {c:"0371", n:"Fundamentos de hardware", u:[
       ["Configuración de equipos y periféricos", ["hardware","numeracion"]],
       ["Software de utilidad y propósito general", ["diagnostico"]],
       ["Imágenes y respaldo del software base", []],
       ["Hardware en centros de proceso de datos (CPD)", ["virtualizacion"]],
       ["Prevención de riesgos laborales y protección ambiental", []]
     ]},
     {c:"0369", n:"Implantación de sistemas operativos", u:[
       ["Instalación de software libre y propietario", ["so","instalacion-so"]],
       ["Administración de software de base", ["linux-comandos"]],
       ["Administración y aseguramiento de la información", []],
       ["Administración de dominios", ["dominios"]],
       ["Administración del acceso al dominio", []],
       ["Supervisión del rendimiento del sistema", ["procesos-memoria"]],
       ["Directivas de seguridad y auditorías", []],
       ["Resolución de incidencias y asistencia técnica", []]
     ]},
     {c:"0372", n:"Gestión de bases de datos", u:[
       ["Sistemas de almacenamiento de la información", []],
       ["Diseño lógico: modelo E-R y normalización", ["modelo-er"]],
       ["Diseño físico de bases de datos", ["bd-sql"]],
       ["Realización de consultas", ["sql-avanzado"]],
       ["Edición de los datos", []],
       ["Construcción de guiones", []],
       ["Gestión de la seguridad de los datos", []]
     ]},
     LM
   ]},
  {id:"asir2", short:"2º ASIR", family:"ASIR", name:"Administración de Sistemas Informáticos en Red", grade:"Grado superior", year:"Segundo curso",
   desc:"Administrar la infraestructura de una organización: servicios, servidores web, bases de datos, automatización y seguridad.",
   modules:[
     {c:"0374", n:"Administración de sistemas operativos", u:[
       ["Servicio de directorio", []],
       ["Administración de procesos del sistema", ["procesos-memoria"]],
       ["Información del sistema", []],
       ["Acceso y administración remota", []],
       ["Servidores de impresión", []],
       ["Integración de sistemas libres y propietarios", []],
       ["Lenguajes de scripting", ["scripting"]]
     ]},
     {c:"0375", n:"Servicios de red e Internet", u:[
       ["Servicio de nombres de dominio (DNS)", ["servicios"]],
       ["Configuración automática de red (DHCP)", []],
       ["Servidores web", ["servidor-web"]],
       ["Transferencia de archivos", []],
       ["Correo electrónico", []],
       ["Mensajería instantánea, noticias y listas de distribución", []],
       ["Servicio de audio", []],
       ["Servicio de vídeo", []]
     ]},
     {c:"0376", n:"Implantación de aplicaciones web", u:[
       ["Servidores de aplicaciones web", []],
       ["Instalación de gestores de contenidos", ["cms"]],
       ["Administración de gestores de contenidos", []],
       ["Ofimática web", []],
       ["Lenguajes de script de servidor", ["php-servidor"]],
       ["Acceso a bases de datos desde el servidor", []],
       ["Adaptación de gestores de contenidos", []]
     ]},
     {c:"0377", n:"Administración de sistemas gestores de bases de datos", u:[
       ["Instalación y configuración de un SGBD", ["admin-sgbd"]],
       ["Acceso a la información: usuarios y privilegios", []],
       ["Guiones de administración", []],
       ["Monitorización y optimización del rendimiento", []],
       ["Bases de datos distribuidas y replicadas", []]
     ]},
     {c:"0378", n:"Seguridad y alta disponibilidad", u:[
       ["Pautas de seguridad informática", ["seguridad"]],
       ["Mecanismos de seguridad activa", []],
       ["Acceso remoto y seguridad perimetral", []],
       ["Cortafuegos", []],
       ["Servidores proxy", []],
       ["Soluciones de alta disponibilidad", ["alta-disp"]],
       ["Legislación y normas sobre seguridad", []]
     ]}
   ]},
  {id:"dam1", short:"1º DAM", family:"DAM", name:"Desarrollo de Aplicaciones Multiplataforma", grade:"Grado superior", year:"Primer curso",
   desc:"Programación, bases de datos y herramientas de desarrollo. Es el mismo primer curso que DAW.", modules:COMUN_DAM_DAW},
  {id:"dam2", short:"2º DAM", family:"DAM", name:"Desarrollo de Aplicaciones Multiplataforma", grade:"Grado superior", year:"Segundo curso",
   desc:"Aplicaciones de escritorio y móviles, acceso a datos, concurrencia y sistemas de gestión empresarial.",
   modules:[
     {c:"0486", n:"Acceso a datos", u:[
       ["Manejo de ficheros", ["acceso-datos"]],
       ["Conectores (JDBC)", []],
       ["Mapeo objeto-relacional (ORM)", []],
       ["Bases de datos objeto-relacionales y orientadas a objetos", []],
       ["Bases de datos XML", []],
       ["Componentes de acceso a datos", []]
     ]},
     {c:"0488", n:"Desarrollo de interfaces", u:[
       ["Confección de interfaces de usuario", ["interfaces"]],
       ["Interfaces a partir de documentos XML", []],
       ["Componentes visuales", []],
       ["Usabilidad", []],
       ["Confección de informes", []],
       ["Documentación de aplicaciones", []],
       ["Distribución de aplicaciones", []],
       ["Realización de pruebas", []]
     ]},
     {c:"0489", n:"Programación multimedia y dispositivos móviles", u:[
       ["Tecnologías para dispositivos móviles", ["android"]],
       ["Programación de aplicaciones móviles", []],
       ["Librerías multimedia", []],
       ["Motores de juegos", []],
       ["Desarrollo de juegos 2D y 3D", []]
     ]},
     {c:"0490", n:"Programación de servicios y procesos", u:[
       ["Programación multiproceso", []],
       ["Programación multihilo", ["hilos"]],
       ["Comunicaciones en red: sockets", []],
       ["Servicios en red", []],
       ["Programación segura", []]
     ]},
     {c:"0491", n:"Sistemas de gestión empresarial", u:[
       ["Sistemas ERP-CRM", ["erp"]],
       ["Instalación y configuración de un ERP-CRM", []],
       ["Organización y consulta de la información", []],
       ["Implantación en una empresa", []],
       ["Desarrollo de componentes", []]
     ]}
   ]},
  {id:"daw1", short:"1º DAW", family:"DAW", name:"Desarrollo de Aplicaciones Web", grade:"Grado superior", year:"Primer curso",
   desc:"Programación, bases de datos y herramientas de desarrollo. Es el mismo primer curso que DAM.", modules:COMUN_DAM_DAW},
  {id:"daw2", short:"2º DAW", family:"DAW", name:"Desarrollo de Aplicaciones Web", grade:"Grado superior", year:"Segundo curso",
   desc:"Aplicaciones web completas: la parte del navegador, la del servidor, el diseño de la interfaz y su puesta en producción.",
   modules:[
     {c:"0612", n:"Desarrollo web en entorno cliente", u:[
       ["Arquitecturas y herramientas de programación", []],
       ["Sintaxis del lenguaje", ["javascript"]],
       ["Objetos predefinidos del lenguaje", []],
       ["Arrays, funciones y objetos propios", []],
       ["Eventos y formularios", []],
       ["Modelo de objetos del documento (DOM)", []],
       ["Comunicación asíncrona", []]
     ]},
     {c:"0613", n:"Desarrollo web en entorno servidor", u:[
       ["Arquitecturas y herramientas de programación", []],
       ["Inserción de código en páginas web", ["php-servidor"]],
       ["Lenguajes de marcas con código embebido", []],
       ["Aplicaciones web con código embebido", []],
       ["Generación dinámica de páginas web", []],
       ["Acceso a datos", []],
       ["Servicios web", []],
       ["Páginas web interactivas", []],
       ["Aplicaciones web híbridas", []]
     ]},
     {c:"0614", n:"Despliegue de aplicaciones web", u:[
       ["Arquitecturas web", []],
       ["Administración de servidores web", ["servidor-web"]],
       ["Servidores de aplicaciones", []],
       ["Servidores de transferencia de archivos", []],
       ["Servicios de red para el despliegue", ["servicios"]],
       ["Documentación y control de versiones", ["entornos"]]
     ]},
     {c:"0615", n:"Diseño de interfaces web", u:[
       ["Planificación de interfaces gráficas", []],
       ["Uso de estilos (CSS)", ["css"]],
       ["Contenido multimedia", []],
       ["Contenido interactivo", []],
       ["Diseño de webs accesibles", []],
       ["Usabilidad y diseño amigable", []]
     ]}
   ]}
];

/* Lista plana de temas de cada módulo (la usan el mapa y los contadores) */
COURSES.forEach(c => c.modules.forEach(m => { if(!m.t) m.t = [...new Set(m.u.flatMap(x => x[1]))]; }));
