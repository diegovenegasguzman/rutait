TEMA("copias-imagenes", {
 "title": "Copias de seguridad e imágenes del sistema",
 "mins": 14,
 "intro": "Qué tipos de copia existen, cómo se planifican para no perder nunca datos y cómo se usan las imágenes de disco para recuperar o desplegar equipos en minutos.",
 "sections": [
  {
   "h": "Tipos de copia",
   "html": "\n<p>Copiar todo cada día es seguro, pero lento y ocupa mucho. Por eso hay tres tipos de copia que se combinan.</p>\n<table>\n<tr><th>Tipo</th><th>Qué copia</th><th>Ventaja</th><th>Inconveniente</th></tr>\n<tr><td>Completa</td><td>Todo, cada vez</td><td>Restaurar es lo más sencillo</td><td>Lenta y ocupa mucho</td></tr>\n<tr><td>Incremental</td><td>Lo que ha cambiado desde la <b>última copia de cualquier tipo</b></td><td>Muy rápida y pequeña</td><td>Para restaurar necesitas la completa y <b>todas</b> las incrementales</td></tr>\n<tr><td>Diferencial</td><td>Lo que ha cambiado desde la <b>última completa</b></td><td>Restaurar solo necesita la completa y la última diferencial</td><td>Cada día ocupa algo más</td></tr>\n</table>\n<p>Una estrategia típica: completa el domingo e incrementales o diferenciales de lunes a sábado.</p>",
   "check": {
    "q": "Completa el domingo y diferenciales el resto de días. El jueves se rompe el disco. ¿Qué necesitas para restaurar?",
    "o": [
     "Solo la del miércoles",
     "La completa del domingo y la diferencial del miércoles",
     "Todas las copias de la semana",
     "Solo la completa"
    ],
    "a": 1,
    "e": "Cada diferencial contiene todo lo cambiado desde la completa, así que basta con la última."
   }
  },
  {
   "h": "Planificar las copias",
   "html": "\n<p>Una buena copia no depende solo de la herramienta, sino de un plan: cuántas copias, dónde y cuántos datos te puedes permitir perder.</p>\n<ul>\n<li><b>Regla 3-2-1:</b> 3 copias, en 2 soportes distintos, 1 fuera de la organización.</li>\n<li><b>RPO</b> (punto de recuperación objetivo): cuántos datos puedes permitirte perder. Si es 1 hora, hay que copiar al menos cada hora.</li>\n<li><b>RTO</b> (tiempo de recuperación objetivo): cuánto tiempo puede estar el servicio caído mientras restauras.</li>\n<li><b>Copia inmutable u offline:</b> una copia que el ransomware no pueda cifrar porque no está conectada o no se puede modificar.</li>\n<li><b>Prueba de restauración</b> periódica: una copia que nunca se ha restaurado puede no servir.</li>\n</ul>\n<p>Al menos una copia debería estar <b>offline</b> (desconectada) o ser <b>inmutable</b> (nadie puede modificarla durante un tiempo): así un ransomware no puede cifrarla. Y una copia que nunca se ha restaurado no garantiza nada: hay que hacer <b>pruebas de restauración</b> periódicas para comprobar que funcionan.</p>\n<div class=\"caso\"><b>Caso real</b>Una empresa sufre ransomware. Tenía copias diarias… en un disco de red conectado al servidor. El ransomware también las cifró. La única que se salvó fue la que se guardaba en la nube con versiones inmutables.</div>"
  },
  {
   "h": "Imágenes de disco",
   "html": "\n<p>Una <b>imagen</b> copia el disco entero, sector a sector o archivo a archivo: sistema operativo, programas, configuración y datos. Restaurarla deja el equipo exactamente como estaba.</p>\n<ul>\n<li><b>Clonezilla:</b> libre; clona discos o crea imágenes y puede desplegar una imagen a muchos equipos a la vez por red (multicast).</li>\n<li><b>Copia de seguridad de Windows</b> y herramientas como Veeam Agent permiten crear imágenes programadas.</li>\n<li><b>Imagen maestra:</b> para desplegar equipos iguales. En Windows se prepara con <b>Sysprep</b> antes de capturarla.</li>\n</ul>"
  },
  {
   "h": "Herramientas en Linux y Windows",
   "html": "\n<pre><code><span class=\"c\"># Linux: copia comprimida de una carpeta</span>\ntar -czf /backup/home-$(date +%F).tar.gz /home\n\n<span class=\"c\"># Linux: sincronizar una carpeta con otra (solo copia lo que cambia)</span>\nrsync -av --delete /datos/ /mnt/backup/datos/\n\n<span class=\"c\"># Windows: copia robusta de carpetas, con reintentos</span>\nrobocopy C:\\Datos E:\\Backup\\Datos /MIR /R:2 /W:5</code></pre>\n<p>Con <code>rsync --delete</code> y <code>robocopy /MIR</code>, el destino queda como un <b>espejo</b>: si borras algo en el origen, también se borra en la copia. Por eso un espejo no sustituye a una copia con versiones.</p>\n<p>La opción <code>/MIR</code> de robocopy crea un <b>espejo exacto</b> del origen, borrados incluidos: si un archivo desaparece del origen, también desaparece del destino.</p>\n",
   "check": {
    "q": "Borras sin querer un archivo y esa noche se ejecuta rsync --delete. ¿Qué pasa con la copia?",
    "o": [
     "El archivo sigue en la copia",
     "El archivo también desaparece de la copia",
     "rsync da error",
     "Se duplica"
    ],
    "a": 1,
    "e": "--delete hace que el destino sea un espejo exacto del origen, borrados incluidos."
   }
  }
 ],
 "quiz": [
  {
   "q": "¿Qué copia la copia incremental?",
   "o": [
    "Todo",
    "Lo cambiado desde la última copia de cualquier tipo",
    "Lo cambiado desde la última completa",
    "Solo el sistema"
   ],
   "a": 1,
   "e": "Es la más rápida, pero para restaurar necesitas toda la cadena."
  },
  {
   "q": "¿Qué copia la copia diferencial?",
   "o": [
    "Todo",
    "Lo cambiado desde la última completa",
    "Lo cambiado desde la última incremental",
    "Solo los archivos nuevos"
   ],
   "a": 1,
   "e": "Crece cada día hasta la siguiente completa."
  },
  {
   "q": "¿Qué indica el RPO?",
   "o": [
    "El tiempo para restaurar",
    "Cuántos datos puedes permitirte perder",
    "El número de copias",
    "El tamaño de la copia"
   ],
   "a": 1,
   "e": "Marca cada cuánto hay que hacer copias."
  },
  {
   "q": "¿Qué indica el RTO?",
   "o": [
    "Cuántos datos se pierden",
    "Cuánto tiempo puede estar caído el servicio mientras se restaura",
    "El número de discos",
    "La velocidad de la red"
   ],
   "a": 1,
   "e": "Recovery Time Objective."
  },
  {
   "q": "¿Por qué conviene tener una copia offline o inmutable?",
   "o": [
    "Porque es más rápida",
    "Porque el ransomware no puede cifrarla",
    "Porque ocupa menos",
    "Por la garantía"
   ],
   "a": 1,
   "e": "Si la copia está conectada y es modificable, el ransomware la cifra también."
  },
  {
   "q": "¿Qué herramienta libre clona discos y despliega imágenes por red?",
   "o": [
    "Clonezilla",
    "Wireshark",
    "Squid",
    "GLPI"
   ],
   "a": 0,
   "e": "Clonezilla permite incluso desplegar a muchos equipos a la vez."
  },
  {
   "q": "¿Qué hace robocopy con la opción /MIR?",
   "o": [
    "Comprime",
    "Crea un espejo exacto del origen, borrados incluidos",
    "Cifra los archivos",
    "Solo copia los nuevos"
   ],
   "a": 1,
   "e": "Útil para sincronizar, pero no conserva versiones antiguas."
  },
  {
   "q": "¿Qué falta en una estrategia de copias que nunca se ha restaurado?",
   "o": [
    "Nada",
    "La prueba de que funcionan",
    "Un antivirus",
    "Más discos"
   ],
   "a": 1,
   "e": "Hay que probar periódicamente que se pueden restaurar."
  }
 ]
});
