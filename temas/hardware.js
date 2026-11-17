TEMA("hardware", {
 "title": "Componentes internos del ordenador",
 "mins": 14,
 "intro": "Qué hay dentro de la caja, para qué sirve cada pieza y cómo saber si dos componentes son compatibles. Es lo primero que necesitas para montar, ampliar o diagnosticar un equipo.",
 "sections": [
  {
   "h": "La placa base",
   "html": "\n      <p>La placa base es la pieza central: todos los demás componentes se conectan a ella y se comunican a través de ella. Cuando eliges una placa, estás decidiendo qué procesador, qué memoria y cuántas ampliaciones podrá tener el equipo.</p>\n      <ul>\n        <li><b>Socket (zócalo):</b> donde se coloca el procesador. Cada socket admite solo ciertas CPU; por ejemplo, un AMD AM5 no acepta un Intel LGA1700.</li>\n        <li><b>Ranuras de memoria (DIMM):</b> donde van los módulos de RAM. La placa admite una única generación (DDR4 o DDR5).</li>\n        <li><b>Ranuras PCIe:</b> para la tarjeta gráfica y otras tarjetas de expansión (red, sonido, capturadoras).</li>\n        <li><b>Conectores SATA y M.2:</b> para discos duros y SSD.</li>\n        <li><b>Chipset:</b> el circuito que gestiona la comunicación entre el procesador y el resto de dispositivos (USB, SATA, red…).</li>\n        <li><b>Firmware UEFI:</b> el programa grabado en la placa que comprueba el hardware al encender (POST) y arranca el sistema operativo. Sustituye a la antigua BIOS.</li>\n      </ul>\n      <p>Las placas tienen tamaños estándar llamados <b>factores de forma</b>. Los más habituales son <b>ATX</b> (305 × 244 mm), <b>micro-ATX</b> y <b>mini-ITX</b>. La caja tiene que admitir el formato de la placa.</p>\n      <div class=\"note\"><b>Clave para el examen</b>Antes de comprar nada, comprueba siempre la compatibilidad socket ↔ procesador y placa ↔ tipo de RAM. Es la pregunta práctica más típica.</div>"
  },
  {
   "h": "El procesador (CPU)",
   "html": "\n      <p>La CPU ejecuta las instrucciones de los programas: hace cálculos, compara datos y decide qué se hace después. Sus características principales son:</p>\n      <table>\n        <tr><th>Característica</th><th>Qué significa</th></tr>\n        <tr><td>Núcleos</td><td>Unidades de proceso independientes. Con 8 núcleos, la CPU puede trabajar en 8 tareas a la vez.</td></tr>\n        <tr><td>Hilos</td><td>Tareas que puede atender cada núcleo. Con SMT (Hyper-Threading en Intel) un núcleo gestiona 2 hilos.</td></tr>\n        <tr><td>Frecuencia (GHz)</td><td>Ciclos por segundo. 4 GHz son 4.000 millones de ciclos cada segundo.</td></tr>\n        <tr><td>Caché L1, L2, L3</td><td>Memoria pequeña y rapidísima dentro de la CPU. Guarda los datos que va a necesitar enseguida.</td></tr>\n        <tr><td>TDP (W)</td><td>Calor que genera. Sirve para elegir un disipador adecuado.</td></tr>\n      </table>\n      <p>Los dos grandes fabricantes para PC son <b>Intel</b> y <b>AMD</b>, ambos con arquitectura <b>x86-64</b>. Los móviles y los Mac recientes usan arquitectura <b>ARM</b>, que no es compatible directamente con los programas x86.</p>"
  },
  {
   "h": "La memoria RAM",
   "html": "\n      <p>La RAM guarda los programas y datos que se están usando en este momento. Es mucho más rápida que un disco, pero es <b>volátil</b>: su contenido se pierde al apagar el equipo.</p>\n      <ul>\n        <li><b>Generación:</b> DDR4 y DDR5 no son compatibles entre sí. La muesca del módulo está en un sitio distinto, así que físicamente no encajan en una ranura que no les corresponde.</li>\n        <li><b>Capacidad:</b> se mide en GB. Más capacidad permite tener más programas abiertos sin que el sistema tire del disco.</li>\n        <li><b>Velocidad:</b> se indica en MT/s (por ejemplo DDR5-6000).</li>\n        <li><b>Formato:</b> <b>DIMM</b> en ordenadores de sobremesa y <b>SO-DIMM</b>, más pequeño, en portátiles.</li>\n      </ul>\n      <p><b>Dual channel:</b> si instalas dos módulos iguales en las ranuras que indica el manual de la placa, la CPU accede a los dos a la vez y se duplica el ancho de banda. Por eso es mejor 2 × 8 GB que 1 × 16 GB.</p>"
  },
  {
   "h": "El almacenamiento",
   "html": "\n      <p>Es donde se guardan de forma permanente el sistema operativo, los programas y los archivos. Hay tres tipos principales:</p>\n      <table>\n        <tr><th>Tipo</th><th>Cómo funciona</th><th>Velocidad orientativa</th></tr>\n        <tr><td>HDD</td><td>Platos magnéticos que giran y un cabezal que lee. Barato por GB, pero lento y sensible a golpes.</td><td>Unos 150 MB/s</td></tr>\n        <tr><td>SSD SATA</td><td>Memoria flash, sin piezas móviles. Limitado por la interfaz SATA III (6 Gb/s).</td><td>Unos 550 MB/s</td></tr>\n        <tr><td>SSD NVMe (M.2)</td><td>Memoria flash conectada por PCIe, directamente a la placa.</td><td>De 3.000 a más de 7.000 MB/s</td></tr>\n      </table>\n      <div class=\"note\"><b>Ojo con M.2</b>M.2 es un formato de conector, no una velocidad. Hay SSD M.2 que funcionan por SATA y otros por NVMe. Hay que comprobar qué admite cada ranura de la placa.</div>"
  },
  {
   "h": "La fuente de alimentación",
   "html": "\n      <p>La fuente (PSU) convierte la corriente alterna del enchufe (230 V) en corriente continua de 12 V, 5 V y 3,3 V, que es la que usan los componentes.</p>\n      <ul>\n        <li><b>Potencia (W):</b> suma el consumo de los componentes (sobre todo CPU y gráfica) y deja un margen de un 20–30 %.</li>\n        <li><b>Certificación 80 PLUS:</b> garantiza una eficiencia mínima del 80 %; es decir, que se pierde poca energía en forma de calor. Los niveles Bronze, Gold o Platinum son cada vez más eficientes.</li>\n        <li><b>Conectores:</b> ATX de 24 pines para la placa, EPS de 8 pines para la CPU, PCIe para la gráfica y SATA para los discos.</li>\n      </ul>\n      <div class=\"note\"><b>Seguridad</b>Nunca abras una fuente de alimentación: sus condensadores pueden mantener carga peligrosa aunque esté desenchufada.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Cómo se llama el zócalo de la placa base donde se instala el procesador?",
   "o": [
    "Chipset",
    "Socket",
    "Ranura PCIe",
    "Conector EPS"
   ],
   "a": 1,
   "e": "El socket es el zócalo del procesador. Cada familia de CPU necesita un socket concreto."
  },
  {
   "q": "Tienes una placa base con ranuras DDR5 y un módulo DDR4. ¿Qué ocurre?",
   "o": [
    "Funciona, pero más lento",
    "Funciona con normalidad",
    "No encaja: las generaciones no son compatibles",
    "Funciona solo en dual channel"
   ],
   "a": 2,
   "e": "Cada generación tiene la muesca en un lugar distinto, así que el módulo ni siquiera entra en la ranura."
  },
  {
   "q": "¿Qué memoria está dentro de la propia CPU y es la más rápida del equipo?",
   "o": [
    "La RAM",
    "La caché",
    "El SSD NVMe",
    "La memoria virtual"
   ],
   "a": 1,
   "e": "La caché (L1, L2, L3) está integrada en el procesador y es más rápida que la RAM, aunque mucho más pequeña."
  },
  {
   "q": "¿Por qué interfaz se comunica un SSD NVMe?",
   "o": [
    "SATA III",
    "USB",
    "PCI Express",
    "IDE"
   ],
   "a": 2,
   "e": "NVMe usa PCIe, que ofrece mucho más ancho de banda que SATA."
  },
  {
   "q": "¿En qué equipos se usan los módulos SO-DIMM?",
   "o": [
    "Servidores",
    "Portátiles",
    "Sobremesas gaming",
    "Impresoras"
   ],
   "a": 1,
   "e": "SO-DIMM es el formato compacto de RAM pensado para portátiles y miniPC."
  },
  {
   "q": "¿Qué indica la certificación 80 PLUS de una fuente?",
   "o": [
    "Que tiene 80 conectores",
    "Que da como mínimo 800 W",
    "Que su eficiencia es de al menos el 80 %",
    "Que dura 80.000 horas"
   ],
   "a": 2,
   "e": "80 PLUS certifica eficiencia: al menos el 80 % de la energía consumida llega a los componentes."
  },
  {
   "q": "¿Qué ventaja tiene instalar la RAM en dual channel?",
   "o": [
    "Más capacidad",
    "Más ancho de banda",
    "Menos consumo",
    "Compatibilidad con DDR4 y DDR5"
   ],
   "a": 1,
   "e": "La CPU accede a los dos módulos en paralelo, por lo que se duplica el ancho de banda."
  },
  {
   "q": "¿Qué es UEFI?",
   "o": [
    "Un tipo de disco",
    "Un sistema operativo",
    "El firmware de la placa que sustituye a la BIOS",
    "Un conector de la fuente"
   ],
   "a": 2,
   "e": "UEFI es el firmware moderno de la placa: hace el POST y arranca el sistema operativo."
  }
 ]
});
