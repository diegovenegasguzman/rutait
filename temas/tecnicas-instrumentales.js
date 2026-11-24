TEMA("tecnicas-instrumentales", {
 "title": "Técnicas instrumentales de análisis",
 "mins": 15,
 "intro": "Cómo funcionan los equipos que más se usan en un laboratorio de salud ambiental y para qué se usa cada uno.",
 "sections": [
  {
   "h": "Espectrofotometría UV-visible",
   "html": "\n<p>La <b>espectrofotometría</b> mide cuánta luz de una longitud de onda absorbe una disolución. Muchas sustancias no tienen color, así que primero se hacen reaccionar con un reactivo que forma un compuesto coloreado (por ejemplo, el amonio con el método del indofenol, que da color azul).</p>\n<p>El equipo tiene una <b>fuente de luz</b>, un <b>monocromador</b> que selecciona la longitud de onda, la <b>cubeta</b> con la muestra y un <b>detector</b>. Se basa en la <b>ley de Lambert-Beer</b>: A = ε · b · c (absorbancia = coeficiente de absortividad × longitud del paso de luz × concentración). Por eso la absorbancia es proporcional a la concentración.</p>\n<p>Buenas prácticas: usar cubetas limpias y sin huellas, hacer el cero con el blanco, medir a la longitud de onda del método y respetar el tiempo de desarrollo del color.</p>",
   "check": {
    "q": "¿Por qué se hace el cero del espectrofotómetro con un blanco?",
    "o": [
     "Para calentar la lámpara",
     "Para descontar la absorbancia de los reactivos y la cubeta",
     "Para limpiar la cubeta",
     "No hace falta"
    ],
    "a": 1,
    "e": "Así solo se mide la absorbancia debida al analito."
   }
  },
  {
   "h": "Espectrometría atómica",
   "html": "\n<p>Para medir <b>metales</b> a concentraciones muy bajas se atomiza la muestra y se mide la luz que absorben o emiten los átomos:</p>\n<ul>\n<li><b>Absorción atómica (AAS)</b>: la muestra se atomiza en una llama o en un horno de grafito, y se mide la luz que absorben los átomos de un elemento concreto, emitida por una lámpara específica de ese elemento. Con horno de grafito se llega a µg/L.</li>\n<li><b>ICP-OES e ICP-MS</b>: un plasma de argón a miles de grados excita los átomos. El ICP-OES mide la luz que emiten; el ICP-MS separa los iones por su masa. Analizan muchos elementos a la vez, y el ICP-MS llega a concentraciones de ng/L.</li>\n</ul>\n<p>Las muestras sólidas (suelos, alimentos) se <b>digieren</b> antes con ácidos, a menudo en microondas, para pasar los metales a disolución.</p>"
  },
  {
   "h": "Cromatografía",
   "html": "\n<p>La <b>cromatografía</b> separa los componentes de una mezcla porque cada uno avanza a distinta velocidad entre una <b>fase móvil</b> y una <b>fase estacionaria</b>. Cada compuesto sale de la columna en un tiempo característico (<b>tiempo de retención</b>) y el área de su pico es proporcional a su cantidad.</p>\n<table>\n<tr><th>Técnica</th><th>Fase móvil</th><th>Aplicaciones</th></tr>\n<tr><td>Cromatografía de gases (GC)</td><td>Gas (helio, nitrógeno)</td><td>Compuestos volátiles: trihalometanos, disolventes, muchos plaguicidas, hidrocarburos</td></tr>\n<tr><td>Cromatografía líquida (HPLC)</td><td>Líquido</td><td>Compuestos no volátiles: muchos plaguicidas, micotoxinas, aditivos, histamina</td></tr>\n<tr><td>Cromatografía iónica</td><td>Disolución acuosa</td><td>Aniones y cationes: cloruros, nitratos, sulfatos, fluoruros</td></tr>\n</table>\n<p>Acoplada a un <b>espectrómetro de masas</b> (GC-MS, LC-MS) permite identificar compuestos con mucha seguridad, porque da su «huella» de masas.</p>",
   "check": {
    "q": "Quieres analizar trihalometanos, que son compuestos volátiles. ¿Qué técnica eliges?",
    "o": [
     "Cromatografía de gases",
     "Cromatografía iónica",
     "Absorción atómica",
     "Volumetría"
    ],
    "a": 0,
    "e": "Los compuestos volátiles se separan bien en fase gas."
   }
  },
  {
   "h": "Electroquímica y otros equipos",
   "html": "\n<p>Los <b>electrodos</b> dan una señal eléctrica relacionada con la concentración:</p>\n<ul>\n<li><b>pH-metro</b>: electrodo de vidrio sensible a los iones H⁺.</li>\n<li><b>Conductímetro</b>: mide la conductividad, relacionada con las sales disueltas.</li>\n<li><b>Electrodos selectivos de iones</b>: para fluoruros, nitratos o amonio.</li>\n<li><b>Oxímetro</b>: oxígeno disuelto, clave en ríos y en el reactor biológico de una depuradora.</li>\n</ul>\n<p>Otros equipos habituales: el <b>turbidímetro</b> (turbidez), la <b>balanza analítica</b> (precisión de 0,1 mg, base de la gravimetría) y los <b>kits fotométricos de campo</b>, que permiten medir cloro, pH u otros parámetros in situ.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué ley relaciona absorbancia y concentración?",
   "o": [
    "Ley de Lambert-Beer",
    "Ley de Ohm",
    "Ley de Dalton",
    "Ley de Charles"
   ],
   "a": 0,
   "e": "La respuesta correcta es «Ley de Lambert-Beer». Lo tienes explicado en el apartado «Espectrofotometría UV-visible»."
  },
  {
   "q": "¿Qué técnica usa una lámpara específica de cada elemento para medir metales?",
   "o": [
    "Absorción atómica",
    "Cromatografía de gases",
    "Turbidimetría",
    "pH-metría"
   ],
   "a": 0,
   "e": "La respuesta correcta es «Absorción atómica». Lo tienes explicado en el apartado «Espectrometría atómica»."
  },
  {
   "q": "¿Qué ventaja tiene el ICP frente a la absorción atómica?",
   "o": [
    "Es más barato",
    "Analiza muchos elementos a la vez",
    "No necesita muestra",
    "No usa argón"
   ],
   "a": 1,
   "e": "La respuesta correcta es «Analiza muchos elementos a la vez». Lo tienes explicado en el apartado «Espectrometría atómica»."
  },
  {
   "q": "¿Qué es el tiempo de retención en cromatografía?",
   "o": [
    "El tiempo que tarda el equipo en encenderse",
    "El tiempo que tarda un compuesto en salir de la columna",
    "El tiempo de conservación de la muestra",
    "El tiempo de incubación"
   ],
   "a": 1,
   "e": "La respuesta correcta es «El tiempo que tarda un compuesto en salir de la columna». Lo tienes explicado en el apartado «Cromatografía»."
  },
  {
   "q": "¿Qué técnica es la más adecuada para analizar micotoxinas, que no son volátiles?",
   "o": [
    "Cromatografía de gases",
    "HPLC (cromatografía líquida)",
    "Conductimetría",
    "Turbidimetría"
   ],
   "a": 1,
   "e": "La respuesta correcta es «HPLC (cromatografía líquida)». Lo tienes explicado en el apartado «Cromatografía»."
  },
  {
   "q": "¿Qué mide un oxímetro?",
   "o": [
    "El ozono",
    "El oxígeno disuelto",
    "El óxido nítrico",
    "La oxidabilidad"
   ],
   "a": 1,
   "e": "La respuesta correcta es «El oxígeno disuelto». Lo tienes explicado en el apartado «Electroquímica y otros equipos»."
  },
  {
   "q": "¿Qué se hace con una muestra de suelo antes de analizar metales por ICP?",
   "o": [
    "Congelarla",
    "Digerirla con ácidos",
    "Filtrarla por 0,45 µm sin más",
    "Nada"
   ],
   "a": 1,
   "e": "La respuesta correcta es «Digerirla con ácidos». Lo tienes explicado en el apartado «Espectrometría atómica»."
  }
 ]
});
