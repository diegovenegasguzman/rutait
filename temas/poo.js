TEMA("poo", {
title:"Programación orientada a objetos", mins:18,
intro:"Las ideas que organizan casi todo el software actual: clases y objetos, constructores, encapsulación, herencia y polimorfismo, con ejemplos en Java.",
sections:[
{h:"Clases y objetos", html:`
<p>Una <b>clase</b> es un molde que describe cómo es y qué hace un tipo de cosa. Un <b>objeto</b> es un elemento concreto creado a partir de ese molde (una <b>instancia</b>).</p>
<ul>
<li><b>Atributos:</b> los datos que tiene cada objeto (el titular y el saldo de una cuenta).</li>
<li><b>Métodos:</b> lo que puede hacer (ingresar, retirar).</li>
</ul>
<pre><code><span class="k">public class</span> Cuenta {
    <span class="k">private</span> String titular;
    <span class="k">private double</span> saldo;

    <span class="k">public</span> Cuenta(String titular) {    <span class="c">// constructor</span>
        <span class="k">this</span>.titular = titular;
        <span class="k">this</span>.saldo = <span class="s">0</span>;
    }

    <span class="k">public void</span> ingresar(<span class="k">double</span> cantidad) {
        saldo += cantidad;
    }
}

Cuenta c = <span class="k">new</span> Cuenta(<span class="s">"Laia"</span>);   <span class="c">// crear un objeto</span>
c.ingresar(<span class="s">100</span>);</code></pre>
<p>El <b>constructor</b> se ejecuta al crear el objeto con <code>new</code>. Tiene el mismo nombre que la clase y no lleva tipo de retorno. <code>this</code> se refiere al propio objeto.</p>`},
{h:"Encapsulación", html:`
<p>Encapsular es <b>ocultar los datos internos</b> y permitir modificarlos solo a través de métodos que comprueban que el cambio es correcto.</p>
<table>
<tr><th>Modificador</th><th>Accesible desde</th></tr>
<tr><td><code>private</code></td><td>Solo la propia clase</td></tr>
<tr><td>(sin modificador)</td><td>Las clases del mismo paquete</td></tr>
<tr><td><code>protected</code></td><td>El paquete y las clases hijas</td></tr>
<tr><td><code>public</code></td><td>Cualquier clase</td></tr>
</table>
<pre><code><span class="k">public double</span> getSaldo() { <span class="k">return</span> saldo; }   <span class="c">// getter</span>

<span class="k">public boolean</span> retirar(<span class="k">double</span> cantidad) {
    <span class="k">if</span> (cantidad &lt;= <span class="s">0</span> || cantidad &gt; saldo) <span class="k">return false</span>;
    saldo -= cantidad;
    <span class="k">return true</span>;
}</code></pre>
<p>Como <code>saldo</code> es <code>private</code>, nadie puede escribir <code>c.saldo = -500</code>: hay que pasar por <code>retirar()</code>, que impide dejar la cuenta en negativo.</p>`},
{h:"Herencia", html:`
<p>Una clase puede <b>heredar</b> de otra con <code>extends</code>: recibe sus atributos y métodos y puede añadir otros nuevos.</p>
<pre><code><span class="k">public class</span> CuentaAhorro <span class="k">extends</span> Cuenta {
    <span class="k">private double</span> interes;

    <span class="k">public</span> CuentaAhorro(String titular, <span class="k">double</span> interes) {
        <span class="k">super</span>(titular);          <span class="c">// llama al constructor de Cuenta</span>
        <span class="k">this</span>.interes = interes;
    }

    <span class="k">public void</span> aplicarInteres() {
        ingresar(getSaldo() * interes);
    }
}</code></pre>
<ul>
<li><code>super</code> llama al constructor o a los métodos de la clase padre.</li>
<li>En Java, una clase solo puede heredar de <b>una</b> clase, pero puede implementar <b>varias interfaces</b>.</li>
<li>Todas las clases heredan, directa o indirectamente, de <code>Object</code>.</li>
</ul>`},
{h:"Polimorfismo e interfaces", html:`
<p>Una clase hija puede <b>sobrescribir</b> un método del padre para cambiar su comportamiento. Se marca con <code>@Override</code>:</p>
<pre><code><span class="k">public class</span> Animal {
    <span class="k">public</span> String sonido() { <span class="k">return</span> <span class="s">"..."</span>; }
}
<span class="k">public class</span> Perro <span class="k">extends</span> Animal {
    @Override <span class="k">public</span> String sonido() { <span class="k">return</span> <span class="s">"Guau"</span>; }
}

Animal a = <span class="k">new</span> Perro();
System.out.println(a.sonido());   <span class="c">// Guau</span></code></pre>
<p>Eso es <b>polimorfismo</b>: una variable de tipo <code>Animal</code> ejecuta el método del objeto real que contiene.</p>
<p>Una <b>interfaz</b> define qué métodos debe tener una clase, sin decir cómo se hacen. Las clases la <b>implementan</b> con <code>implements</code>:</p>
<pre><code><span class="k">public interface</span> Pagable { <span class="k">double</span> calcularPago(); }
<span class="k">public class</span> Factura <span class="k">implements</span> Pagable { ... }</code></pre>`}
],
quiz:[
{q:"¿Qué es un objeto?", o:["Un tipo de variable","Una instancia de una clase","Un método especial","Un paquete"], a:1, e:"La clase es el molde y el objeto, un elemento concreto creado con new."},
{q:"¿Qué característica tiene un constructor en Java?", o:["Devuelve void","Tiene el mismo nombre que la clase y no lleva tipo de retorno","Es siempre private","Se llama main"], a:1, e:"Se ejecuta automáticamente al crear el objeto."},
{q:"¿Desde dónde se puede acceder a un atributo private?", o:["Desde cualquier clase","Solo desde la propia clase","Desde las clases hijas","Desde el mismo paquete"], a:1, e:"private es el modificador más restrictivo."},
{q:"¿Qué palabra se usa en Java para heredar de una clase?", o:["implements","inherits","extends","super"], a:2, e:"extends para clases; implements para interfaces."},
{q:"¿Puede una clase Java heredar de dos clases a la vez?", o:["Sí","No, solo de una, aunque puede implementar varias interfaces","Solo si son abstractas","Solo con super"], a:1, e:"Java no permite herencia múltiple de clases."},
{q:"¿Para qué sirve @Override?", o:["Para crear un objeto","Para indicar que un método sobrescribe al del padre","Para hacer un atributo privado","Para importar una clase"], a:1, e:"El compilador comprueba que realmente existe ese método en la clase padre."},
{q:"¿Qué muestra este código?", code:"Animal a = new Perro();\nSystem.out.println(a.sonido());", o:["...","Guau","Error de compilación","null"], a:1, e:"Por polimorfismo se ejecuta el método del objeto real, que es un Perro."},
{q:"¿Qué hace super(titular) dentro de un constructor?", o:["Crea un objeto nuevo","Llama al constructor de la clase padre","Hace el atributo público","Termina el programa"], a:1, e:"Inicializa la parte heredada del objeto."}
]});
