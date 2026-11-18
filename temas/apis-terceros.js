TEMA("apis-terceros", {
 "title": "Aplicaciones web híbridas: integrar servicios de terceros",
 "mins": 11,
 "intro": "Cómo enriquecer una aplicación usando servicios externos (mapas, pagos, inicio de sesión con Google, tiempo, correo): consumir sus API desde el servidor, autenticarse y gestionar claves y límites.",
 "sections": [
  {
   "h": "Qué es una aplicación híbrida (mashup)",
   "html": "\n<p>Una aplicación <b>híbrida</b> combina datos y funciones propias con servicios de terceros a través de sus API. Ejemplos:</p>\n<ul>\n<li>Una inmobiliaria que muestra sus pisos en un <b>mapa</b> (OpenStreetMap con Leaflet, Google Maps).</li>\n<li>Una tienda que cobra con <b>Stripe</b>, PayPal o Redsys.</li>\n<li>Inicio de sesión con <b>Google</b> o <b>Microsoft</b> (OAuth 2.0 / OpenID Connect).</li>\n<li>Envío de correos con un servicio transaccional, datos del tiempo, conversión de divisas, traducción…</li>\n</ul>"
  },
  {
   "h": "Consumir una API desde el servidor",
   "html": "\n<pre><code>&lt;?php\n<span class=\"c\">// Con Guzzle (instalado con Composer)</span>\n$cliente = <span class=\"k\">new</span> GuzzleHttp\\Client([<span class=\"s\">'timeout'</span> =&gt; 5]);\n$resp = $cliente-&gt;get(<span class=\"s\">'https://api.ejemplo.com/v1/tiempo'</span>, [\n    <span class=\"s\">'query'</span>   =&gt; [<span class=\"s\">'ciudad'</span> =&gt; <span class=\"s\">'Lleida'</span>],\n    <span class=\"s\">'headers'</span> =&gt; [<span class=\"s\">'Authorization'</span> =&gt; <span class=\"s\">'Bearer '</span> . getenv(<span class=\"s\">'API_TIEMPO_KEY'</span>)],\n]);\n$datos = json_decode($resp-&gt;getBody(), <span class=\"k\">true</span>);</code></pre>\n<ul>\n<li>Las <b>claves de API secretas</b> se usan siempre desde el servidor, nunca en el JavaScript del navegador, donde cualquiera las vería.</li>\n<li>Pon un <b>tiempo máximo</b> de espera y gestiona los errores: si el servicio externo cae, tu web no debe caer con él.</li>\n<li>Usa <b>caché</b> para no repetir peticiones (el tiempo de una ciudad no cambia cada segundo).</li>\n<li>Respeta los <b>límites de uso</b> (rate limits) y las condiciones del servicio.</li>\n</ul>\n<p>Las claves secretas de una API, como la de una pasarela de pago, se usan <b>solo en el servidor</b> y se leen de una variable de entorno. Nunca van en el código del navegador ni se suben al repositorio. Además, el servicio externo puede fallar: pon siempre un <b>tiempo de espera</b> (timeout) a la petición y, si se supera, gestiona el error y muestra al usuario un mensaje adecuado.</p>\n",
   "check": {
    "q": "¿Dónde debe usarse una clave secreta de una API de pago?",
    "o": [
     "En el JavaScript del navegador",
     "En el servidor, leída de una variable de entorno",
     "En el HTML",
     "En la URL pública"
    ],
    "a": 1,
    "e": "Todo lo que está en el navegador lo puede ver cualquier usuario."
   }
  },
  {
   "h": "OAuth y webhooks",
   "html": "\n<p><b>OAuth 2.0</b> permite que un usuario autorice a tu aplicación a acceder a sus datos en otro servicio (o a iniciar sesión con él) sin darte su contraseña:</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span>Tu web redirige al usuario a Google.</span></div>\n<div class=\"stepn\"><i>2</i><span>El usuario inicia sesión allí y acepta los permisos.</span></div>\n<div class=\"stepn\"><i>3</i><span>Google devuelve un código a tu web, que lo cambia por un <b>token</b> desde el servidor.</span></div>\n</div>\n<p>Los <b>webhooks</b> funcionan al revés: el servicio externo llama a una URL de tu aplicación cuando ocurre algo (por ejemplo, «pago confirmado»). Hay que verificar la firma de esos avisos para asegurarse de que vienen de verdad del servicio.</p>\n<div class=\"caso\"><b>Caso real</b>Una tienda marca los pedidos como pagados cuando el cliente vuelve a la página de «gracias». Si el cliente cierra el navegador antes, el pedido queda sin marcar. La forma correcta es el webhook del proveedor de pagos.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué es una aplicación web híbrida o mashup?",
   "o": [
    "Una app móvil",
    "Una que combina funciones propias con servicios de terceros mediante sus API",
    "Una web sin servidor",
    "Un virus"
   ],
   "a": 1,
   "e": "Mapas, pagos, inicio de sesión externo…"
  },
  {
   "q": "¿Qué librería PHP se usa habitualmente para hacer peticiones HTTP a otras API?",
   "o": [
    "Guzzle",
    "Blade",
    "Eloquent",
    "PHPUnit"
   ],
   "a": 0,
   "e": "Se instala con Composer."
  },
  {
   "q": "¿Por qué conviene cachear las respuestas de una API externa?",
   "o": [
    "Por estética",
    "Para no repetir peticiones y respetar los límites de uso",
    "Porque es obligatorio",
    "Para cifrarlas"
   ],
   "a": 1,
   "e": "También hace la web más rápida."
  },
  {
   "q": "¿Qué permite OAuth 2.0?",
   "o": [
    "Cifrar discos",
    "Que el usuario autorice a tu app a acceder a otro servicio sin darte su contraseña",
    "Enviar correos",
    "Crear tablas"
   ],
   "a": 1,
   "e": "Es la base del «Iniciar sesión con Google»."
  },
  {
   "q": "¿Qué es un webhook?",
   "o": [
    "Un virus",
    "Una llamada que un servicio externo hace a tu aplicación cuando ocurre algo",
    "Un tipo de cookie",
    "Un servidor DNS"
   ],
   "a": 1,
   "e": "Por ejemplo, avisar de que un pago se ha confirmado."
  },
  {
   "q": "¿Qué debes hacer si el servicio externo no responde?",
   "o": [
    "Que tu web también caiga",
    "Poner un tiempo de espera y gestionar el error con un mensaje adecuado",
    "Reintentar sin fin",
    "Nada"
   ],
   "a": 1,
   "e": "Tu aplicación debe degradarse con elegancia."
  }
 ]
});
