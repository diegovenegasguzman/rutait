TEMA("programacion-segura", {
 "title": "Programación segura",
 "mins": 13,
 "intro": "Las vulnerabilidades más comunes que se cuelan en el código y cómo evitarlas: validación, inyecciones, gestión de contraseñas y secretos, criptografía en Java y dependencias.",
 "sections": [
  {
   "h": "Las vulnerabilidades más frecuentes",
   "html": "\n<p>El proyecto <b>OWASP Top 10</b> recoge los riesgos más habituales en aplicaciones:</p>\n<table>\n<tr><th>Riesgo</th><th>Cómo evitarlo</th></tr>\n<tr><td>Control de acceso roto</td><td>Comprobar en el servidor que el usuario puede hacer cada acción con cada recurso</td></tr>\n<tr><td>Fallos criptográficos</td><td>HTTPS, algoritmos actuales, contraseñas con hash adecuado</td></tr>\n<tr><td>Inyección (SQL, comandos)</td><td>Consultas preparadas, argumentos separados, validar entradas</td></tr>\n<tr><td>Configuración insegura</td><td>Quitar valores por defecto, no mostrar trazas de error al usuario</td></tr>\n<tr><td>Componentes vulnerables</td><td>Mantener las dependencias actualizadas</td></tr>\n<tr><td>Fallos de autenticación</td><td>Limitar intentos, MFA, sesiones seguras</td></tr>\n</table>"
  },
  {
   "h": "Validar y gestionar secretos",
   "html": "\n<p>La mayoría de ataques llegan por datos que el programa acepta sin comprobar o por secretos mal guardados.</p>\n<ul>\n<li><b>Nunca confíes en la entrada:</b> valida tipo, longitud, formato y rango en el servidor. Mejor una <b>lista blanca</b> (lo permitido) que una lista negra.</li>\n<li><b>Contraseñas:</b> nunca se guardan ni se cifran de forma reversible; se guarda un <b>hash</b> lento con sal (bcrypt, Argon2, PBKDF2).</li>\n<li><b>Secretos</b> (contraseñas de BD, claves de API): fuera del código y del repositorio, en variables de entorno o gestores de secretos.</li>\n<li><b>Mínimo privilegio:</b> el programa se ejecuta con los permisos justos.</li>\n</ul>\n<pre><code><span class=\"c\">// Generar un token aleatorio seguro</span>\nSecureRandom rnd = <span class=\"k\">new</span> SecureRandom();\n<span class=\"k\">byte</span>[] b = <span class=\"k\">new byte</span>[<span class=\"s\">32</span>];\nrnd.nextBytes(b);\nString token = Base64.getUrlEncoder().withoutPadding().encodeToString(b);</code></pre>\n<p>Para valores de seguridad se usa <code>SecureRandom</code>, nunca <code>Math.random()</code> ni <code>Random</code>, que son predecibles.</p>",
   "check": {
    "q": "¿Qué clase de Java debe usarse para generar tokens o claves aleatorias?",
    "o": [
     "Math.random()",
     "Random",
     "SecureRandom",
     "UUID con semilla fija"
    ],
    "a": 2,
    "e": "Las otras son predecibles y un atacante podría adivinar los valores."
   }
  },
  {
   "h": "Criptografía en Java y dependencias",
   "html": "\n<p>Java incluye su propia caja de herramientas criptográficas. Y la seguridad de un programa también depende de las librerías que usa.</p>\n<ul>\n<li>La <b>JCA</b> (Java Cryptography Architecture) ofrece <code>MessageDigest</code> (hash SHA-256), <code>Cipher</code> (AES), <code>Signature</code> (firmas) y <code>KeyStore</code> (almacén de claves y certificados).</li>\n<li>Cifrado simétrico recomendado: <b>AES-GCM</b>, que además detecta modificaciones. Nunca ECB.</li>\n<li>No inventes tu propia criptografía: usa librerías probadas.</li>\n<li><b>Dependencias:</b> revísalas con herramientas como OWASP Dependency-Check o Dependabot, que avisan de librerías con vulnerabilidades conocidas.</li>\n</ul>\n<div class=\"caso\"><b>Caso real</b>Un desarrollador sube a un repositorio público de GitHub un archivo de configuración con la contraseña de la base de datos de producción. En minutos, bots automáticos la encuentran. Por eso los secretos nunca van en el código.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué es el OWASP Top 10?",
   "o": [
    "Un ranking de lenguajes",
    "La lista de los riesgos de seguridad más comunes en aplicaciones",
    "Un antivirus",
    "Un framework"
   ],
   "a": 1,
   "e": "Es la referencia básica de seguridad en desarrollo."
  },
  {
   "q": "¿Cómo se guardan las contraseñas de los usuarios?",
   "o": [
    "Cifradas con AES",
    "Con un hash lento con sal (bcrypt, Argon2)",
    "En texto plano",
    "En Base64"
   ],
   "a": 1,
   "e": "Base64 no es cifrado: se decodifica directamente."
  },
  {
   "q": "¿Qué es mejor para validar entradas?",
   "o": [
    "Lista negra de lo prohibido",
    "Lista blanca de lo permitido",
    "No validar",
    "Validar solo en el navegador"
   ],
   "a": 1,
   "e": "Es imposible prever todo lo malicioso; es más seguro definir lo válido."
  },
  {
   "q": "¿Dónde deben guardarse las contraseñas de la base de datos de la aplicación?",
   "o": [
    "En el código",
    "En variables de entorno o un gestor de secretos",
    "En el README",
    "En un comentario"
   ],
   "a": 1,
   "e": "Nunca en el repositorio."
  },
  {
   "q": "¿Qué modo de cifrado AES es el recomendado?",
   "o": [
    "ECB",
    "GCM",
    "Ninguno",
    "CBC sin IV"
   ],
   "a": 1,
   "e": "AES-GCM cifra y además detecta modificaciones."
  },
  {
   "q": "¿Qué herramientas avisan de dependencias con vulnerabilidades conocidas?",
   "o": [
    "Dependency-Check o Dependabot",
    "Paint",
    "JUnit",
    "Scene Builder"
   ],
   "a": 0,
   "e": "Mantener las librerías actualizadas es parte de la seguridad."
  }
 ]
});
