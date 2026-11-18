TEMA("guiones-sql", {
 "title": "Guiones en SQL: procedimientos, funciones y cursores",
 "mins": 16,
 "intro": "Cómo programar dentro de la base de datos: variables, condiciones y bucles, procedimientos y funciones almacenados, cursores para recorrer filas y manejo de errores. Ejemplos en MySQL/MariaDB.",
 "sections": [
  {
   "h": "Por qué programar en la base de datos",
   "html": "\n<p>SQL normal hace una operación cada vez. Con los <b>guiones</b> (rutinas almacenadas) puedes juntar varias operaciones con lógica: «si el cliente es VIP, aplica descuento; si no hay stock, avisa».</p>\n<ul>\n<li>La lógica se guarda <b>en el servidor</b> y la usan todas las aplicaciones por igual.</li>\n<li>Menos viajes por la red entre la aplicación y la base de datos.</li>\n<li>Se pueden dar permisos para ejecutar un procedimiento sin dar acceso a las tablas.</li>\n</ul>\n<p>En MySQL se escriben en SQL/PSM; en Oracle se usa <b>PL/SQL</b> y en SQL Server, <b>T-SQL</b>. La idea es la misma.</p>"
  },
  {
   "h": "Procedimientos almacenados",
   "html": "\n<pre><code>DELIMITER //\n<span class=\"k\">CREATE PROCEDURE</span> subir_precios(<span class=\"k\">IN</span> p_categoria VARCHAR(50), <span class=\"k\">IN</span> p_porcentaje DECIMAL(5,2))\n<span class=\"k\">BEGIN</span>\n  <span class=\"k\">UPDATE</span> productos\n  <span class=\"k\">SET</span> precio = precio * (1 + p_porcentaje / 100)\n  <span class=\"k\">WHERE</span> categoria = p_categoria;\n<span class=\"k\">END</span> //\nDELIMITER ;\n\n<span class=\"k\">CALL</span> subir_precios(<span class=\"s\">'Periféricos'</span>, 5);</code></pre>\n<ul>\n<li><code>DELIMITER</code> cambia temporalmente el fin de sentencia para que el <code>;</code> de dentro no corte el procedimiento.</li>\n<li>Los parámetros pueden ser <code>IN</code> (entrada), <code>OUT</code> (salida) o <code>INOUT</code>.</li>\n<li>Se ejecutan con <code>CALL</code>.</li>\n</ul>\n<p><code>DELIMITER //</code> cambia temporalmente el símbolo que termina una sentencia: así los <code>;</code> del interior del procedimiento no terminan la definición antes de tiempo. Los parámetros pueden ser <code>IN</code> (entrada), <code>OUT</code> (devuelven un valor al que llama) o <code>INOUT</code> (las dos cosas).</p>\n",
   "check": {
    "q": "¿Para qué sirve DELIMITER // al crear un procedimiento en MySQL?",
    "o": [
     "Para comentar código",
     "Para que los ; del interior no terminen la definición antes de tiempo",
     "Para separar parámetros",
     "Para cifrar el procedimiento"
    ],
    "a": 1,
    "e": "El cliente de MySQL enviaría el texto al servidor en cuanto viera el primer ;."
   }
  },
  {
   "h": "Variables, condiciones y funciones",
   "html": "\n<pre><code>DELIMITER //\n<span class=\"k\">CREATE FUNCTION</span> nivel_cliente(p_id INT) <span class=\"k\">RETURNS</span> VARCHAR(10)\n<span class=\"k\">READS SQL DATA</span>\n<span class=\"k\">BEGIN</span>\n  <span class=\"k\">DECLARE</span> v_total DECIMAL(10,2);\n  <span class=\"k\">SELECT</span> COALESCE(<span class=\"k\">SUM</span>(total), 0) <span class=\"k\">INTO</span> v_total <span class=\"k\">FROM</span> pedidos <span class=\"k\">WHERE</span> id_cliente = p_id;\n  <span class=\"k\">IF</span> v_total &gt;= 1000 <span class=\"k\">THEN RETURN</span> <span class=\"s\">'Oro'</span>;\n  <span class=\"k\">ELSEIF</span> v_total &gt;= 300 <span class=\"k\">THEN RETURN</span> <span class=\"s\">'Plata'</span>;\n  <span class=\"k\">ELSE RETURN</span> <span class=\"s\">'Bronce'</span>;\n  <span class=\"k\">END IF</span>;\n<span class=\"k\">END</span> //\nDELIMITER ;\n\n<span class=\"k\">SELECT</span> nombre, nivel_cliente(id) <span class=\"k\">FROM</span> clientes;</code></pre>\n<ul>\n<li><code>DECLARE</code> crea variables locales; <code>SELECT … INTO</code> guarda un resultado en ellas.</li>\n<li>Una <b>función</b> devuelve un valor con <code>RETURN</code> y se puede usar dentro de un <code>SELECT</code>; un <b>procedimiento</b> no.</li>\n<li>Bucles disponibles: <code>WHILE</code>, <code>REPEAT</code> y <code>LOOP</code>.</li>\n</ul>"
  },
  {
   "h": "Cursores y manejo de errores",
   "html": "\n<p>Un <b>cursor</b> recorre fila a fila el resultado de una consulta, para hacer algo con cada una:</p>\n<pre><code><span class=\"k\">DECLARE</span> fin INT <span class=\"k\">DEFAULT</span> 0;\n<span class=\"k\">DECLARE</span> v_email VARCHAR(100);\n<span class=\"k\">DECLARE</span> c <span class=\"k\">CURSOR FOR SELECT</span> email <span class=\"k\">FROM</span> clientes <span class=\"k\">WHERE</span> vip = 1;\n<span class=\"k\">DECLARE CONTINUE HANDLER FOR NOT FOUND SET</span> fin = 1;   <span class=\"c\">-- cuando no queden filas</span>\n\n<span class=\"k\">OPEN</span> c;\nbucle: <span class=\"k\">LOOP</span>\n  <span class=\"k\">FETCH</span> c <span class=\"k\">INTO</span> v_email;\n  <span class=\"k\">IF</span> fin = 1 <span class=\"k\">THEN LEAVE</span> bucle; <span class=\"k\">END IF</span>;\n  <span class=\"k\">INSERT INTO</span> envios (email, campana) <span class=\"k\">VALUES</span> (v_email, <span class=\"s\">'Navidad'</span>);\n<span class=\"k\">END LOOP</span>;\n<span class=\"k\">CLOSE</span> c;</code></pre>\n<p>Los <b>manejadores</b> (<code>DECLARE … HANDLER</code>) indican qué hacer ante una situación: fin de datos (<code>NOT FOUND</code>), cualquier error (<code>SQLEXCEPTION</code>)… Con <code>SIGNAL</code> puedes lanzar tus propios errores.</p>\n<p>El manejador <code>CONTINUE HANDLER FOR NOT FOUND</code> indica qué hacer cuando ya no quedan filas que leer en el cursor; normalmente, activar la variable que termina el bucle.</p>\n<div class=\"caso\"><b>Consejo práctico</b>Los cursores son lentos. Si puedes hacer lo mismo con una sola sentencia (aquí, un <code>INSERT … SELECT</code>), hazlo así. Usa cursores cuando cada fila necesite una lógica distinta.</div>",
   "check": {
    "q": "En un cursor, ¿qué indica el manejador CONTINUE HANDLER FOR NOT FOUND?",
    "o": [
     "Que hay un error de sintaxis",
     "Qué hacer cuando ya no quedan filas que leer",
     "Que la tabla está vacía siempre",
     "Que el cursor está cerrado"
    ],
    "a": 1,
    "e": "Cuando FETCH no encuentra más filas, se activa el manejador y normalmente marca el fin del bucle."
   }
  }
 ],
 "quiz": [
  {
   "q": "¿Cómo se ejecuta un procedimiento almacenado en MySQL?",
   "o": [
    "RUN",
    "EXEC",
    "CALL",
    "START"
   ],
   "a": 2,
   "e": "CALL nombre(parámetros);"
  },
  {
   "q": "¿Qué diferencia principal hay entre una función y un procedimiento?",
   "o": [
    "Ninguna",
    "La función devuelve un valor y se puede usar en un SELECT",
    "El procedimiento es más rápido",
    "La función no admite parámetros"
   ],
   "a": 1,
   "e": "El procedimiento se invoca con CALL y puede devolver datos por parámetros OUT."
  },
  {
   "q": "¿Qué tipo de parámetro devuelve un valor al que llama al procedimiento?",
   "o": [
    "IN",
    "OUT",
    "RETURN",
    "VAR"
   ],
   "a": 1,
   "e": "OUT (o INOUT si además recibe un valor)."
  },
  {
   "q": "¿Cómo guardas el resultado de una consulta en una variable?",
   "o": [
    "SELECT … INTO variable",
    "SET variable = TABLE",
    "STORE variable",
    "SAVE INTO"
   ],
   "a": 0,
   "e": "SELECT columna INTO variable FROM …"
  },
  {
   "q": "¿Para qué sirve un cursor?",
   "o": [
    "Para crear índices",
    "Para recorrer fila a fila el resultado de una consulta",
    "Para bloquear tablas",
    "Para hacer copias"
   ],
   "a": 1,
   "e": "Se abre, se leen filas con FETCH y se cierra."
  },
  {
   "q": "¿Cómo se llama el lenguaje procedimental de Oracle?",
   "o": [
    "T-SQL",
    "PL/SQL",
    "PSQL",
    "Java"
   ],
   "a": 1,
   "e": "SQL Server usa T-SQL."
  },
  {
   "q": "¿Qué sentencia lanza un error personalizado en MySQL?",
   "o": [
    "THROW",
    "RAISE",
    "SIGNAL",
    "ERROR"
   ],
   "a": 2,
   "e": "SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = '…'"
  },
  {
   "q": "¿Qué ventaja de seguridad tienen los procedimientos almacenados?",
   "o": [
    "Cifran los datos",
    "Se puede dar permiso para ejecutarlos sin dar acceso a las tablas",
    "Eliminan las contraseñas",
    "Evitan las copias"
   ],
   "a": 1,
   "e": "El usuario solo puede hacer lo que el procedimiento permite."
  }
 ]
});
