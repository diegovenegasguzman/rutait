TEMA("odoo-uso", {
title:"Instalar, configurar y explotar un ERP: Odoo", mins:13,
intro:"Cómo poner en marcha Odoo: instalación, creación de la base de datos y la empresa, módulos y usuarios, y cómo organizar y consultar la información con sus vistas, filtros e informes.",
sections:[
{h:"Instalación", html:`
<pre><code><span class="c"># La forma más rápida: Docker Compose con Odoo y PostgreSQL</span>
services:
  db:
    image: postgres:16
    environment: [POSTGRES_USER=odoo, POSTGRES_PASSWORD=odoo, POSTGRES_DB=postgres]
  odoo:
    image: odoo:18
    depends_on: [db]
    ports: ["8069:8069"]
    environment: [HOST=db, USER=odoo, PASSWORD=odoo]</code></pre>
<p>Odoo se usa desde el navegador en el puerto <b>8069</b>. También se instala con paquetes en Ubuntu/Debian o desde el código fuente. En producción se pone detrás de Nginx con HTTPS.</p>
<p>Al entrar por primera vez se crea una <b>base de datos</b> (cada base es una empresa o un entorno distinto) y la contraseña maestra, que protege la gestión de bases de datos.</p>`},
{h:"Configuración inicial", html:`
<div class="work">
<div class="stepn"><i>1</i><span>Datos de la empresa: nombre, CIF, dirección, logotipo, moneda.</span></div>
<div class="stepn"><i>2</i><span>Instalar las aplicaciones necesarias: Ventas, Compras, Inventario, Facturación, CRM…</span></div>
<div class="stepn"><i>3</i><span>Localización fiscal española: plan contable e impuestos (IVA).</span></div>
<div class="stepn"><i>4</i><span>Crear usuarios y asignarles <b>grupos de permisos</b> por aplicación (usuario o administrador de Ventas, etc.).</span></div>
<div class="stepn"><i>5</i><span>Importar datos (clientes, productos) desde CSV o Excel.</span></div>
</div>
<p>El <b>modo desarrollador</b> (Ajustes → Activar modo desarrollador) muestra opciones técnicas: modelos, campos, vistas y accesos.</p>`,
check:{q:"¿En qué puerto se accede a Odoo por defecto?", o:["80","8069","3306","5432"], a:1, e:"5432 es el de PostgreSQL, la base de datos que usa Odoo."}},
{h:"Organizar y consultar la información", html:`
<ul>
<li><b>Vistas:</b> lista, formulario, kanban (tarjetas por etapas), calendario, gráfico y tabla dinámica (pivot).</li>
<li><b>Filtros, agrupaciones y búsquedas</b> combinables, que se pueden guardar como favoritos.</li>
<li><b>Informes:</b> análisis de ventas, inventario o facturación, exportables a Excel.</li>
<li><b>Tableros</b> personalizados con los indicadores clave.</li>
<li>Exportar e importar registros desde cualquier lista.</li>
</ul>
<div class="caso"><b>Caso real</b>El responsable comercial quiere saber qué clientes compraron más el último trimestre. En Ventas → Informes, vista tabla dinámica: filas por cliente, filtro por fechas, ordenar por importe. Dos minutos, sin pedir nada a informática.</div>`}
],
quiz:[
{q:"¿Qué base de datos necesita Odoo?", o:["MySQL","PostgreSQL","SQL Server","MongoDB"], a:1, e:"Odoo funciona exclusivamente sobre PostgreSQL."},
{q:"¿Qué protege la contraseña maestra de Odoo?", o:["El correo","La gestión de bases de datos (crear, copiar, borrar)","Cada factura","El Wi-Fi"], a:1, e:"Hay que guardarla de forma segura."},
{q:"¿Cómo se controlan los permisos de los usuarios en Odoo?", o:["Con el cortafuegos","Con grupos de permisos por aplicación","Con el DNS","No se controlan"], a:1, e:"Por ejemplo, usuario o administrador de Ventas."},
{q:"¿Qué vista muestra los registros como tarjetas organizadas por etapas?", o:["Lista","Kanban","Formulario","Calendario"], a:1, e:"Muy usada en CRM y proyectos."},
{q:"¿Qué permite el modo desarrollador?", o:["Ver opciones técnicas como modelos, campos y vistas","Programar en Java","Cambiar de base de datos","Nada"], a:0, e:"Es imprescindible para personalizar."},
{q:"¿Qué vista permite analizar datos cruzando filas y columnas?", o:["Formulario","Tabla dinámica (pivot)","Kanban","Lista"], a:1, e:"Ideal para informes de ventas o inventario."}
]});
