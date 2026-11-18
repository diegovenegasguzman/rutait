TEMA("privacidad-cifrado", {
 "title": "Criptografía: cifrado, firma y certificados",
 "mins": 15,
 "intro": "Las herramientas que protegen la privacidad de la información: cifrado simétrico y asimétrico, funciones hash, firma digital y certificados, con ejemplos que usas cada día.",
 "sections": [
  {
   "h": "Cifrado simétrico y asimétrico",
   "html": "\n<p>Cifrar es transformar un mensaje para que solo lo lea quien tiene la clave. Hay dos grandes familias de cifrado, y en la práctica se combinan.</p>\n<table>\n<tr><th></th><th>Simétrico</th><th>Asimétrico</th></tr>\n<tr><td>Claves</td><td>Una sola, compartida</td><td>Un par: pública (se reparte) y privada (no sale de su dueño)</td></tr>\n<tr><td>Velocidad</td><td>Muy rápido</td><td>Lento</td></tr>\n<tr><td>Problema</td><td>Cómo hacer llegar la clave al otro de forma segura</td><td>No sirve para grandes volúmenes de datos</td></tr>\n<tr><td>Ejemplos</td><td>AES, ChaCha20</td><td>RSA, curvas elípticas (ECC)</td></tr>\n</table>\n<p>En la práctica se combinan (<b>cifrado híbrido</b>): con criptografía asimétrica se intercambia de forma segura una clave simétrica, y con esa clave se cifran los datos. Es lo que hace HTTPS en cada conexión.</p>\n<p>Lo que se cifra con la clave <b>pública</b> de alguien solo puede descifrarlo su clave <b>privada</b>.</p>",
   "check": {
    "q": "Quieres enviar un archivo cifrado a Laia para que solo ella pueda abrirlo. ¿Con qué clave lo cifras?",
    "o": [
     "Con tu clave privada",
     "Con la clave pública de Laia",
     "Con la clave privada de Laia",
     "Sin clave"
    ],
    "a": 1,
    "e": "Solo la clave privada de Laia, que solo tiene ella, podrá descifrarlo."
   }
  },
  {
   "h": "Hash y firma digital",
   "html": "\n<p>Una <b>función hash</b> convierte cualquier dato en una huella de tamaño fijo. Si cambia un solo bit del archivo, la huella cambia por completo, y no se puede reconstruir el archivo a partir de ella. Algoritmos actuales: <b>SHA-256</b>, SHA-3. MD5 y SHA-1 se consideran inseguros.</p>\n<pre><code>sha256sum ubuntu.iso                   <span class=\"c\"># Linux</span>\nGet-FileHash ubuntu.iso -Algorithm SHA256   <span class=\"c\"># Windows</span></code></pre>\n<p>La <b>firma digital</b> combina hash y clave privada: se calcula el hash del documento y se cifra con la clave privada del firmante. Cualquiera puede verificarla con su clave pública. Garantiza:</p>\n<ul>\n<li><b>Autenticidad:</b> quién lo firmó.</li>\n<li><b>Integridad:</b> que no se ha modificado.</li>\n<li><b>No repudio:</b> el firmante no puede negar haberlo firmado.</li>\n</ul>"
  },
  {
   "h": "Certificados y uso práctico",
   "html": "\n<p>¿Cómo sé que una clave pública es de verdad de quien dice? Un <b>certificado digital</b> une una clave pública con una identidad, y lo firma una <b>autoridad de certificación (CA)</b> de confianza. Es la base de HTTPS, del DNIe y de los certificados de la FNMT.</p>\n<ul>\n<li><b>Cifrado de disco:</b> BitLocker (Windows), LUKS (Linux), FileVault (macOS). Si roban el portátil, no pueden leer los datos.</li>\n<li><b>Cifrado de archivos o correo:</b> GPG, S/MIME, 7-Zip con AES.</li>\n<li><b>Gestores de contraseñas</b> (Bitwarden, KeePass): una contraseña maestra cifra todas las demás.</li>\n</ul>\n<div class=\"caso\"><b>Caso real</b>Un portátil de empresa con datos de clientes se queda olvidado en un tren. Como tenía BitLocker activado, la pérdida es solo del equipo, no de la información.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Cuántas claves usa el cifrado simétrico?",
   "o": [
    "Una compartida",
    "Un par pública/privada",
    "Ninguna",
    "Tres"
   ],
   "a": 0,
   "e": "La misma clave cifra y descifra."
  },
  {
   "q": "¿Cuál es un algoritmo de cifrado simétrico?",
   "o": [
    "RSA",
    "AES",
    "SHA-256",
    "ECC"
   ],
   "a": 1,
   "e": "RSA y ECC son asimétricos; SHA-256 es un hash."
  },
  {
   "q": "¿Qué hace una función hash?",
   "o": [
    "Cifra y descifra",
    "Genera una huella de tamaño fijo que cambia por completo si cambia el dato",
    "Comprime archivos",
    "Firma correos"
   ],
   "a": 1,
   "e": "Sirve para comprobar la integridad."
  },
  {
   "q": "¿Con qué clave se firma digitalmente un documento?",
   "o": [
    "Con la pública del firmante",
    "Con la privada del firmante",
    "Con la del receptor",
    "Con una simétrica"
   ],
   "a": 1,
   "e": "Cualquiera puede verificar la firma con la clave pública."
  },
  {
   "q": "¿Qué une un certificado digital?",
   "o": [
    "Dos contraseñas",
    "Una clave pública con una identidad, avalado por una CA",
    "Dos discos",
    "Un usuario con un grupo"
   ],
   "a": 1,
   "e": "La CA garantiza que esa clave pertenece a esa persona o web."
  },
  {
   "q": "¿Qué herramienta cifra el disco completo en Windows?",
   "o": [
    "LUKS",
    "BitLocker",
    "GPG",
    "KeePass"
   ],
   "a": 1,
   "e": "En Linux, LUKS."
  }
 ]
});
