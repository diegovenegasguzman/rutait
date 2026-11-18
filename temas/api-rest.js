TEMA("api-rest", {
 "title": "Servicios web y API REST",
 "mins": 14,
 "intro": "Cómo se comunican hoy las aplicaciones: qué es una API REST, cómo se diseñan sus rutas y respuestas, cómo se crea una y cómo se protege.",
 "sections": [
  {
   "h": "Qué es una API REST",
   "html": "\n<p>Una <b>API REST</b> expone <b>recursos</b> (alumnos, cursos, pedidos) a través de URL y usa los métodos HTTP para operar con ellos. Los datos viajan normalmente en <b>JSON</b>.</p>\n<table>\n<tr><th>Método</th><th>Ruta</th><th>Acción</th><th>Respuesta típica</th></tr>\n<tr><td>GET</td><td><code>/api/alumnos</code></td><td>Listar</td><td>200</td></tr>\n<tr><td>GET</td><td><code>/api/alumnos/7</code></td><td>Obtener uno</td><td>200 o 404</td></tr>\n<tr><td>POST</td><td><code>/api/alumnos</code></td><td>Crear</td><td>201 Created</td></tr>\n<tr><td>PUT / PATCH</td><td><code>/api/alumnos/7</code></td><td>Modificar (entero / en parte)</td><td>200 o 204</td></tr>\n<tr><td>DELETE</td><td><code>/api/alumnos/7</code></td><td>Borrar</td><td>204 No Content</td></tr>\n</table>\n<p>REST es <b>sin estado</b>: cada petición lleva todo lo necesario (incluida la autenticación); el servidor no recuerda peticiones anteriores. Antes de REST era habitual <b>SOAP</b>, basado en XML y más rígido.</p>"
  },
  {
   "h": "Crear una API",
   "html": "\n<pre><code><span class=\"c\">// Java con Spring Boot</span>\n@RestController\n@RequestMapping(<span class=\"s\">\"/api/alumnos\"</span>)\n<span class=\"k\">public class</span> AlumnoController {\n    @GetMapping(<span class=\"s\">\"/{id}\"</span>)\n    <span class=\"k\">public</span> ResponseEntity&lt;Alumno&gt; uno(@PathVariable Long id) {\n        <span class=\"k\">return</span> repo.findById(id).map(ResponseEntity::ok)\n                   .orElse(ResponseEntity.notFound().build());\n    }\n    @PostMapping\n    <span class=\"k\">public</span> ResponseEntity&lt;Alumno&gt; crear(@RequestBody @Valid Alumno a) {\n        Alumno nuevo = repo.save(a);\n        <span class=\"k\">return</span> ResponseEntity.created(URI.create(<span class=\"s\">\"/api/alumnos/\"</span> + nuevo.getId())).body(nuevo);\n    }\n}</code></pre>\n<p>En PHP se hace con Laravel o Symfony; en JavaScript, con Express. Para probarla: <b>Postman</b>, Bruno o <code>curl</code>:</p>\n<pre><code>curl -X POST http://localhost:8080/api/alumnos -H \"Content-Type: application/json\" -d '{\"nombre\":\"Laia\"}'</code></pre>",
   "check": {
    "q": "¿Qué código HTTP se devuelve al crear un recurso correctamente?",
    "o": [
     "200",
     "201",
     "204",
     "404"
    ],
    "a": 1,
    "e": "201 Created, normalmente con la URL del nuevo recurso en la cabecera Location."
   }
  },
  {
   "h": "Seguridad y documentación",
   "html": "\n<p>Una API publicada en Internet la puede llamar cualquiera. Hay que saber quién llama, proteger lo que viaja y explicar a otros programadores cómo usarla.</p>\n<ul>\n<li><b>Autenticación</b> con tokens: una clave de API o, más habitual, <b>JWT</b> u <b>OAuth 2.0</b>, enviados en la cabecera <code>Authorization: Bearer …</code>.</li>\n<li>Siempre sobre <b>HTTPS</b>.</li>\n<li><b>Validar</b> todo lo que llega y no devolver más datos de los necesarios.</li>\n<li><b>Limitar</b> el número de peticiones (rate limiting).</li>\n<li><b>CORS</b>: indicar qué webs pueden llamar a la API desde el navegador.</li>\n<li>Documentarla con <b>OpenAPI (Swagger)</b>, que genera una página interactiva para probarla.</li>\n<li>Versionarla: <code>/api/v1/…</code>.</li>\n</ul>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué método HTTP se usa para crear un recurso en REST?",
   "o": [
    "GET",
    "POST",
    "DELETE",
    "HEAD"
   ],
   "a": 1,
   "e": "PUT o PATCH modifican; DELETE borra."
  },
  {
   "q": "¿Qué significa que REST sea sin estado?",
   "o": [
    "Que no guarda datos",
    "Que cada petición lleva todo lo necesario y el servidor no recuerda las anteriores",
    "Que no usa HTTP",
    "Que es lento"
   ],
   "a": 1,
   "e": "Facilita escalar con varios servidores."
  },
  {
   "q": "¿En qué formato suelen viajar los datos de una API REST?",
   "o": [
    "XML siempre",
    "JSON",
    "CSV",
    "Binario"
   ],
   "a": 1,
   "e": "SOAP, en cambio, usa XML."
  },
  {
   "q": "¿Qué código devuelve un DELETE correcto sin contenido?",
   "o": [
    "200",
    "201",
    "204",
    "500"
   ],
   "a": 2,
   "e": "204 No Content."
  },
  {
   "q": "¿Dónde se envía normalmente el token de autenticación?",
   "o": [
    "En la URL",
    "En la cabecera Authorization",
    "En una cookie siempre",
    "En el cuerpo de un GET"
   ],
   "a": 1,
   "e": "Authorization: Bearer <token>."
  },
  {
   "q": "¿Qué estándar se usa para documentar APIs REST?",
   "o": [
    "OpenAPI (Swagger)",
    "JUnit",
    "UML",
    "Javadoc"
   ],
   "a": 0,
   "e": "Genera documentación interactiva."
  }
 ]
});
