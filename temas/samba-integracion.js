TEMA("samba-integracion", {
title:"Integrar sistemas libres y propietarios", mins:12,
intro:"Cómo conviven Windows y Linux en la misma red: compartir carpetas con Samba, montar recursos de Windows en Linux, unir Linux a un dominio y otros puntos de encuentro.",
sections:[
{h:"Samba: Linux hablando como Windows", html:`
<p>Windows comparte archivos e impresoras con el protocolo <b>SMB/CIFS</b>. <b>Samba</b> implementa ese protocolo en Linux, así que un servidor Linux puede ofrecer carpetas que los Windows abren como cualquier otra unidad de red.</p>
<pre><code><span class="c"># /etc/samba/smb.conf</span>
[comun]
   path = /srv/comun
   read only = no
   valid users = @empleados

sudo smbpasswd -a ana          <span class="c"># dar de alta a ana en Samba</span>
sudo systemctl restart smbd</code></pre>
<p>Desde Windows se accede con <code>\\\\servidor-linux\\comun</code>. Samba puede incluso actuar como <b>controlador de dominio</b> compatible con Active Directory.</p>`},
{h:"Acceder a Windows desde Linux", html:`
<pre><code><span class="c"># Montar una carpeta compartida de Windows</span>
sudo mount -t cifs //servidor/Comun /mnt/comun -o username=ana,domain=EMPRESA

<span class="c"># Explorar recursos sin montar</span>
smbclient -L //servidor -U ana</code></pre>
<p>Para unir un Linux al dominio de Active Directory se usan <b>realmd</b> y <b>SSSD</b>: <code>realm join empresa.local -U administrador</code>. Después, los usuarios del dominio pueden iniciar sesión en el Linux con sus credenciales.</p>`,
check:{q:"¿Qué protocolo usa Windows para compartir carpetas e impresoras?", o:["NFS","SMB/CIFS","FTP","HTTP"], a:1, e:"Samba implementa SMB en Linux; NFS es el equivalente nativo de Unix."}},
{h:"Otros puntos de integración", html:`
<ul>
<li><b>NFS:</b> compartición de archivos nativa de Unix/Linux; Windows también puede montarla con el cliente NFS.</li>
<li><b>WSL</b> (Subsistema de Windows para Linux): ejecutar Linux dentro de Windows.</li>
<li><b>OpenSSH</b> viene incluido en Windows: puedes administrar Linux desde PowerShell con <code>ssh</code>, y Windows por SSH desde Linux.</li>
<li><b>Formatos abiertos:</b> ODF, PDF o CSV facilitan el intercambio de documentos entre plataformas.</li>
</ul>
<div class="caso"><b>Caso real</b>Una empresa con servidores Linux y puestos Windows centraliza los usuarios en Active Directory y une los Linux con SSSD. Cada empleado usa la misma contraseña en todo y, al irse, se desactiva en un solo sitio.</div>`}
],
quiz:[
{q:"¿Qué es Samba?", o:["Un antivirus","Una implementación de SMB/CIFS para Linux","Un navegador","Un tipo de RAID"], a:1, e:"Permite a Linux compartir recursos con Windows."},
{q:"¿En qué archivo se configura Samba?", o:["/etc/fstab","/etc/samba/smb.conf","/etc/hosts","/etc/passwd"], a:1, e:"Cada recurso compartido es una sección entre corchetes."},
{q:"¿Qué comando da de alta un usuario en Samba?", o:["useradd","smbpasswd -a","passwd","adduser -samba"], a:1, e:"Samba mantiene su propia base de contraseñas."},
{q:"¿Con qué tipo de sistema de archivos se monta una carpeta de Windows en Linux?", o:["ext4","cifs","ntfs","nfs"], a:1, e:"mount -t cifs //servidor/recurso /punto."},
{q:"¿Qué comando une un Linux a un dominio de Active Directory?", o:["realm join","net use","gpupdate","dcpromo"], a:0, e:"realmd configura SSSD y Kerberos automáticamente."},
{q:"¿Qué es NFS?", o:["El sistema de compartición de archivos nativo de Unix/Linux","Un formato de vídeo","Un protocolo de correo","Un antivirus"], a:0, e:"Network File System."}
]});
