/* Prácticas de terminal de ITeca.
   PRACTICA(tema, nº de apartado, {...}) añade un terminal al final de ese apartado.
   CMDQ(tema, [...]) añade preguntas de comando al test del tema.
   Cada paso: t = tarea, s = solución, c = expresiones aceptadas (si falta, solo vale s),
   out = salida que muestra el terminal, p = prompt (si cambia), tip = pista tras el primer fallo. */

/* Ayudas para la sintaxis de Cisco: aceptan las abreviaturas habituales */
const CI = {
  en: "en|enable",
  conf: "conf t|configure terminal|config t|conf terminal",
  int: n => `(int|interface) (g|gi|gig|gigabitethernet) ?${n.replace("/", "\\/")}`,
  fa: n => `(int|interface) (f|fa|fastethernet) ?${n.replace("/", "\\/")}`,
  noshut: "no shut|no shutdown",
  end: "end",
  save: "copy run start|copy running-config startup-config|wr|write|write memory|copy run startup-config|copy running-config start",
  showint: "sh ip int br|sh ip int brief|show ip int br|show ip interface brief|show ip int brief|sh ip interface brief",
  showroute: "sh ip route|show ip route",
  ip: (a, m) => `(ip add|ip addr|ip address) ${a.replace(/\./g, "\\.")} ${m.replace(/\./g, "\\.")}`
};
const R = (h, mode) => `${h}${mode}`;
const sudo = "(sudo )?";

/* ===================== Linux: comandos básicos ===================== */
PRACTICA("linux-comandos", 1, {title:"Práctica: moverse por el sistema", os:"linux", host:"servidor", steps:[
  {t:"Averigua en qué carpeta estás ahora mismo.", s:"pwd", out:"/home/alumno", tip:"Es un comando de tres letras: «print working directory»."},
  {t:"Lista todos los archivos de esta carpeta, con detalles e incluidos los ocultos.", s:"ls -la", c:["ls -la","ls -al","ls -l -a","ls -a -l"], out:"total 24\ndrwxr-xr-x 3 alumno alumno 4096 nov 17 10:02 .\ndrwxr-xr-x 4 root   root   4096 nov  3 09:15 ..\n-rw-r--r-- 1 alumno alumno  220 nov  3 09:15 .bash_logout\n-rw-r--r-- 1 alumno alumno 3771 nov  3 09:15 .bashrc\ndrwxr-xr-x 2 alumno alumno 4096 nov 17 10:02 documentos", tip:"Usa ls con las opciones -l (detalles) y -a (ocultos)."},
  {t:"Entra en la carpeta <code>/etc</code>, donde está la configuración del sistema.", s:"cd /etc", c:["cd /etc/?"], out:""},
  {t:"Muestra el contenido del archivo <code>hostname</code>, que está en esta carpeta.", s:"cat hostname", c:["cat (/etc/)?hostname"], p:"alumno@servidor:/etc$", out:"servidor"},
  {t:"Vuelve a tu carpeta personal con el comando más corto posible.", s:"cd", c:["cd","cd ~","cd ~/","cd /home/alumno/?"], p:"alumno@servidor:/etc$", out:""}
]});
PRACTICA("linux-comandos", 2, {title:"Práctica: crear, copiar y buscar", os:"linux", host:"servidor", steps:[
  {t:"Crea de una vez las carpetas <code>proyectos/2026/web</code>, incluidas las intermedias.", s:"mkdir -p proyectos/2026/web", c:["mkdir -p proyectos/2026/web/?"], out:"", tip:"mkdir necesita una opción para crear también las carpetas intermedias."},
  {t:"Crea un archivo vacío llamado <code>nota.txt</code>.", s:"touch nota.txt", out:""},
  {t:"Cambia el nombre de <code>nota.txt</code> a <code>tareas.txt</code>.", s:"mv nota.txt tareas.txt", out:"", tip:"Renombrar es «mover» un archivo a un nombre nuevo."},
  {t:"Busca la palabra <code>error</code> dentro del archivo <code>/var/log/syslog</code>.", s:"grep error /var/log/syslog", c:["grep (\"error\"|'error'|error) /var/log/syslog"], out:"nov 17 09:41 servidor kernel: [  12.4] ata2: error en el enlace SATA\nnov 17 10:05 servidor sshd[812]: error: PAM: autenticación fallida para luis"},
  {t:"Busca en todo el sistema los archivos que terminan en <code>.conf</code>.", s:"find / -name \"*.conf\"", c:["(sudo )?find / -name (\"\\*\\.conf\"|'\\*\\.conf'|\\*\\.conf)"], out:"/etc/adduser.conf\n/etc/ssh/sshd_config.d/local.conf\n/etc/resolv.conf\n…", tip:"find, luego dónde buscar (/), luego -name y el patrón entre comillas."}
]});
PRACTICA("linux-comandos", 3, {title:"Práctica: permisos", os:"linux", host:"servidor", steps:[
  {t:"Da a <code>informe.sh</code> los permisos <b>rwxr-xr--</b> usando el modo numérico.", s:"chmod 754 informe.sh", out:"", tip:"rwx = 4+2+1, r-x = 4+1, r-- = 4."},
  {t:"Añade solo al propietario el permiso de ejecución sobre <code>script.sh</code>, en modo simbólico.", s:"chmod u+x script.sh", out:""},
  {t:"Haz que el archivo <code>notas.ods</code> pase a ser del usuario <code>ana</code> y del grupo <code>profes</code>.", s:"sudo chown ana:profes notas.ods", c:[sudo+"chown ana:profes notas\\.ods"], out:""},
  {t:"Comprueba el resultado listando <code>notas.ods</code> con detalles.", s:"ls -l notas.ods", out:"-rw-r----- 1 ana profes 18234 nov 17 11:20 notas.ods"}
]});
PRACTICA("linux-comandos", 4, {title:"Práctica: instalar y arrancar un servicio", os:"linux", host:"servidor", steps:[
  {t:"Actualiza la lista de paquetes disponibles.", s:"sudo apt update", out:"Obj:1 http://deb.debian.org/debian bookworm InRelease\nLeyendo lista de paquetes... Hecho\nSe pueden actualizar 3 paquetes."},
  {t:"Instala el servidor web <code>nginx</code>.", s:"sudo apt install nginx", c:["sudo apt(-get)? install (-y )?nginx( -y)?"], out:"Se instalarán los siguientes paquetes NUEVOS:\n  nginx nginx-common\n¿Desea continuar? [S/n] S\nConfigurando nginx (1.22.1-9) ..."},
  {t:"Comprueba si el servicio <code>nginx</code> está funcionando.", s:"systemctl status nginx", c:[sudo+"systemctl status nginx(\\.service)?"], out:"● nginx.service - A high performance web server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled)\n     Active: active (running) since Tue 2026-11-17 11:32:10 CET"},
  {t:"Haz que <code>nginx</code> arranque solo cada vez que se encienda el equipo.", s:"sudo systemctl enable nginx", c:["sudo systemctl enable nginx(\\.service)?"], out:"Synchronizing state of nginx.service with SysV service script.\nExecuting: /lib/systemd/systemd-sysv-install enable nginx"},
  {t:"Crea el usuario <code>luis</code>.", s:"sudo adduser luis", c:["sudo (adduser|useradd -m) luis"], out:"Añadiendo el usuario `luis' ...\nCreando el directorio personal `/home/luis' ...\nNueva contraseña:"}
]});
CMDQ("linux-comandos", [
  {q:"Escribe el comando que muestra las últimas líneas de /var/log/syslog y se queda esperando las nuevas.", os:"linux", s:"tail -f /var/log/syslog", c:[sudo+"tail -f /var/log/syslog"], out:"nov 17 12:01 servidor systemd[1]: Started Daily apt download activities.", e:"tail muestra el final de un archivo y -f lo sigue en directo. Es la forma habitual de ver un log mientras reproduces un problema."},
  {q:"Escribe el comando que reinicia el servicio ssh.", os:"linux", s:"sudo systemctl restart ssh", c:["sudo systemctl restart ssh(d)?(\\.service)?"], out:"", e:"systemctl restart para y vuelve a arrancar el servicio. Hace falta sudo porque cambia el estado del sistema."}
]);

