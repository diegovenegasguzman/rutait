TEMA("xpath-xslt", {
title:"Transformar XML con XPath y XSLT", mins:16,
intro:"Cómo seleccionar exactamente los datos que necesitas de un XML con XPath y cómo convertir un XML en una página HTML, en otro XML o en texto con XSLT.",
sections:[
{h:"El documento de ejemplo", html:`
<pre><code>&lt;tienda&gt;
  &lt;producto id=<span class="s">"p1"</span> categoria=<span class="s">"perifericos"</span>&gt;
    &lt;nombre&gt;Ratón&lt;/nombre&gt;&lt;precio&gt;15.90&lt;/precio&gt;&lt;stock&gt;40&lt;/stock&gt;
  &lt;/producto&gt;
  &lt;producto id=<span class="s">"p2"</span> categoria=<span class="s">"pantallas"</span>&gt;
    &lt;nombre&gt;Monitor 24&lt;/nombre&gt;&lt;precio&gt;139&lt;/precio&gt;&lt;stock&gt;0&lt;/stock&gt;
  &lt;/producto&gt;
  &lt;producto id=<span class="s">"p3"</span> categoria=<span class="s">"perifericos"</span>&gt;
    &lt;nombre&gt;Teclado&lt;/nombre&gt;&lt;precio&gt;29&lt;/precio&gt;&lt;stock&gt;12&lt;/stock&gt;
  &lt;/producto&gt;
&lt;/tienda&gt;</code></pre>`},
{h:"XPath: seleccionar nodos", html:`
<table>
<tr><th>Expresión</th><th>Resultado</th></tr>
<tr><td><code>/tienda/producto/nombre</code></td><td>Los tres nombres</td></tr>
<tr><td><code>//nombre</code></td><td>Todos los nombres, estén donde estén</td></tr>
<tr><td><code>//producto/@id</code></td><td>Los atributos id: p1, p2, p3</td></tr>
<tr><td><code>//producto[1]</code></td><td>El primer producto (en XPath se cuenta desde 1)</td></tr>
<tr><td><code>//producto[last()]</code></td><td>El último producto</td></tr>
<tr><td><code>//producto[stock=0]/nombre</code></td><td>Monitor 24</td></tr>
<tr><td><code>//producto[@categoria='perifericos' and precio&lt;20]</code></td><td>El ratón</td></tr>
<tr><td><code>count(//producto)</code></td><td>3</td></tr>
<tr><td><code>sum(//precio)</code></td><td>183.9</td></tr>
</table>
<p>Lo que va entre corchetes es un <b>predicado</b>: una condición que filtra los nodos. La <code>@</code> indica un atributo.</p>`,
check:{q:"¿Qué devuelve //producto[precio>20]/nombre con el documento de ejemplo?", o:["Ratón","Monitor 24 y Teclado","Los tres","Ninguno"], a:1, e:"El monitor (139) y el teclado (29) cuestan más de 20; el ratón, 15,90."}},
{h:"XSLT: transformar a HTML", html:`
<p>Una hoja <b>XSLT</b> es un XML con <b>plantillas</b> que indican qué generar cuando se encuentra cada nodo:</p>
<pre><code>&lt;xsl:stylesheet version=<span class="s">"1.0"</span> xmlns:xsl=<span class="s">"http://www.w3.org/1999/XSL/Transform"</span>&gt;
  &lt;xsl:template match=<span class="s">"/"</span>&gt;
    &lt;html&gt;&lt;body&gt;
      &lt;h1&gt;Catálogo&lt;/h1&gt;
      &lt;table&gt;
        &lt;tr&gt;&lt;th&gt;Producto&lt;/th&gt;&lt;th&gt;Precio&lt;/th&gt;&lt;/tr&gt;
        &lt;xsl:for-each select=<span class="s">"tienda/producto"</span>&gt;
          &lt;xsl:sort select=<span class="s">"precio"</span> data-type=<span class="s">"number"</span>/&gt;
          &lt;tr&gt;
            &lt;td&gt;&lt;xsl:value-of select=<span class="s">"nombre"</span>/&gt;&lt;/td&gt;
            &lt;td&gt;&lt;xsl:value-of select=<span class="s">"precio"</span>/&gt; €&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/xsl:for-each&gt;
      &lt;/table&gt;
    &lt;/body&gt;&lt;/html&gt;
  &lt;/xsl:template&gt;
&lt;/xsl:stylesheet&gt;</code></pre>
<table>
<tr><th>Instrucción</th><th>Qué hace</th></tr>
<tr><td><code>xsl:template match</code></td><td>Define qué generar para los nodos que coinciden</td></tr>
<tr><td><code>xsl:value-of select</code></td><td>Escribe el valor de un nodo</td></tr>
<tr><td><code>xsl:for-each select</code></td><td>Repite para cada nodo seleccionado</td></tr>
<tr><td><code>xsl:sort</code></td><td>Ordena dentro de un for-each</td></tr>
<tr><td><code>xsl:if test</code></td><td>Condición simple</td></tr>
<tr><td><code>xsl:choose / when / otherwise</code></td><td>Condición con varias opciones</td></tr>
</table>`},
{h:"Condiciones y cómo ejecutarlo", html:`
<pre><code>&lt;xsl:choose&gt;
  &lt;xsl:when test=<span class="s">"stock = 0"</span>&gt;&lt;td class=<span class="s">"agotado"</span>&gt;Agotado&lt;/td&gt;&lt;/xsl:when&gt;
  &lt;xsl:when test=<span class="s">"stock &amp;lt; 15"</span>&gt;&lt;td&gt;Últimas unidades&lt;/td&gt;&lt;/xsl:when&gt;
  &lt;xsl:otherwise&gt;&lt;td&gt;Disponible&lt;/td&gt;&lt;/xsl:otherwise&gt;
&lt;/xsl:choose&gt;</code></pre>
<p>Dentro de un XSLT, el símbolo <code>&lt;</code> se escribe <code>&amp;lt;</code>, porque la hoja es XML y si no, estaría mal formada.</p>
<p>Para aplicar la transformación:</p>
<ul>
<li>Desde la línea de comandos: <code>xsltproc catalogo.xsl tienda.xml &gt; catalogo.html</code></li>
<li>En el propio XML, enlazando la hoja para que la aplique el navegador: <code>&lt;?xml-stylesheet type="text/xsl" href="catalogo.xsl"?&gt;</code></li>
</ul>
<div class="caso"><b>Lo verás en el mundo real</b>Las facturas electrónicas en XML se convierten con XSLT en una versión legible o en PDF para el cliente.</div>`,
check:{q:"¿Cómo se escribe la condición «stock menor que 15» dentro de un atributo test de XSLT?", o:["stock < 15","stock &lt; 15","stock -lt 15","stock less 15"], a:1, e:"La hoja XSLT es XML: el carácter < debe escaparse como &lt;."}}
],
quiz:[
{q:"¿Qué selecciona //nombre?", o:["Solo el primer nombre","Todos los elementos nombre del documento","El atributo nombre","Nada"], a:1, e:"// busca en cualquier nivel del documento."},
{q:"¿Qué símbolo indica un atributo en XPath?", o:["#","@","$","&"], a:1, e:"//producto/@id selecciona el atributo id."},
{q:"¿Desde qué número se cuenta la posición en XPath?", o:["0","1","-1","Depende"], a:1, e:"//producto[1] es el primero."},
{q:"¿Qué es un predicado en XPath?", o:["Un comentario","Una condición entre corchetes que filtra nodos","Una función","Un espacio de nombres"], a:1, e:"Por ejemplo [stock=0]."},
{q:"¿Qué función de XPath cuenta los nodos?", o:["sum()","count()","length()","size()"], a:1, e:"count(//producto) devuelve 3."},
{q:"¿Qué instrucción XSLT escribe el valor de un nodo?", o:["xsl:print","xsl:value-of","xsl:write","xsl:echo"], a:1, e:"<xsl:value-of select=\"nombre\"/>."},
{q:"¿Qué instrucción XSLT repite un bloque para cada nodo?", o:["xsl:loop","xsl:for-each","xsl:repeat","xsl:while"], a:1, e:"Se combina con xsl:sort para ordenar."},
{q:"¿Qué herramienta de línea de comandos aplica una hoja XSLT?", o:["xmllint","xsltproc","xpath","grep"], a:1, e:"xsltproc hoja.xsl documento.xml."}
]});
