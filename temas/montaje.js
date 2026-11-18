TEMA("montaje", {
 "title": "Elegir componentes y montar un ordenador",
 "mins": 14,
 "intro": "Cómo se elige una configuración según el uso y el presupuesto, y el orden profesional para montar un equipo paso a paso sin romper nada.",
 "sections": [
  {
   "h": "Elegir según el uso",
   "html": "\n<p>Antes de comprar piezas hay que saber para qué se usará el equipo. No necesita lo mismo un PC de oficina que uno de edición de vídeo.</p>\n<table>\n<tr><th>Uso</th><th>Prioridad</th><th>Configuración orientativa</th></tr>\n<tr><td>Oficina</td><td>Fiabilidad y bajo consumo</td><td>CPU de gama media con gráfica integrada, 16 GB de RAM, SSD de 500 GB</td></tr>\n<tr><td>Programación</td><td>RAM y CPU</td><td>CPU de 8 núcleos o más, 32 GB de RAM, SSD NVMe</td></tr>\n<tr><td>Diseño y vídeo</td><td>Gráfica, CPU y RAM</td><td>Gráfica dedicada, 32–64 GB, SSD rápido y disco para archivos</td></tr>\n<tr><td>Servidor doméstico</td><td>Consumo y discos</td><td>CPU eficiente, RAM ECC si es posible, varios discos en RAID</td></tr>\n</table>\n<p>Al comparar en el mercado: compatibilidad (socket, chipset, tipo de RAM), garantía, consumo, ruido y disponibilidad de recambios. Herramientas como PCPartPicker avisan de incompatibilidades.</p>\n<p>Las máquinas virtuales consumen mucha memoria y procesador, así que para programar con ellas hay que priorizar <b>RAM y CPU</b>.</p>\n"
  },
  {
   "h": "Antes de empezar",
   "html": "\n<p>Un montaje bien preparado evita dañar componentes por electricidad estática o por prisas.</p>\n<ul>\n<li>Superficie limpia, sin alfombra, y <b>pulsera antiestática</b>.</li>\n<li>Destornillador de estrella magnético, bridas, pasta térmica (si el disipador no la trae).</li>\n<li>Manual de la placa a mano: dice en qué ranuras va la RAM y dónde va cada cable del frontal.</li>\n</ul>"
  },
  {
   "h": "Orden de montaje",
   "html": "\n<p>El orden importa: algunas piezas son mucho más fáciles de poner con la placa fuera de la caja.</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span>Fuera de la caja, sobre la caja de la placa: instala la <b>CPU</b> (alineando el triángulo o la muesca, sin forzar), la <b>RAM</b> y el <b>SSD M.2</b>.</span></div>\n<div class=\"stepn\"><i>2</i><span>Pon el <b>disipador</b> con su pasta térmica (una gota del tamaño de un guisante en el centro).</span></div>\n<div class=\"stepn\"><i>3</i><span>Coloca la placa trasera de E/S en la caja, los separadores y atornilla la <b>placa base</b>.</span></div>\n<div class=\"stepn\"><i>4</i><span>Monta la <b>fuente</b> y conecta: ATX de 24 pines y EPS de 8 pines de la CPU.</span></div>\n<div class=\"stepn\"><i>5</i><span>Instala la <b>gráfica</b> en el PCIe x16 superior y conecta su alimentación.</span></div>\n<div class=\"stepn\"><i>6</i><span>Conecta el <b>panel frontal</b> (botón, LED, USB, audio) según el manual y los ventiladores.</span></div>\n<div class=\"stepn\"><i>7</i><span>Primer arranque con lo mínimo: entra en la UEFI y comprueba que detecta CPU, RAM y discos, y las temperaturas.</span></div>\n<div class=\"stepn\"><i>8</i><span>Ordena los cables con bridas: mejora el flujo de aire.</span></div>\n</div>\n<p>Se hace fuera de la caja porque es mucho más cómodo y seguro: tienes espacio y no fuerzas la placa.</p>\n",
   "check": {
    "q": "¿Cuánta pasta térmica se pone sobre la CPU?",
    "o": [
     "Toda la jeringuilla",
     "Una gota del tamaño de un guisante",
     "Nada",
     "Una capa gruesa en los bordes"
    ],
    "a": 1,
    "e": "La presión del disipador la reparte. Demasiada empeora la transferencia de calor."
   }
  },
  {
   "h": "Problemas del primer arranque",
   "html": "\n<p>Que un equipo recién montado no arranque a la primera es normal. Casi siempre es una de estas causas.</p>\n<ul>\n<li><b>No enciende:</b> interruptor trasero de la fuente, cable del botón en los pines correctos.</li>\n<li><b>Enciende sin imagen:</b> monitor conectado a la placa en vez de a la gráfica, RAM mal encajada, falta el EPS de la CPU.</li>\n<li><b>La RAM va más lenta de lo anunciado:</b> activa el perfil <b>XMP/EXPO</b> en la UEFI.</li>\n</ul>\n<div class=\"caso\"><b>Caso real</b>Equipo nuevo sin imagen. El monitor estaba enchufado a la salida de vídeo de la placa base, y la CPU no tenía gráficos integrados. Cable a la tarjeta gráfica y listo.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué priorizarías en un equipo para programación con máquinas virtuales?",
   "o": [
    "La gráfica",
    "RAM y CPU",
    "El color de la caja",
    "El lector de DVD"
   ],
   "a": 1,
   "e": "Las VM y los IDE consumen mucha memoria y procesador."
  },
  {
   "q": "¿Qué se recomienda instalar antes de meter la placa en la caja?",
   "o": [
    "La fuente",
    "CPU, RAM y SSD M.2",
    "La gráfica",
    "Los ventiladores frontales"
   ],
   "a": 1,
   "e": "Es mucho más cómodo y seguro fuera de la caja."
  },
  {
   "q": "¿Qué conector alimenta la CPU?",
   "o": [
    "ATX 24 pines",
    "EPS de 8 pines",
    "SATA",
    "Molex"
   ],
   "a": 1,
   "e": "Sin él, el equipo no arranca."
  },
  {
   "q": "¿En qué ranura va la tarjeta gráfica?",
   "o": [
    "En la PCIe x1",
    "En la PCIe x16 superior",
    "En un M.2",
    "En una DIMM"
   ],
   "a": 1,
   "e": "La x16 conectada al procesador da todo el ancho de banda."
  },
  {
   "q": "¿Qué perfil de la UEFI hace que la RAM funcione a su velocidad anunciada?",
   "o": [
    "CSM",
    "XMP/EXPO",
    "Secure Boot",
    "TPM"
   ],
   "a": 1,
   "e": "Por defecto funciona a una velocidad estándar más baja."
  },
  {
   "q": "¿Qué herramienta web avisa de incompatibilidades entre componentes?",
   "o": [
    "PCPartPicker",
    "Wireshark",
    "GLPI",
    "CrystalDiskInfo"
   ],
   "a": 0,
   "e": "Comprueba sockets, tamaños y consumo."
  }
 ]
});