/* ===================== Scripts ===================== */
PRACTICA("scripting", 1, {title:"Práctica: ejecutar tu primer script", os:"linux", host:"servidor", steps:[
  {t:"Da permiso de ejecución al script <code>copia.sh</code>.", s:"chmod +x copia.sh", c:["chmod (\\+x|u\\+x|755|744|700) copia\\.sh"], out:""},
  {t:"Ejecútalo pasándole como parámetro la carpeta <code>/home/ana</code>.", s:"./copia.sh /home/ana", c:["(sudo )?\\./copia\\.sh /home/ana/?"], out:"Copia creada en /backup/copia-2026-11-17.tar.gz", tip:"Para ejecutar un script de la carpeta actual se escribe ./ delante del nombre."},
  {t:"Muestra el código de salida del comando anterior con <code>echo</code>.", s:"echo $?", out:"0", tip:"La variable que guarda el código de salida es $?."}
]});
PRACTICA("scripting", 2, {title:"Práctica: PowerShell", os:"win", steps:[
  {t:"Muestra todos los servicios del equipo.", s:"Get-Service", out:"Status   Name               DisplayName\n------   ----               -----------\nRunning  Dhcp               Cliente DHCP\nStopped  Fax                Fax\nRunning  Spooler            Cola de impresión\n…"},
  {t:"Filtra para ver solo los servicios detenidos (<code>Status</code> igual a <code>Stopped</code>).", s:"Get-Service | Where-Object Status -eq 'Stopped'", c:["get-service \\| (where-object|where|\\?) (status|\\{ ?\\$_\\.status) -eq ('stopped'|\"stopped\"|stopped)( ?\\})?"], out:"Status   Name               DisplayName\n------   ----               -----------\nStopped  Fax                Fax\nStopped  WSearch            Windows Search", tip:"Encadena con | el cmdlet Where-Object, el campo Status, -eq y 'Stopped'."},
  {t:"Pide la ayuda de <code>Get-Service</code> con ejemplos.", s:"Get-Help Get-Service -Examples", out:"NOMBRE\n    Get-Service\n\n    ---------- Ejemplo 1: Obtener todos los servicios ----------\n    Get-Service"}
]});
PRACTICA("scripting", 4, {title:"Práctica: revisar los registros", os:"linux", host:"servidor", steps:[
  {t:"Comprueba el estado del servicio <code>nginx</code>.", s:"systemctl status nginx", c:[sudo+"systemctl status nginx(\\.service)?"], out:"● nginx.service - A high performance web server\n     Active: failed (Result: exit-code) since Tue 2026-11-17 12:10:03 CET"},
  {t:"Ha fallado. Mira los mensajes de <code>nginx</code> solo de hoy.", s:"journalctl -u nginx --since today", c:[sudo+"journalctl -u nginx(\\.service)? --since (today|\"today\")"], out:"nov 17 12:10:03 servidor nginx[1422]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)", tip:"journalctl, la opción -u con el servicio y --since today."}
]});
CMDQ("scripting", [
  {q:"Escribe el comando que abre la tabla de tareas programadas de tu usuario para editarla.", os:"linux", s:"crontab -e", out:"no crontab for alumno - using an empty one\nSelect an editor.", e:"crontab -e abre tus tareas programadas en el editor. Cada línea indica minuto, hora, día, mes, día de la semana y el comando."}
]);

/* ===================== Redes en Windows y diagnóstico ===================== */
PRACTICA("integracion-red", 0, {title:"Práctica: ¿qué configuración tiene el equipo?", os:"cmd", steps:[
  {t:"Muestra la configuración IP completa, incluidos la MAC, el DHCP y los DNS.", s:"ipconfig /all", out:"Adaptador de Ethernet Ethernet:\n   Dirección física. . . . . . . . : 3C-52-82-A1-07-4F\n   DHCP habilitado . . . . . . . . : sí\n   Dirección IPv4. . . . . . . . . : 192.168.1.37(Preferido)\n   Máscara de subred . . . . . . . : 255.255.255.0\n   Puerta de enlace predeterminada : 192.168.1.1\n   Servidores DNS. . . . . . . . . : 192.168.1.1"},
  {t:"Ahora mira la tabla ARP: las MAC que el equipo conoce de su red local.", s:"arp -a", out:"Interfaz: 192.168.1.37 --- 0x6\n  Dirección de Internet   Dirección física      Tipo\n  192.168.1.1             f4-1e-57-22-9c-10     dinámico"}
]});
PRACTICA("integracion-red", 3, {title:"Práctica: diagnosticar «no tengo Internet» capa a capa", os:"cmd", steps:[
  {t:"Primero, comprueba que la pila TCP/IP del propio equipo funciona.", s:"ping 127.0.0.1", c:["ping (127\\.0\\.0\\.1|localhost)"], out:"Respuesta desde 127.0.0.1: bytes=32 tiempo<1m TTL=128\nPaquetes: enviados = 4, recibidos = 4, perdidos = 0"},
  {t:"Ahora haz ping a la puerta de enlace, <code>192.168.1.1</code>.", s:"ping 192.168.1.1", out:"Respuesta desde 192.168.1.1: bytes=32 tiempo=1ms TTL=64\nPaquetes: enviados = 4, recibidos = 4, perdidos = 0"},
  {t:"La red local va bien. Haz ping a una IP de Internet: <code>8.8.8.8</code>.", s:"ping 8.8.8.8", out:"Respuesta desde 8.8.8.8: bytes=32 tiempo=14ms TTL=117\nPaquetes: enviados = 4, recibidos = 4, perdidos = 0"},
  {t:"Hay Internet. Prueba ahora con un nombre: <code>google.com</code>.", s:"ping google.com", c:["ping (www\\.)?google\\.com"], out:"La solicitud de ping no pudo encontrar el host google.com. Compruebe el nombre y vuelva a intentarlo."},
  {t:"Falla solo con nombres: es el DNS. Vacía la caché DNS del equipo.", s:"ipconfig /flushdns", out:"Configuración IP de Windows\nSe vació correctamente la caché de resolución de DNS.", tip:"Es una opción de ipconfig."},
  {t:"Pregunta directamente al DNS por <code>google.com</code> para ver si responde.", s:"nslookup google.com", c:["nslookup (www\\.)?google\\.com"], out:"Servidor:  UnKnown\nAddress:  192.168.1.1\n\nRespuesta no autoritativa:\nNombre:  google.com\nAddresses:  142.250.184.14"}
]});
CMDQ("integracion-red", [
  {q:"En Windows, escribe el comando que muestra por qué routers pasan los paquetes hasta 8.8.8.8.", os:"cmd", s:"tracert 8.8.8.8", out:"  1    <1 ms    <1 ms    <1 ms  192.168.1.1\n  2     6 ms     5 ms     6 ms  10.200.0.1\n  3    14 ms    13 ms    14 ms  8.8.8.8\n\nTraza completa.", e:"tracert (traceroute en Linux) muestra cada salto. Si se corta en un salto concreto, sabes dónde está el problema."},
  {q:"En Linux, escribe el comando que muestra las direcciones IP de las interfaces.", os:"linux", s:"ip a", c:["ip (a|addr|address)( show)?"], out:"2: enp0s3: <BROADCAST,MULTICAST,UP> mtu 1500\n    inet 192.168.1.40/24 brd 192.168.1.255 scope global enp0s3", e:"ip a (ip address) es el equivalente moderno de ifconfig en Linux."}
]);

