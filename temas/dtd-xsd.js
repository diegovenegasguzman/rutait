TEMA("dtd-xsd", {
title:"Validar XML: DTD y XML Schema", mins:16,
intro:"Cómo definir las reglas que debe cumplir un documento XML (qué elementos lleva, en qué orden, cuántas veces y de qué tipo) y cómo comprobar que las cumple.",
sections:[
{h:"Por qué validar", html:`
<p>Que un XML esté <b>bien formado</b> solo significa que la sintaxis es correcta. Pero si dos programas se intercambian facturas en XML, necesitan acordar algo más: que toda factura lleve número, fecha y al menos una línea, que el importe sea un número…</p>
<p>Esas reglas se escriben en una <b>gramática</b>, y un XML que las cumple es <b>válido</b>. Hay dos formas principales de escribirlas: <b>DTD</b> y <b>XML Schema (XSD)</b>.</p>
<div class="caso"><b>Lo verás en el mundo real</b>Las facturas electrónicas que las empresas envían a la Administración (formato Facturae) son XML que deben validar contra un esquema XSD oficial. Si no lo cumplen, se rechazan.</div>`},
{h:"DTD", html:`
<pre><code>&lt;!DOCTYPE biblioteca [
  &lt;!ELEMENT biblioteca (libro+)&gt;
  &lt;!ELEMENT libro (titulo, autor+, anio?)&gt;
  &lt;!ELEMENT titulo (#PCDATA)&gt;
  &lt;!ELEMENT autor (#PCDATA)&gt;
  &lt;!ELEMENT anio (#PCDATA)&gt;
  &lt;!ATTLIST libro isbn CDATA #REQUIRED
                  idioma CDATA "es"&gt;
]&gt;</code></pre>
<ul>
<li><code>&lt;!ELEMENT&gt;</code> declara un elemento y lo que contiene. <code>#PCDATA</code> significa texto.</li>
<li>La coma indica <b>orden</b>: primero título, luego autor, luego año. La barra <code>|</code> indica <b>alternativa</b>: uno u otro.</li>
<li><code>&lt;!ATTLIST&gt;</code> declara atributos. <code>#REQUIRED</code> es obligatorio; <code>#IMPLIED</code>, opcional; y un valor entre comillas es el valor por defecto.</li>
</ul>
<table>
<tr><th>Símbolo</th><th>Significado</th></tr>
<tr><td>(nada)</td><td>Exactamente una vez</td></tr>
<tr><td><code>?</code></td><td>0 o 1 vez (opcional)</td></tr>
<tr><td><code>*</code></td><td>0 o más veces</td></tr>
<tr><td><code>+</code></td><td>1 o más veces</td></tr>
</table>
<p>La DTD puede ir dentro del XML (interna, como arriba) o en un archivo aparte: <code>&lt;!DOCTYPE biblioteca SYSTEM "biblioteca.dtd"&gt;</code>.</p>`,
check:{q:"Con la DTD de ejemplo, ¿es válido un libro sin el elemento anio?", o:["No, anio es obligatorio","Sí, porque anio lleva ? (0 o 1 vez)","Solo si tiene dos autores","Solo si no tiene isbn"], a:1, e:"El ? indica que el elemento es opcional. Lo que sí es obligatorio es al menos un autor (+) y el atributo isbn."}},
{h:"XML Schema (XSD)", html:`
<p>Un esquema XSD es a su vez un documento XML, y permite mucho más control, sobre todo con los <b>tipos de datos</b>:</p>
<pre><code>&lt;xs:schema xmlns:xs=<span class="s">"http://www.w3.org/2001/XMLSchema"</span>&gt;
  &lt;xs:element name=<span class="s">"libro"</span>&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name=<span class="s">"titulo"</span> type=<span class="s">"xs:string"</span>/&gt;
        &lt;xs:element name=<span class="s">"autor"</span>  type=<span class="s">"xs:string"</span> maxOccurs=<span class="s">"unbounded"</span>/&gt;
        &lt;xs:element name=<span class="s">"anio"</span>   type=<span class="s">"xs:gYear"</span> minOccurs=<span class="s">"0"</span>/&gt;
        &lt;xs:element name=<span class="s">"precio"</span>&gt;
          &lt;xs:simpleType&gt;
            &lt;xs:restriction base=<span class="s">"xs:decimal"</span>&gt;
              &lt;xs:minInclusive value=<span class="s">"0"</span>/&gt;
            &lt;/xs:restriction&gt;
          &lt;/xs:simpleType&gt;
        &lt;/xs:element&gt;
      &lt;/xs:sequence&gt;
      &lt;xs:attribute name=<span class="s">"isbn"</span> type=<span class="s">"xs:string"</span> use=<span class="s">"required"</span>/&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</code></pre>
<ul>
<li><b>complexType:</b> elemento que contiene otros elementos o atributos. <b>simpleType:</b> solo texto, con posibles restricciones.</li>
<li><b>sequence:</b> los hijos van en ese orden. <b>choice:</b> uno de ellos. <b>all:</b> todos, en cualquier orden.</li>
<li><b>minOccurs</b> y <b>maxOccurs:</b> cuántas veces puede aparecer (por defecto, 1 y 1; <code>unbounded</code> es sin límite).</li>
<li><b>Restricciones:</b> <code>minInclusive</code>, <code>maxLength</code>, <code>enumeration</code> (lista de valores permitidos) y <code>pattern</code> (expresión regular, por ejemplo para un DNI).</li>
</ul>`,
check:{q:"En un XSD, ¿cómo indicas que un elemento puede aparecer 0 veces?", o:["maxOccurs=\"0\"","minOccurs=\"0\"","use=\"optional\"","type=\"xs:empty\""], a:1, e:"minOccurs=\"0\" lo hace opcional; maxOccurs fija el máximo."}},
{h:"DTD o XSD", html:`
<table>
<tr><th></th><th>DTD</th><th>XSD</th></tr>
<tr><td>Sintaxis</td><td>Propia, no es XML</td><td>Es un documento XML</td></tr>
<tr><td>Tipos de datos</td><td>Prácticamente solo texto</td><td>Más de 40: enteros, decimales, fechas, booleanos…</td></tr>
<tr><td>Cardinalidad</td><td>?, *, +</td><td>Cualquier número exacto con minOccurs y maxOccurs</td></tr>
<tr><td>Restricciones</td><td>Muy limitadas</td><td>Rangos, longitudes, listas de valores, patrones</td></tr>
<tr><td>Espacios de nombres</td><td>No los admite</td><td>Sí</td></tr>
</table>
<p>DTD es más sencilla y aún se ve en documentos antiguos. Para proyectos nuevos se usa XSD.</p>`},
{h:"Validar en la práctica", html:`
<pre><code>xmllint --noout --dtdvalid biblioteca.dtd biblioteca.xml
xmllint --noout --schema biblioteca.xsd biblioteca.xml</code></pre>
<p>Si el documento es válido, no se muestra nada (o un mensaje de que valida). Si no, se indica la línea y qué regla incumple. También validan editores como <b>XML Copy Editor</b> o Visual Studio Code con una extensión de XML.</p>
<div class="note exam"><b>Error típico en el examen</b>Declarar los hijos en un orden en la DTD o en la <code>sequence</code> del XSD y escribirlos en otro orden en el XML. Con <code>,</code> o <code>sequence</code>, el orden importa.</div>`}
],
quiz:[
{q:"¿Qué significa que un XML sea válido?", o:["Que se abre sin errores","Que está bien formado y cumple una DTD o un esquema","Que tiene raíz","Que está en UTF-8"], a:1, e:"Bien formado es la sintaxis; válido, además, que cumple la gramática."},
{q:"En una DTD, ¿qué significa autor+?", o:["0 o 1 autor","0 o más autores","1 o más autores","Exactamente un autor"], a:2, e:"+ es una o más veces."},
{q:"¿Qué indica #PCDATA en una DTD?", o:["Un atributo","Que el elemento contiene texto","Que el elemento está vacío","Un comentario"], a:1, e:"Parsed Character Data: texto analizable."},
{q:"¿Cómo se declara un atributo obligatorio en una DTD?", o:["#IMPLIED","#REQUIRED","#FIXED","#PCDATA"], a:1, e:"#IMPLIED es opcional; #FIXED, un valor fijo."},
{q:"¿Cuál es una ventaja de XSD sobre DTD?", o:["Es más corto","Tiene tipos de datos como enteros y fechas","No necesita editor","No se puede equivocar"], a:1, e:"XSD permite tipar y restringir los valores."},
{q:"¿Qué elemento de XSD obliga a que los hijos aparezcan en un orden concreto?", o:["xs:choice","xs:all","xs:sequence","xs:group"], a:2, e:"sequence fija el orden; choice permite uno de varios; all, todos en cualquier orden."},
{q:"¿Qué restricción de XSD usarías para limitar los valores a «alta», «media» o «baja»?", o:["pattern","enumeration","maxLength","minInclusive"], a:1, e:"enumeration define la lista de valores permitidos."},
{q:"¿Qué valor de maxOccurs indica que no hay límite?", o:["0","*","unbounded","infinite"], a:2, e:"unbounded = tantas veces como haga falta."}
]});
