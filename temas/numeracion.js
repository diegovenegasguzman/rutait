TEMA("numeracion", {
 "title": "Sistemas de numeración y unidades",
 "mins": 12,
 "intro": "Por qué los ordenadores trabajan en binario, cómo convertir entre decimal, binario y hexadecimal, y por qué tu disco de 1 TB aparece como 931 GB.",
 "sections": [
  {
   "h": "Por qué binario",
   "html": "\n      <p>Los circuitos de un ordenador solo distinguen dos estados eléctricos: hay tensión o no hay. Representamos esos estados con <code>1</code> y <code>0</code>. Cada dígito es un <b>bit</b> y 8 bits forman un <b>byte</b>.</p>\n      <p>Igual que en decimal cada posición vale 10 veces más que la anterior (unidades, decenas, centenas), en binario cada posición vale <b>el doble</b>:</p>\n      <table>\n        <tr><th>Posición</th><td>7</td><td>6</td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td><td>0</td></tr>\n        <tr><th>Peso</th><td>128</td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr>\n      </table>\n      <p>Con <i>n</i> bits se pueden representar 2<sup>n</sup> valores. Con 8 bits, 256 valores: del 0 al 255.</p>"
  },
  {
   "h": "De binario a decimal",
   "html": "\n      <p>Suma los pesos de las posiciones donde hay un 1.</p>\n      <div class=\"work\">\n        <div class=\"stepn\"><i>1</i><span>Número: <code>101101</code></span></div>\n        <div class=\"stepn\"><i>2</i><span>Pesos con 1: 32, 8, 4 y 1</span></div>\n        <div class=\"stepn\"><i>3</i><span>32 + 8 + 4 + 1 = <b>45</b></span></div>\n      </div>"
  },
  {
   "h": "De decimal a binario",
   "html": "\n      <p>Divide entre 2 una y otra vez y apunta los restos. El resultado se lee <b>de abajo arriba</b>.</p>\n      <table>\n        <tr><th>División</th><th>Cociente</th><th>Resto</th></tr>\n        <tr><td>45 ÷ 2</td><td>22</td><td>1</td></tr>\n        <tr><td>22 ÷ 2</td><td>11</td><td>0</td></tr>\n        <tr><td>11 ÷ 2</td><td>5</td><td>1</td></tr>\n        <tr><td>5 ÷ 2</td><td>2</td><td>1</td></tr>\n        <tr><td>2 ÷ 2</td><td>1</td><td>0</td></tr>\n        <tr><td>1 ÷ 2</td><td>0</td><td>1</td></tr>\n      </table>\n      <p>Leyendo los restos de abajo arriba: 45 = <code>101101</code>.</p>\n      <div class=\"note\"><b>Truco rápido</b>Para números pequeños es más rápido restar pesos: 45 − 32 = 13; 13 − 8 = 5; 5 − 4 = 1; 1 − 1 = 0. Has usado 32, 8, 4 y 1 → <code>101101</code>.</div>"
  },
  {
   "h": "Hexadecimal",
   "html": "\n      <p>El hexadecimal usa 16 símbolos: del <code>0</code> al <code>9</code> y de la <code>A</code> (10) a la <code>F</code> (15). Se usa porque <b>cada dígito hexadecimal equivale exactamente a 4 bits</b>, así que es una forma corta de escribir binario.</p>\n      <div class=\"work\">\n        <div class=\"stepn\"><i>1</i><span>Binario: <code>1010 1111</code> (separa en grupos de 4)</span></div>\n        <div class=\"stepn\"><i>2</i><span><code>1010</code> = 10 = A, <code>1111</code> = 15 = F</span></div>\n        <div class=\"stepn\"><i>3</i><span>Resultado: <b>AF</b>, que en decimal es 175</span></div>\n      </div>\n      <p>Lo verás constantemente en informática: direcciones MAC (<code>3C:52:82:1A:F0:9B</code>), colores web (<code>#FF0000</code> es rojo), direcciones IPv6 y códigos de error.</p>"
  },
  {
   "h": "Unidades: KB frente a KiB",
   "html": "\n      <p>Hay dos formas de contar las unidades y conviene no mezclarlas:</p>\n      <table>\n        <tr><th>Sistema internacional (base 10)</th><th>Sistema binario (base 2)</th></tr>\n        <tr><td>1 KB = 1.000 bytes</td><td>1 KiB = 1.024 bytes</td></tr>\n        <tr><td>1 MB = 1.000 KB</td><td>1 MiB = 1.024 KiB</td></tr>\n        <tr><td>1 GB = 1.000 MB</td><td>1 GiB = 1.024 MiB</td></tr>\n        <tr><td>1 TB = 1.000 GB</td><td>1 TiB = 1.024 GiB</td></tr>\n      </table>\n      <p>Los fabricantes de discos usan base 10, pero Windows calcula en base 2 aunque escriba «GB». Por eso un disco de 1 TB (10<sup>12</sup> bytes) aparece como unos <b>931 GB</b>: 10<sup>12</sup> ÷ 1.024³ ≈ 931,3.</p>\n      <div class=\"note\"><b>Bits y bytes en redes</b>Las velocidades de conexión se dan en bits por segundo. Una fibra de 600 Mb/s descarga como máximo unos 75 MB/s, porque 600 ÷ 8 = 75.</div>\n<p>Las conexiones se miden en <b>megabits</b> (Mb/s) y las descargas en <b>megabytes</b> (MB/s). Como un byte son 8 bits, hay que dividir entre 8: una conexión de 600 Mb/s descarga como máximo a 75 MB/s.</p>\n"
  }
 ],
 "quiz": [
  {
   "q": "¿Cuál es el número 45 en binario?",
   "o": [
    "101011",
    "101101",
    "110101",
    "100111"
   ],
   "a": 1,
   "e": "32 + 8 + 4 + 1 = 45 → 101101."
  },
  {
   "q": "¿Qué valor decimal tiene el binario 1100?",
   "o": [
    "12",
    "6",
    "14",
    "10"
   ],
   "a": 0,
   "e": "8 + 4 = 12."
  },
  {
   "q": "¿Cuánto vale FF en decimal?",
   "o": [
    "15",
    "16",
    "255",
    "256"
   ],
   "a": 2,
   "e": "F = 15. 15 × 16 + 15 = 255, el valor máximo de un byte."
  },
  {
   "q": "¿Cuántos bits representa un dígito hexadecimal?",
   "o": [
    "2",
    "4",
    "8",
    "16"
   ],
   "a": 1,
   "e": "16 = 2⁴, así que cada dígito hexadecimal equivale a 4 bits."
  },
  {
   "q": "¿Cuántos bytes tiene 1 KiB?",
   "o": [
    "1.000",
    "1.024",
    "1.000.000",
    "8"
   ],
   "a": 1,
   "e": "El prefijo binario kibi equivale a 2¹⁰ = 1.024."
  },
  {
   "q": "Compras un disco de 1 TB. ¿Cuánto mostrará aproximadamente Windows?",
   "o": [
    "1.024 GB",
    "1.000 GB",
    "931 GB",
    "900 GB"
   ],
   "a": 2,
   "e": "Windows calcula en base 2: 10¹² ÷ 1.024³ ≈ 931."
  },
  {
   "q": "¿Qué valor decimal tiene 0x1A?",
   "o": [
    "26",
    "16",
    "110",
    "20"
   ],
   "a": 0,
   "e": "1 × 16 + A (10) = 26."
  },
  {
   "q": "Tu conexión es de 600 Mb/s. ¿Cuál es la velocidad máxima de descarga en MB/s?",
   "o": [
    "600",
    "75",
    "4.800",
    "60"
   ],
   "a": 1,
   "e": "Hay que dividir entre 8 bits por byte: 600 ÷ 8 = 75 MB/s."
  }
 ]
});
