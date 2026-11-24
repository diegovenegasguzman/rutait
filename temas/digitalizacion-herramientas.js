TEMA("digitalizacion-herramientas", {
 "title": "Herramientas digitales para el técnico",
 "mins": 12,
 "intro": "Las herramientas digitales que usarás para recoger datos, analizarlos, colaborar y presentar resultados.",
 "sections": [
  {
   "h": "Recogida de datos en campo",
   "html": "\n<p>Hoy muchas inspecciones y muestreos se registran con <b>formularios digitales</b> en el móvil o la tableta. Un buen formulario de campo:</p>\n<ul>\n<li>Recoge automáticamente la fecha, la hora y la ubicación GPS.</li>\n<li>Usa listas desplegables para evitar errores de escritura.</li>\n<li>Obliga a rellenar los campos esenciales.</li>\n<li>Permite adjuntar fotos y firmas.</li>\n<li>Funciona sin conexión y sincroniza después.</li>\n</ul>\n<p>Los datos llegan directamente a una hoja de cálculo o base de datos, sin pasar a limpio.</p>"
  },
  {
   "h": "Hojas de cálculo y bases de datos",
   "html": "\n<p>La <b>hoja de cálculo</b> es la herramienta más usada para tratar resultados: fórmulas, gráficos, filtros y tablas dinámicas. Funciones útiles: <code>PROMEDIO</code>, <code>MEDIANA</code>, <code>MAX</code>, <code>MIN</code>, <code>DESVEST</code>, <code>CONTAR.SI</code> (por ejemplo, contar las muestras no conformes) y el formato condicional para resaltar valores que superan un límite.</p>\n<p>Cuando los datos crecen o los usan muchas personas, se pasa a una <b>base de datos</b>, donde cada registro (una muestra) tiene campos fijos y se relaciona con otras tablas (puntos de muestreo, análisis, técnicos). Evita duplicados y permite consultas complejas.</p>",
   "check": {
    "q": "¿Qué función usarías para contar cuántas muestras tienen el resultado «No conforme»?",
    "o": [
     "SUMA",
     "CONTAR.SI",
     "PROMEDIO",
     "MAX"
    ],
    "a": 1,
    "e": "CONTAR.SI cuenta las celdas que cumplen una condición."
   }
  },
  {
   "h": "Colaboración y presentación",
   "html": "\n<p>Las herramientas en la nube permiten <b>coeditar</b> documentos, compartir carpetas con permisos y hacer videoconferencias. Buenas prácticas: una estructura de carpetas clara, nombres de archivo con fecha y versión (por ejemplo, <code>2026-11-24_informe_aguas_v2</code>) y compartir solo con quien lo necesita.</p>\n<p>Para presentar resultados, los <b>cuadros de mando</b> (dashboards) muestran indicadores actualizados con gráficos y mapas, y los visores de mapas permiten ver los datos sobre el territorio.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué ventaja tiene un formulario digital de campo?",
   "o": [
    "Que se pierde más fácilmente",
    "Que registra hora y ubicación, evita errores y envía los datos directamente",
    "Que necesita pasarse a limpio",
    "Ninguna"
   ],
   "a": 1,
   "e": "La respuesta correcta es «Que registra hora y ubicación, evita errores y envía los datos directamente». Lo tienes explicado en el apartado «Recogida de datos en campo»."
  },
  {
   "q": "¿Qué función calcula el valor central de unos resultados?",
   "o": [
    "MEDIANA",
    "SUMA",
    "CONTAR",
    "MAX"
   ],
   "a": 0,
   "e": "La respuesta correcta es «MEDIANA». Lo tienes explicado en el apartado «Hojas de cálculo y bases de datos»."
  },
  {
   "q": "¿Para qué sirve el formato condicional?",
   "o": [
    "Para imprimir",
    "Para resaltar automáticamente valores que cumplen una condición, como superar un límite",
    "Para borrar datos",
    "Para cambiar el idioma"
   ],
   "a": 1,
   "e": "La respuesta correcta es «Para resaltar automáticamente valores que cumplen una condición, como superar un límite». Lo tienes explicado en el apartado «Hojas de cálculo y bases de datos»."
  },
  {
   "q": "¿Cuándo conviene pasar de una hoja de cálculo a una base de datos?",
   "o": [
    "Nunca",
    "Cuando los datos crecen o los usan muchas personas",
    "Solo para imprimir",
    "Cuando hay pocos datos"
   ],
   "a": 1,
   "e": "La respuesta correcta es «Cuando los datos crecen o los usan muchas personas». Lo tienes explicado en el apartado «Hojas de cálculo y bases de datos»."
  },
  {
   "q": "¿Qué es un cuadro de mando (dashboard)?",
   "o": [
    "Un panel con indicadores actualizados en gráficos y mapas",
    "Un tipo de sonómetro",
    "Un formulario en papel",
    "Un biocida"
   ],
   "a": 0,
   "e": "La respuesta correcta es «Un panel con indicadores actualizados en gráficos y mapas». Lo tienes explicado en el apartado «Colaboración y presentación»."
  },
  {
   "q": "¿Qué nombre de archivo es más útil?",
   "o": [
    "informe final final2",
    "2026-11-24_informe_aguas_v2",
    "documento",
    "asdf"
   ],
   "a": 1,
   "e": "La respuesta correcta es «2026-11-24_informe_aguas_v2». Lo tienes explicado en el apartado «Colaboración y presentación»."
  }
 ]
});
