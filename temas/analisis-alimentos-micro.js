TEMA("analisis-alimentos-micro", {
 "title": "Técnicas de análisis microbiológico de alimentos",
 "mins": 15,
 "intro": "Cómo se prepara una muestra de alimento para microbiología, cómo se hacen los recuentos y cómo se busca un patógeno como Salmonella.",
 "sections": [
  {
   "h": "Preparación de la muestra y diluciones",
   "html": "\n<p>A diferencia del agua, el alimento es sólido, así que primero hay que pasar los microorganismos a un líquido:</p>\n<ol>\n<li>Se pesan, en condiciones asépticas, normalmente <b>10 g</b> (o 25 g) del alimento en una bolsa estéril.</li>\n<li>Se añaden <b>90 mL</b> (o 225 mL) de diluyente estéril, como agua de peptona tamponada. Así se obtiene la <b>dilución 10⁻¹</b>.</li>\n<li>Se homogeneiza en un <b>stomacher</b>, que golpea la bolsa para liberar los microorganismos.</li>\n<li>A partir de ahí se hacen <b>diluciones decimales seriadas</b>: 1 mL de la anterior en 9 mL de diluyente, obteniendo 10⁻², 10⁻³, 10⁻⁴…</li>\n</ol>\n<p>Las diluciones son necesarias porque un alimento puede tener millones de bacterias por gramo y en una placa solo se pueden contar bien unos cientos de colonias.</p>",
   "check": {
    "q": "Mezclas 10 g de alimento con 90 mL de diluyente. ¿Qué dilución obtienes?",
    "o": [
     "1:9",
     "10⁻¹ (1:10)",
     "10⁻²",
     "1:100"
    ],
    "a": 1,
    "e": "10 g en un total de 100 mL es una dilución 1:10."
   }
  },
  {
   "h": "Recuentos en placa",
   "html": "\n<p>Se siembra un volumen conocido de cada dilución (normalmente 1 mL en profundidad o 0,1 mL en superficie) en el medio adecuado, se incuba y se cuentan las colonias. Se eligen las placas con un número contable de colonias, habitualmente entre unas <b>15 y 300</b>.</p>\n<p><b>UFC/g = colonias contadas / (volumen sembrado en mL × dilución)</b></p>\n<div class=\"caso\"><b>Ejemplo.</b> En la placa de la dilución 10⁻³, sembrando 1 mL, cuentas 45 colonias. UFC/g = 45 / (1 × 10⁻³) = <b>45.000 UFC/g</b> (4,5 × 10⁴ UFC/g).</div>\n<p>Recuentos habituales y su significado:</p>\n<table>\n<tr><th>Recuento</th><th>Qué indica</th></tr>\n<tr><td>Aerobios mesófilos</td><td>Calidad higiénica general y vida útil</td></tr>\n<tr><td>Enterobacterias</td><td>Higiene del proceso; contaminación posterior al tratamiento térmico</td></tr>\n<tr><td>Escherichia coli</td><td>Contaminación fecal</td></tr>\n<tr><td>Estafilococos coagulasa positivos</td><td>Contaminación por manipuladores; riesgo de toxina</td></tr>\n<tr><td>Mohos y levaduras</td><td>Alteración de productos ácidos, secos o azucarados</td></tr>\n</table>",
   "check": {
    "q": "Siembras 0,1 mL de la dilución 10⁻² y cuentas 60 colonias. ¿Cuántas UFC/g hay?",
    "o": [
     "600",
     "6.000",
     "60.000",
     "6"
    ],
    "a": 2,
    "e": "60 / (0,1 × 10⁻²) = 60.000 UFC/g."
   }
  },
  {
   "h": "Búsqueda de patógenos: Salmonella en 25 g",
   "html": "\n<p>Para los patógenos que deben estar <b>ausentes</b>, como Salmonella en 25 g, no basta con sembrar: puede haber muy pocas células y además dañadas por el procesado. Se sigue un método en varias fases:</p>\n<ol>\n<li><b>Preenriquecimiento</b> no selectivo: 25 g de muestra en 225 mL de agua de peptona tamponada, incubado unas 18 horas, para que se recuperen las bacterias dañadas.</li>\n<li><b>Enriquecimiento selectivo</b> en caldos que favorecen a Salmonella frente a otras bacterias.</li>\n<li><b>Aislamiento</b> en medios sólidos selectivos y diferenciales, donde Salmonella forma colonias características.</li>\n<li><b>Confirmación</b> de las colonias sospechosas con pruebas bioquímicas y serológicas.</li>\n</ol>\n<p>El resultado se expresa como <b>presencia</b> o <b>ausencia en 25 g</b>. Listeria monocytogenes se busca con un esquema parecido, y además se puede contar cuando el criterio es un límite numérico. Existen métodos rápidos (inmunoensayos, PCR) que acortan el tiempo, pero los positivos se confirman.</p>"
  },
  {
   "h": "Calidad en el laboratorio de microbiología",
   "html": "\n<p>Para que los resultados sean fiables, cada serie de análisis incluye <b>controles</b>: un blanco del diluyente y de los medios (para comprobar que son estériles) y <b>cepas de referencia</b> (para comprobar que los medios dejan crecer al microorganismo buscado). Se controlan y registran las temperaturas de estufas y neveras, se verifica el autoclave con indicadores, y todo el material contaminado se esteriliza antes de eliminarlo.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Para qué sirve el stomacher?",
   "o": [
    "Para incubar",
    "Para homogeneizar la muestra y liberar los microorganismos en el diluyente",
    "Para esterilizar",
    "Para contar colonias"
   ],
   "a": 1,
   "e": "La respuesta correcta es «Para homogeneizar la muestra y liberar los microorganismos en el diluyente». Lo tienes explicado en el apartado «Preparación de la muestra y diluciones»."
  },
  {
   "q": "¿Qué rango de colonias se considera contable en una placa?",
   "o": [
    "1-5",
    "15-300 aproximadamente",
    "1000-5000",
    "Cualquiera"
   ],
   "a": 1,
   "e": "La respuesta correcta es «15-300 aproximadamente». Lo tienes explicado en el apartado «Recuentos en placa»."
  },
  {
   "q": "Cuentas 120 colonias sembrando 1 mL de la dilución 10⁻². ¿Cuántas UFC/g hay?",
   "o": [
    "120",
    "1.200",
    "12.000",
    "1,2"
   ],
   "a": 2,
   "e": "120 / (1 × 10⁻²) = 12.000 UFC/g."
  },
  {
   "q": "¿Qué indica un recuento alto de estafilococos coagulasa positivos?",
   "o": [
    "Contaminación por manipuladores y riesgo de toxina",
    "Buena higiene",
    "Contaminación por mohos",
    "Nada"
   ],
   "a": 0,
   "e": "La respuesta correcta es «Contaminación por manipuladores y riesgo de toxina». Lo tienes explicado en el apartado «Recuentos en placa»."
  },
  {
   "q": "¿Por qué se hace un preenriquecimiento para buscar Salmonella?",
   "o": [
    "Para matar las bacterias",
    "Para que se recuperen las células dañadas y poder detectarlas aunque haya pocas",
    "Para ahorrar medio",
    "Para acelerar el informe"
   ],
   "a": 1,
   "e": "La respuesta correcta es «Para que se recuperen las células dañadas y poder detectarlas aunque haya pocas». Lo tienes explicado en el apartado «Búsqueda de patógenos: Salmonella en 25 g»."
  },
  {
   "q": "¿Cómo se expresa el resultado de Salmonella?",
   "o": [
    "En UFC/g",
    "Presencia o ausencia en 25 g",
    "En mg/kg",
    "En porcentaje"
   ],
   "a": 1,
   "e": "La respuesta correcta es «Presencia o ausencia en 25 g». Lo tienes explicado en el apartado «Búsqueda de patógenos: Salmonella en 25 g»."
  },
  {
   "q": "¿Para qué se usan cepas de referencia?",
   "o": [
    "Para contaminar la muestra",
    "Para comprobar que los medios permiten crecer al microorganismo buscado",
    "Para limpiar",
    "Para calibrar el pH"
   ],
   "a": 1,
   "e": "La respuesta correcta es «Para comprobar que los medios permiten crecer al microorganismo buscado». Lo tienes explicado en el apartado «Calidad en el laboratorio de microbiología»."
  }
 ]
});
