TEMA("ftp-ssh", {
 "title": "Transferencia de archivos y acceso remoto",
 "mins": 13,
 "intro": "Cómo se mueven archivos entre equipos y cómo se administra un servidor a distancia de forma segura: FTP, SFTP, SSH con claves y escritorio remoto.",
 "sections": [
  {
   "h": "FTP y sus variantes",
   "html": "\n<p>FTP es el protocolo clásico para subir y bajar archivos de un servidor. Tiene un problema de seguridad grave, y por eso existen variantes cifradas.</p>\n<table>\n<tr><th>Protocolo</th><th>Puerto</th><th>Cifrado</th></tr>\n<tr><td>FTP</td><td>21 (control) y 20 o puertos altos (datos)</td><td>No: usuario y contraseña viajan en claro</td></tr>\n<tr><td>FTPS</td><td>21 o 990</td><td>Sí, FTP sobre TLS</td></tr>\n<tr><td>SFTP</td><td>22</td><td>Sí, funciona sobre SSH (no tiene nada que ver con FTP)</td></tr>\n</table>\n<p>FTP tiene dos modos: <b>activo</b> (el servidor abre la conexión de datos hacia el cliente, lo que suele chocar con cortafuegos y NAT) y <b>pasivo</b> (el cliente abre ambas conexiones; es el habitual).</p>\n<p>Servidores FTP: <b>vsftpd</b> y ProFTPD en Linux, IIS en Windows. Cliente gráfico muy usado: <b>FileZilla</b>.</p>\n<p>El problema del FTP clásico es que envía el usuario y la contraseña <b>sin cifrar</b>: cualquiera que capture el tráfico los lee.</p>\n",
   "check": {
    "q": "¿Qué protocolo de transferencia usa el puerto 22 y va cifrado sobre SSH?",
    "o": [
     "FTP",
     "FTPS",
     "SFTP",
     "TFTP"
    ],
    "a": 2,
    "e": "SFTP es un subsistema de SSH."
   }
  },
  {
   "h": "SSH con claves",
   "html": "\n<p>SSH da una terminal cifrada en el servidor. Es más seguro usar <b>claves</b> que contraseñas:</p>\n<pre><code>ssh-keygen -t ed25519                <span class=\"c\"># crea clave privada y pública en ~/.ssh</span>\nssh-copy-id admin@192.168.1.20        <span class=\"c\"># copia la pública al servidor</span>\nssh admin@192.168.1.20                <span class=\"c\"># ya entra sin contraseña</span>\nscp informe.pdf admin@192.168.1.20:/tmp/   <span class=\"c\"># copiar un archivo</span></code></pre>\n<p>Para endurecer el servidor, en <code>/etc/ssh/sshd_config</code>:</p>\n<pre><code>PermitRootLogin no\nPasswordAuthentication no     <span class=\"c\"># solo claves</span></code></pre>\n<p>La <b>clave privada</b> nunca sale de tu equipo; lo que se copia al servidor es la pública. Herramientas como <b>fail2ban</b> bloquean las IP que fallan muchas veces.</p>\n<p>Para copiar archivos por SSH se usa <code>scp origen destino</code>, donde el remoto se escribe como <code>usuario@servidor:/carpeta</code>.</p>\n",
   "check": {
    "q": "¿Qué clave se copia al servidor para entrar por SSH con claves?",
    "o": [
     "La privada",
     "La pública",
     "Las dos",
     "Ninguna"
    ],
    "a": 1,
    "e": "La privada se queda siempre en tu equipo."
   }
  },
  {
   "h": "Escritorio remoto",
   "html": "\n<p>A veces no basta con una terminal y hay que ver el escritorio del otro equipo. Para eso hay protocolos de escritorio remoto.</p>\n<ul>\n<li><b>RDP</b> (puerto 3389): escritorio remoto de Windows. Con <b>NLA</b> activado, se autentica antes de abrir la sesión.</li>\n<li><b>VNC</b>: multiplataforma; ve la misma pantalla que el usuario.</li>\n<li>Herramientas de soporte: AnyDesk, TeamViewer, RustDesk.</li>\n</ul>\n<div class=\"caso\"><b>Regla de oro</b>RDP, SSH o VNC nunca se abren directamente a Internet. Se accede a ellos a través de una VPN o un bastión: los puertos expuestos reciben miles de intentos de acceso cada día.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué problema tiene el FTP clásico?",
   "o": [
    "Es lento",
    "Envía las credenciales sin cifrar",
    "No funciona en Linux",
    "No permite carpetas"
   ],
   "a": 1,
   "e": "Cualquiera que capture el tráfico puede leerlas."
  },
  {
   "q": "¿Qué modo de FTP funciona mejor con cortafuegos y NAT?",
   "o": [
    "Activo",
    "Pasivo",
    "Binario",
    "ASCII"
   ],
   "a": 1,
   "e": "En pasivo, el cliente abre las dos conexiones."
  },
  {
   "q": "¿Qué comando genera un par de claves SSH?",
   "o": [
    "ssh-copy-id",
    "ssh-keygen",
    "scp",
    "sshd"
   ],
   "a": 1,
   "e": "ssh-keygen -t ed25519."
  },
  {
   "q": "¿Qué opción de sshd_config impide entrar como root?",
   "o": [
    "PermitRootLogin no",
    "RootAccess off",
    "DenyRoot yes",
    "NoRoot"
   ],
   "a": 0,
   "e": "Se entra con un usuario normal y se usa sudo."
  },
  {
   "q": "¿Qué comando copia archivos por SSH?",
   "o": [
    "cp",
    "scp",
    "ftp",
    "mv"
   ],
   "a": 1,
   "e": "scp origen usuario@servidor:destino."
  },
  {
   "q": "¿Qué puerto usa RDP?",
   "o": [
    "22",
    "3389",
    "5900",
    "443"
   ],
   "a": 1,
   "e": "VNC usa el 5900."
  }
 ]
});
