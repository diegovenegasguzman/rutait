TEMA("usabilidad", {
 "title": "Usabilidad y diseño amigable",
 "mins": 12,
 "intro": "Qué hace que una aplicación o una web sea fácil de usar, los principios en los que se basa y cómo se comprueba con usuarios reales.",
 "sections": [
  {
   "h": "Qué es la usabilidad",
   "html": "\n<p>La norma ISO 9241-11 la define como el grado en que un producto puede ser usado por determinados usuarios para conseguir objetivos con <b>eficacia</b>, <b>eficiencia</b> y <b>satisfacción</b>. En la práctica: que el usuario consiga lo que quiere, rápido, sin errores y sin frustrarse.</p>\n<p>Los 10 principios de <b>Jakob Nielsen</b> son la referencia clásica. Algunos:</p>\n<ul>\n<li><b>Visibilidad del estado:</b> el sistema informa de lo que pasa (cargando, guardado).</li>\n<li><b>Lenguaje del usuario:</b> «Guardar cambios», no «Commit».</li>\n<li><b>Control y libertad:</b> deshacer, cancelar, volver atrás.</li>\n<li><b>Consistencia:</b> lo mismo se llama y se comporta igual en todas partes.</li>\n<li><b>Prevenir errores</b> antes que mostrar mensajes de error.</li>\n<li><b>Reconocer mejor que recordar:</b> opciones visibles, no comandos memorizados.</li>\n<li><b>Mensajes de error útiles:</b> qué ha pasado y cómo solucionarlo.</li>\n</ul>",
   "check": {
    "q": "Un formulario muestra «Error 0x80070057» al fallar. ¿Qué principio incumple?",
    "o": [
     "Visibilidad del estado",
     "Mensajes de error que ayuden a reconocer y solucionar el problema",
     "Consistencia",
     "Estética"
    ],
    "a": 1,
    "e": "El mensaje debería explicar qué falló y cómo arreglarlo, en lenguaje del usuario."
   }
  },
  {
   "h": "Diseño amigable",
   "html": "\n<p>Un diseño amigable es el que el usuario entiende sin pensar. Estos principios ayudan a conseguirlo.</p>\n<ul>\n<li><b>Jerarquía visual:</b> lo importante, más grande y visible; una acción principal clara por pantalla.</li>\n<li><b>Ley de Fitts:</b> los botones importantes, grandes y cerca de donde está el usuario.</li>\n<li><b>Ley de Hick:</b> cuantas más opciones, más se tarda en decidir. Menos es más.</li>\n<li><b>Patrones conocidos:</b> el logotipo lleva al inicio, la lupa es buscar, el carrito arriba a la derecha.</li>\n<li><b>Diseño adaptable</b> a móvil y escritorio, y zonas táctiles de unos 44 × 44 px.</li>\n<li>Formularios cortos, con etiquetas visibles y validación en el momento.</li>\n</ul>"
  },
  {
   "h": "Evaluar la usabilidad",
   "html": "\n<p>La usabilidad se mide; no basta con opinar. Hay varios métodos, de más baratos a más completos.</p>\n<table>\n<tr><th>Método</th><th>Cómo es</th></tr>\n<tr><td>Evaluación heurística</td><td>Expertos revisan la interfaz con los principios de Nielsen</td></tr>\n<tr><td>Test con usuarios</td><td>Usuarios reales hacen tareas mientras piensan en voz alta; con 5 usuarios ya se detectan la mayoría de problemas</td></tr>\n<tr><td>Test A/B</td><td>Dos versiones a dos grupos; se mide cuál funciona mejor</td></tr>\n<tr><td>Analítica y mapas de calor</td><td>Dónde hacen clic y dónde abandonan</td></tr>\n<tr><td>Cuestionario SUS</td><td>10 preguntas estándar que dan una puntuación de usabilidad</td></tr>\n</table>\n<p>Según Nielsen, con unos <b>5 usuarios</b> ya se detectan la mayoría de problemas. Es mejor hacer varios tests pequeños que uno grande.</p>\n<div class=\"caso\"><b>Caso real</b>En un test, 4 de 5 usuarios no encuentran el botón «Finalizar compra» porque está en gris claro al final de la página. Se cambia a un botón destacado y visible sin desplazarse, y las compras completadas suben.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué tres aspectos recoge la definición ISO de usabilidad?",
   "o": [
    "Precio, velocidad y color",
    "Eficacia, eficiencia y satisfacción",
    "Seguridad, red y datos",
    "Código, pruebas y diseño"
   ],
   "a": 1,
   "e": "ISO 9241-11."
  },
  {
   "q": "¿Quién formuló los 10 principios heurísticos de usabilidad más conocidos?",
   "o": [
    "Tim Berners-Lee",
    "Jakob Nielsen",
    "Steve Jobs",
    "Alan Turing"
   ],
   "a": 1,
   "e": "Son la base de la evaluación heurística."
  },
  {
   "q": "¿Qué dice la ley de Hick?",
   "o": [
    "Que los botones deben ser rojos",
    "Que cuantas más opciones, más se tarda en decidir",
    "Que hay que usar 5 colores",
    "Que la web debe pesar poco"
   ],
   "a": 1,
   "e": "Conviene reducir y agrupar opciones."
  },
  {
   "q": "¿Con cuántos usuarios se detectan ya la mayoría de problemas en un test?",
   "o": [
    "Con 1",
    "Con unos 5",
    "Con 500",
    "Con 10.000"
   ],
   "a": 1,
   "e": "Es mejor hacer varios tests pequeños que uno grande."
  },
  {
   "q": "¿Qué es un test A/B?",
   "o": [
    "Un examen",
    "Comparar dos versiones con dos grupos de usuarios",
    "Probar en dos navegadores",
    "Una prueba unitaria"
   ],
   "a": 1,
   "e": "Se mide cuál consigue mejores resultados."
  },
  {
   "q": "¿Qué principio se aplica al ofrecer «Deshacer»?",
   "o": [
    "Control y libertad del usuario",
    "Estética",
    "Ayuda",
    "Flexibilidad"
   ],
   "a": 0,
   "e": "El usuario puede salir de un error sin consecuencias."
  }
 ]
});
