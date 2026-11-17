/* Cursos, módulos y temas de cada módulo.
   Para añadir un tema: crea temas/<id>.js y añade su id al módulo correspondiente. */
const COMUN_DAM_DAW = [
  {n:"Programación", t:["programacion","poo"]},
  {n:"Bases de datos", t:["modelo-er","bd-sql","sql-avanzado"]},
  {n:"Sistemas informáticos", t:["hardware","so","linux-comandos","virtualizacion"]},
  {n:"Entornos de desarrollo", t:["entornos"]},
  {n:"Lenguajes de marcas y sistemas de gestión de información", t:["html-xml","dtd-xsd"]}
];

const COURSES = [
  {id:"smr1", short:"1º SMR", family:"SMR", name:"Sistemas Microinformáticos y Redes", grade:"Grado medio", year:"Primer curso",
   desc:"Montar y reparar ordenadores, instalar sistemas operativos, conectar equipos en red y manejar aplicaciones ofimáticas.",
   modules:[
     {n:"Montaje y mantenimiento de equipos", t:["hardware","numeracion","diagnostico"]},
     {n:"Sistemas operativos monopuesto", t:["so","instalacion-so","linux-comandos","virtualizacion"]},
     {n:"Redes locales", t:["osi","cableado"]},
     {n:"Aplicaciones ofimáticas", t:["ofimatica"]}
   ]},
  {id:"smr2", short:"2º SMR", family:"SMR", name:"Sistemas Microinformáticos y Redes", grade:"Grado medio", year:"Segundo curso",
   desc:"Servidores y dominios, servicios de red, seguridad y aplicaciones web para pequeñas empresas.",
   modules:[
     {n:"Seguridad informática", t:["seguridad"]},
     {n:"Sistemas operativos en red", t:["dominios"]},
     {n:"Servicios en red", t:["servicios"]},
     {n:"Aplicaciones web", t:["cms"]}
   ]},
  {id:"asir1", short:"1º ASIR", family:"ASIR", name:"Administración de Sistemas Informáticos en Red", grade:"Grado superior", year:"Primer curso",
   desc:"Las bases de la administración: hardware, sistemas operativos, redes, bases de datos y lenguajes de marcas.",
   modules:[
     {n:"Planificación y administración de redes", t:["osi","ipv4","vlan","ipv6","nat-enrutamiento"]},
     {n:"Fundamentos de hardware", t:["hardware","numeracion","diagnostico","virtualizacion"]},
     {n:"Implantación de sistemas operativos", t:["so","instalacion-so","procesos-memoria","linux-comandos"]},
     {n:"Gestión de bases de datos", t:["modelo-er","bd-sql","sql-avanzado"]},
     {n:"Lenguajes de marcas y sistemas de gestión de información", t:["html-xml","dtd-xsd"]}
   ]},
  {id:"asir2", short:"2º ASIR", family:"ASIR", name:"Administración de Sistemas Informáticos en Red", grade:"Grado superior", year:"Segundo curso",
   desc:"Administrar la infraestructura de una organización: servicios, servidores web, bases de datos, automatización y seguridad.",
   modules:[
     {n:"Administración de sistemas operativos", t:["scripting","dominios"]},
     {n:"Servicios de red e Internet", t:["servicios"]},
     {n:"Implantación de aplicaciones web", t:["servidor-web"]},
     {n:"Administración de sistemas gestores de bases de datos", t:["admin-sgbd"]},
     {n:"Seguridad y alta disponibilidad", t:["seguridad","alta-disp"]}
   ]},
  {id:"dam1", short:"1º DAM", family:"DAM", name:"Desarrollo de Aplicaciones Multiplataforma", grade:"Grado superior", year:"Primer curso",
   desc:"Programación, bases de datos y herramientas de desarrollo. Es el mismo primer curso que DAW.", shared:"1º DAW",
   modules:COMUN_DAM_DAW},
  {id:"dam2", short:"2º DAM", family:"DAM", name:"Desarrollo de Aplicaciones Multiplataforma", grade:"Grado superior", year:"Segundo curso",
   desc:"Aplicaciones de escritorio y móviles, acceso a datos, concurrencia y sistemas de gestión empresarial.",
   modules:[
     {n:"Acceso a datos", t:["acceso-datos"]},
     {n:"Desarrollo de interfaces", t:["interfaces"]},
     {n:"Programación multimedia y dispositivos móviles", t:["android"]},
     {n:"Programación de servicios y procesos", t:["hilos"]},
     {n:"Sistemas de gestión empresarial", t:["erp"]}
   ]},
  {id:"daw1", short:"1º DAW", family:"DAW", name:"Desarrollo de Aplicaciones Web", grade:"Grado superior", year:"Primer curso",
   desc:"Programación, bases de datos y herramientas de desarrollo. Es el mismo primer curso que DAM.", shared:"1º DAM",
   modules:COMUN_DAM_DAW},
  {id:"daw2", short:"2º DAW", family:"DAW", name:"Desarrollo de Aplicaciones Web", grade:"Grado superior", year:"Segundo curso",
   desc:"Aplicaciones web completas: la parte del navegador, la del servidor, el diseño de la interfaz y su puesta en producción.",
   modules:[
     {n:"Desarrollo web en entorno cliente", t:["javascript"]},
     {n:"Desarrollo web en entorno servidor", t:["php-servidor"]},
     {n:"Despliegue de aplicaciones web", t:["servidor-web"]},
     {n:"Diseño de interfaces web", t:["css"]}
   ]}
];
