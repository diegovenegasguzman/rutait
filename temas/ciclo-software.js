TEMA("ciclo-software", {
 "title": "Desarrollo de software: ciclo de vida y metodologías",
 "mins": 12,
 "intro": "Las fases por las que pasa cualquier programa, desde la idea hasta el mantenimiento, los modelos clásicos y ágiles para organizarlas, y qué ocurre entre el código fuente y el programa en ejecución.",
 "sections": [
  {
   "h": "Fases del ciclo de vida",
   "html": "\n<p>Un programa no se escribe de golpe. Pasa por varias fases, de la idea al mantenimiento, y saltarse alguna sale caro después.</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span><b>Análisis:</b> qué debe hacer el programa (requisitos funcionales) y con qué condiciones (rendimiento, seguridad…).</span></div>\n<div class=\"stepn\"><i>2</i><span><b>Diseño:</b> cómo se organizará: arquitectura, clases, base de datos, pantallas.</span></div>\n<div class=\"stepn\"><i>3</i><span><b>Codificación:</b> escribir el código.</span></div>\n<div class=\"stepn\"><i>4</i><span><b>Pruebas:</b> comprobar que funciona y cumple los requisitos.</span></div>\n<div class=\"stepn\"><i>5</i><span><b>Despliegue:</b> instalarlo para los usuarios.</span></div>\n<div class=\"stepn\"><i>6</i><span><b>Mantenimiento:</b> corregir errores, adaptarlo y mejorarlo. Suele ser la fase más larga y cara.</span></div>\n</div>"
  },
  {
   "h": "Modelos de desarrollo",
   "html": "\n<p>Las fases son siempre las mismas, pero se pueden organizar de varias formas. Eso es un modelo de desarrollo.</p>\n<table>\n<tr><th>Modelo</th><th>Cómo funciona</th><th>Cuándo encaja</th></tr>\n<tr><td>Cascada</td><td>Una fase tras otra, sin volver atrás</td><td>Requisitos muy claros que no cambiarán</td></tr>\n<tr><td>Iterativo e incremental</td><td>Se entrega el producto por partes que van creciendo</td><td>Proyectos medianos</td></tr>\n<tr><td>Espiral</td><td>Ciclos con análisis de riesgos en cada vuelta</td><td>Proyectos grandes y arriesgados</td></tr>\n<tr><td>Ágil (Scrum, Kanban)</td><td>Ciclos cortos, entregas frecuentes y adaptación al cambio</td><td>Lo más habitual hoy</td></tr>\n</table>\n<p>En <b>Scrum</b>, el trabajo se organiza en <b>sprints</b> de 1–4 semanas. Hay un <b>Product Owner</b> (decide qué se hace), un <b>Scrum Master</b> (facilita) y el equipo de desarrollo. Cada día hay una reunión breve (daily) y al final de cada sprint se revisa lo entregado y se mejora el proceso.</p>",
   "check": {
    "q": "¿Cómo se llaman los ciclos cortos de trabajo en Scrum?",
    "o": [
     "Fases",
     "Sprints",
     "Hitos",
     "Cascadas"
    ],
    "a": 1,
    "e": "Duran entre 1 y 4 semanas y terminan con algo entregable."
   }
  },
  {
   "h": "Del código al programa",
   "html": "\n<p>Lo que escribe el programador no es lo que ejecuta el ordenador. Entre medias hay una traducción, y cada paso tiene su nombre.</p>\n<ul>\n<li><b>Código fuente:</b> lo que escribe el programador.</li>\n<li><b>Código objeto / bytecode:</b> el resultado de compilar.</li>\n<li><b>Código ejecutable:</b> lo que se ejecuta, enlazado con las librerías.</li>\n</ul>\n<p>Los lenguajes se clasifican por nivel (bajo: ensamblador; alto: Java, Python), por cómo se ejecutan (compilados, interpretados o con máquina virtual) y por paradigma (imperativo, orientado a objetos, funcional, declarativo).</p>\n<div class=\"caso\"><b>Hoy en las empresas</b>Casi todos los equipos trabajan con metodologías ágiles, Git, integración continua (pruebas automáticas en cada cambio) y despliegues frecuentes. Es lo que se conoce como <b>DevOps</b>.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿En qué fase se decide qué debe hacer el programa?",
   "o": [
    "Diseño",
    "Análisis",
    "Codificación",
    "Pruebas"
   ],
   "a": 1,
   "e": "Se recogen los requisitos."
  },
  {
   "q": "¿Qué fase suele ser la más larga y costosa?",
   "o": [
    "Análisis",
    "Codificación",
    "Mantenimiento",
    "Despliegue"
   ],
   "a": 2,
   "e": "Un programa se mantiene durante años."
  },
  {
   "q": "¿Qué inconveniente tiene el modelo en cascada?",
   "o": [
    "Es muy caro",
    "Se adapta mal a cambios en los requisitos",
    "No tiene pruebas",
    "No existe"
   ],
   "a": 1,
   "e": "No vuelve atrás entre fases."
  },
  {
   "q": "¿Quién decide qué se desarrolla en Scrum?",
   "o": [
    "El Scrum Master",
    "El Product Owner",
    "El cliente final siempre",
    "El administrador de sistemas"
   ],
   "a": 1,
   "e": "Gestiona y prioriza la lista de trabajo (Product Backlog)."
  },
  {
   "q": "¿Qué es la integración continua?",
   "o": [
    "Trabajar sin descanso",
    "Ejecutar pruebas automáticas con cada cambio del código",
    "Unir dos empresas",
    "Un tipo de base de datos"
   ],
   "a": 1,
   "e": "Detecta errores en cuanto se introducen."
  },
  {
   "q": "¿Qué paradigma usa clases y objetos?",
   "o": [
    "Funcional",
    "Orientado a objetos",
    "Declarativo",
    "Lógico"
   ],
   "a": 1,
   "e": "Java es el ejemplo clásico."
  }
 ]
});