PRACTICA("servicios", 1, {title:"Práctica: pedir una IP nueva al DHCP", os:"cmd", steps:[
  {t:"El equipo tiene una IP 169.254.x.x. Libera la configuración actual.", s:"ipconfig /release", out:"Configuración IP de Windows\nAdaptador de Ethernet Ethernet:\n   Dirección IPv4 de configuración automática: 169.254.12.40"},
  {t:"Pide una IP nueva al servidor DHCP.", s:"ipconfig /renew", out:"Adaptador de Ethernet Ethernet:\n   Dirección IPv4. . . . . . . . . : 192.168.1.37\n   Puerta de enlace predeterminada : 192.168.1.1"}
]});
PRACTICA("servicios", 2, {title:"Práctica: resolver nombres", os:"cmd", steps:[
  {t:"Consulta al DNS qué IP tiene <code>ejemplo.com</code>.", s:"nslookup ejemplo.com", out:"Servidor:  dns.proveedor.es\nAddress:  80.58.61.250\n\nRespuesta no autoritativa:\nNombre:  ejemplo.com\nAddress:  93.184.215.14"},
  {t:"Comprueba que llegas a una IP de Internet sin usar el DNS: <code>8.8.8.8</code>.", s:"ping 8.8.8.8", out:"Respuesta desde 8.8.8.8: bytes=32 tiempo=12ms TTL=117"}
]});
PRACTICA("servicios", 3, {title:"Práctica: conectarse por SSH", os:"linux", host:"portatil", steps:[
  {t:"Genera tu par de claves SSH.", s:"ssh-keygen", c:["ssh-keygen( -t (ed25519|rsa))?"], out:"Generating public/private ed25519 key pair.\nYour identification has been saved in /home/alumno/.ssh/id_ed25519\nYour public key has been saved in /home/alumno/.ssh/id_ed25519.pub"},
  {t:"Copia tu clave pública al servidor <code>192.168.1.20</code> para el usuario <code>usuario</code>.", s:"ssh-copy-id usuario@192.168.1.20", out:"Number of key(s) added: 1\nNow try logging into the machine with: ssh 'usuario@192.168.1.20'"},
  {t:"Conéctate al servidor.", s:"ssh usuario@192.168.1.20", out:"Linux servidor 6.1.0-26-amd64 x86_64\nLast login: Tue Nov 17 09:02:11 2026 from 192.168.1.37"}
]});

PRACTICA("ftp-ssh", 1, {title:"Práctica: SSH con claves y copia segura", os:"linux", host:"portatil", steps:[
  {t:"Crea un par de claves de tipo <code>ed25519</code>.", s:"ssh-keygen -t ed25519", out:"Generating public/private ed25519 key pair.\nYour public key has been saved in /home/alumno/.ssh/id_ed25519.pub"},
  {t:"Copia la clave pública al servidor <code>192.168.1.20</code>, usuario <code>admin</code>.", s:"ssh-copy-id admin@192.168.1.20", out:"Number of key(s) added: 1"},
  {t:"Copia el archivo <code>informe.pdf</code> a la carpeta <code>/tmp/</code> del servidor.", s:"scp informe.pdf admin@192.168.1.20:/tmp/", c:["scp informe\\.pdf admin@192\\.168\\.1\\.20:/tmp/?"], out:"informe.pdf                 100%  482KB  11.2MB/s   00:00", tip:"scp origen usuario@servidor:carpeta"},
  {t:"Edita la configuración del servidor SSH para prohibir el acceso de root (abre el archivo con nano).", s:"sudo nano /etc/ssh/sshd_config", c:["sudo (nano|vi|vim) /etc/ssh/sshd_config"], p:"admin@servidor:~$", out:"  GNU nano 7.2        /etc/ssh/sshd_config\nPermitRootLogin no\nPasswordAuthentication no"}
]});

PRACTICA("ipv6", 4, {title:"Práctica: comprobar IPv6", os:"linux", host:"pc", steps:[
  {t:"Comprueba que IPv6 funciona en el propio equipo haciendo ping a la dirección de loopback.", s:"ping ::1", c:["ping (-6 )?::1"], out:"64 bytes from ::1: icmp_seq=1 ttl=64 time=0.041 ms"},
  {t:"Muestra solo las direcciones IPv6 de las interfaces.", s:"ip -6 addr", c:["ip -6 (a|addr|address)( show)?"], out:"2: enp0s3: <BROADCAST,MULTICAST,UP>\n    inet6 2a0c:5a80:1f::37/64 scope global dynamic\n    inet6 fe80::a00:27ff:fe4e:66a1/64 scope link"},
  {t:"Haz ping por IPv6 a <code>google.com</code>.", s:"ping -6 google.com", out:"64 bytes from mad41s14-in-x0e.1e100.net (2a00:1450:4003:80f::200e): icmp_seq=1 ttl=117 time=13.2 ms"}
]});

