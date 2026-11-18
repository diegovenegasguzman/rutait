TEMA("odoo-modulos", {
 "title": "Desarrollo de componentes para un ERP: módulos de Odoo",
 "mins": 15,
 "intro": "Cómo ampliar Odoo con un módulo propio: estructura, modelos y campos en Python, vistas y menús en XML, permisos, herencia de modelos existentes y campos calculados.",
 "sections": [
  {
   "h": "Estructura del módulo",
   "html": "\n<pre><code>biblioteca/\n├── __init__.py               <span class=\"c\"># from . import models</span>\n├── __manifest__.py\n├── models/__init__.py, libro.py\n├── views/libro_views.xml\n└── security/ir.model.access.csv</code></pre>\n<pre><code><span class=\"c\"># __manifest__.py</span>\n{\n    <span class=\"s\">'name'</span>: <span class=\"s\">'Biblioteca'</span>,\n    <span class=\"s\">'version'</span>: <span class=\"s\">'1.0'</span>,\n    <span class=\"s\">'depends'</span>: [<span class=\"s\">'base'</span>],\n    <span class=\"s\">'data'</span>: [<span class=\"s\">'security/ir.model.access.csv'</span>, <span class=\"s\">'views/libro_views.xml'</span>],\n    <span class=\"s\">'application'</span>: <span class=\"k\">True</span>,\n}</code></pre>\n<p>El esqueleto se puede crear con <code>odoo scaffold biblioteca addons/</code>. El módulo se copia en la carpeta de addons, se actualiza la lista de aplicaciones y se instala.</p>\n<p>Si falta la línea de un modelo en <code>ir.model.access.csv</code>, <b>ningún usuario</b> puede acceder a ese modelo, ni siquiera para verlo.</p>\n"
  },
  {
   "h": "Modelos y vistas",
   "html": "\n<pre><code><span class=\"k\">from</span> odoo <span class=\"k\">import</span> models, fields, api\n\n<span class=\"k\">class</span> Libro(models.Model):\n    _name = <span class=\"s\">'biblioteca.libro'</span>\n    _description = <span class=\"s\">'Libro'</span>\n\n    name = fields.Char(<span class=\"s\">'Título'</span>, required=<span class=\"k\">True</span>)\n    autor_id = fields.Many2one(<span class=\"s\">'res.partner'</span>, string=<span class=\"s\">'Autor'</span>)\n    paginas = fields.Integer()\n    precio = fields.Float()\n    precio_iva = fields.Float(compute=<span class=\"s\">'_calc_iva'</span>, store=<span class=\"k\">True</span>)\n\n    @api.depends(<span class=\"s\">'precio'</span>)\n    <span class=\"k\">def</span> _calc_iva(self):\n        <span class=\"k\">for</span> r <span class=\"k\">in</span> self:\n            r.precio_iva = r.precio * 1.04     <span class=\"c\"># IVA superreducido de los libros</span></code></pre>\n<pre><code>&lt;record id=<span class=\"s\">\"libro_list\"</span> model=<span class=\"s\">\"ir.ui.view\"</span>&gt;\n  &lt;field name=<span class=\"s\">\"model\"</span>&gt;biblioteca.libro&lt;/field&gt;\n  &lt;field name=<span class=\"s\">\"arch\"</span> type=<span class=\"s\">\"xml\"</span>&gt;\n    &lt;list&gt;&lt;field name=<span class=\"s\">\"name\"</span>/&gt;&lt;field name=<span class=\"s\">\"autor_id\"</span>/&gt;&lt;field name=<span class=\"s\">\"precio_iva\"</span>/&gt;&lt;/list&gt;\n  &lt;/field&gt;\n&lt;/record&gt;</code></pre>\n<p>También hacen falta una <b>acción</b> y un <b>menú</b> en el XML, y una línea en <code>ir.model.access.csv</code> que dé permisos a algún grupo; sin ella, nadie puede ver el modelo.</p>\n<p>Tipos de campo relacionales: <code>Many2one</code> relaciona un registro con <b>uno</b> de otro modelo (un libro con su autor); <code>One2many</code> es el lado inverso (un autor con sus libros); <code>Many2many</code>, muchos con muchos.</p>\n",
   "check": {
    "q": "¿Qué tipo de campo de Odoo relaciona un libro con un único autor?",
    "o": [
     "One2many",
     "Many2one",
     "Many2many",
     "Char"
    ],
    "a": 1,
    "e": "Many2one equivale a una clave foránea."
   }
  },
  {
   "h": "Heredar y ampliar",
   "html": "\n<p>Para añadir campos a un modelo que ya existe (por ejemplo, clientes) no se modifica Odoo: se <b>hereda</b>.</p>\n<pre><code><span class=\"k\">class</span> Cliente(models.Model):\n    _inherit = <span class=\"s\">'res.partner'</span>\n    socio_biblioteca = fields.Boolean()</code></pre>\n<p>Las vistas existentes se amplían también por herencia, con <b>XPath</b> para indicar dónde insertar el campo nuevo:</p>\n<pre><code>&lt;xpath expr=<span class=\"s\">\"//field[@name='email']\"</span> position=<span class=\"s\">\"after\"</span>&gt;\n  &lt;field name=<span class=\"s\">\"socio_biblioteca\"</span>/&gt;\n&lt;/xpath&gt;</code></pre>\n<div class=\"caso\"><b>Por qué heredar</b>Si modificas directamente el código de Odoo, la siguiente actualización borra tus cambios. Con módulos y herencia, tus cambios sobreviven a las actualizaciones.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué archivo describe el módulo, sus dependencias y sus datos?",
   "o": [
    "__init__.py",
    "__manifest__.py",
    "models.py",
    "views.xml"
   ],
   "a": 1,
   "e": "Odoo lo lee para instalar el módulo."
  },
  {
   "q": "¿Qué atributo de la clase indica el nombre técnico del modelo?",
   "o": [
    "_table",
    "_name",
    "_id",
    "_model"
   ],
   "a": 1,
   "e": "Por ejemplo, 'biblioteca.libro'."
  },
  {
   "q": "¿Qué ocurre si falta la línea en ir.model.access.csv?",
   "o": [
    "Nada",
    "Ningún usuario puede acceder al modelo",
    "Se borra la base de datos",
    "Odoo no arranca"
   ],
   "a": 1,
   "e": "Define los permisos de lectura, escritura, creación y borrado por grupo."
  },
  {
   "q": "¿Qué decorador indica de qué campos depende un campo calculado?",
   "o": [
    "@api.depends",
    "@api.model",
    "@property",
    "@compute"
   ],
   "a": 0,
   "e": "Se recalcula cuando cambian esos campos."
  },
  {
   "q": "¿Cómo se añade un campo a un modelo existente como res.partner?",
   "o": [
    "Editando el código de Odoo",
    "Con _inherit en un módulo propio",
    "Con SQL",
    "No se puede"
   ],
   "a": 1,
   "e": "Así los cambios sobreviven a las actualizaciones."
  },
  {
   "q": "¿Qué se usa en una vista heredada para indicar dónde insertar un campo?",
   "o": [
    "CSS",
    "XPath",
    "JSON",
    "SQL"
   ],
   "a": 1,
   "e": "Por ejemplo, después del campo email."
  }
 ]
});
