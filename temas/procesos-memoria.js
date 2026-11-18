TEMA("procesos-memoria", {
 "title": "Gestión de procesos y memoria",
 "mins": 16,
 "intro": "Qué hace el sistema operativo para que decenas de programas parezcan funcionar a la vez, cómo reparte la memoria y qué comandos usarás para controlar los procesos.",
 "sections": [
  {
   "h": "Estados de un proceso",
   "html": "\n<p>Aunque tengas 100 programas abiertos, cada núcleo de la CPU solo ejecuta un proceso en cada instante. El sistema los va turnando tan rápido que parece que todos funcionan a la vez. Cada proceso pasa por varios estados:</p>\n<table>\n<tr><th>Estado</th><th>Qué significa</th></tr>\n<tr><td>Nuevo</td><td>Se está creando</td></tr>\n<tr><td>Listo</td><td>Podría ejecutarse, está esperando su turno de CPU</td></tr>\n<tr><td>En ejecución</td><td>Está usando la CPU ahora mismo</td></tr>\n<tr><td>Bloqueado</td><td>Espera algo externo: que el disco lea un dato, que el usuario pulse una tecla…</td></tr>\n<tr><td>Terminado</td><td>Ha acabado y se liberan sus recursos</td></tr>\n</table>\n<p>El sistema guarda los datos de cada proceso (identificador <b>PID</b>, estado, registros, memoria asignada) en su <b>PCB</b> (bloque de control de proceso). Al pasar la CPU de un proceso a otro se hace un <b>cambio de contexto</b>: se guarda el estado del que sale y se carga el del que entra.</p>",
   "check": {
    "q": "Un proceso está esperando a que termine de leerse un archivo del disco. ¿En qué estado está?",
    "o": [
     "Listo",
     "En ejecución",
     "Bloqueado",
     "Terminado"
    ],
    "a": 2,
    "e": "No puede seguir hasta que llegue el dato, así que está bloqueado. Cuando llegue, pasará a listo."
   }
  },
  {
   "h": "Planificación de la CPU",
   "html": "\n<p>El <b>planificador</b> decide qué proceso listo entra en la CPU. Algunos algoritmos clásicos:</p>\n<table>\n<tr><th>Algoritmo</th><th>Cómo funciona</th><th>Problema</th></tr>\n<tr><td>FCFS</td><td>Por orden de llegada</td><td>Un proceso largo hace esperar a todos los cortos</td></tr>\n<tr><td>SJF</td><td>Primero el más corto</td><td>Hay que saber cuánto durará; los largos pueden no ejecutarse nunca</td></tr>\n<tr><td>Round Robin</td><td>Cada proceso usa la CPU un tiempo fijo (<b>quantum</b>) y vuelve a la cola</td><td>Si el quantum es muy pequeño, se pierde tiempo cambiando de contexto</td></tr>\n<tr><td>Por prioridades</td><td>Primero los más importantes</td><td>Los de baja prioridad pueden esperar indefinidamente</td></tr>\n</table>\n<p>Los sistemas actuales combinan varias ideas y son <b>apropiativos</b>: pueden quitar la CPU a un proceso para dársela a otro más urgente.</p>"
  },
  {
   "h": "Controlar procesos",
   "html": "\n<p>El sistema operativo te deja ver los procesos y actuar sobre ellos. Así se hace en cada sistema.</p>\n<table>\n<tr><th>Tarea</th><th>Linux</th><th>Windows</th></tr>\n<tr><td>Ver procesos</td><td><code>ps aux</code>, <code>top</code>, <code>htop</code></td><td>Administrador de tareas, <code>tasklist</code>, <code>Get-Process</code></td></tr>\n<tr><td>Terminar un proceso</td><td><code>kill PID</code></td><td><code>taskkill /PID 1234</code>, <code>Stop-Process</code></td></tr>\n<tr><td>Forzar el cierre</td><td><code>kill -9 PID</code></td><td><code>taskkill /F /PID 1234</code></td></tr>\n<tr><td>Cambiar la prioridad</td><td><code>nice</code>, <code>renice</code></td><td>Administrador de tareas, pestaña Detalles</td></tr>\n</table>\n<p>En Linux, <code>kill</code> envía por defecto la señal <b>SIGTERM</b>, que pide al programa que se cierre de forma ordenada (guardando lo que necesite). <code>kill -9</code> envía <b>SIGKILL</b>: el sistema lo elimina al instante, sin dejarle hacer nada. Úsalo solo si el primero no funciona.</p>\n<p><code>top</code> muestra los procesos en tiempo real, ordenados por consumo y actualizándose cada pocos segundos; <code>ps aux</code> hace una foto fija.</p>\n<div class=\"caso\"><b>Caso real</b>Un servidor va lentísimo. Abres <code>top</code>, ordenas por CPU y ves un proceso de copias de seguridad al 100 % en horario de oficina. No hace falta matarlo: con <code>renice</code> le bajas la prioridad y lo reprogramas para la noche.</div>",
   "check": {
    "q": "¿Qué señal envía kill -9?",
    "o": [
     "SIGTERM, cierre ordenado",
     "SIGKILL, cierre inmediato",
     "SIGSTOP, pausa",
     "SIGHUP, recarga"
    ],
    "a": 1,
    "e": "SIGKILL no puede ignorarse: el proceso termina al instante, sin guardar nada."
   }
  },
  {
   "h": "Gestión de memoria",
   "html": "\n<p>Cada proceso cree que tiene toda la memoria para él, pero en realidad trabaja con <b>memoria virtual</b>: el sistema traduce sus direcciones a direcciones reales de la RAM.</p>\n<ul>\n<li><b>Paginación:</b> la memoria virtual se divide en <b>páginas</b> y la RAM en <b>marcos</b> del mismo tamaño (normalmente 4 KB). Una tabla de páginas indica en qué marco está cada página.</li>\n<li>Si falta RAM, las páginas que menos se usan pasan al disco: la <b>swap</b> en Linux o el <b>archivo de paginación</b> (pagefile.sys) en Windows.</li>\n<li>Cuando un proceso necesita una página que está en el disco, se produce un <b>fallo de página</b> y el sistema la trae a la RAM.</li>\n</ul>\n<p>Si la RAM se queda muy corta, el sistema se pasa más tiempo moviendo páginas que trabajando: se llama <b>hiperpaginación</b> (thrashing). El síntoma es un equipo lentísimo con el disco al 100 %. La solución es cerrar programas o ampliar la RAM.</p>",
   "check": {
    "q": "Un equipo va muy lento, la RAM está al 98 % y el disco al 100 % sin que estés copiando nada. ¿Qué está pasando?",
    "o": [
     "Un virus seguro",
     "Hiperpaginación: el sistema usa el disco como memoria",
     "El disco está lleno",
     "La CPU está rota"
    ],
    "a": 1,
    "e": "Falta RAM y el sistema mueve páginas al disco y del disco sin parar."
   }
  }
 ],
 "quiz": [
  {
   "q": "¿Qué estado tiene un proceso que espera su turno para usar la CPU?",
   "o": [
    "Bloqueado",
    "Listo",
    "Nuevo",
    "Terminado"
   ],
   "a": 1,
   "e": "Listo: podría ejecutarse en cuanto le toque."
  },
  {
   "q": "¿Qué es el PID?",
   "o": [
    "Un tipo de memoria",
    "El identificador numérico de un proceso",
    "Una prioridad",
    "Un algoritmo"
   ],
   "a": 1,
   "e": "Cada proceso tiene un PID único mientras se ejecuta."
  },
  {
   "q": "¿En qué algoritmo cada proceso usa la CPU durante un tiempo fijo y vuelve a la cola?",
   "o": [
    "FCFS",
    "SJF",
    "Round Robin",
    "Por prioridades"
   ],
   "a": 2,
   "e": "Ese tiempo fijo se llama quantum."
  },
  {
   "q": "¿Qué ocurre en un cambio de contexto?",
   "o": [
    "Se reinicia el equipo",
    "Se guarda el estado de un proceso y se carga el de otro",
    "Se borra la memoria",
    "Se cambia de usuario"
   ],
   "a": 1,
   "e": "Es lo que permite turnar los procesos en la CPU."
  },
  {
   "q": "¿Qué comando de Linux muestra los procesos en tiempo real?",
   "o": [
    "ls",
    "top",
    "cat",
    "pwd"
   ],
   "a": 1,
   "e": "top (o htop) muestra los procesos y su consumo actualizado."
  },
  {
   "q": "¿Qué diferencia hay entre kill y kill -9?",
   "o": [
    "Ninguna",
    "kill pide un cierre ordenado; kill -9 lo fuerza al instante",
    "kill -9 es más suave",
    "kill solo funciona en Windows"
   ],
   "a": 1,
   "e": "SIGTERM frente a SIGKILL."
  },
  {
   "q": "¿Cómo se llama en Windows el equivalente a la swap de Linux?",
   "o": [
    "Registro",
    "Archivo de paginación",
    "Caché",
    "Punto de restauración"
   ],
   "a": 1,
   "e": "pagefile.sys, en la raíz de la unidad del sistema."
  },
  {
   "q": "¿Qué es un fallo de página?",
   "o": [
    "Un error del disco",
    "Que un proceso necesita una página que no está en RAM",
    "Que la página web no carga",
    "Un fallo de la impresora"
   ],
   "a": 1,
   "e": "El sistema la carga desde el disco; es normal, salvo que ocurra constantemente."
  }
 ]
});