/* ===================== Cisco: routers, switches, VLAN, NAT, ACL ===================== */
PRACTICA("routers", 1, {title:"Práctica: configurar un router", os:"cisco", steps:[
  {t:"Pasa del modo usuario al modo privilegiado.", s:"enable", c:[CI.en], p:"R1>", out:""},
  {t:"Entra en el modo de configuración global.", s:"configure terminal", c:[CI.conf], p:"R1#", out:"Enter configuration commands, one per line.  End with CNTL/Z."},
  {t:"Entra en la interfaz <code>g0/0</code>.", s:"interface g0/0", c:[CI.int("0/0")], p:"R1(config)#", out:""},
  {t:"Asígnale la IP <code>192.168.10.1</code> con máscara <code>255.255.255.0</code>.", s:"ip address 192.168.10.1 255.255.255.0", c:[CI.ip("192.168.10.1","255.255.255.0")], p:"R1(config-if)#", out:""},
  {t:"Activa la interfaz (en los routers viene apagada).", s:"no shutdown", c:[CI.noshut], p:"R1(config-if)#", out:"%LINK-5-CHANGED: Interface GigabitEthernet0/0, changed state to up"},
  {t:"Vuelve al modo privilegiado.", s:"end", c:["end"], p:"R1(config-if)#", out:""},
  {t:"Guarda la configuración para que no se pierda al reiniciar.", s:"copy running-config startup-config", c:[CI.save], p:"R1#", out:"Destination filename [startup-config]?\nBuilding configuration...\n[OK]", tip:"Se copia la running-config en la startup-config."}
]});
PRACTICA("routers", 2, {title:"Práctica: rutas estáticas", os:"cisco", steps:[
  {t:"Entra en configuración global.", s:"configure terminal", c:[CI.conf], p:"R1#", out:""},
  {t:"Añade una ruta para llegar a <code>10.0.0.0/8</code> a través del router vecino <code>172.16.0.2</code>.", s:"ip route 10.0.0.0 255.0.0.0 172.16.0.2", p:"R1(config)#", out:"", tip:"ip route, red destino, máscara y siguiente salto."},
  {t:"Añade la ruta por defecto hacia el proveedor, <code>80.58.1.1</code>.", s:"ip route 0.0.0.0 0.0.0.0 80.58.1.1", p:"R1(config)#", out:""}
]});
PRACTICA("routers", 3, {title:"Práctica: comprobar el router", os:"cisco", steps:[
  {t:"Muestra un resumen de las interfaces con su IP y su estado.", s:"show ip interface brief", c:[CI.showint], p:"R1#", out:"Interface              IP-Address      OK? Method Status                Protocol\nGigabitEthernet0/0     192.168.10.1    YES manual up                    up\nGigabitEthernet0/1     192.168.20.1    YES manual administratively down down"},
  {t:"La g0/1 está «administratively down». Entra en configuración global para arreglarlo.", s:"configure terminal", c:[CI.conf], p:"R1#", out:""},
  {t:"Entra en la interfaz <code>g0/1</code>.", s:"interface g0/1", c:[CI.int("0/1")], p:"R1(config)#", out:""},
  {t:"Actívala.", s:"no shutdown", c:[CI.noshut], p:"R1(config-if)#", out:"%LINK-5-CHANGED: Interface GigabitEthernet0/1, changed state to up"},
  {t:"Vuelve al modo privilegiado.", s:"end", c:["end"], p:"R1(config-if)#", out:""},
  {t:"Muestra la tabla de rutas.", s:"show ip route", c:[CI.showroute], p:"R1#", out:"C    192.168.10.0/24 is directly connected, GigabitEthernet0/0\nC    192.168.20.0/24 is directly connected, GigabitEthernet0/1\nS*   0.0.0.0/0 [1/0] via 80.58.1.1"}
]});
CMDQ("routers", [
  {q:"Estás en R1#. Escribe el comando que muestra la configuración que está funcionando ahora mismo.", os:"cisco", p:"R1#", s:"show running-config", c:["sh run|show run|show running-config|sh running-config"], out:"Building configuration...\nhostname R1\ninterface GigabitEthernet0/0\n ip address 192.168.10.1 255.255.255.0", e:"La running-config está en RAM. Si no la copias a la startup-config, se pierde al reiniciar."}
]);

PRACTICA("switching", 1, {title:"Práctica: configuración básica de un switch", os:"cisco", steps:[
  {t:"Ya estás en configuración global. Ponle al switch el nombre <code>SW-PLANTA1</code>.", s:"hostname SW-PLANTA1", p:"Switch(config)#", out:""},
  {t:"Protege el modo privilegiado con la contraseña cifrada <code>Cl4ve-Segura</code>.", s:"enable secret Cl4ve-Segura", p:"SW-PLANTA1(config)#", out:"", tip:"Usa secret, no password: secret la guarda cifrada."},
  {t:"Entra en la interfaz virtual de la VLAN 1 para darle una IP de gestión.", s:"interface vlan 1", c:["(int|interface) vlan ?1"], p:"SW-PLANTA1(config)#", out:""},
  {t:"Asígnale <code>192.168.1.250</code> con máscara <code>255.255.255.0</code>.", s:"ip address 192.168.1.250 255.255.255.0", c:[CI.ip("192.168.1.250","255.255.255.0")], p:"SW-PLANTA1(config-if)#", out:""},
  {t:"Actívala.", s:"no shutdown", c:[CI.noshut], p:"SW-PLANTA1(config-if)#", out:"%LINK-5-CHANGED: Interface Vlan1, changed state to up"},
  {t:"Configura la puerta de enlace del switch: <code>192.168.1.1</code>.", s:"ip default-gateway 192.168.1.1", p:"SW-PLANTA1(config)#", out:"", tip:"En un switch es ip default-gateway, no ip route."}
]});
PRACTICA("switching", 3, {title:"Práctica: seguridad de puerto", os:"cisco", steps:[
  {t:"Entra en la interfaz <code>fa0/5</code>.", s:"interface fa0/5", c:[CI.fa("0/5")], p:"SW-PLANTA1(config)#", out:""},
  {t:"Ponla en modo acceso.", s:"switchport mode access", c:["(switchport|sw) mode access"], p:"SW-PLANTA1(config-if)#", out:""},
  {t:"Activa la seguridad de puerto.", s:"switchport port-security", p:"SW-PLANTA1(config-if)#", out:""},
  {t:"Permite como máximo una MAC.", s:"switchport port-security maximum 1", p:"SW-PLANTA1(config-if)#", out:""},
  {t:"Haz que aprenda sola la MAC del equipo conectado y la guarde en la configuración.", s:"switchport port-security mac-address sticky", p:"SW-PLANTA1(config-if)#", out:""},
  {t:"Si se conecta otro equipo, el puerto debe apagarse.", s:"switchport port-security violation shutdown", p:"SW-PLANTA1(config-if)#", out:""}
]});

PRACTICA("vlan", 3, {title:"Práctica: crear VLAN y asignar puertos", os:"cisco", host:"SW1", steps:[
  {t:"En configuración global, crea la VLAN 10.", s:"vlan 10", p:"SW1(config)#", out:""},
  {t:"Llámala <code>ADMINISTRACION</code>.", s:"name ADMINISTRACION", p:"SW1(config-vlan)#", out:""},
  {t:"Entra en la interfaz <code>fa0/1</code>, donde está el PC de administración.", s:"interface fa0/1", c:[CI.fa("0/1")], p:"SW1(config-vlan)#", out:""},
  {t:"Ponla en modo acceso.", s:"switchport mode access", c:["(switchport|sw) mode access"], p:"SW1(config-if)#", out:""},
  {t:"Asígnala a la VLAN 10.", s:"switchport access vlan 10", c:["(switchport|sw) access vlan 10"], p:"SW1(config-if)#", out:""},
  {t:"Entra en la interfaz <code>g0/1</code>, que va hacia otro switch.", s:"interface g0/1", c:[CI.int("0/1")], p:"SW1(config-if)#", out:""},
  {t:"Ponla en modo troncal.", s:"switchport mode trunk", c:["(switchport|sw) mode trunk"], p:"SW1(config-if)#", out:"%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/1, changed state to up"},
  {t:"Vuelve al modo privilegiado.", s:"end", p:"SW1(config-if)#", out:""},
  {t:"Muestra el resumen de VLAN.", s:"show vlan brief", c:["(sh|show) vlan (br|brief)"], p:"SW1#", out:"VLAN Name                 Status    Ports\n---- -------------------- --------- -------------------\n1    default              active    Fa0/2, Fa0/3, Fa0/4\n10   ADMINISTRACION       active    Fa0/1"}
]});
CMDQ("vlan", [
  {q:"Estás en SW1#. Escribe el comando que muestra qué puertos son troncales.", os:"cisco", p:"SW1#", s:"show interfaces trunk", c:["(sh|show) (int|interfaces|interface) trunk"], out:"Port        Mode         Encapsulation  Status        Native vlan\nGi0/1       on           802.1q         trunking      1", e:"show interfaces trunk lista los enlaces troncales y las VLAN que dejan pasar."}
]);

