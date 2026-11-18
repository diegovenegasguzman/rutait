TEMA("diagnostico", {
 "title": "Diagnóstico de averías y mantenimiento",
 "mins": 15,
 "intro": "Cómo encontrar la causa de una avería sin dar palos de ciego: un método paso a paso, cómo interpretar el arranque, qué herramientas usar y cómo evitar averías con mantenimiento preventivo.",
 "sections": [
  {
   "h": "Un método para no ir a ciegas",
   "html": "\n<p>El error típico del principiante es cambiar piezas al azar hasta que algo funcione. Los técnicos siguen un método:</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span><b>Identifica el problema.</b> Pregunta al usuario: ¿qué ha pasado?, ¿desde cuándo?, ¿qué ha cambiado? (una actualización, un programa nuevo, un golpe). Intenta reproducirlo.</span></div>\n<div class=\"stepn\"><i>2</i><span><b>Plantea una causa probable.</b> Empieza por lo más sencillo: ¿está enchufado?, ¿el cable está bien conectado?</span></div>\n<div class=\"stepn\"><i>3</i><span><b>Comprueba la teoría.</b> Si no era eso, plantea otra.</span></div>\n<div class=\"stepn\"><i>4</i><span><b>Planifica y aplica la solución.</b> Si afecta a datos, haz copia antes.</span></div>\n<div class=\"stepn\"><i>5</i><span><b>Verifica</b> que todo funciona, también lo que no tocaste.</span></div>\n<div class=\"stepn\"><i>6</i><span><b>Documenta</b> qué pasaba y cómo lo arreglaste. La próxima vez tardarás cinco minutos.</span></div>\n</div>\n<p>Una regla útil: <b>cambia una sola cosa cada vez</b>. Si cambias tres y se arregla, no sabrás cuál era la culpable.</p>"
  },
  {
   "h": "Leer el arranque",
   "html": "\n<p>Al encender, la placa hace el <b>POST</b> (autoprueba de encendido): comprueba CPU, RAM y gráfica antes de cargar el sistema. Si algo falla, avisa con <b>pitidos</b> o con <b>LEDs de diagnóstico</b> en la placa. El significado depende del fabricante: consulta el manual.</p>\n<table>\n<tr><th>Síntoma</th><th>Causas más probables</th></tr>\n<tr><td>No hace nada: ni luces ni ventiladores</td><td>Corriente, interruptor de la fuente, fuente averiada, botón de encendido mal conectado a la placa</td></tr>\n<tr><td>Se encienden los ventiladores, pero no hay imagen</td><td>RAM mal colocada, gráfica, cable o entrada del monitor equivocada</td></tr>\n<tr><td>Pitidos al encender</td><td>Error detectado en el POST, normalmente RAM o gráfica</td></tr>\n<tr><td>Arranca, pero no carga el sistema</td><td>Disco, orden de arranque en la UEFI o gestor de arranque dañado</td></tr>\n<tr><td>Se apaga o reinicia con carga</td><td>Temperatura (polvo, pasta térmica seca) o fuente que no da la potencia necesaria</td></tr>\n</table>\n<div class=\"caso\"><b>Caso real</b>Un usuario dice que «el ordenador no enciende». Llegas y los ventiladores giran, pero la pantalla está negra. El monitor está encendido… en la entrada HDMI 2, y el cable va al HDMI 1. Siempre empieza por lo obvio.</div>",
   "check": {
    "q": "Un equipo se apaga solo cada vez que abres un juego o un programa pesado. ¿Qué compruebas primero?",
    "o": [
     "Reinstalar Windows",
     "Temperaturas y la fuente de alimentación",
     "Cambiar el teclado",
     "El cable de red"
    ],
    "a": 1,
    "e": "Un apagado con carga suele deberse a sobrecalentamiento o a una fuente que no aguanta el consumo."
   }
  },
  {
   "h": "Herramientas del técnico",
   "html": "\n<p>Para diagnosticar con datos y no a ojo, el técnico usa unas cuantas herramientas físicas y de software.</p>\n<ul>\n<li><b>Pulsera antiestática (ESD):</b> evita que una descarga de electricidad estática dañe los componentes. Úsala siempre al manipular el interior.</li>\n<li><b>Multímetro y tester de fuentes:</b> comprueban tensiones y continuidad.</li>\n<li><b>MemTest86:</b> prueba la RAM a fondo desde un USB de arranque.</li>\n<li><b>SMART:</b> los discos registran su propio estado de salud (sectores reasignados, horas de uso). Se consulta con CrystalDiskInfo o <code>smartctl</code> en Linux.</li>\n<li><b>Visor de eventos</b> (Windows) y <code>journalctl</code> (Linux): registran errores con fecha y hora.</li>\n<li><b>Monitor de recursos o rendimiento:</b> muestra qué consume CPU, memoria, disco o red.</li>\n<li><b>USB de arranque</b> con utilidades (Hiren's, un Linux live): permite rescatar datos de un equipo que no arranca.</li>\n</ul>",
   "check": {
    "q": "Sospechas que el disco duro está empezando a fallar. ¿Qué consultas?",
    "o": [
     "Los datos SMART del disco",
     "El administrador de tareas",
     "La configuración de red",
     "El fondo de escritorio"
    ],
    "a": 0,
    "e": "SMART guarda indicadores de salud del disco, como los sectores reasignados, que avisan antes de que falle."
   }
  },
  {
   "h": "Tipos de mantenimiento",
   "html": "\n<p>El mantenimiento no consiste solo en reparar. Hay tres tipos, según se haga antes o después de que aparezca la avería.</p>\n<table>\n<tr><th>Tipo</th><th>Cuándo se hace</th><th>Ejemplos</th></tr>\n<tr><td>Preventivo</td><td>Periódicamente, para evitar averías</td><td>Limpiar el polvo con aire comprimido, renovar la pasta térmica, actualizar firmware y drivers</td></tr>\n<tr><td>Predictivo</td><td>Vigilando indicadores para actuar antes del fallo</td><td>Revisar SMART, temperaturas y avisos del SAI</td></tr>\n<tr><td>Correctivo</td><td>Cuando ya hay una avería</td><td>Cambiar una fuente o una RAM defectuosa</td></tr>\n</table>\n<p>En una empresa todo esto se apoya en un <b>inventario</b> (qué equipos hay, con qué piezas y desde cuándo) y un <b>sistema de tickets</b> (GLPI es muy usado y es libre).</p>"
  },
  {
   "h": "Imágenes y clonado",
   "html": "\n<p>Cuando hay que preparar 30 equipos iguales, nadie instala 30 veces. Se prepara uno, se crea una <b>imagen</b> del disco y se despliega en los demás.</p>\n<ul>\n<li><b>Clonezilla:</b> herramienta libre para clonar discos o crear imágenes.</li>\n<li>En Windows, antes de capturar la imagen se ejecuta <b>Sysprep</b>, que «generaliza» el sistema: quita los identificadores únicos para que cada copia sea un equipo distinto.</li>\n<li>Una imagen también sirve como copia de seguridad completa: si el disco muere, restauras la imagen en otro y el equipo vuelve a estar como estaba.</li>\n</ul>"
  }
 ],
 "quiz": [
  {
   "q": "¿Cuál es el primer paso al diagnosticar una avería?",
   "o": [
    "Cambiar la placa base",
    "Identificar el problema y preguntar al usuario",
    "Reinstalar el sistema",
    "Formatear el disco"
   ],
   "a": 1,
   "e": "Saber exactamente qué ocurre y qué ha cambiado ahorra mucho tiempo."
  },
  {
   "q": "¿Por qué conviene cambiar una sola cosa cada vez?",
   "o": [
    "Para tardar más",
    "Para saber cuál era la causa del problema",
    "Porque lo exige la garantía",
    "No conviene"
   ],
   "a": 1,
   "e": "Si cambias varias cosas a la vez, no sabrás cuál lo ha solucionado."
  },
  {
   "q": "¿Qué es el POST?",
   "o": [
    "Un sistema operativo",
    "La autoprueba que hace la placa al encender",
    "Un tipo de conector",
    "Un programa de copias"
   ],
   "a": 1,
   "e": "Power-On Self-Test: comprueba el hardware básico antes de arrancar."
  },
  {
   "q": "Los ventiladores giran pero no hay imagen. ¿Qué es más probable?",
   "o": [
    "Fallo de la fuente",
    "Problema de RAM, gráfica o monitor",
    "Virus",
    "Disco lleno"
   ],
   "a": 1,
   "e": "Si hay corriente pero no hay imagen, el fallo suele estar en la RAM, la gráfica o la conexión del monitor."
  },
  {
   "q": "¿Para qué sirve la pulsera antiestática?",
   "o": [
    "Para medir tensiones",
    "Para evitar dañar componentes con electricidad estática",
    "Para probar la RAM",
    "Para enfriar la CPU"
   ],
   "a": 1,
   "e": "Descarga la electricidad estática de tu cuerpo de forma segura."
  },
  {
   "q": "¿Qué herramienta usarías para probar a fondo la memoria RAM?",
   "o": [
    "CrystalDiskInfo",
    "MemTest86",
    "Clonezilla",
    "GLPI"
   ],
   "a": 1,
   "e": "MemTest86 arranca desde un USB y comprueba toda la RAM."
  },
  {
   "q": "Limpiar el polvo y cambiar la pasta térmica cada cierto tiempo es mantenimiento…",
   "o": [
    "Correctivo",
    "Preventivo",
    "Predictivo",
    "Evolutivo"
   ],
   "a": 1,
   "e": "Se hace para evitar averías antes de que ocurran."
  },
  {
   "q": "¿Qué hace Sysprep antes de capturar una imagen de Windows?",
   "o": [
    "Formatea el disco",
    "Generaliza el sistema para que cada copia sea un equipo distinto",
    "Instala drivers",
    "Activa la licencia"
   ],
   "a": 1,
   "e": "Elimina los identificadores únicos del equipo original."
  }
 ]
});
