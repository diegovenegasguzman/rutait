TEMA("alta-disp", {
 "title": "Alta disponibilidad, RAID, cortafuegos y VPN",
 "mins": 17,
 "intro": "Cómo se consigue que los servicios sigan funcionando aunque falle un componente, y cómo se protege el perímetro de la red con cortafuegos, DMZ y VPN.",
 "sections": [
  {
   "h": "Qué es la alta disponibilidad",
   "html": "\n<p>La disponibilidad es el porcentaje de tiempo que un servicio funciona. Cada «nueve» extra es mucho más difícil y caro de conseguir:</p>\n<table>\n<tr><th>Disponibilidad</th><th>Caída máxima al año</th></tr>\n<tr><td>99 %</td><td>Unos 3,65 días</td></tr>\n<tr><td>99,9 %</td><td>Unas 8,76 horas</td></tr>\n<tr><td>99,99 %</td><td>Unos 52,6 minutos</td></tr>\n<tr><td>99,999 %</td><td>Unos 5,26 minutos</td></tr>\n</table>\n<p>La clave es eliminar los <b>puntos únicos de fallo</b> (SPOF): cualquier componente cuya avería, por sí sola, deja sin servicio. Un único disco, una única fuente, un único switch o un único servidor son SPOF.</p>"
  },
  {
   "h": "RAID",
   "html": "\n<p>Un <b>RAID</b> combina varios discos para ganar rendimiento, tolerancia a fallos o ambas cosas.</p>\n<table>\n<tr><th>Nivel</th><th>Cómo funciona</th><th>Mín. discos</th><th>Fallos que tolera</th><th>Capacidad útil</th></tr>\n<tr><td>RAID 0</td><td>Reparte los datos entre discos (striping)</td><td>2</td><td>Ninguno</td><td>100 %</td></tr>\n<tr><td>RAID 1</td><td>Copia exacta en dos discos (espejo)</td><td>2</td><td>1</td><td>50 %</td></tr>\n<tr><td>RAID 5</td><td>Striping con paridad distribuida</td><td>3</td><td>1</td><td>n − 1 discos</td></tr>\n<tr><td>RAID 6</td><td>Striping con doble paridad</td><td>4</td><td>2</td><td>n − 2 discos</td></tr>\n<tr><td>RAID 10</td><td>Espejos combinados con striping</td><td>4</td><td>1 por espejo</td><td>50 %</td></tr>\n</table>\n<p><b>Ejemplo:</b> 4 discos de 2 TB en RAID 5 dan (4 − 1) × 2 = <b>6 TB</b> útiles; en RAID 6, 4 TB; en RAID 10, 4 TB.</p>\n<div class=\"note exam\"><b>RAID no es una copia de seguridad</b>Si borras un archivo o un ransomware cifra el disco, el RAID copia el desastre a todos los discos al instante. Necesitas copias de seguridad aparte.</div>\n<p>RAID 6 guarda dos bloques de paridad, así que aguanta que fallen <b>dos discos</b> a la vez. Recuerda que un RAID <b>no sustituye a las copias de seguridad</b>: si alguien borra un archivo o un ransomware lo cifra, el RAID replica ese cambio en todos los discos al instante.</p>\n"
  },
  {
   "h": "Redundancia de servidores y energía",
   "html": "\n<p>Duplicar los discos no basta si el servidor entero se apaga o se va la luz. Para eso se duplican también los servidores y la alimentación.</p>\n<ul>\n<li><b>Clúster activo-pasivo:</b> un servidor da servicio y otro espera; si el primero cae, el segundo toma el relevo (failover).</li>\n<li><b>Clúster activo-activo:</b> varios servidores atienden a la vez y se reparten la carga.</li>\n<li><b>Balanceador de carga:</b> reparte las peticiones entre varios servidores y deja de enviar a los que no responden. Ejemplos: HAProxy, Nginx.</li>\n<li><b>Hardware redundante:</b> dos fuentes de alimentación, dos tarjetas de red, enlaces duplicados entre switches.</li>\n<li><b>SAI (UPS):</b> mantiene la corriente durante un corte el tiempo suficiente para apagar ordenadamente o hasta que arranca un generador. Los <b>online</b> (doble conversión) protegen más que los <b>line-interactive</b> y los <b>offline</b>.</li>\n</ul>\n<p>Un <b>SAI</b> (sistema de alimentación ininterrumpida) mantiene la corriente con sus baterías durante un corte de luz, el tiempo justo para apagar los equipos de forma ordenada o para que arranque un generador.</p>\n"
  },
  {
   "h": "Cortafuegos y DMZ",
   "html": "\n<p>Un <b>cortafuegos</b> filtra el tráfico según reglas: origen, destino, puerto y protocolo.</p>\n<ul>\n<li><b>Filtrado de paquetes:</b> mira cada paquete por separado.</li>\n<li><b>Con estado (stateful):</b> recuerda las conexiones abiertas y deja pasar las respuestas automáticamente. Es lo normal hoy.</li>\n<li><b>Política recomendada:</b> <b>denegar todo por defecto</b> y permitir solo lo necesario.</li>\n</ul>\n<p>La <b>DMZ</b> (zona desmilitarizada) es una red intermedia donde se colocan los servidores accesibles desde Internet (web, correo). Si atacan uno, el atacante no está todavía en la red interna.</p>\n<pre><code>Internet ──▶ [Cortafuegos] ──▶ DMZ (servidor web)\n                   │\n                   └──────▶ Red interna (usuarios, bases de datos)</code></pre>\n<p>En Linux, el cortafuegos se configura con <b>nftables</b> o <b>iptables</b>, o de forma sencilla con <b>ufw</b>: <code>ufw allow 22/tcp</code>.</p>\n<p>La <b>DMZ</b> es una red separada donde se colocan los servidores accesibles desde Internet, como el web o el de correo. Si atacan uno de ellos, el atacante sigue fuera de la red interna.</p>\n"
  },
  {
   "h": "VPN",
   "html": "\n<p>Una <b>VPN</b> crea un túnel cifrado a través de Internet, como si los equipos estuvieran en la misma red local.</p>\n<ul>\n<li><b>VPN de acceso remoto:</b> un teletrabajador se conecta a la red de la empresa.</li>\n<li><b>VPN sitio a sitio:</b> une dos sedes de forma permanente.</li>\n</ul>\n<p>Tecnologías habituales: <b>IPsec</b>, <b>OpenVPN</b> y <b>WireGuard</b> (moderna, ligera y rápida).</p>\n<div class=\"note\"><b>Buena práctica</b>Servicios como RDP o las bases de datos no deben abrirse nunca directamente a Internet. Se accede a ellos a través de la VPN.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué nivel de RAID ofrece rendimiento pero ninguna tolerancia a fallos?",
   "o": [
    "RAID 0",
    "RAID 1",
    "RAID 5",
    "RAID 6"
   ],
   "a": 0,
   "e": "RAID 0 reparte los datos sin redundancia: si falla un disco, se pierde todo."
  },
  {
   "q": "¿Cuánta capacidad útil dan 4 discos de 2 TB en RAID 5?",
   "o": [
    "8 TB",
    "6 TB",
    "4 TB",
    "2 TB"
   ],
   "a": 1,
   "e": "RAID 5 pierde un disco por la paridad: (4 − 1) × 2 = 6 TB."
  },
  {
   "q": "¿Cuántos discos pueden fallar a la vez en un RAID 6 sin perder datos?",
   "o": [
    "Ninguno",
    "1",
    "2",
    "La mitad"
   ],
   "a": 2,
   "e": "La doble paridad permite perder dos discos."
  },
  {
   "q": "¿Puede un RAID sustituir a las copias de seguridad?",
   "o": [
    "Sí, siempre",
    "Sí, si es RAID 1",
    "No, porque replica también los borrados y los cifrados",
    "Sí, si es RAID 10"
   ],
   "a": 2,
   "e": "El RAID protege de fallos de disco, no de errores humanos ni de malware."
  },
  {
   "q": "Un servicio con un 99,99 % de disponibilidad puede estar caído al año unos…",
   "o": [
    "5 minutos",
    "52 minutos",
    "8,7 horas",
    "3,6 días"
   ],
   "a": 1,
   "e": "0,01 % de un año son unos 52,6 minutos."
  },
  {
   "q": "¿Dónde colocarías un servidor web accesible desde Internet?",
   "o": [
    "En la red interna",
    "En la DMZ",
    "En la red de invitados",
    "Fuera del cortafuegos, sin protección"
   ],
   "a": 1,
   "e": "La DMZ aísla los servidores públicos de la red interna."
  },
  {
   "q": "¿Qué dispositivo mantiene la corriente durante un corte de luz?",
   "o": [
    "Un balanceador",
    "Un SAI",
    "Un switch",
    "Un RAID"
   ],
   "a": 1,
   "e": "El SAI (sistema de alimentación ininterrumpida) tiene baterías."
  },
  {
   "q": "¿Cuál es la política recomendada para un cortafuegos?",
   "o": [
    "Permitir todo y bloquear lo peligroso",
    "Denegar todo por defecto y permitir solo lo necesario",
    "Bloquear solo el puerto 80",
    "Desactivarlo en la red interna"
   ],
   "a": 1,
   "e": "Así, cualquier cosa que no se haya previsto queda bloqueada."
  }
 ]
});