PRACTICA("nat-enrutamiento", 3, {title:"Práctica: una lista de control de acceso", os:"cisco", steps:[
  {t:"Prohíbe que la red de alumnos <code>192.168.20.0/24</code> entre por SSH (puerto 22) al servidor <code>10.0.0.5</code>. Usa la ACL 110.", s:"access-list 110 deny tcp 192.168.20.0 0.0.0.255 host 10.0.0.5 eq 22", p:"R1(config)#", out:"", tip:"access-list 110 deny tcp, origen con wildcard, host destino, eq 22."},
  {t:"Permite todo lo demás (al final de cada ACL hay un «deny» implícito).", s:"access-list 110 permit ip any any", p:"R1(config)#", out:""},
  {t:"Entra en la interfaz <code>g0/1</code>, por donde llegan los alumnos.", s:"interface g0/1", c:[CI.int("0/1")], p:"R1(config)#", out:""},
  {t:"Aplica la ACL 110 al tráfico de entrada.", s:"ip access-group 110 in", p:"R1(config-if)#", out:""}
]});

PRACTICA("acceso-internet", 1, {title:"Práctica: configurar PAT", os:"cisco", steps:[
  {t:"Entra en la interfaz <code>g0/0</code>, la que va a la LAN.", s:"interface g0/0", c:[CI.int("0/0")], p:"R1(config)#", out:""},
  {t:"Márcala como interfaz interior de NAT.", s:"ip nat inside", p:"R1(config-if)#", out:""},
  {t:"Entra en <code>g0/1</code>, la que va al proveedor.", s:"interface g0/1", c:[CI.int("0/1")], p:"R1(config-if)#", out:""},
  {t:"Márcala como interfaz exterior.", s:"ip nat outside", p:"R1(config-if)#", out:""},
  {t:"Crea la ACL 1 que permite la red <code>192.168.0.0/16</code>.", s:"access-list 1 permit 192.168.0.0 0.0.255.255", c:["access-list 1 permit 192\\.168\\.0\\.0 0\\.0\\.255\\.255"], p:"R1(config)#", out:""},
  {t:"Traduce esas direcciones a la IP de <code>g0/1</code>, compartiéndola entre todos.", s:"ip nat inside source list 1 interface g0/1 overload", c:["ip nat inside source list 1 (int|interface) (g|gi|gigabitethernet) ?0/1 overload"], p:"R1(config)#", out:"", tip:"overload es lo que convierte NAT en PAT."}
]});

/* ===================== Almacenamiento, software, procesos, monitorización ===================== */
PRACTICA("gestion-almacenamiento", 0, {title:"Práctica: preparar un disco nuevo en Linux", os:"linux", host:"servidor", steps:[
  {t:"Has conectado un disco. Lista los discos y particiones en forma de árbol.", s:"lsblk", out:"NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS\nsda      8:0    0    60G  0 disk\n├─sda1   8:1    0    59G  0 part /\nsdb      8:16   0   500G  0 disk\n└─sdb1   8:17   0   500G  0 part"},
  {t:"Da formato <code>ext4</code> a la partición <code>/dev/sdb1</code>.", s:"sudo mkfs.ext4 /dev/sdb1", out:"Creating filesystem with 131071744 4k blocks and 32768000 inodes\nWriting superblocks and filesystem accounting information: done"},
  {t:"Móntala en la carpeta <code>/datos</code>.", s:"sudo mount /dev/sdb1 /datos", c:["sudo mount (-t ext4 )?/dev/sdb1 /datos/?"], out:""},
  {t:"Consulta su UUID para ponerlo en <code>/etc/fstab</code>.", s:"sudo blkid /dev/sdb1", c:["(sudo )?blkid( /dev/sdb1)?"], out:"/dev/sdb1: UUID=\"7c1f0a52-91d3-4b8e-a0f2-3e5d6c9b1a44\" TYPE=\"ext4\""}
]});
PRACTICA("gestion-almacenamiento", 1, {title:"Práctica: ampliar un volumen LVM", os:"linux", host:"servidor", steps:[
  {t:"Amplía el volumen lógico <code>/dev/vg_datos/lv_datos</code> en 50 GB.", s:"sudo lvextend -L +50G /dev/vg_datos/lv_datos", out:"  Size of logical volume vg_datos/lv_datos changed from 200,00 GiB to 250,00 GiB.\n  Logical volume vg_datos/lv_datos successfully resized."},
  {t:"Amplía también el sistema de archivos ext4 para que use el espacio nuevo.", s:"sudo resize2fs /dev/vg_datos/lv_datos", out:"The filesystem on /dev/vg_datos/lv_datos is now 65536000 (4k) blocks long.", tip:"El volumen ya es más grande, pero ext4 no lo sabe hasta que lo amplías con resize2fs."}
]});

PRACTICA("instalar-software", 1, {title:"Práctica: instalar con winget", os:"win", steps:[
  {t:"Busca LibreOffice en el repositorio de winget.", s:"winget search libreoffice", out:"Nombre       Id                              Versión\n-------------------------------------------------\nLibreOffice  TheDocumentFoundation.LibreOffice 24.8.3.2"},
  {t:"Instálalo usando su identificador.", s:"winget install TheDocumentFoundation.LibreOffice", c:["winget install (--id |-e --id |--id=)?thedocumentfoundation\\.libreoffice( -e)?"], out:"Descargando https://download.documentfoundation.org/…\nInstalado correctamente"},
  {t:"Actualiza todos los programas instalados de una vez.", s:"winget upgrade --all", out:"Se actualizaron 4 paquetes."}
]});
PRACTICA("instalar-software", 2, {title:"Práctica: instalación desatendida", os:"cmd", steps:[
  {t:"Instala <code>programa.msi</code> sin que aparezca ninguna ventana.", s:"msiexec /i programa.msi /qn", out:"", tip:"msiexec /i para instalar y /qn para el modo silencioso."}
]});

PRACTICA("procesos-memoria", 2, {title:"Práctica: un programa colgado", os:"linux", host:"pc", steps:[
  {t:"Firefox no responde. Lista todos los procesos del sistema.", s:"ps aux", c:["ps (aux|-ef|-aux)"], out:"USER   PID %CPU %MEM COMMAND\nroot     1  0.0  0.1 /sbin/init\nalumno 2481 98.7 22.3 /usr/lib/firefox/firefox\nalumno 2533  0.3  1.2 /usr/bin/gnome-terminal"},
  {t:"Pide a Firefox (PID 2481) que se cierre de forma ordenada.", s:"kill 2481", c:["kill (-15 |-TERM |-SIGTERM )?2481"], out:"", tip:"kill con el PID envía SIGTERM, el cierre ordenado."},
  {t:"Sigue sin cerrarse. Fuerza su cierre.", s:"kill -9 2481", c:["kill (-9|-KILL|-SIGKILL) 2481"], out:"[1]+  Terminado (killed)      firefox"}
]});
CMDQ("procesos-memoria", [
  {q:"En Windows (símbolo del sistema), escribe el comando que fuerza el cierre del proceso con PID 1234.", os:"cmd", s:"taskkill /F /PID 1234", c:["taskkill (/f /pid 1234|/pid 1234 /f)"], out:"Correcto: se terminó el proceso con PID 1234.", e:"taskkill /PID cierra el proceso y /F lo fuerza, igual que kill -9 en Linux."}
]);

