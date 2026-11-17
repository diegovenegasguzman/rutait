TEMA("lms-moodle", {
title:"Plataformas de aprendizaje a distancia: Moodle", mins:12,
intro:"Qué es una plataforma de aprendizaje (LMS), cómo se instala y organiza Moodle, y cómo se administran cursos, usuarios y copias. Seguramente estudias en una.",
sections:[
{h:"Qué es un LMS", html:`
<p>Un <b>LMS</b> (Learning Management System) es una aplicación web para impartir formación: materiales, tareas, cuestionarios, foros, calificaciones y seguimiento del alumnado.</p>
<p>Ejemplos: <b>Moodle</b> (libre, el más extendido en educación pública), Canvas, Blackboard, Google Classroom. Muchos centros de FP a distancia funcionan sobre Moodle.</p>
<p>Moodle está escrito en <b>PHP</b> y usa una base de datos (MySQL/MariaDB o PostgreSQL), así que se instala en una pila tipo LAMP.</p>`},
{h:"Instalación y estructura", html:`
<div class="work">
<div class="stepn"><i>1</i><span>Servidor web con PHP y sus extensiones, y una base de datos vacía con su usuario.</span></div>
<div class="stepn"><i>2</i><span>Copiar el código de Moodle en la carpeta web y crear la carpeta de datos <b>moodledata</b> <b>fuera</b> de la carpeta pública.</span></div>
<div class="stepn"><i>3</i><span>Completar el instalador web y configurar la tarea programada <b>cron</b> (ejecuta cada minuto envíos de correo, limpiezas, etc.).</span></div>
</div>
<p>Organización: <b>categorías</b> → <b>cursos</b> → <b>secciones</b> (temas o semanas) → <b>recursos</b> (archivos, páginas, URL) y <b>actividades</b> (tareas, cuestionarios, foros, wikis).</p>`,
check:{q:"¿Por qué la carpeta moodledata debe estar fuera de la carpeta pública del servidor web?", o:["Para que ocupe menos","Para que no se pueda descargar directamente desde el navegador","Porque lo exige PHP","Para que vaya más rápido"], a:1, e:"Contiene los archivos subidos por usuarios; deben servirse solo a través de Moodle, que comprueba los permisos."}},
{h:"Administración", html:`
<ul>
<li><b>Roles:</b> gestor, profesor, profesor sin permiso de edición, estudiante e invitado. Se asignan en cada curso.</li>
<li><b>Matriculación:</b> manual, por autoinscripción, por cohortes o sincronizada desde el sistema de gestión académica.</li>
<li><b>Autenticación:</b> cuentas manuales, LDAP/Active Directory o inicio de sesión único.</li>
<li><b>Copias:</b> de cada curso (archivo .mbz) para reutilizarlo cada año, y del sistema completo (base de datos + moodledata + código).</li>
<li><b>Plugins</b> para ampliar funciones, y actualizaciones regulares.</li>
</ul>
<div class="caso"><b>Caso real</b>Al empezar el curso, el profesorado reutiliza sus cursos del año anterior: se hace copia de seguridad del curso viejo sin datos de alumnos y se restaura en uno nuevo vacío.</div>`}
],
quiz:[
{q:"¿Qué es un LMS?", o:["Un sistema de correo","Una plataforma para gestionar formación online","Un antivirus","Un sistema de archivos"], a:1, e:"Learning Management System."},
{q:"¿En qué lenguaje está escrito Moodle?", o:["Java","PHP","C#","Python"], a:1, e:"Igual que WordPress."},
{q:"¿Para qué sirve el cron en Moodle?", o:["Para hacer copias del PC","Para ejecutar tareas periódicas como envíos de correo y limpiezas","Para cambiar el diseño","Para matricular manualmente"], a:1, e:"Sin cron, muchas funciones no se ejecutan."},
{q:"¿Qué diferencia hay entre un recurso y una actividad en Moodle?", o:["Ninguna","El recurso es material para consultar; la actividad requiere participación del alumno","La actividad es un archivo","El recurso se califica"], a:1, e:"Tareas y cuestionarios son actividades; un PDF es un recurso."},
{q:"¿Con qué extensión se guardan las copias de un curso de Moodle?", o:[".zip",".mbz",".sql",".bak"], a:1, e:"Moodle Backup Zip."},
{q:"¿Qué permite la autenticación LDAP en Moodle?", o:["Usar las mismas credenciales del directorio de la organización","Cifrar los cursos","Hacer copias","Cambiar el tema"], a:0, e:"Los usuarios no necesitan otra contraseña."}
]});
