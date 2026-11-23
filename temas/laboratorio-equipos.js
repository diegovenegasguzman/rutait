TEMA("laboratorio-equipos", {
 "title": "Recursos materiales y equipos: almacén, calibración y mantenimiento",
 "mins": 13,
 "intro": "Cómo se gestiona el material de una unidad de salud ambiental y cómo se preparan, verifican, calibran y mantienen los equipos de medida.",
 "sections": [
  {
   "h": "Gestión del almacén y de los pedidos",
   "html": "\n<p>Una unidad de salud ambiental necesita reactivos, material de muestreo (frascos, neveras, tiosulfato), medios de cultivo y equipos portátiles. Para que nunca falte lo necesario ni caduque lo que sobra, se gestiona el almacén:</p>\n<ul>\n<li><b>Inventario</b>: lista de lo que hay, con lote, cantidad, fecha de caducidad y ubicación.</li>\n<li><b>Stock mínimo</b>: cantidad por debajo de la cual se hace un pedido.</li>\n<li><b>Rotación FEFO</b> (lo primero que caduca, lo primero que sale): se usan antes los productos con caducidad más próxima.</li>\n<li><b>Recepción</b>: al llegar un pedido se comprueba que coincide con el albarán, que el envase está íntegro y que la temperatura de transporte era la adecuada.</li>\n</ul>",
   "check": {
    "q": "Tienes dos lotes del mismo medio de cultivo: uno caduca en marzo y otro en junio. ¿Cuál usas primero?",
    "o": [
     "El de junio",
     "El de marzo",
     "El que esté más cerca de la puerta",
     "Da igual"
    ],
    "a": 1,
    "e": "FEFO: lo primero que caduca, lo primero que sale."
   }
  },
  {
   "h": "Almacenamiento seguro de productos químicos",
   "html": "\n<p>Los productos químicos no se guardan por orden alfabético, sino por <b>compatibilidad</b>, para que un derrame no provoque una reacción peligrosa:</p>\n<ul>\n<li>Inflamables en armarios de seguridad ventilados y resistentes al fuego.</li>\n<li>Ácidos separados de bases, y oxidantes separados de inflamables y reductores.</li>\n<li>Los productos tóxicos, bajo llave.</li>\n<li>Los envases grandes y pesados, en las baldas bajas.</li>\n<li>Siempre en su envase original o en uno correctamente etiquetado.</li>\n</ul>\n<p>La FDS de cada producto indica en su sección 7 las condiciones de almacenamiento y las incompatibilidades.</p>"
  },
  {
   "h": "Verificación y calibración de equipos",
   "html": "\n<p>Un resultado solo es fiable si el equipo mide bien. Hay que distinguir dos operaciones:</p>\n<table>\n<tr><th>Operación</th><th>Qué es</th><th>Ejemplo</th></tr>\n<tr><td><b>Calibración</b></td><td>Comparar el equipo con patrones de valor conocido y, si hace falta, ajustarlo.</td><td>Calibrar un pH-metro con tampones de pH 4, 7 y 10.</td></tr>\n<tr><td><b>Verificación</b></td><td>Comprobar que el equipo sigue dentro de tolerancia, sin ajustarlo.</td><td>Medir un tampón de pH 7 antes de empezar la jornada.</td></tr>\n</table>\n<p>Cada equipo tiene una <b>ficha</b> con su identificación, ubicación, plan de calibración y mantenimiento, y el historial de incidencias. Una etiqueta en el propio equipo indica el estado y la fecha de la próxima calibración. Si un equipo falla una verificación, se retira de uso y se etiqueta como <b>fuera de servicio</b>.</p>",
   "check": {
    "q": "Antes de medir, compruebas el pH-metro con un tampón de pH 7 y marca 7,02. No tocas nada. ¿Qué has hecho?",
    "o": [
     "Una calibración",
     "Una verificación",
     "Un mantenimiento correctivo",
     "Una validación del método"
    ],
    "a": 1,
    "e": "Comprobar sin ajustar es verificar."
   }
  },
  {
   "h": "Limpieza, desinfección y mantenimiento",
   "html": "\n<p>El mantenimiento puede ser <b>preventivo</b> (programado, para evitar averías: cambiar filtros, limpiar sondas) o <b>correctivo</b> (cuando el equipo ya ha fallado). El técnico se encarga del mantenimiento de primer nivel y avisa al servicio técnico para las reparaciones.</p>\n<p>Algunas tareas habituales:</p>\n<ul>\n<li>Guardar la sonda del pH-metro en su solución de conservación, nunca en agua destilada ni en seco.</li>\n<li>Limpiar y desinfectar las neveras de transporte de muestras después de cada uso.</li>\n<li>Comprobar con un termómetro calibrado la temperatura de estufas, neveras y congeladores, y registrarla.</li>\n<li>Esterilizar en autoclave (habitualmente 121 °C durante 15-20 minutos) el material reutilizable de microbiología.</li>\n</ul>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué significa FEFO?",
   "o": [
    "Lo primero que entra, lo primero que sale",
    "Lo primero que caduca, lo primero que sale",
    "Lo último que entra, lo primero que sale",
    "Lo más barato primero"
   ],
   "a": 1,
   "e": "First Expired, First Out."
  },
  {
   "q": "¿Cómo se ordenan los productos químicos en el almacén?",
   "o": [
    "Alfabéticamente",
    "Por tamaño",
    "Por compatibilidad química",
    "Por fecha de compra"
   ],
   "a": 2,
   "e": "Así se evitan reacciones peligrosas si hay un derrame."
  },
  {
   "q": "¿En qué sección de la FDS se indican las condiciones de almacenamiento?",
   "o": [
    "Sección 2",
    "Sección 7",
    "Sección 11",
    "Sección 16"
   ],
   "a": 1,
   "e": "La sección 7 trata la manipulación y el almacenamiento."
  },
  {
   "q": "Un equipo no supera la verificación diaria. ¿Qué haces?",
   "o": [
    "Seguir usándolo con cuidado",
    "Retirarlo de uso y etiquetarlo como fuera de servicio",
    "Ajustar los resultados a mano",
    "Esconderlo"
   ],
   "a": 1,
   "e": "No se puede usar hasta que se repare y se calibre."
  },
  {
   "q": "Cambiar los filtros de un equipo según el calendario establecido es mantenimiento…",
   "o": [
    "Correctivo",
    "Preventivo",
    "Externo",
    "Innecesario"
   ],
   "a": 1,
   "e": "Se hace antes de que falle."
  },
  {
   "q": "¿Cómo se guarda la sonda de un pH-metro?",
   "o": [
    "En seco",
    "En agua destilada",
    "En su solución de conservación",
    "En lejía diluida"
   ],
   "a": 2,
   "e": "Guardarla en seco o en agua destilada la estropea."
  },
  {
   "q": "¿Qué condiciones de autoclave son las habituales para esterilizar material de microbiología?",
   "o": [
    "60 °C durante 1 hora",
    "121 °C durante 15-20 minutos",
    "200 °C durante 5 minutos",
    "100 °C durante 1 minuto"
   ],
   "a": 1,
   "e": "121 °C con vapor a presión durante 15-20 minutos."
  }
 ]
});
