TEMA("electricidad", {
 "title": "Medición de parámetros eléctricos",
 "mins": 12,
 "intro": "Los conceptos eléctricos básicos que necesita un técnico (tensión, corriente, resistencia y potencia), cómo usar el multímetro y cómo dimensionar una fuente o un SAI.",
 "sections": [
  {
   "h": "Magnitudes básicas",
   "html": "\n<p>Para trabajar con equipos hay que manejar cuatro magnitudes eléctricas y saber cómo se relacionan.</p>\n<table>\n<tr><th>Magnitud</th><th>Unidad</th><th>Qué es</th></tr>\n<tr><td>Tensión (V)</td><td>Voltio</td><td>La «presión» que empuja a los electrones</td></tr>\n<tr><td>Intensidad (I)</td><td>Amperio</td><td>Cuánta corriente circula</td></tr>\n<tr><td>Resistencia (R)</td><td>Ohmio (Ω)</td><td>Cuánto se opone un material al paso de la corriente</td></tr>\n<tr><td>Potencia (P)</td><td>Vatio (W)</td><td>Energía consumida por segundo</td></tr>\n</table>\n<p>Dos fórmulas que lo resuelven casi todo:</p>\n<ul>\n<li><b>Ley de Ohm:</b> V = I × R</li>\n<li><b>Potencia:</b> P = V × I</li>\n</ul>\n<p>Ejemplo: un equipo que consume 2 A a 230 V gasta 230 × 2 = <b>460 W</b>.</p>\n<p>El enchufe da <b>corriente alterna</b> (230 V en España); los componentes usan <b>corriente continua</b> (12 V, 5 V y 3,3 V) que les da la fuente.</p>",
   "check": {
    "q": "Un monitor consume 0,2 A conectado a 230 V. ¿Qué potencia consume?",
    "o": [
     "46 W",
     "230 W",
     "1.150 W",
     "0,2 W"
    ],
    "a": 0,
    "e": "P = V × I = 230 × 0,2 = 46 W."
   }
  },
  {
   "h": "El multímetro",
   "html": "\n<p>El multímetro mide tensión, intensidad, resistencia y continuidad. La forma de conectarlo cambia según lo que midas.</p>\n<ul>\n<li><b>Tensión continua (V⎓):</b> puntas en paralelo con lo que mides. Para comprobar una fuente: punta negra a un cable negro (masa) y roja al amarillo (debe dar unos 12 V), rojo (5 V) o naranja (3,3 V).</li>\n<li><b>Continuidad:</b> el multímetro pita si hay conexión. Sirve para comprobar cables o fusibles. Siempre <b>sin corriente</b>.</li>\n<li><b>Resistencia:</b> también sin corriente.</li>\n<li><b>Intensidad:</b> en serie, cambiando la punta roja de borne. Es la medición más delicada; para empezar, mejor no.</li>\n</ul>\n<p>Las tensiones de la fuente pueden variar un <b>±5 %</b> según el estándar ATX: 12 V entre 11,4 y 12,6 V es correcto.</p>"
  },
  {
   "h": "Dimensionar fuente y SAI",
   "html": "\n<p><b>Fuente:</b> suma el consumo máximo de los componentes (sobre todo CPU y gráfica) y deja un 20–30 % de margen. Una fuente trabaja con mejor eficiencia en torno al 50 % de su carga.</p>\n<p><b>SAI:</b> su capacidad se da en <b>VA</b> (potencia aparente) y en <b>W</b>. Hay que mirar los vatios: un SAI de 1.000 VA puede dar solo unos 600 W. Además, la autonomía depende de la carga: con medio consumo dura mucho más.</p>\n<p>En un SAI que indica 1.000 VA / 600 W, el dato que limita es el de vatios: no puede alimentar más de <b>600 W</b> de carga real.</p>\n<div class=\"caso\"><b>Caso real</b>Conectan dos servidores y el switch a un SAI pequeño. En el primer corte de luz, el SAI se apaga al instante por sobrecarga. Hay que sumar los consumos reales y elegir un SAI con margen.</div>",
   "check": {
    "q": "Un SAI indica 1.000 VA / 600 W. ¿Cuánta carga puede alimentar como máximo?",
    "o": [
     "1.000 W",
     "600 W",
     "1.600 W",
     "400 W"
    ],
    "a": 1,
    "e": "El dato que limita es la potencia real en vatios."
   }
  }
 ],
 "quiz": [
  {
   "q": "¿Cuál es la ley de Ohm?",
   "o": [
    "P = V × I",
    "V = I × R",
    "R = P × V",
    "I = V × P"
   ],
   "a": 1,
   "e": "Tensión = intensidad × resistencia."
  },
  {
   "q": "¿Qué tipo de corriente usan los componentes del PC?",
   "o": [
    "Alterna",
    "Continua",
    "Trifásica",
    "Ninguna"
   ],
   "a": 1,
   "e": "La fuente convierte la alterna del enchufe en continua."
  },
  {
   "q": "¿Qué tensión debe dar el cable amarillo de una fuente ATX?",
   "o": [
    "3,3 V",
    "5 V",
    "12 V",
    "230 V"
   ],
   "a": 2,
   "e": "Amarillo 12 V, rojo 5 V, naranja 3,3 V y negro masa."
  },
  {
   "q": "¿Cómo se mide la continuidad de un cable?",
   "o": [
    "Con corriente",
    "Sin corriente, con la función de continuidad",
    "Con el SAI",
    "No se puede"
   ],
   "a": 1,
   "e": "El multímetro pita si hay conexión."
  },
  {
   "q": "¿Qué tolerancia admite el estándar ATX en sus tensiones?",
   "o": [
    "±0,1 %",
    "±5 %",
    "±50 %",
    "Ninguna"
   ],
   "a": 1,
   "e": "12 V entre 11,4 y 12,6 V es correcto."
  },
  {
   "q": "¿Qué margen se recomienda al elegir la potencia de una fuente?",
   "o": [
    "Ninguno",
    "Un 20–30 % sobre el consumo máximo",
    "El doble siempre",
    "La mitad"
   ],
   "a": 1,
   "e": "Así trabaja holgada y con mejor eficiencia."
  }
 ]
});
