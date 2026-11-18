TEMA("seguridad", {
 "title": "Fundamentos de seguridad informática",
 "mins": 14,
 "intro": "Qué significa que un sistema sea seguro, qué amenazas existen, cómo actúa el malware y qué medidas protegen de verdad los datos de una organización.",
 "sections": [
  {
   "h": "Los tres pilares: CIA",
   "html": "\n      <p>La seguridad de la información se basa en tres propiedades, conocidas por sus siglas en inglés (<b>CIA</b>):</p>\n      <table>\n        <tr><th>Propiedad</th><th>Significa</th><th>Se rompe si…</th></tr>\n        <tr><td>Confidencialidad</td><td>Solo acceden a los datos las personas autorizadas</td><td>Se filtra una base de datos de clientes</td></tr>\n        <tr><td>Integridad</td><td>Los datos no se modifican sin autorización</td><td>Alguien cambia el importe de una factura</td></tr>\n        <tr><td>Disponibilidad</td><td>Los datos y servicios funcionan cuando se necesitan</td><td>Un ataque DDoS tira la web de la empresa</td></tr>\n      </table>\n      <p>A menudo se añaden la <b>autenticación</b> (comprobar quién eres) y el <b>no repudio</b> (que nadie pueda negar haber hecho algo, por ejemplo mediante la firma digital).</p>"
  },
  {
   "h": "Amenaza, vulnerabilidad y riesgo",
   "html": "\n<p>Para hablar de seguridad con precisión se usan tres conceptos distintos que a menudo se confunden.</p>\n<ul>\n        <li><b>Vulnerabilidad:</b> una debilidad del sistema. Por ejemplo, un servidor sin actualizar.</li>\n        <li><b>Amenaza:</b> algo que puede aprovechar esa debilidad: un atacante, un virus, un incendio…</li>\n        <li><b>Riesgo:</b> la probabilidad de que la amenaza ocurra multiplicada por el daño que causaría.</li>\n      </ul>\n      <p>No existe la seguridad absoluta. El objetivo es reducir el riesgo a un nivel aceptable con un coste razonable.</p>"
  },
  {
   "h": "Tipos de malware",
   "html": "\n<p>Malware es cualquier programa hecho para dañar o robar. Se clasifica según cómo se propaga y qué hace.</p>\n<table>\n        <tr><th>Tipo</th><th>Cómo actúa</th></tr>\n        <tr><td>Virus</td><td>Se adjunta a otros archivos y se activa al abrirlos.</td></tr>\n        <tr><td>Gusano</td><td>Se propaga solo por la red, sin intervención del usuario.</td></tr>\n        <tr><td>Troyano</td><td>Se hace pasar por un programa legítimo y abre una puerta al atacante.</td></tr>\n        <tr><td>Ransomware</td><td>Cifra los archivos y pide un rescate para recuperarlos.</td></tr>\n        <tr><td>Spyware</td><td>Espía la actividad del usuario y roba datos.</td></tr>\n        <tr><td>Keylogger</td><td>Registra las teclas pulsadas para robar contraseñas.</td></tr>\n      </table>"
  },
  {
   "h": "Ingeniería social",
   "html": "\n      <p>Es el ataque más habitual: en lugar de atacar el sistema, se engaña a la persona.</p>\n      <ul>\n        <li><b>Phishing:</b> un correo que imita a un banco, a una empresa o al propio departamento de IT para que introduzcas tus credenciales en una web falsa.</li>\n        <li><b>Vishing y smishing:</b> lo mismo, pero por teléfono o por SMS.</li>\n        <li><b>Señales de alerta:</b> urgencia («tu cuenta se bloqueará en 24 h»), un remitente que no coincide con la empresa, enlaces que llevan a dominios extraños y peticiones de contraseñas. Ningún departamento de IT legítimo te pedirá tu contraseña.</li>\n      </ul>"
  },
  {
   "h": "Medidas de protección",
   "html": "\n      <p>Las medidas se clasifican de dos formas:</p>\n      <ul>\n        <li><b>Físicas</b> (puertas, SAI, extintores) o <b>lógicas</b> (contraseñas, cortafuegos, antivirus, cifrado).</li>\n        <li><b>Activas</b>, que evitan el incidente (cortafuegos, actualizaciones, contraseñas), o <b>pasivas</b>, que reducen el daño cuando ya ha ocurrido (copias de seguridad, planes de recuperación).</li>\n      </ul>\n      <p><b>Regla 3-2-1 de copias de seguridad:</b> 3 copias de los datos, en 2 soportes distintos, con 1 de ellas fuera de la organización. Es lo que permite recuperarse de un ransomware sin pagar.</p>\n      <p><b>Autenticación multifactor (MFA):</b> combina algo que sabes (contraseña), algo que tienes (móvil, llave física) y algo que eres (huella). Aunque roben la contraseña, el atacante no puede entrar sin el segundo factor.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué tipo de malware cifra tus archivos y pide dinero para recuperarlos?",
   "o": [
    "Spyware",
    "Gusano",
    "Ransomware",
    "Keylogger"
   ],
   "a": 2,
   "e": "El ransomware secuestra los datos cifrándolos y exige un rescate."
  },
  {
   "q": "¿Qué malware se propaga solo por la red, sin que el usuario haga nada?",
   "o": [
    "Virus",
    "Gusano",
    "Troyano",
    "Adware"
   ],
   "a": 1,
   "e": "El gusano se replica y se extiende por la red de forma autónoma."
  },
  {
   "q": "¿Qué dice la regla 3-2-1?",
   "o": [
    "3 contraseñas, 2 usuarios y 1 administrador",
    "3 copias, en 2 soportes distintos y 1 fuera de la organización",
    "3 antivirus, 2 cortafuegos y 1 VPN",
    "Cambiar la contraseña cada 3 meses"
   ],
   "a": 1,
   "e": "Es la regla básica para que las copias sobrevivan a cualquier desastre."
  },
  {
   "q": "Un ataque DDoS deja la web de una empresa sin servicio. ¿Qué pilar se ha visto afectado?",
   "o": [
    "Confidencialidad",
    "Integridad",
    "Disponibilidad",
    "No repudio"
   ],
   "a": 2,
   "e": "El servicio no está disponible cuando se necesita."
  },
  {
   "q": "Recibes un correo de «IT» pidiéndote la contraseña para «verificar tu cuenta». ¿Qué es?",
   "o": [
    "Un procedimiento normal",
    "Phishing",
    "Una actualización",
    "Un aviso del antivirus"
   ],
   "a": 1,
   "e": "Es ingeniería social. Ningún departamento de IT legítimo pide contraseñas."
  },
  {
   "q": "¿Qué aporta la autenticación multifactor?",
   "o": [
    "Que no haga falta contraseña",
    "Que, aunque roben la contraseña, se necesite otro factor para entrar",
    "Cifrar el disco duro",
    "Hacer copias automáticas"
   ],
   "a": 1,
   "e": "MFA añade un segundo factor: algo que tienes o algo que eres."
  },
  {
   "q": "Alguien modifica el importe de una factura sin autorización. ¿Qué pilar se rompe?",
   "o": [
    "Integridad",
    "Disponibilidad",
    "Confidencialidad",
    "Autenticación"
   ],
   "a": 0,
   "e": "La integridad garantiza que los datos no se alteren sin autorización."
  },
  {
   "q": "Una copia de seguridad es una medida…",
   "o": [
    "Activa",
    "Pasiva",
    "Física",
    "De ingeniería social"
   ],
   "a": 1,
   "e": "No evita el incidente, pero reduce el daño cuando ocurre: es pasiva."
  }
 ]
});
