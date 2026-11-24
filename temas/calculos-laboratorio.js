TEMA("calculos-laboratorio", {
 "title": "Cálculos de laboratorio: concentraciones, diluciones y calibrado",
 "mins": 16,
 "intro": "Los cálculos que usarás a diario en el laboratorio de aguas y alimentos, con ejemplos resueltos paso a paso.",
 "sections": [
  {
   "h": "Formas de expresar la concentración",
   "html": "\n<p>La <b>concentración</b> dice cuánto soluto hay en una cantidad de disolución. En salud ambiental se usan sobre todo estas formas:</p>\n<table>\n<tr><th>Unidad</th><th>Significado</th><th>Ejemplo</th></tr>\n<tr><td>g/L, mg/L, µg/L</td><td>Masa de soluto por litro de disolución</td><td>Nitratos: 32 mg/L</td></tr>\n<tr><td>ppm y ppb</td><td>Partes por millón y por mil millones. En agua, 1 ppm ≈ 1 mg/L y 1 ppb ≈ 1 µg/L</td><td>Plomo: 5 ppb = 5 µg/L</td></tr>\n<tr><td>% (m/v)</td><td>Gramos de soluto por 100 mL</td><td>Hipoclorito al 5 %: 5 g en 100 mL</td></tr>\n<tr><td>Molaridad (M)</td><td>Moles de soluto por litro</td><td>Ácido sulfúrico 0,1 M</td></tr>\n</table>\n<p>Para pasar de una unidad a otra, recuerda: 1 g = 1000 mg = 1.000.000 µg. Pasar de mg/L a µg/L es multiplicar por 1000.</p>\n<p>La <b>molaridad</b> se calcula como moles / litros, y los moles como masa / masa molar. Por ejemplo, para preparar 500 mL de NaCl 0,2 M (masa molar 58,44 g/mol): moles = 0,2 × 0,5 = 0,1 mol; masa = 0,1 × 58,44 = <b>5,84 g</b>.</p>",
   "check": {
    "q": "¿Cuántos µg/L son 0,025 mg/L?",
    "o": [
     "0,25",
     "2,5",
     "25",
     "250"
    ],
    "a": 2,
    "e": "Se multiplica por 1000: 0,025 × 1000 = 25 µg/L."
   }
  },
  {
   "h": "Diluciones: C₁·V₁ = C₂·V₂",
   "html": "\n<p>Diluir es añadir disolvente para bajar la concentración. La cantidad de soluto no cambia, por eso se cumple:</p>\n<p><b>C₁ · V₁ = C₂ · V₂</b> (concentración y volumen iniciales = concentración y volumen finales)</p>\n<div class=\"caso\"><b>Ejemplo 1.</b> Tienes un patrón de nitratos de 1000 mg/L y necesitas 100 mL de 20 mg/L. ¿Cuánto patrón pipeteas?<br>V₁ = C₂ · V₂ / C₁ = 20 × 100 / 1000 = <b>2 mL</b>. Pipeteas 2 mL en un matraz aforado de 100 mL y enrasas con agua destilada.</div>\n<div class=\"caso\"><b>Ejemplo 2.</b> Quieres desinfectar un depósito con una disolución de cloro de 50 mg/L a partir de lejía con 50 g/L de cloro activo. ¿Cuánta lejía por cada 1000 L de agua?<br>V₁ = 50 mg/L × 1000 L / 50.000 mg/L = <b>1 L</b> de lejía.</div>\n<p>El <b>factor de dilución</b> es el número de veces que se diluye: tomar 1 mL y llevarlo a 10 mL es un factor 10 (dilución 1:10). En microbiología se hacen <b>diluciones decimales seriadas</b>: 10⁻¹, 10⁻², 10⁻³… y el recuento final se multiplica por el factor.</p>",
   "check": {
    "q": "Pipeteas 5 mL de un patrón de 500 mg/L y lo llevas a 250 mL. ¿Qué concentración tiene la disolución final?",
    "o": [
     "2 mg/L",
     "10 mg/L",
     "25 mg/L",
     "100 mg/L"
    ],
    "a": 1,
    "e": "C₂ = C₁·V₁ / V₂ = 500 × 5 / 250 = 10 mg/L."
   }
  },
  {
   "h": "La recta de calibrado",
   "html": "\n<p>En muchas técnicas instrumentales el equipo no da la concentración directamente, sino una señal (por ejemplo, la absorbancia). Para traducirla:</p>\n<ol>\n<li>Se preparan varios <b>patrones</b> de concentración conocida (por ejemplo 0, 2, 5, 10 y 20 mg/L) y un <b>blanco</b>.</li>\n<li>Se mide la señal de cada uno.</li>\n<li>Se representa señal frente a concentración y se ajusta una recta por mínimos cuadrados: <b>y = a + b·x</b>, donde b es la pendiente.</li>\n<li>Se comprueba que es lineal con el <b>coeficiente de determinación R²</b>, que debe ser muy próximo a 1 (por ejemplo, 0,995 o más).</li>\n<li>Se mide la muestra y se despeja: <b>x = (y − a) / b</b>.</li>\n</ol>\n<div class=\"caso\"><b>Ejemplo.</b> Recta: Abs = 0,004 + 0,050·C. La muestra da Abs = 0,354. C = (0,354 − 0,004) / 0,050 = <b>7,0 mg/L</b>. Si la muestra se había diluido 1:5 antes de medir, la concentración real es 7,0 × 5 = <b>35 mg/L</b>.</div>\n<p>La muestra debe caer <b>dentro del rango</b> de los patrones. Si su señal es mayor que la del patrón más alto, se diluye y se repite; nunca se extrapola fuera de la recta.</p>"
  },
  {
   "h": "Exactitud, precisión y errores",
   "html": "\n<p>Un resultado no vale solo por el número: hay que saber cuánto se puede confiar en él. Para eso se usan estos conceptos:</p>\n<ul>\n<li><b>Exactitud</b>: lo cerca que está el resultado del valor verdadero. Se comprueba con materiales de referencia certificados o con intercomparaciones.</li>\n<li><b>Precisión</b>: lo cerca que están entre sí resultados repetidos. Se expresa con la desviación típica o el coeficiente de variación (CV = desviación típica / media × 100).</li>\n<li><b>Límite de detección</b>: la concentración más baja que el método distingue del blanco. <b>Límite de cuantificación</b>: la más baja que se puede medir con fiabilidad.</li>\n</ul>\n<p>Un resultado se expresa con sus <b>unidades</b>, un número razonable de cifras significativas y, en laboratorios acreditados, con su <b>incertidumbre</b> (por ejemplo, 35 ± 2 mg/L).</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué fórmula se usa para calcular una dilución?",
   "o": [
    "C₁ + V₁ = C₂ + V₂",
    "C₁ · V₁ = C₂ · V₂",
    "C₁ / V₁ = C₂ · V₂",
    "Ninguna"
   ],
   "a": 1,
   "e": "La cantidad de soluto se mantiene."
  },
  {
   "q": "¿Cuántos gramos de NaCl (58,44 g/mol) necesitas para 1 L de disolución 0,1 M?",
   "o": [
    "0,58 g",
    "5,84 g",
    "58,4 g",
    "584 g"
   ],
   "a": 1,
   "e": "0,1 mol × 58,44 g/mol = 5,84 g."
  },
  {
   "q": "En agua, 1 ppm equivale aproximadamente a…",
   "o": [
    "1 g/L",
    "1 mg/L",
    "1 µg/L",
    "1 ng/L"
   ],
   "a": 1,
   "e": "La respuesta correcta es «1 mg/L». Lo tienes explicado en el apartado «Formas de expresar la concentración»."
  },
  {
   "q": "La recta es Abs = 0,010 + 0,020·C y la muestra da Abs = 0,210. ¿Qué concentración tiene?",
   "o": [
    "5 mg/L",
    "10 mg/L",
    "20 mg/L",
    "21 mg/L"
   ],
   "a": 1,
   "e": "(0,210 − 0,010) / 0,020 = 10 mg/L."
  },
  {
   "q": "La señal de una muestra es mayor que la del patrón más alto. ¿Qué haces?",
   "o": [
    "Extrapolar la recta",
    "Diluir la muestra y volver a medir",
    "Dar el resultado como «muy alto»",
    "Repetir los patrones"
   ],
   "a": 1,
   "e": "Nunca se extrapola fuera del rango calibrado."
  },
  {
   "q": "Una dilución 1:10 seguida de otra 1:10 da un factor total de…",
   "o": [
    "20",
    "100",
    "10",
    "1000"
   ],
   "a": 1,
   "e": "10 × 10 = 100."
  },
  {
   "q": "¿Qué indica un R² de 0,999 en una recta de calibrado?",
   "o": [
    "Que la recta es muy lineal",
    "Que el equipo está roto",
    "Que la muestra está contaminada",
    "Nada"
   ],
   "a": 0,
   "e": "La respuesta correcta es «Que la recta es muy lineal». Lo tienes explicado en el apartado «La recta de calibrado»."
  },
  {
   "q": "Repetir un análisis varias veces y obtener valores muy parecidos indica buena…",
   "o": [
    "Exactitud",
    "Precisión",
    "Incertidumbre",
    "Sensibilidad"
   ],
   "a": 1,
   "e": "La exactitud es la cercanía al valor verdadero."
  }
 ]
});
