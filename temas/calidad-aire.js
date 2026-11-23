TEMA("calidad-aire", {
 "title": "Calidad del aire: normativa, redes de vigilancia y toma de muestras",
 "mins": 15,
 "intro": "Cómo se vigila la calidad del aire, qué valores límite fija la normativa y cómo se toman muestras de inmisión y de emisión.",
 "sections": [
  {
   "h": "Inmisión y emisión",
   "html": "\n<p>En contaminación atmosférica se miden dos cosas distintas:</p>\n<ul>\n<li><b>Emisión</b>: lo que sale por la chimenea o el tubo de escape. Se mide en el foco y se expresa como concentración en el gas (mg/Nm<sup>3</sup>) o cantidad por tiempo.</li>\n<li><b>Inmisión</b>: la concentración en el aire que respiramos, después de que los contaminantes se hayan dispersado. Se expresa en µg/m<sup>3</sup>. Es lo que determina el efecto sobre la salud.</li>\n</ul>\n<p>Una fábrica puede cumplir sus límites de emisión y, aun así, contribuir a una mala calidad del aire si hay muchas fuentes juntas y malas condiciones de dispersión.</p>"
  },
  {
   "h": "La normativa de calidad del aire",
   "html": "\n<p>La base es la <b>Ley 34/2007</b>, de calidad del aire y protección de la atmósfera, desarrollada por el <b>RD 102/2011</b>, que traspone la Directiva europea de calidad del aire. La nueva Directiva (UE) 2024/2881 endurecerá los valores para 2030, acercándolos a las recomendaciones de la OMS. Algunos valores vigentes del RD 102/2011 para la protección de la salud:</p>\n<table>\n<tr><th>Contaminante</th><th>Valor</th></tr>\n<tr><td>NO<sub>2</sub></td><td>Límite horario de 200 µg/m<sup>3</sup> (no superable más de 18 veces al año) y anual de 40 µg/m<sup>3</sup></td></tr>\n<tr><td>PM10</td><td>Límite diario de 50 µg/m<sup>3</sup> (no superable más de 35 días al año) y anual de 40 µg/m<sup>3</sup></td></tr>\n<tr><td>PM2,5</td><td>Límite anual de 25 µg/m<sup>3</sup></td></tr>\n<tr><td>Ozono</td><td>Umbral de información de 180 µg/m<sup>3</sup> y umbral de alerta de 240 µg/m<sup>3</sup> (medias horarias)</td></tr>\n<tr><td>CO</td><td>10 mg/m<sup>3</sup> (máxima diaria de las medias de 8 horas)</td></tr>\n</table>\n<p>Cuando se supera un <b>umbral de información</b> hay que avisar a la población, sobre todo a los grupos sensibles. Si se supera un <b>umbral de alerta</b>, se activan medidas de urgencia del plan de acción a corto plazo, como restricciones al tráfico.</p>",
   "check": {
    "q": "Un día se registra una media horaria de ozono de 195 µg/m³. ¿Qué se ha superado?",
    "o": [
     "Nada",
     "El umbral de información (180)",
     "El umbral de alerta (240)",
     "El valor límite de PM10"
    ],
    "a": 1,
    "e": "Hay que informar a la población, sobre todo a los grupos sensibles."
   }
  },
  {
   "h": "Redes de vigilancia y equipos de medida",
   "html": "\n<p>Las comunidades autónomas y algunos ayuntamientos tienen <b>redes de vigilancia</b> con estaciones fijas que miden de forma continua y publican los datos y el <b>índice de calidad del aire</b> (ICA). Las estaciones se clasifican según su entorno: de tráfico, industriales o de fondo (urbano, suburbano o rural).</p>\n<table>\n<tr><th>Contaminante</th><th>Técnica</th></tr>\n<tr><td>NO / NO<sub>2</sub></td><td>Quimioluminiscencia</td></tr>\n<tr><td>SO<sub>2</sub></td><td>Fluorescencia ultravioleta</td></tr>\n<tr><td>Ozono</td><td>Absorción ultravioleta</td></tr>\n<tr><td>CO</td><td>Absorción infrarroja</td></tr>\n<tr><td>PM10 y PM2,5</td><td>Captadores con filtros y <b>gravimetría</b> (método de referencia), o monitores automáticos</td></tr>\n</table>\n<p>Los analizadores automáticos se calibran periódicamente con gases patrón de concentración conocida, y se verifican con gas cero (sin contaminante) y gas de span.</p>"
  },
  {
   "h": "Toma de muestras",
   "html": "\n<p>Además de las estaciones, el técnico usa otros métodos de muestreo:</p>\n<ul>\n<li><b>Captadores de partículas</b> de alto o bajo volumen: aspiran un volumen conocido de aire a través de un filtro previamente pesado. La concentración es la masa retenida dividida entre el volumen de aire.</li>\n<li><b>Captadores pasivos</b> (tubos de difusión): el contaminante llega al adsorbente por difusión, sin bomba. Son baratos y sirven para estudios con muchos puntos (por ejemplo, NO<sub>2</sub> en toda una ciudad), pero dan medias de semanas.</li>\n<li><b>Muestreo de emisiones</b>: en la chimenea, las partículas se toman de forma <b>isocinética</b> (aspirando a la misma velocidad que el gas) para no alterar la proporción de partículas.</li>\n</ul>",
   "check": {
    "q": "Un captador ha retenido 1,2 mg de partículas tras filtrar 48 m³ de aire. ¿Qué concentración hay?",
    "o": [
     "2,5 µg/m³",
     "25 µg/m³",
     "57,6 µg/m³",
     "0,025 µg/m³"
    ],
    "a": 1,
    "e": "1,2 mg = 1200 µg; 1200 / 48 = 25 µg/m³."
   }
  }
 ],
 "quiz": [
  {
   "q": "¿Qué se mide cuando hablamos de inmisión?",
   "o": [
    "Lo que sale de la chimenea",
    "La concentración en el aire que respiramos",
    "El caudal de la chimenea",
    "La temperatura del humo"
   ],
   "a": 1,
   "e": "La emisión es lo que sale del foco."
  },
  {
   "q": "¿Qué real decreto fija los valores límite de calidad del aire?",
   "o": [
    "RD 102/2011",
    "RD 3/2023",
    "RD 9/2005",
    "RD 1367/2007"
   ],
   "a": 0,
   "e": "Desarrolla la Ley 34/2007."
  },
  {
   "q": "¿Cuál es el valor límite diario de PM10?",
   "o": [
    "25 µg/m³",
    "50 µg/m³",
    "200 µg/m³",
    "500 µg/m³"
   ],
   "a": 1,
   "e": "No puede superarse más de 35 días al año."
  },
  {
   "q": "¿Qué técnica se usa para medir NO2 en una estación automática?",
   "o": [
    "Gravimetría",
    "Quimioluminiscencia",
    "Absorción infrarroja",
    "Volumetría"
   ],
   "a": 1,
   "e": "El CO se mide por infrarrojo y el ozono por absorción UV."
  },
  {
   "q": "¿Cuál es el método de referencia para partículas?",
   "o": [
    "Gravimetría de filtros",
    "Olfatometría",
    "pH-metría",
    "Turbidimetría"
   ],
   "a": 0,
   "e": "Se pesa el filtro antes y después del muestreo."
  },
  {
   "q": "¿Qué ventaja tienen los captadores pasivos?",
   "o": [
    "Dan datos cada minuto",
    "Son baratos y permiten muestrear muchos puntos a la vez",
    "Son el método de referencia",
    "No necesitan análisis"
   ],
   "a": 1,
   "e": "A cambio dan medias de varios días o semanas."
  },
  {
   "q": "¿Qué significa muestrear partículas de forma isocinética?",
   "o": [
    "Muestrear de noche",
    "Aspirar a la misma velocidad que el gas de la chimenea",
    "Usar filtros de papel",
    "Muestrear con viento"
   ],
   "a": 1,
   "e": "Así la muestra conserva la proporción real de partículas."
  }
 ]
});
