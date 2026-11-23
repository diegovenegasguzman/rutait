TEMA("aguas-fisicoquimico", {
 "title": "Control físico-químico de las aguas",
 "mins": 15,
 "intro": "Los parámetros físico-químicos más importantes del agua de consumo, qué indican y con qué técnicas se miden.",
 "sections": [
  {
   "h": "Parámetros organolépticos y físicos",
   "html": "\n<p>Los parámetros <b>organolépticos</b> son los que se perciben con los sentidos: <b>olor, sabor y color</b>. No suelen ser peligrosos por sí mismos, pero un cambio indica que algo ha pasado y es el motivo más común de quejas de los usuarios.</p>\n<ul>\n<li><b>Turbidez</b>: se mide con un turbidímetro y se expresa en <b>UNF</b> (unidades nefelométricas de formazina, NTU en inglés). El aparato mide la luz dispersada por las partículas.</li>\n<li><b>Temperatura</b>: influye en el sabor, en la eficacia del cloro y en el crecimiento de microorganismos.</li>\n<li><b>Conductividad</b>: indica la cantidad de sales disueltas. Se mide en µS/cm. Un aumento brusco puede indicar intrusión marina o una contaminación.</li>\n</ul>"
  },
  {
   "h": "pH, dureza y otros parámetros químicos",
   "html": "\n<p>El <b>pH</b> indica si el agua es ácida o básica. En el agua de consumo debe estar entre <b>6,5 y 9,5</b>. Un pH bajo hace el agua agresiva (corroe tuberías y disuelve metales); uno alto reduce la eficacia del cloro. Se mide con un <b>pH-metro</b> calibrado con soluciones tampón.</p>\n<p>La <b>dureza</b> es el contenido de calcio y magnesio. No es peligrosa, pero un agua muy dura forma incrustaciones de cal en tuberías y calentadores. Se determina por <b>volumetría con EDTA</b>.</p>\n<p>Otros parámetros indicadores de contaminación:</p>\n<table>\n<tr><th>Parámetro</th><th>Qué sugiere</th></tr>\n<tr><td>Amonio</td><td>Contaminación orgánica reciente (aguas residuales, purines)</td></tr>\n<tr><td>Nitritos</td><td>Contaminación en transformación o cloraminación mal controlada</td></tr>\n<tr><td>Nitratos</td><td>Contaminación agrícola antigua o difusa</td></tr>\n<tr><td>Oxidabilidad o COT</td><td>Cantidad de materia orgánica</td></tr>\n<tr><td>Hierro y manganeso</td><td>Color, sabor metálico y manchas en la ropa</td></tr>\n</table>",
   "check": {
    "q": "Un agua tiene pH 5,8. ¿Qué problema puede causar?",
    "o": [
     "Incrustaciones de cal",
     "Corrosión de tuberías y disolución de metales",
     "Mayor eficacia del cloro",
     "Ninguno"
    ],
    "a": 1,
    "e": "Un agua ácida es agresiva con las tuberías. Además está fuera del rango 6,5-9,5."
   }
  },
  {
   "h": "Técnicas de análisis",
   "html": "\n<p>En un laboratorio de aguas se combinan varias técnicas:</p>\n<ul>\n<li><b>Electrometría</b>: electrodos que dan una señal eléctrica (pH, conductividad, oxígeno disuelto).</li>\n<li><b>Volumetría</b>: se añade un reactivo de concentración conocida hasta un cambio de color (dureza, alcalinidad, cloruros).</li>\n<li><b>Espectrofotometría UV-visible</b>: mide cuánta luz absorbe la muestra tras una reacción coloreada. Se basa en la <b>ley de Lambert-Beer</b>: la absorbancia es proporcional a la concentración (nitratos, nitritos, amonio, cloro).</li>\n<li><b>Cromatografía iónica</b>: separa y cuantifica aniones como cloruros, nitratos y sulfatos en un solo análisis.</li>\n<li><b>Espectrometría de absorción atómica o ICP</b>: metales a concentraciones muy bajas.</li>\n<li><b>Cromatografía de gases o líquidos</b>: compuestos orgánicos como plaguicidas o trihalometanos.</li>\n</ul>\n<p>Muchas determinaciones se basan en una <b>recta de calibrado</b>: se miden patrones de concentración conocida, se representa la señal frente a la concentración y se calcula la de la muestra.</p>",
   "check": {
    "q": "¿En qué ley se basa la espectrofotometría para calcular concentraciones?",
    "o": [
     "Ley de Ohm",
     "Ley de Lambert-Beer",
     "Ley de Henry",
     "Ley de Boyle"
    ],
    "a": 1,
    "e": "La absorbancia es proporcional a la concentración."
   }
  },
  {
   "h": "Interpretar un boletín de análisis",
   "html": "\n<p>Para interpretar un resultado se compara con el <b>valor paramétrico</b> del RD 3/2023, teniendo en cuenta las unidades. Si un parámetro se incumple, el gestor investiga la causa, aplica medidas correctoras y lo comunica a la autoridad sanitaria, que valora si el agua es <b>apta</b> o <b>no apta</b> para el consumo y si hace falta informar a la población.</p>\n<div class=\"caso\"><b>Caso.</b> En un pueblo aparecen a la vez amonio, nitritos y descenso del cloro libre en un depósito. Es un patrón típico de entrada de contaminación orgánica: hay que inspeccionar el depósito, limpiarlo y reforzar la desinfección.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿En qué unidades se expresa la turbidez?",
   "o": [
    "µS/cm",
    "UNF (NTU)",
    "mg/L de CaCO3",
    "Unidades de pH"
   ],
   "a": 1,
   "e": "Unidades nefelométricas de formazina."
  },
  {
   "q": "¿Cuál es el rango de pH del agua de consumo?",
   "o": [
    "4-6",
    "6,5-9,5",
    "8-12",
    "Cualquiera"
   ],
   "a": 1,
   "e": "Entre 6,5 y 9,5."
  },
  {
   "q": "¿Qué técnica se usa para determinar la dureza del agua?",
   "o": [
    "Volumetría con EDTA",
    "Turbidimetría",
    "Filtración por membrana",
    "Cromatografía de gases"
   ],
   "a": 0,
   "e": "El EDTA forma complejos con el calcio y el magnesio."
  },
  {
   "q": "¿Qué parámetro sugiere contaminación orgánica reciente?",
   "o": [
    "Nitratos",
    "Amonio",
    "Dureza",
    "Conductividad"
   ],
   "a": 1,
   "e": "El amonio aparece pronto tras la contaminación por aguas residuales o purines."
  },
  {
   "q": "¿Qué mide la conductividad?",
   "o": [
    "La materia orgánica",
    "Las sales disueltas",
    "Las bacterias",
    "La temperatura"
   ],
   "a": 1,
   "e": "Cuantas más sales disueltas, más conduce el agua la electricidad."
  },
  {
   "q": "¿Qué técnica separa y cuantifica cloruros, nitratos y sulfatos en un mismo análisis?",
   "o": [
    "Cromatografía iónica",
    "pH-metría",
    "Turbidimetría",
    "Volumetría"
   ],
   "a": 0,
   "e": "Es la técnica habitual para aniones."
  },
  {
   "q": "¿Para qué sirve una recta de calibrado?",
   "o": [
    "Para limpiar el equipo",
    "Para relacionar la señal del equipo con la concentración usando patrones conocidos",
    "Para medir la temperatura",
    "Para esterilizar"
   ],
   "a": 1,
   "e": "Con ella se calcula la concentración de la muestra."
  }
 ]
});
