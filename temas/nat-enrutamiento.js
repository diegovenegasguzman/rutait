TEMA("nat-enrutamiento", {
 "title": "Enrutamiento dinámico, NAT y ACL",
 "mins": 17,
 "intro": "Cómo decide un router por dónde enviar cada paquete, cómo comparten todos los equipos de una red una sola IP pública y cómo se filtra el tráfico con listas de control de acceso.",
 "sections": [
  {
   "h": "La tabla de rutas",
   "html": "\n<p>Cada router tiene una <b>tabla de rutas</b>: una lista de redes que conoce y por dónde llegar a cada una. Las rutas pueden ser:</p>\n<ul>\n<li><b>Conectadas:</b> redes en las que el router tiene una interfaz. Las aprende solo.</li>\n<li><b>Estáticas:</b> las escribe el administrador a mano.</li>\n<li><b>Dinámicas:</b> las aprende de otros routers mediante un protocolo de enrutamiento.</li>\n</ul>\n<p>Si hay varias rutas que sirven para un destino, gana la <b>más específica</b> (la de prefijo más largo). Para llegar a 10.1.2.5, una ruta a 10.1.2.0/24 gana a otra a 10.0.0.0/8.</p>\n<p>Si dos protocolos ofrecen la misma red, el router se fía del que tenga menor <b>distancia administrativa</b>:</p>\n<table>\n<tr><th>Origen de la ruta</th><th>Distancia administrativa</th></tr>\n<tr><td>Conectada</td><td>0</td></tr>\n<tr><td>Estática</td><td>1</td></tr>\n<tr><td>OSPF</td><td>110</td></tr>\n<tr><td>RIP</td><td>120</td></tr>\n</table>",
   "check": {
    "q": "Un router tiene rutas a 172.16.0.0/16 y a 172.16.5.0/24. ¿Cuál usa para llegar a 172.16.5.20?",
    "o": [
     "La /16, porque es más grande",
     "La /24, porque es más específica",
     "Las dos a la vez",
     "Ninguna, usa la ruta por defecto"
    ],
    "a": 1,
    "e": "Siempre gana la coincidencia de prefijo más largo: la /24 describe con más precisión dónde está ese destino."
   }
  },
  {
   "h": "Protocolos de enrutamiento dinámico",
   "html": "\n<p>Con las rutas estáticas, cada cambio en la red obliga a reconfigurar los routers a mano. Los protocolos dinámicos hacen que los routers se informen entre ellos y calculen las rutas solos.</p>\n<table>\n<tr><th>Protocolo</th><th>Tipo</th><th>Cómo elige la mejor ruta</th><th>Dónde se usa</th></tr>\n<tr><td>RIP</td><td>Vector distancia</td><td>Menor número de saltos (máximo 15)</td><td>Redes pequeñas y prácticas de clase</td></tr>\n<tr><td>OSPF</td><td>Estado de enlace</td><td>Menor coste, calculado según el ancho de banda</td><td>Redes de empresa</td></tr>\n<tr><td>BGP</td><td>Vector de rutas</td><td>Políticas entre organizaciones</td><td>Internet: une los proveedores entre sí</td></tr>\n</table>\n<p>La diferencia clave: con <b>vector distancia</b> cada router solo sabe lo que le cuentan sus vecinos («a esa red hay 3 saltos por aquí»). Con <b>estado de enlace</b> cada router conoce el mapa completo de la red y calcula él mismo el mejor camino. Por eso OSPF reacciona antes a los cambios y elige mejor: RIP prefiere 2 saltos lentos antes que 3 rapidísimos.</p>\n<p>OSPF organiza las redes grandes en <b>áreas</b>; todas deben conectarse al <b>área 0</b> (backbone).</p>"
  },
  {
   "h": "NAT: compartir una IP pública",
   "html": "\n<p>Las IP privadas no pueden salir a Internet. El router traduce la dirección privada por una pública al salir y deshace el cambio con las respuestas. Eso es <b>NAT</b>.</p>\n<table>\n<tr><th>Tipo</th><th>Cómo funciona</th></tr>\n<tr><td>NAT estática</td><td>Una IP privada siempre se traduce a la misma IP pública (1 a 1)</td></tr>\n<tr><td>NAT dinámica</td><td>Se asigna una IP libre de un grupo de IP públicas</td></tr>\n<tr><td>PAT (NAT con sobrecarga)</td><td>Muchas IP privadas comparten una sola IP pública, distinguiéndose por el <b>puerto</b>. Es lo que hace el router de tu casa</td></tr>\n</table>\n<p>Para que alguien de Internet llegue a un servidor de tu red interna hay que abrir una <b>redirección de puertos</b> (port forwarding): «lo que llegue al puerto 443 de la IP pública, mándalo al 192.168.1.10».</p>\n<div class=\"caso\"><b>Caso real</b>Montas un servidor de Minecraft en casa y tus amigos no pueden entrar. El servidor funciona, pero tu router no sabe a qué equipo enviar las conexiones que llegan de fuera. Falta la redirección del puerto 25565 a la IP del servidor.</div>",
   "check": {
    "q": "En tu casa, 6 dispositivos navegan a la vez con una única IP pública. ¿Qué tipo de NAT hace el router?",
    "o": [
     "NAT estática",
     "NAT dinámica",
     "PAT (sobrecarga)",
     "Ninguno"
    ],
    "a": 2,
    "e": "PAT distingue cada conexión por el puerto de origen, así que muchos equipos pueden compartir una sola IP pública."
   }
  },
  {
   "h": "Listas de control de acceso (ACL)",
   "html": "\n<p>Una <b>ACL</b> es una lista de reglas que el router aplica a una interfaz para permitir o denegar tráfico.</p>\n<ul>\n<li><b>Estándar:</b> filtran solo por IP de <b>origen</b>. Se colocan <b>cerca del destino</b>, para no bloquear de más.</li>\n<li><b>Extendidas:</b> filtran por origen, destino, protocolo y puerto. Se colocan <b>cerca del origen</b>, para descartar el tráfico cuanto antes.</li>\n</ul>\n<pre><code><span class=\"c\">! Los alumnos (192.168.20.0/24) no pueden acceder por SSH al servidor 10.0.0.5</span>\naccess-list 110 deny tcp 192.168.20.0 0.0.0.255 host 10.0.0.5 eq 22\naccess-list 110 permit ip any any\n\ninterface g0/1\n ip access-group 110 in</code></pre>\n<div class=\"note exam\"><b>Dos reglas de oro</b>Las líneas se comprueban <b>en orden</b> y se aplica la primera que coincide. Y al final de toda ACL hay un <b>deny any implícito</b>: si olvidas el <code>permit</code> final, bloqueas todo lo demás.</div>\n<p>Fíjate en que las ACL usan <b>máscara wildcard</b> (la inversa de la máscara): 0.0.0.255 equivale a /24.</p>",
   "check": {
    "q": "Creas una ACL con una sola línea: deny host 192.168.1.50. ¿Qué pasa con el resto del tráfico?",
    "o": [
     "Pasa todo",
     "Se bloquea todo, por el deny implícito final",
     "Solo pasa HTTP",
     "Depende del router"
    ],
    "a": 1,
    "e": "Sin un permit, el deny implícito del final bloquea todo lo que no coincida con ninguna regla."
   }
  }
 ],
 "quiz": [
  {
   "q": "¿Qué ruta elige un router si varias coinciden con el destino?",
   "o": [
    "La primera que aprendió",
    "La de prefijo más largo",
    "La de prefijo más corto",
    "Una al azar"
   ],
   "a": 1,
   "e": "La coincidencia más específica siempre gana."
  },
  {
   "q": "¿Qué distancia administrativa tiene una ruta estática?",
   "o": [
    "0",
    "1",
    "110",
    "120"
   ],
   "a": 1,
   "e": "Conectada 0, estática 1, OSPF 110 y RIP 120."
  },
  {
   "q": "¿Qué métrica usa RIP?",
   "o": [
    "Ancho de banda",
    "Número de saltos",
    "Retardo",
    "Coste configurado"
   ],
   "a": 1,
   "e": "RIP cuenta saltos, con un máximo de 15."
  },
  {
   "q": "¿Qué tipo de protocolo es OSPF?",
   "o": [
    "Vector distancia",
    "Estado de enlace",
    "Vector de rutas",
    "Estático"
   ],
   "a": 1,
   "e": "Cada router OSPF conoce el mapa completo de su área."
  },
  {
   "q": "¿Cómo se llama el área central obligatoria en OSPF?",
   "o": [
    "Área 1",
    "Área 0",
    "Área backbone 255",
    "Área principal"
   ],
   "a": 1,
   "e": "Todas las áreas deben conectarse al área 0."
  },
  {
   "q": "¿Qué necesitas para publicar en Internet un servidor web de tu red interna?",
   "o": [
    "Una ACL estándar",
    "Una redirección de puertos (NAT estática de puerto)",
    "Cambiar a IPv6",
    "Un switch de capa 3"
   ],
   "a": 1,
   "e": "Hay que indicar al router a qué equipo interno enviar lo que llega a ese puerto."
  },
  {
   "q": "¿Dónde se recomienda colocar una ACL extendida?",
   "o": [
    "Cerca del destino",
    "Cerca del origen",
    "En el switch",
    "En todas las interfaces"
   ],
   "a": 1,
   "e": "Como filtra con precisión, conviene descartar el tráfico cuanto antes."
  },
  {
   "q": "¿Qué hay al final de toda ACL aunque no lo escribas?",
   "o": [
    "Un permit any",
    "Un deny any implícito",
    "Una ruta por defecto",
    "Nada"
   ],
   "a": 1,
   "e": "Por eso hay que añadir explícitamente lo que se quiere permitir."
  }
 ]
});