PRACTICA("monitorizacion", 1, {title:"Práctica: revisar un servidor lento", os:"linux", host:"servidor", steps:[
  {t:"Mira cuánto tiempo lleva encendido y su carga media.", s:"uptime", out:" 12:41:07 up 23 days,  3:12,  2 users,  load average: 3,87, 3,52, 2,90"},
  {t:"La carga es alta. Comprueba la memoria en unidades legibles.", s:"free -h", out:"               total        used        free      shared  buff/cache   available\nMem:           7,7Gi       7,1Gi       142Mi        12Mi       480Mi       310Mi\nSwap:          2,0Gi       1,9Gi       100Mi"},
  {t:"Casi no queda RAM y usa la swap. Revisa también el espacio en disco.", s:"df -h", out:"S.ficheros     Tamaño Usados  Disp Uso% Montado en\n/dev/sda1         59G    57G  0,9G  99% /"},
  {t:"El disco está al 99 %. Mira cuánto ocupa la carpeta <code>/var/log</code>.", s:"du -sh /var/log", c:[sudo+"du -sh /var/log/?"], out:"31G\t/var/log"},
  {t:"Por último, comprueba qué puertos están escuchando y qué programa los usa.", s:"ss -tulpn", c:[sudo+"ss -(tulpn|tlpn|tulnp|lntup|plunt|ltnp|tlnp)"], out:"Netid State  Local Address:Port  Process\ntcp   LISTEN 0.0.0.0:22          users:((\"sshd\",pid=812))\ntcp   LISTEN 0.0.0.0:80          users:((\"nginx\",pid=1290))"}
]});

PRACTICA("copias-imagenes", 3, {title:"Práctica: hacer copias", os:"linux", host:"servidor", steps:[
  {t:"Crea una copia comprimida de <code>/home</code> en <code>/backup/home.tar.gz</code>.", s:"tar -czf /backup/home.tar.gz /home", c:[sudo+"tar -(czf|czvf|zcf|cvzf|zcvf) /backup/home\\.tar\\.gz /home/?"], out:"tar: Eliminando la `/' inicial de los nombres", tip:"tar con c (crear), z (comprimir) y f (archivo)."},
  {t:"Sincroniza <code>/datos/</code> con <code>/mnt/backup/datos/</code>, borrando en el destino lo que ya no esté en el origen.", s:"rsync -av --delete /datos/ /mnt/backup/datos/", c:[sudo+"rsync -(av|avz|azv|va) --delete /datos/ /mnt/backup/datos/?"], out:"sending incremental file list\ninformes/marzo.ods\n\nsent 18.234 bytes  received 54 bytes"}
]});
CMDQ("copias-imagenes", [
  {q:"En Windows, escribe el comando que hace un espejo de C:\\Datos en E:\\Backup\\Datos.", os:"cmd", s:"robocopy C:\\Datos E:\\Backup\\Datos /MIR", c:["robocopy c:\\\\datos e:\\\\backup\\\\datos /mir( /r:\\d+)?( /w:\\d+)?"], out:"               Total    Copiado   Omitido\n   Archivos :   1204        12      1192", e:"/MIR deja el destino igual que el origen, borrados incluidos. Por eso conviene combinarlo con copias versionadas."}
]);

/* ===================== Servicios de red en Linux y Windows ===================== */
PRACTICA("servidor-web", 2, {title:"Práctica: publicar un sitio con Apache", os:"linux", host:"servidor", steps:[
  {t:"Comprueba que la configuración de Apache no tiene errores.", s:"sudo apachectl configtest", c:[sudo+"(apachectl|apache2ctl) (configtest|-t)"], out:"Syntax OK"},
  {t:"Activa el sitio <code>tienda.conf</code>.", s:"sudo a2ensite tienda.conf", c:["sudo a2ensite tienda(\\.conf)?"], out:"Enabling site tienda.\nTo activate the new configuration, you need to run:\n  systemctl reload apache2"},
  {t:"Recarga Apache para aplicar el cambio sin cortar las conexiones.", s:"sudo systemctl reload apache2", out:""},
  {t:"Pide un certificado HTTPS gratuito para <code>tienda.ejemplo.com</code>.", s:"sudo certbot --apache -d tienda.ejemplo.com", out:"Successfully received certificate.\nCongratulations! You have successfully enabled HTTPS on https://tienda.ejemplo.com"}
]});
PRACTICA("servidor-web", 4, {title:"Práctica: la web en un contenedor", os:"linux", host:"servidor", steps:[
  {t:"Construye la imagen <code>miweb</code> con el Dockerfile de la carpeta actual.", s:"docker build -t miweb .", c:[sudo+"docker build -t miweb \\."], out:"[+] Building 4.2s (7/7) FINISHED\n => naming to docker.io/library/miweb", tip:"No olvides el punto final: es la carpeta del Dockerfile."},
  {t:"Arráncala en segundo plano, con el puerto 8080 del servidor apuntando al 80 del contenedor.", s:"docker run -d -p 8080:80 miweb", c:[sudo+"docker run (-d -p 8080:80|-p 8080:80 -d|-dp 8080:80) miweb"], out:"3f9a1c7e52b0d4e8a6c1f2b3d9e7a5c4b8f0e1d2c3a4b5c6d7e8f9a0b1c2d3e4"},
  {t:"Comprueba que el contenedor está en marcha.", s:"docker ps", c:[sudo+"docker ps"], out:"CONTAINER ID   IMAGE   STATUS          PORTS\n3f9a1c7e52b0   miweb   Up 5 seconds    0.0.0.0:8080->80/tcp"}
]});
CMDQ("servidor-web", [
  {q:"Has cambiado la configuración de nginx. Escribe el comando que comprueba que no tiene errores.", os:"linux", s:"sudo nginx -t", c:[sudo+"nginx -t"], out:"nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful", e:"Comprobar antes de recargar evita dejar la web caída por un error de sintaxis."}
]);

PRACTICA("cortafuegos", 1, {title:"Práctica: cortafuegos con ufw", os:"linux", host:"servidor", steps:[
  {t:"Bloquea por defecto todo lo que entra.", s:"sudo ufw default deny incoming", out:"Default incoming policy changed to 'deny'"},
  {t:"Permite por defecto todo lo que sale.", s:"sudo ufw default allow outgoing", out:"Default outgoing policy changed to 'allow'"},
  {t:"Permite SSH (puerto 22, TCP) solo desde la red <code>192.168.1.0/24</code>.", s:"sudo ufw allow from 192.168.1.0/24 to any port 22 proto tcp", out:"Rule added", tip:"ufw allow from RED to any port PUERTO proto tcp"},
  {t:"Permite HTTPS (puerto 443, TCP) desde cualquier sitio.", s:"sudo ufw allow 443/tcp", c:["sudo ufw allow (443/tcp|https)"], out:"Rule added\nRule added (v6)"},
  {t:"Activa el cortafuegos.", s:"sudo ufw enable", out:"Firewall is active and enabled on system startup"},
  {t:"Lista las reglas numeradas.", s:"sudo ufw status numbered", out:"     To                         Action      From\n     --                         ------      ----\n[ 1] 22/tcp                     ALLOW IN    192.168.1.0/24\n[ 2] 443/tcp                    ALLOW IN    Anywhere"}
]});

