TEMA("odoo-modulos", {
title:"Desarrollo de componentes para un ERP: módulos de Odoo", mins:15,
intro:"Cómo ampliar Odoo con un módulo propio: estructura, modelos y campos en Python, vistas y menús en XML, permisos, herencia de modelos existentes y campos calculados.",
sections:[
{h:"Estructura del módulo", html:`
<pre><code>biblioteca/
├── __init__.py               <span class="c"># from . import models</span>
├── __manifest__.py
├── models/__init__.py, libro.py
├── views/libro_views.xml
└── security/ir.model.access.csv</code></pre>
<pre><code><span class="c"># __manifest__.py</span>
{
    <span class="s">'name'</span>: <span class="s">'Biblioteca'</span>,
    <span class="s">'version'</span>: <span class="s">'1.0'</span>,
    <span class="s">'depends'</span>: [<span class="s">'base'</span>],
    <span class="s">'data'</span>: [<span class="s">'security/ir.model.access.csv'</span>, <span class="s">'views/libro_views.xml'</span>],
    <span class="s">'application'</span>: <span class="k">True</span>,
}</code></pre>
<p>El esqueleto se puede crear con <code>odoo scaffold biblioteca addons/</code>. El módulo se copia en la carpeta de addons, se actualiza la lista de aplicaciones y se instala.</p>`},
{h:"Modelos y vistas", html:`
<pre><code><span class="k">from</span> odoo <span class="k">import</span> models, fields, api

<span class="k">class</span> Libro(models.Model):
    _name = <span class="s">'biblioteca.libro'</span>
    _description = <span class="s">'Libro'</span>

    name = fields.Char(<span class="s">'Título'</span>, required=<span class="k">True</span>)
    autor_id = fields.Many2one(<span class="s">'res.partner'</span>, string=<span class="s">'Autor'</span>)
    paginas = fields.Integer()
    precio = fields.Float()
    precio_iva = fields.Float(compute=<span class="s">'_calc_iva'</span>, store=<span class="k">True</span>)

    @api.depends(<span class="s">'precio'</span>)
    <span class="k">def</span> _calc_iva(self):
        <span class="k">for</span> r <span class="k">in</span> self:
            r.precio_iva = r.precio * 1.04     <span class="c"># IVA superreducido de los libros</span></code></pre>
<pre><code>&lt;record id=<span class="s">"libro_list"</span> model=<span class="s">"ir.ui.view"</span>&gt;
  &lt;field name=<span class="s">"model"</span>&gt;biblioteca.libro&lt;/field&gt;
  &lt;field name=<span class="s">"arch"</span> type=<span class="s">"xml"</span>&gt;
    &lt;list&gt;&lt;field name=<span class="s">"name"</span>/&gt;&lt;field name=<span class="s">"autor_id"</span>/&gt;&lt;field name=<span class="s">"precio_iva"</span>/&gt;&lt;/list&gt;
  &lt;/field&gt;
&lt;/record&gt;</code></pre>
<p>También hacen falta una <b>acción</b> y un <b>menú</b> en el XML, y una línea en <code>ir.model.access.csv</code> que dé permisos a algún grupo; sin ella, nadie puede ver el modelo.</p>`,
check:{q:"¿Qué tipo de campo de Odoo relaciona un libro con un único autor?", o:["One2many","Many2one","Many2many","Char"], a:1, e:"Many2one equivale a una clave foránea."}},
{h:"Heredar y ampliar", html:`
<p>Para añadir campos a un modelo que ya existe (por ejemplo, clientes) no se modifica Odoo: se <b>hereda</b>.</p>
<pre><code><span class="k">class</span> Cliente(models.Model):
    _inherit = <span class="s">'res.partner'</span>
    socio_biblioteca = fields.Boolean()</code></pre>
<p>Las vistas existentes se amplían también por herencia, con <b>XPath</b> para indicar dónde insertar el campo nuevo:</p>
<pre><code>&lt;xpath expr=<span class="s">"//field[@name='email']"</span> position=<span class="s">"after"</span>&gt;
  &lt;field name=<span class="s">"socio_biblioteca"</span>/&gt;
&lt;/xpath&gt;</code></pre>
<div class="caso"><b>Por qué heredar</b>Si modificas directamente el código de Odoo, la siguiente actualización borra tus cambios. Con módulos y herencia, tus cambios sobreviven a las actualizaciones.</div>`}
],
quiz:[
{q:"¿Qué archivo describe el módulo, sus dependencias y sus datos?", o:["__init__.py","__manifest__.py","models.py","views.xml"], a:1, e:"Odoo lo lee para instalar el módulo."},
{q:"¿Qué atributo de la clase indica el nombre técnico del modelo?", o:["_table","_name","_id","_model"], a:1, e:"Por ejemplo, 'biblioteca.libro'."},
{q:"¿Qué ocurre si falta la línea en ir.model.access.csv?", o:["Nada","Ningún usuario puede acceder al modelo","Se borra la base de datos","Odoo no arranca"], a:1, e:"Define los permisos de lectura, escritura, creación y borrado por grupo."},
{q:"¿Qué decorador indica de qué campos depende un campo calculado?", o:["@api.depends","@api.model","@property","@compute"], a:0, e:"Se recalcula cuando cambian esos campos."},
{q:"¿Cómo se añade un campo a un modelo existente como res.partner?", o:["Editando el código de Odoo","Con _inherit en un módulo propio","Con SQL","No se puede"], a:1, e:"Así los cambios sobreviven a las actualizaciones."},
{q:"¿Qué se usa en una vista heredada para indicar dónde insertar un campo?", o:["CSS","XPath","JSON","SQL"], a:1, e:"Por ejemplo, después del campo email."}
]});
