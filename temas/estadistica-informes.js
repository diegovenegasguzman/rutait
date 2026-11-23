TEMA("estadistica-informes", {
 "title": "Informes de actividad y estadística descriptiva",
 "mins": 13,
 "intro": "Cómo resumir los datos de una unidad de salud ambiental con estadística sencilla y presentarlos en un informe claro.",
 "sections": [
  {
   "h": "Calidad de los datos",
   "html": "\n<p>Un informe solo es tan bueno como los datos que contiene. Antes de calcular nada hay que revisar la <b>calidad de la base de datos</b>:</p>\n<ul>\n<li>Que no falten datos (campos vacíos) o, si faltan, que se sepa por qué.</li>\n<li>Que no haya duplicados (la misma muestra registrada dos veces).</li>\n<li>Que las unidades sean coherentes (mg/L y µg/L mezclados dan errores enormes).</li>\n<li>Que los valores sean posibles: un pH de 17 o una temperatura del agua de 90 °C en un grifo son errores de transcripción.</li>\n</ul>",
   "check": {
    "q": "En una tabla de resultados de nitratos aparece un valor de 4500 mientras el resto está entre 5 y 40. ¿Qué es lo primero que haces?",
    "o": [
     "Borrarlo",
     "Incluirlo en la media sin más",
     "Comprobar si es un error de unidades o de transcripción",
     "Multiplicarlo por mil"
    ],
    "a": 2,
    "e": "Puede ser un error (por ejemplo, µg/L en lugar de mg/L) o un dato real que hay que investigar."
   }
  },
  {
   "h": "Medidas de tendencia central y de dispersión",
   "html": "\n<p>La estadística descriptiva resume muchos datos en unos pocos números.</p>\n<table>\n<tr><th>Medida</th><th>Qué es</th><th>Cuándo es útil</th></tr>\n<tr><td><b>Media</b></td><td>Suma de los valores dividida entre su número</td><td>Datos sin valores extremos</td></tr>\n<tr><td><b>Mediana</b></td><td>El valor central cuando se ordenan los datos</td><td>Datos con valores extremos (no le afectan)</td></tr>\n<tr><td><b>Moda</b></td><td>El valor más repetido</td><td>Datos cualitativos o categorías</td></tr>\n<tr><td><b>Rango</b></td><td>Máximo menos mínimo</td><td>Ver de un vistazo la amplitud</td></tr>\n<tr><td><b>Desviación típica</b></td><td>Cuánto se alejan los datos, de media, de la media</td><td>Comparar la variabilidad de dos series</td></tr>\n</table>\n<div class=\"caso\"><b>Ejemplo.</b> Cloro libre en 5 grifos: 0,3; 0,4; 0,4; 0,5 y 1,9 mg/L. La media es 0,7 mg/L, pero la mediana es 0,4 mg/L. El valor de 1,9 sube mucho la media; la mediana describe mejor la situación típica de la red.</div>",
   "check": {
    "q": "Con los valores 2, 3, 3, 4 y 50, ¿qué medida describe mejor el valor típico?",
    "o": [
     "La media",
     "La mediana",
     "El rango",
     "La suma"
    ],
    "a": 1,
    "e": "La mediana (3) no se ve afectada por el valor extremo 50; la media sería 12,4."
   }
  },
  {
   "h": "Tablas, gráficos e indicadores",
   "html": "\n<p>Para presentar la información se elige el formato según lo que se quiere mostrar:</p>\n<ul>\n<li><b>Tabla</b>: cuando el lector necesita los valores exactos.</li>\n<li><b>Gráfico de barras</b>: comparar categorías (muestras no conformes por municipio).</li>\n<li><b>Gráfico de líneas</b>: evolución en el tiempo (nitratos mes a mes).</li>\n<li><b>Gráfico de sectores</b>: proporciones de un total, con pocas categorías.</li>\n</ul>\n<p>Los <b>indicadores de actividad</b> resumen el trabajo de la unidad: número de inspecciones realizadas, porcentaje de muestras conformes, tiempo medio de respuesta a una denuncia. Un porcentaje se calcula dividiendo la parte entre el total y multiplicando por 100.</p>"
  },
  {
   "h": "El informe o memoria de actividad",
   "html": "\n<p>Una memoria de actividad bien hecha suele tener esta estructura: <b>resumen</b> con las conclusiones principales, <b>introducción</b> con el objetivo y el periodo, <b>metodología</b> (qué se ha hecho y cómo), <b>resultados</b> con tablas y gráficos, <b>discusión y conclusiones</b>, y <b>propuestas de mejora</b>.</p>\n<p>Debe ser claro y objetivo, con las unidades siempre indicadas, las fuentes citadas y sin datos personales identificables.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué medida estadística NO se ve afectada por un valor extremo?",
   "o": [
    "La media",
    "La mediana",
    "El rango",
    "La suma"
   ],
   "a": 1,
   "e": "La mediana es el valor central de los datos ordenados."
  },
  {
   "q": "Calcula la media de 4, 6 y 8.",
   "o": [
    "5",
    "6",
    "7",
    "18"
   ],
   "a": 1,
   "e": "(4 + 6 + 8) / 3 = 6."
  },
  {
   "q": "De 200 muestras, 180 son conformes. ¿Qué porcentaje de conformidad hay?",
   "o": [
    "80 %",
    "90 %",
    "95 %",
    "18 %"
   ],
   "a": 1,
   "e": "180 / 200 × 100 = 90 %."
  },
  {
   "q": "¿Qué gráfico usarías para mostrar la evolución mensual de los nitratos?",
   "o": [
    "Sectores",
    "Líneas",
    "Ninguno",
    "Tarta 3D"
   ],
   "a": 1,
   "e": "Los gráficos de líneas muestran la evolución en el tiempo."
  },
  {
   "q": "¿Qué indica la desviación típica?",
   "o": [
    "El valor más repetido",
    "Cuánto se dispersan los datos alrededor de la media",
    "El valor central",
    "El número de datos"
   ],
   "a": 1,
   "e": "Mide la variabilidad."
  },
  {
   "q": "¿Cuál es el rango de 0,2; 0,5; 0,9 y 1,1?",
   "o": [
    "0,9",
    "0,675",
    "1,1",
    "0,2"
   ],
   "a": 0,
   "e": "Rango = máximo − mínimo = 1,1 − 0,2 = 0,9."
  },
  {
   "q": "¿Qué es lo primero que se revisa antes de calcular estadísticos?",
   "o": [
    "El color de los gráficos",
    "La calidad de los datos: duplicados, unidades y valores imposibles",
    "La extensión del informe",
    "El tipo de letra"
   ],
   "a": 1,
   "e": "Un error de unidades o un duplicado falsea todo el análisis."
  }
 ]
});