PRACTICA("dominios", 3, {title:"Práctica: aplicar directivas de grupo", os:"cmd", steps:[
  {t:"Has creado una GPO nueva. Fuerza que el equipo la aplique ya, sin esperar.", s:"gpupdate /force", out:"Actualizando directiva...\nLa actualización de la directiva de equipo se completó correctamente.\nLa actualización de la directiva de usuario se completó correctamente."},
  {t:"Comprueba qué directivas se han aplicado al usuario y al equipo.", s:"gpresult /r", out:"CONFIGURACIÓN DEL USUARIO\n    Objetos de directiva de grupo aplicados\n    -----------------------------------------\n        Unidades de red Contabilidad\n        Directiva predeterminada de dominio"}
]});

PRACTICA("samba-integracion", 0, {title:"Práctica: compartir una carpeta con Samba", os:"linux", host:"servidor", steps:[
  {t:"Da de alta a <code>ana</code> como usuaria de Samba.", s:"sudo smbpasswd -a ana", out:"New SMB password:\nRetype new SMB password:\nAdded user ana."},
  {t:"Reinicia el servicio de Samba para aplicar el nuevo recurso <code>[comun]</code>.", s:"sudo systemctl restart smbd", c:["sudo systemctl restart smbd(\\.service)?"], out:""}
]});
PRACTICA("samba-integracion", 1, {title:"Práctica: acceder desde Linux a Windows", os:"linux", host:"pc", steps:[
  {t:"Lista los recursos compartidos de <code>//servidor</code> con el usuario <code>ana</code>.", s:"smbclient -L //servidor -U ana", out:"\tSharename       Type      Comment\n\t---------       ----      -------\n\tComun           Disk\n\tADMIN$          Disk      Admin remota"},
  {t:"Monta <code>//servidor/Comun</code> en <code>/mnt/comun</code> como <code>ana</code> del dominio <code>EMPRESA</code>.", s:"sudo mount -t cifs //servidor/Comun /mnt/comun -o username=ana,domain=EMPRESA", c:["sudo mount -t cifs //servidor/[Cc]omun /mnt/comun/? -o (username=ana,domain=(EMPRESA|empresa)|domain=(EMPRESA|empresa),username=ana|user=ana,domain=(EMPRESA|empresa))"], out:"Password for ana@//servidor/Comun:"}
]});

PRACTICA("directivas-auditoria", 3, {title:"Práctica: ¿quién ha entrado?", os:"linux", host:"servidor", steps:[
  {t:"Muestra los últimos inicios de sesión correctos.", s:"last", out:"luis   pts/0   192.168.1.37  Tue Nov 17 09:02   still logged in\nana    pts/1   192.168.1.52  Mon Nov 16 17:40 - 18:15  (00:35)"},
  {t:"Muestra ahora los intentos fallidos (necesita permisos de administrador).", s:"sudo lastb", out:"root   ssh:notty  185.220.101.4  Tue Nov 17 04:11 - 04:11  (00:00)\nadmin  ssh:notty  185.220.101.4  Tue Nov 17 04:11 - 04:11  (00:00)"}
]});

PRACTICA("proxy", 1, {title:"Práctica: comprobar el proxy", os:"linux", host:"proxy", steps:[
  {t:"Tras editar <code>squid.conf</code>, reinicia el servicio <code>squid</code>.", s:"sudo systemctl restart squid", c:["sudo systemctl (restart|reload) squid(\\.service)?"], out:""},
  {t:"Sigue en directo el registro de accesos <code>/var/log/squid/access.log</code>.", s:"sudo tail -f /var/log/squid/access.log", c:[sudo+"tail -f /var/log/squid/access\\.log"], out:"1763380261.402  12 192.168.1.37 TCP_DENIED/403 3921 GET http://juegos.example/ - HIER_NONE/- text/html\n1763380263.118  48 192.168.1.37 TCP_MISS/200 18233 GET http://www.boe.es/ - HIER_DIRECT/185.13.207.4 text/html", tip:"tail con la opción que sigue el archivo en directo."}
]});

/* ===================== Git ===================== */
PRACTICA("entornos", 2, {title:"Práctica: tu primer repositorio", os:"git", steps:[
  {t:"Convierte la carpeta actual en un repositorio de Git.", s:"git init", out:"Inicializado repositorio Git vacío en /home/alumno/proyecto/.git/"},
  {t:"Prepara todos los cambios de la carpeta para el siguiente commit.", s:"git add .", c:["git add (\\.|-A|--all)"], out:""},
  {t:"Guarda los cambios en el historial con el mensaje <code>Primera versión</code>.", s:"git commit -m \"Primera versión\"", c:["git commit -m (\"[^\"]+\"|'[^']+')"], out:"[main (commit-raíz) 4e1a2b9] Primera versión\n 3 files changed, 42 insertions(+)", tip:"git commit -m y el mensaje entre comillas."},
  {t:"Crea una rama llamada <code>login</code>.", s:"git branch login", out:""},
  {t:"Cámbiate a esa rama.", s:"git switch login", c:["git (switch|checkout) login"], out:"Cambiado a rama 'login'"},
  {t:"Vuelve a <code>main</code>.", s:"git switch main", c:["git (switch|checkout) main"], out:"Cambiado a rama 'main'"},
  {t:"Une a <code>main</code> los cambios de la rama <code>login</code>.", s:"git merge login", out:"Actualizando 4e1a2b9..9c3d7f1\nFast-forward\n login.html | 18 ++++++++++++++++++"}
]});
CMDQ("entornos", [
  {q:"Escribe el comando que descarga a tu equipo los cambios que tus compañeros han subido al repositorio remoto.", os:"git", s:"git pull", c:["git pull( origin main)?"], out:"Actualizando 9c3d7f1..b72e0aa\nFast-forward\n css/estilos.css | 6 +++---", e:"git pull trae los cambios del remoto y los une a tu rama. git push hace lo contrario: sube los tuyos."}
]);

/* ===================== SQL ===================== */
PRACTICA("bd-sql", 3, {title:"Práctica: insertar, modificar y borrar", os:"sql", steps:[
  {t:"Inserta en <code>alumnos</code> a <code>Marc</code> con el email <code>marc@correo.es</code> (columnas <code>nombre</code> y <code>email</code>).", s:"INSERT INTO alumnos (nombre, email) VALUES ('Marc', 'marc@correo.es');", out:"Query OK, 1 row affected (0,01 sec)", tip:"INSERT INTO tabla (columnas) VALUES (valores);"},
  {t:"Cambia el email del alumno con <code>id_alumno</code> 4 a <code>marc@nuevo.es</code>.", s:"UPDATE alumnos SET email = 'marc@nuevo.es' WHERE id_alumno = 4;", out:"Query OK, 1 row affected (0,00 sec)\nRows matched: 1  Changed: 1  Warnings: 0", tip:"No olvides el WHERE: sin él cambiarías todas las filas."},
  {t:"Borra el alumno con <code>id_alumno</code> 4.", s:"DELETE FROM alumnos WHERE id_alumno = 4;", out:"Query OK, 1 row affected (0,01 sec)"}
]});
PRACTICA("bd-sql", 4, {title:"Práctica: consultas", os:"sql", steps:[
  {t:"Muestra todas las columnas y filas de la tabla <code>alumnos</code>.", s:"SELECT * FROM alumnos;", out:"+-----------+-------+-----------------+------------+\n| id_alumno | nombre| email           | fecha_nac  |\n+-----------+-------+-----------------+------------+\n|         1 | Ana   | ana@correo.es   | 2005-03-14 |\n|         2 | Laia  | laia@correo.es  | 2006-07-02 |\n|         3 | Adrià | adria@correo.es | 2004-11-30 |\n+-----------+-------+-----------------+------------+\n3 rows in set (0,00 sec)"},
  {t:"Muestra <code>nombre</code> y <code>email</code> de los alumnos cuyo nombre empieza por A, ordenados por nombre.", s:"SELECT nombre, email FROM alumnos WHERE nombre LIKE 'A%' ORDER BY nombre;", alt:["SELECT nombre, email FROM alumnos WHERE nombre LIKE 'A%' ORDER BY nombre ASC;"], out:"+-------+-----------------+\n| nombre| email           |\n+-------+-----------------+\n| Adrià | adria@correo.es |\n| Ana   | ana@correo.es   |\n+-------+-----------------+\n2 rows in set (0,00 sec)", tip:"WHERE nombre LIKE 'A%' y después ORDER BY nombre."},
  {t:"Cuenta cuántos alumnos hay. Usa <code>COUNT(*)</code>.", s:"SELECT COUNT(*) FROM alumnos;", out:"+----------+\n| COUNT(*) |\n+----------+\n|        3 |\n+----------+"}
]});

