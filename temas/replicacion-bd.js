TEMA("replicacion-bd", {
 "title": "Bases de datos distribuidas y replicadas",
 "mins": 12,
 "intro": "Cómo repartir una base de datos entre varios servidores para que aguante más carga y siga funcionando aunque caiga uno: replicación, clústeres y fragmentación.",
 "sections": [
  {
   "h": "Replicación",
   "html": "\n<p>Un servidor <b>origen</b> recibe las escrituras y las <b>réplicas</b> reciben una copia de cada cambio.</p>\n<table>\n<tr><th>Tipo</th><th>Cómo funciona</th><th>Riesgo</th></tr>\n<tr><td>Asíncrona</td><td>El origen confirma la escritura sin esperar a las réplicas</td><td>Si cae el origen, pueden perderse los últimos cambios</td></tr>\n<tr><td>Semisíncrona</td><td>Espera a que al menos una réplica reciba el cambio</td><td>Algo más lenta</td></tr>\n<tr><td>Síncrona</td><td>Espera a que todas apliquen el cambio</td><td>Más lenta, pero sin pérdida</td></tr>\n</table>\n<p>Usos: repartir las <b>lecturas</b> entre réplicas, tener un servidor listo para sustituir al origen (<b>failover</b>) y hacer copias desde una réplica sin cargar el origen.</p>\n<pre><code><span class=\"c\">-- En la réplica (MySQL 8 / MariaDB recientes)</span>\n<span class=\"k\">CHANGE REPLICATION SOURCE TO</span> SOURCE_HOST=<span class=\"s\">'10.0.0.10'</span>, SOURCE_USER=<span class=\"s\">'repl'</span>, SOURCE_PASSWORD=<span class=\"s\">'…'</span>, SOURCE_AUTO_POSITION=1;\n<span class=\"k\">START REPLICA</span>;\n<span class=\"k\">SHOW REPLICA STATUS</span>\\G</code></pre>"
  },
  {
   "h": "Clústeres",
   "html": "\n<p>Con replicación simple, solo el servidor principal acepta escrituras. Un clúster va más allá: varios nodos trabajan como si fueran uno solo.</p>\n<ul>\n<li><b>Multi-origen síncrono:</b> varios nodos aceptan escrituras y se mantienen idénticos. Ejemplos: <b>Galera Cluster</b> (MariaDB) y MySQL InnoDB Cluster.</li>\n<li>Necesitan un número <b>impar</b> de nodos (3, 5…) para evitar el <b>split-brain</b>: si la red se parte en dos, solo la mitad con mayoría (quórum) sigue aceptando escrituras.</li>\n<li>Delante se pone un balanceador o proxy de base de datos (ProxySQL, HAProxy, MaxScale).</li>\n</ul>\n<p>Un riesgo de los clústeres es el <b>split-brain</b>: si se corta la red, dos partes del clúster quedan aisladas y cada una cree ser la principal. Por eso se usa un número impar de nodos y se exige mayoría (quórum).</p>\n",
   "check": {
    "q": "¿Por qué un clúster como Galera usa un número impar de nodos?",
    "o": [
     "Por licencia",
     "Para que siempre haya una mayoría (quórum) si la red se parte",
     "Porque es más barato",
     "Por velocidad"
    ],
    "a": 1,
    "e": "Con 3 nodos, si uno queda aislado, los otros 2 tienen mayoría y siguen; así se evita el split-brain."
   }
  },
  {
   "h": "Bases de datos distribuidas",
   "html": "\n<p>Cuando los datos son tantos que no caben o no rinden en un servidor, se <b>fragmentan</b>:</p>\n<ul>\n<li><b>Horizontal (sharding):</b> las filas se reparten entre servidores, por ejemplo clientes de la A a la M en uno y de la N a la Z en otro.</li>\n<li><b>Vertical:</b> las columnas o tablas se reparten.</li>\n</ul>\n<p>El <b>teorema CAP</b> dice que, ante una partición de red, un sistema distribuido debe elegir entre <b>consistencia</b> (todos ven lo mismo) y <b>disponibilidad</b> (todos responden). Las bases relacionales suelen priorizar consistencia; muchas NoSQL, disponibilidad.</p>\n<div class=\"caso\"><b>Recuerda</b>Ni la replicación ni el clúster sustituyen a las copias de seguridad: un borrado accidental se replica en todos los nodos en milisegundos.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué riesgo tiene la replicación asíncrona?",
   "o": [
    "Es muy lenta",
    "Si cae el origen, pueden perderse los últimos cambios",
    "No permite lecturas",
    "No existe"
   ],
   "a": 1,
   "e": "El origen no espera a que las réplicas reciban los cambios."
  },
  {
   "q": "¿Para qué se usan las réplicas de lectura?",
   "o": [
    "Para escribir más rápido",
    "Para repartir las consultas de lectura",
    "Para cifrar",
    "Para borrar"
   ],
   "a": 1,
   "e": "Las escrituras siguen yendo al origen."
  },
  {
   "q": "¿Qué es Galera Cluster?",
   "o": [
    "Un antivirus",
    "Un clúster multi-origen síncrono para MariaDB/MySQL",
    "Un servidor web",
    "Un sistema de copias"
   ],
   "a": 1,
   "e": "Todos los nodos aceptan escrituras y se mantienen iguales."
  },
  {
   "q": "¿Qué es el split-brain?",
   "o": [
    "Un error de disco",
    "Dos partes de un clúster aisladas que creen ser la principal",
    "Una consulta lenta",
    "Un tipo de índice"
   ],
   "a": 1,
   "e": "Se evita con quórum y número impar de nodos."
  },
  {
   "q": "¿Qué es el sharding?",
   "o": [
    "Hacer copias",
    "Repartir las filas de una tabla entre varios servidores",
    "Cifrar columnas",
    "Comprimir datos"
   ],
   "a": 1,
   "e": "Fragmentación horizontal."
  },
  {
   "q": "¿Qué dice el teorema CAP?",
   "o": [
    "Que las bases de datos son seguras",
    "Que ante una partición de red hay que elegir entre consistencia y disponibilidad",
    "Que hay que usar RAID",
    "Que SQL es mejor"
   ],
   "a": 1,
   "e": "Consistency, Availability, Partition tolerance."
  }
 ]
});
