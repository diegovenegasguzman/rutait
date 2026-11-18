TEMA("arquitectura-web-dev", {
 "title": "Arquitecturas y herramientas de programación web",
 "mins": 12,
 "intro": "Cómo se reparte el trabajo entre el navegador y el servidor, qué lenguajes se usan en cada lado y qué herramientas forman el día a día de un desarrollador web.",
 "sections": [
  {
   "h": "Cliente y servidor",
   "html": "\n<p>Una aplicación web se reparte entre dos máquinas: el navegador del usuario y el servidor. Cada parte usa sus propios lenguajes y se encarga de cosas distintas.</p>\n<table>\n<tr><th></th><th>Entorno cliente (front-end)</th><th>Entorno servidor (back-end)</th></tr>\n<tr><td>Dónde se ejecuta</td><td>En el navegador del usuario</td><td>En el servidor</td></tr>\n<tr><td>Lenguajes</td><td>HTML, CSS, JavaScript (TypeScript)</td><td>PHP, Java, Python, JavaScript (Node.js), C#</td></tr>\n<tr><td>Se encarga de</td><td>Interfaz, interacción, validación rápida</td><td>Datos, seguridad, lógica de negocio</td></tr>\n<tr><td>El usuario puede…</td><td>Ver y modificar el código</td><td>No ve el código</td></tr>\n</table>\n<p>Por eso la seguridad <b>nunca</b> puede depender del código del cliente: todo se vuelve a comprobar en el servidor.</p>"
  },
  {
   "h": "Modelos de aplicación",
   "html": "\n<p>Hay varias maneras de repartir el trabajo entre el servidor y el navegador. Cada una da una experiencia distinta al usuario.</p>\n<ul>\n<li><b>Web tradicional (multipágina):</b> el servidor genera cada página HTML completa (PHP, Java con plantillas).</li>\n<li><b>SPA</b> (aplicación de una sola página): el navegador carga una vez la aplicación JavaScript y luego solo pide datos JSON a una API (React, Vue, Angular).</li>\n<li><b>Renderizado en servidor moderno (SSR)</b> y generadores estáticos: combinan ambos para mejorar velocidad y posicionamiento en buscadores.</li>\n</ul>\n<p>Un <b>framework</b> da la estructura de la aplicación (Laravel, Symfony, Spring, React…); una <b>librería</b> resuelve una tarea concreta.</p>",
   "check": {
    "q": "¿Qué caracteriza a una SPA?",
    "o": [
     "El servidor genera cada página completa",
     "Se carga una vez y luego solo pide datos a una API",
     "No usa JavaScript",
     "No necesita servidor"
    ],
    "a": 1,
    "e": "La navegación ocurre en el navegador sin recargar la página."
   }
  },
  {
   "h": "Herramientas del desarrollador web",
   "html": "\n<p>Un desarrollador web trabaja con un pequeño conjunto de herramientas a diario. Estas son las básicas.</p>\n<ul>\n<li><b>Editor o IDE:</b> Visual Studio Code, PhpStorm, WebStorm.</li>\n<li><b>Herramientas de desarrollo del navegador</b> (F12): inspeccionar HTML y CSS, consola, red, depurador.</li>\n<li><b>Gestores de paquetes:</b> npm (JavaScript), Composer (PHP).</li>\n<li><b>Control de versiones:</b> Git y GitHub/GitLab.</li>\n<li><b>Entorno local:</b> XAMPP, Docker o el servidor integrado (<code>php -S localhost:8000</code>).</li>\n<li><b>Empaquetadores:</b> Vite, que optimiza y agrupa el código para producción.</li>\n<li><b>Calidad:</b> linters (ESLint), formateadores (Prettier) y pruebas automáticas.</li>\n</ul>\n<div class=\"caso\"><b>Tu primera herramienta</b>La pestaña «Red» de F12 muestra cada petición que hace la página, su código de respuesta y lo que tarda. Es lo primero que mira un desarrollador cuando algo no carga.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Dónde se ejecuta el código JavaScript de una web normal?",
   "o": [
    "En el servidor",
    "En el navegador del usuario",
    "En la base de datos",
    "En el DNS"
   ],
   "a": 1,
   "e": "Salvo que se use Node.js en el servidor."
  },
  {
   "q": "¿Por qué la seguridad no puede depender del código del cliente?",
   "o": [
    "Porque es lento",
    "Porque el usuario puede ver y modificar ese código",
    "Porque no existe",
    "Porque lo prohíbe la ley"
   ],
   "a": 1,
   "e": "Todo se comprueba de nuevo en el servidor."
  },
  {
   "q": "¿Cuál de estos es un framework de front-end?",
   "o": [
    "Laravel",
    "React",
    "MySQL",
    "Apache"
   ],
   "a": 1,
   "e": "Laravel es un framework de PHP para el servidor."
  },
  {
   "q": "¿Qué gestor de paquetes se usa en PHP?",
   "o": [
    "npm",
    "Composer",
    "pip",
    "Maven"
   ],
   "a": 1,
   "e": "npm es el de JavaScript."
  },
  {
   "q": "¿Qué tecla abre las herramientas de desarrollo del navegador?",
   "o": [
    "F1",
    "F5",
    "F12",
    "Esc"
   ],
   "a": 2,
   "e": "Inspector, consola, red y depurador."
  },
  {
   "q": "¿Qué comando lanza un servidor de pruebas integrado en PHP?",
   "o": [
    "php -S localhost:8000",
    "php start",
    "apache run",
    "npm serve"
   ],
   "a": 0,
   "e": "Útil para desarrollo, nunca para producción."
  }
 ]
});