PRACTICA("sql-avanzado", 3, {title:"Práctica: una transferencia segura", os:"sql", steps:[
  {t:"Empieza una transacción.", s:"START TRANSACTION;", alt:["BEGIN;"], out:"Query OK, 0 rows affected (0,00 sec)"},
  {t:"Resta 100 al <code>saldo</code> de la cuenta con <code>id</code> 1.", s:"UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;", out:"Query OK, 1 row affected (0,00 sec)"},
  {t:"Suma 100 al <code>saldo</code> de la cuenta con <code>id</code> 2.", s:"UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;", out:"Query OK, 1 row affected (0,00 sec)"},
  {t:"Todo ha ido bien: confirma los cambios.", s:"COMMIT;", out:"Query OK, 0 rows affected (0,01 sec)"}
]});

PRACTICA("admin-sgbd", 1, {title:"Práctica: un usuario para la aplicación", os:"sql", steps:[
  {t:"Crea el usuario <code>'tienda_app'@'localhost'</code> con la contraseña <code>Clave-2026</code>.", s:"CREATE USER 'tienda_app'@'localhost' IDENTIFIED BY 'Clave-2026';", out:"Query OK, 0 rows affected (0,02 sec)"},
  {t:"Dale permisos de <code>SELECT, INSERT, UPDATE, DELETE</code> sobre todas las tablas de <code>tienda</code>.", s:"GRANT SELECT, INSERT, UPDATE, DELETE ON tienda.* TO 'tienda_app'@'localhost';", out:"Query OK, 0 rows affected (0,01 sec)"},
  {t:"Comprueba qué permisos tiene.", s:"SHOW GRANTS FOR 'tienda_app'@'localhost';", out:"+--------------------------------------------------------------------------------+\n| Grants for tienda_app@localhost                                                 |\n+--------------------------------------------------------------------------------+\n| GRANT USAGE ON *.* TO `tienda_app`@`localhost`                                  |\n| GRANT SELECT, INSERT, UPDATE, DELETE ON `tienda`.* TO `tienda_app`@`localhost`  |\n+--------------------------------------------------------------------------------+"},
  {t:"Quítale el permiso de <code>DELETE</code>.", s:"REVOKE DELETE ON tienda.* FROM 'tienda_app'@'localhost';", out:"Query OK, 0 rows affected (0,01 sec)"}
]});
PRACTICA("admin-sgbd", 2, {title:"Práctica: copia y restauración", os:"linux", host:"bd", steps:[
  {t:"Haz una copia de la base de datos <code>tienda</code> en el archivo <code>tienda.sql</code> como <code>root</code>.", s:"mysqldump -u root -p tienda > tienda.sql", c:[sudo+"mysqldump -u ?root -p tienda > tienda\\.sql"], out:"Enter password:"},
  {t:"Restaura esa copia en la base de datos <code>tienda</code>.", s:"mysql -u root -p tienda < tienda.sql", c:[sudo+"mysql -u ?root -p tienda < tienda\\.sql"], out:"Enter password:", tip:"Para restaurar se usa mysql y se redirige el archivo hacia dentro con <."}
]});

PRACTICA("seguridad-datos", 0, {title:"Práctica: permisos mínimos", os:"sql", steps:[
  {t:"Permite a <code>'contable'@'192.168.1.%'</code> consultar e insertar en <code>empresa.facturas</code>.", s:"GRANT SELECT, INSERT ON empresa.facturas TO 'contable'@'192.168.1.%';", out:"Query OK, 0 rows affected (0,01 sec)"},
  {t:"Permítele ver solo las columnas <code>nombre</code> y <code>email</code> de <code>empresa.clientes</code>.", s:"GRANT SELECT (nombre, email) ON empresa.clientes TO 'contable'@'192.168.1.%';", out:"Query OK, 0 rows affected (0,01 sec)", tip:"Las columnas van entre paréntesis justo después de SELECT."},
  {t:"Quítale el permiso de insertar facturas.", s:"REVOKE INSERT ON empresa.facturas FROM 'contable'@'192.168.1.%';", out:"Query OK, 0 rows affected (0,00 sec)"}
]});

PRACTICA("optimizacion-bd", 1, {title:"Práctica: acelerar una consulta", os:"sql", steps:[
  {t:"Mira cómo ejecuta MySQL esta consulta: <code>SELECT * FROM pedidos WHERE id_cliente = 25;</code> Ponle <code>EXPLAIN</code> delante.", s:"EXPLAIN SELECT * FROM pedidos WHERE id_cliente = 25;", out:"+----+-------------+---------+------+---------------+------+--------+-------------+\n| id | select_type | table   | type | possible_keys | key  | rows   | Extra       |\n+----+-------------+---------+------+---------------+------+--------+-------------+\n|  1 | SIMPLE      | pedidos | ALL  | NULL          | NULL | 482113 | Using where |\n+----+-------------+---------+------+---------------+------+--------+-------------+"},
  {t:"<code>type ALL</code>: recorre las 482.113 filas. Crea el índice <code>idx_cliente</code> sobre <code>id_cliente</code>.", s:"CREATE INDEX idx_cliente ON pedidos(id_cliente);", out:"Query OK, 0 rows affected (2,84 sec)"},
  {t:"Repite el <code>EXPLAIN</code> para ver la diferencia.", s:"EXPLAIN SELECT * FROM pedidos WHERE id_cliente = 25;", out:"| id | select_type | table   | type | possible_keys | key         | rows | Extra |\n|  1 | SIMPLE      | pedidos | ref  | idx_cliente   | idx_cliente |   37 | NULL  |"}
]});

PRACTICA("replicacion-bd", 0, {title:"Práctica: arrancar la réplica", os:"sql", steps:[
  {t:"En la réplica, arranca la replicación.", s:"START REPLICA;", alt:["START SLAVE;"], out:"Query OK, 0 rows affected (0,01 sec)"},
  {t:"Comprueba su estado en formato vertical.", s:"SHOW REPLICA STATUS\\G", alt:["SHOW SLAVE STATUS\\G","SHOW REPLICA STATUS;"], out:"*************************** 1. row ***************************\n             Source_Host: 10.0.0.10\n      Replica_IO_Running: Yes\n     Replica_SQL_Running: Yes\n   Seconds_Behind_Source: 0"}
]});
