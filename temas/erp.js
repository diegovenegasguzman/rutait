TEMA("erp", {
 "title": "Sistemas ERP y CRM con Odoo",
 "mins": 15,
 "intro": "Qué son los sistemas de gestión empresarial, cómo se implantan en una empresa y cómo se amplían programando módulos propios en Odoo.",
 "sections": [
  {
   "h": "Qué es un ERP",
   "html": "\n<p>Un <b>ERP</b> (planificación de recursos empresariales) es un programa que integra en una sola aplicación y una sola base de datos la gestión de toda la empresa:</p>\n<ul>\n<li>Contabilidad y facturación.</li>\n<li>Compras y proveedores.</li>\n<li>Ventas y clientes.</li>\n<li>Inventario y almacén.</li>\n<li>Producción.</li>\n<li>Recursos humanos y nóminas.</li>\n</ul>\n<p>La ventaja es que los datos se introducen <b>una sola vez</b> y todos los departamentos los ven: cuando ventas confirma un pedido, el almacén ve qué debe preparar y contabilidad puede facturarlo.</p>\n<p>Ejemplos: <b>SAP</b>, <b>Microsoft Dynamics 365</b>, <b>Odoo</b> y <b>Sage</b>.</p>"
  },
  {
   "h": "CRM y BI",
   "html": "\n<p>El ERP gestiona toda la empresa. Alrededor suele haber dos sistemas más: uno centrado en los clientes y otro en analizar los datos.</p>\n<ul>\n<li>Un <b>CRM</b> (gestión de la relación con clientes) se centra en los clientes: contactos, oportunidades de venta, presupuestos, historial de llamadas y campañas. Ejemplos: Salesforce, HubSpot o el módulo CRM de Odoo.</li>\n<li>El <b>BI</b> (inteligencia de negocio) analiza los datos del ERP y del CRM con informes y cuadros de mando para tomar decisiones: qué productos se venden más, qué clientes dejan de comprar…</li>\n</ul>"
  },
  {
   "h": "Odoo",
   "html": "\n<p><b>Odoo</b> es un ERP modular: se instalan solo las aplicaciones que necesita la empresa (Ventas, Inventario, Facturación, CRM, Sitio web…). Tiene una edición <b>Community</b>, de código abierto, y otra <b>Enterprise</b>, de pago.</p>\n<ul>\n<li>Está programado en <b>Python</b>.</li>\n<li>Usa <b>PostgreSQL</b> como base de datos.</li>\n<li>Se usa desde el navegador.</li>\n</ul>\n<p>Se puede instalar en un servidor propio, con Docker o contratar en la nube.</p>"
  },
  {
   "h": "Implantar un ERP",
   "html": "\n<p>Implantar un ERP cambia la forma de trabajar de toda la empresa. Por eso se hace por fases, no instalándolo un viernes.</p>\n<div class=\"work\">\n<div class=\"stepn\"><i>1</i><span><b>Análisis:</b> estudiar cómo trabaja la empresa y qué necesita cada departamento.</span></div>\n<div class=\"stepn\"><i>2</i><span><b>Instalación y configuración:</b> elegir los módulos, crear la empresa, los usuarios, los permisos y los impuestos.</span></div>\n<div class=\"stepn\"><i>3</i><span><b>Migración de datos:</b> importar clientes, productos y saldos del sistema anterior, normalmente desde CSV. Es la fase más delicada.</span></div>\n<div class=\"stepn\"><i>4</i><span><b>Pruebas</b> con casos reales antes de arrancar.</span></div>\n<div class=\"stepn\"><i>5</i><span><b>Formación</b> de los usuarios y puesta en marcha.</span></div>\n<div class=\"stepn\"><i>6</i><span><b>Mantenimiento:</b> actualizaciones, copias de seguridad y soporte.</span></div>\n</div>\n<div class=\"note\"><b>Adaptar o personalizar</b>Siempre que se pueda, es mejor que la empresa se adapte al funcionamiento estándar del ERP que programar cambios. Cada personalización encarece las actualizaciones futuras.</div>"
  },
  {
   "h": "Crear un módulo en Odoo",
   "html": "\n<p>Un módulo de Odoo es una carpeta con esta estructura básica:</p>\n<pre><code>biblioteca/\n├── __init__.py\n├── __manifest__.py      <span class=\"c\"># nombre, versión, dependencias y archivos</span>\n├── models/\n│   └── libro.py         <span class=\"c\"># modelos de datos (Python)</span>\n├── views/\n│   └── libro_views.xml  <span class=\"c\"># vistas: formularios, listas y menús</span>\n└── security/\n    └── ir.model.access.csv   <span class=\"c\"># permisos de acceso</span></code></pre>\n<pre><code><span class=\"k\">from</span> odoo <span class=\"k\">import</span> models, fields\n\n<span class=\"k\">class</span> Libro(models.Model):\n    _name = <span class=\"s\">'biblioteca.libro'</span>\n    name = fields.Char(<span class=\"s\">'Título'</span>, required=<span class=\"k\">True</span>)\n    autor = fields.Char()\n    prestado = fields.Boolean(default=<span class=\"k\">False</span>)</code></pre>\n<p>El <b>ORM</b> de Odoo crea automáticamente la tabla en PostgreSQL a partir del modelo. Las vistas se definen en XML y el acceso de cada grupo de usuarios se controla en el archivo de seguridad.</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué es un ERP?",
   "o": [
    "Un antivirus",
    "Un sistema que integra la gestión de todas las áreas de la empresa",
    "Un servidor web",
    "Un lenguaje de programación"
   ],
   "a": 1,
   "e": "Integra contabilidad, ventas, compras, inventario, RR. HH., etc. en una sola aplicación."
  },
  {
   "q": "¿En qué se centra un CRM?",
   "o": [
    "En las nóminas",
    "En la relación con los clientes",
    "En el almacén",
    "En los servidores"
   ],
   "a": 1,
   "e": "Gestiona contactos, oportunidades de venta e historial de clientes."
  },
  {
   "q": "¿En qué lenguaje está programado Odoo?",
   "o": [
    "Java",
    "PHP",
    "Python",
    "C#"
   ],
   "a": 2,
   "e": "Odoo está hecho en Python."
  },
  {
   "q": "¿Qué base de datos usa Odoo?",
   "o": [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Oracle"
   ],
   "a": 1,
   "e": "Odoo funciona sobre PostgreSQL."
  },
  {
   "q": "¿Qué archivo describe un módulo de Odoo (nombre, versión, dependencias)?",
   "o": [
    "__init__.py",
    "__manifest__.py",
    "views.xml",
    "models.py"
   ],
   "a": 1,
   "e": "El manifiesto indica también qué archivos de datos y vistas debe cargar."
  },
  {
   "q": "¿Cuál suele ser la fase más delicada de una implantación?",
   "o": [
    "Instalar el programa",
    "La migración de datos del sistema anterior",
    "Elegir el logotipo",
    "Crear el primer usuario"
   ],
   "a": 1,
   "e": "Los datos antiguos suelen tener errores y duplicados que hay que limpiar."
  },
  {
   "q": "¿Para qué sirve el BI?",
   "o": [
    "Para facturar",
    "Para analizar los datos y apoyar la toma de decisiones",
    "Para hacer copias de seguridad",
    "Para gestionar usuarios"
   ],
   "a": 1,
   "e": "Business Intelligence: informes, indicadores y cuadros de mando."
  },
  {
   "q": "¿En qué formato se definen las vistas de un módulo de Odoo?",
   "o": [
    "JSON",
    "XML",
    "CSV",
    "YAML"
   ],
   "a": 1,
   "e": "Formularios, listas y menús se describen en archivos XML."
  }
 ]
});
