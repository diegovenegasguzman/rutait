TEMA("multimedia", {
 "title": "Imagen y vídeo digital",
 "mins": 13,
 "intro": "Lo que hay que saber para trabajar con imágenes y vídeos: resolución, formatos, compresión, y las operaciones básicas de edición con programas libres.",
 "sections": [
  {
   "h": "La imagen digital",
   "html": "\n<p>Hay dos formas de guardar una imagen en el ordenador, y cada una sirve para cosas distintas.</p>\n<ul>\n<li><b>Mapa de bits:</b> la imagen es una cuadrícula de píxeles (fotos). Al ampliarla, se pixela.</li>\n<li><b>Vectorial:</b> la imagen se describe con formas matemáticas (logotipos, iconos). Se amplía sin perder calidad.</li>\n<li><b>Resolución:</b> número de píxeles (1920 × 1080). Para imprimir importa la densidad: unos 300 ppp para calidad fotográfica.</li>\n<li><b>Modelos de color:</b> <b>RGB</b> para pantallas y <b>CMYK</b> para imprenta.</li>\n</ul>\n<table>\n<tr><th>Formato</th><th>Compresión</th><th>Uso</th></tr>\n<tr><td>JPEG</td><td>Con pérdida</td><td>Fotografías</td></tr>\n<tr><td>PNG</td><td>Sin pérdida, con transparencia</td><td>Capturas, logotipos, gráficos</td></tr>\n<tr><td>WebP / AVIF</td><td>Con o sin pérdida, muy eficientes</td><td>Imágenes para web</td></tr>\n<tr><td>SVG</td><td>Vectorial</td><td>Iconos y logotipos web</td></tr>\n<tr><td>GIF</td><td>Sin pérdida, 256 colores</td><td>Animaciones sencillas</td></tr>\n</table>\n<p>Para un logotipo con fondo transparente en una web, la mejor opción es <b>SVG</b> (vectorial, nítido a cualquier tamaño) o <b>PNG</b>, que admite transparencia. JPG no la admite.</p>\n",
   "check": {
    "q": "¿Qué formato elegirías para un logotipo con fondo transparente en una web?",
    "o": [
     "JPEG",
     "PNG o SVG",
     "BMP",
     "GIF de 256 colores"
    ],
    "a": 1,
    "e": "JPEG no admite transparencia; SVG además se ve nítido a cualquier tamaño."
   }
  },
  {
   "h": "Editar imágenes",
   "html": "\n<p>Programas: <b>GIMP</b> (libre), Photoshop; <b>Inkscape</b> (libre) e Illustrator para vectores.</p>\n<ul>\n<li><b>Recortar</b> y <b>redimensionar</b> (manteniendo la proporción).</li>\n<li>Ajustar <b>brillo, contraste</b> y niveles.</li>\n<li>Trabajar con <b>capas</b>: cada elemento en su capa, para modificarlo sin tocar el resto.</li>\n<li>Exportar en el formato y tamaño adecuados al destino: una foto de 12 MB no debe ir así a una web.</li>\n</ul>\n<p>Las <b>capas</b> funcionan como hojas transparentes superpuestas: cada elemento va en la suya y se puede editar sin afectar al resto.</p>\n"
  },
  {
   "h": "Vídeo digital",
   "html": "\n<p>Un vídeo es una secuencia de imágenes con sonido. Ocupa muchísimo, así que siempre se comprime.</p>\n<ul>\n<li><b>Resolución</b> (720p, 1080p, 4K) y <b>fotogramas por segundo</b> (25, 30, 60 fps).</li>\n<li>El archivo es un <b>contenedor</b> (MP4, MKV, WebM) con pistas comprimidas por <b>códecs</b> (H.264, H.265, AV1 para vídeo; AAC u Opus para audio).</li>\n<li>Edición: <b>Shotcut</b>, <b>Kdenlive</b> u OpenShot (libres), DaVinci Resolve. Operaciones básicas: cortar, unir clips, transiciones, títulos, ajustar audio y exportar.</li>\n<li><b>OBS Studio</b> graba la pantalla o emite en directo.</li>\n<li><b>HandBrake</b> o FFmpeg convierten y comprimen vídeos.</li>\n</ul>\n<div class=\"caso\"><b>Caso real</b>Un profesor no puede subir un vídeo de 2 GB a la plataforma. Con HandBrake, convirtiéndolo a 1080p en H.264 con una calidad razonable, ocupa 250 MB y se ve igual de bien.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué tipo de imagen se puede ampliar sin perder calidad?",
   "o": [
    "Mapa de bits",
    "Vectorial",
    "JPEG",
    "Captura de pantalla"
   ],
   "a": 1,
   "e": "Se describe con formas, no con píxeles."
  },
  {
   "q": "¿Qué modelo de color se usa en imprenta?",
   "o": [
    "RGB",
    "CMYK",
    "HSV",
    "Hexadecimal"
   ],
   "a": 1,
   "e": "Cian, magenta, amarillo y negro."
  },
  {
   "q": "¿Qué formato usa compresión con pérdida y es ideal para fotos?",
   "o": [
    "PNG",
    "JPEG",
    "SVG",
    "GIF"
   ],
   "a": 1,
   "e": "Reduce mucho el tamaño a costa de algo de calidad."
  },
  {
   "q": "¿Para qué sirven las capas en un editor de imágenes?",
   "o": [
    "Para comprimir",
    "Para editar cada elemento sin afectar al resto",
    "Para imprimir",
    "Para cambiar el formato"
   ],
   "a": 1,
   "e": "Es la base de la edición no destructiva."
  },
  {
   "q": "¿Qué programa libre graba la pantalla o emite en directo?",
   "o": [
    "GIMP",
    "OBS Studio",
    "Inkscape",
    "Excel"
   ],
   "a": 1,
   "e": "Muy usado para tutoriales y streaming."
  },
  {
   "q": "¿Qué herramienta convierte y comprime vídeos?",
   "o": [
    "HandBrake",
    "Wireshark",
    "GLPI",
    "Notepad"
   ],
   "a": 0,
   "e": "También FFmpeg desde la línea de comandos."
  }
 ]
});
