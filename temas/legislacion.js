TEMA("legislacion", {
 "title": "Legislación sobre seguridad y protección de datos",
 "mins": 13,
 "intro": "Las normas que todo técnico de sistemas debe conocer en España: protección de datos, servicios de Internet, Esquema Nacional de Seguridad, NIS2 y delitos informáticos.",
 "sections": [
  {
   "h": "Protección de datos: RGPD y LOPDGDD",
   "html": "\n<p>El <b>Reglamento General de Protección de Datos (RGPD)</b>, europeo, y la <b>Ley Orgánica 3/2018 (LOPDGDD)</b>, española, regulan el tratamiento de datos personales: cualquier información sobre una persona identificada o identificable.</p>\n<ul>\n<li><b>Principios:</b> licitud, finalidad concreta, minimización, exactitud, conservación limitada, seguridad y responsabilidad proactiva.</li>\n<li><b>Derechos:</b> acceso, rectificación, supresión («derecho al olvido»), oposición, limitación y portabilidad.</li>\n<li><b>Seguridad:</b> medidas técnicas y organizativas según el riesgo.</li>\n<li><b>Brechas:</b> notificación a la AEPD en 72 horas si hay riesgo para las personas.</li>\n<li><b>Delegado de protección de datos (DPD):</b> obligatorio en organismos públicos y en organizaciones que tratan datos sensibles a gran escala, como los hospitales.</li>\n</ul>\n<p>La LOPDGDD también recoge <b>derechos digitales</b> de los trabajadores, como la desconexión digital y la intimidad ante el uso de dispositivos de la empresa.</p>",
   "check": {
    "q": "Un hospital trata datos de salud a gran escala. ¿Debe tener delegado de protección de datos?",
    "o": [
     "No, nunca",
     "Sí, es obligatorio",
     "Solo si es privado",
     "Solo si tiene web"
    ],
    "a": 1,
    "e": "El tratamiento a gran escala de datos sensibles, como los de salud, obliga a designar un DPD."
   }
  },
  {
   "h": "Otras normas clave",
   "html": "\n<p>El RGPD no es la única norma que afecta a la informática. Estas son las otras que debes conocer.</p>\n<table>\n<tr><th>Norma</th><th>De qué trata</th></tr>\n<tr><td><b>LSSI</b> (Ley 34/2002)</td><td>Webs y comercio electrónico: aviso legal, cookies, comunicaciones comerciales</td></tr>\n<tr><td><b>Esquema Nacional de Seguridad (ENS)</b></td><td>Medidas de seguridad obligatorias para la Administración pública y sus proveedores tecnológicos</td></tr>\n<tr><td><b>Directiva NIS2</b></td><td>Ciberseguridad de sectores esenciales e importantes (energía, sanidad, transporte…) en la UE</td></tr>\n<tr><td><b>Ley de Propiedad Intelectual</b></td><td>El software está protegido; usar programas sin licencia es ilegal</td></tr>\n<tr><td><b>Reglamento eIDAS</b></td><td>Firma electrónica y servicios de confianza en la UE</td></tr>\n</table>"
  },
  {
   "h": "Delitos informáticos",
   "html": "\n<p>El <b>Código Penal</b> castiga, entre otros:</p>\n<ul>\n<li>Acceder sin autorización a un sistema informático, aunque no se cause daño.</li>\n<li>Interceptar comunicaciones o datos ajenos.</li>\n<li>Dañar, borrar o hacer inaccesibles datos o sistemas (por ejemplo, con ransomware o ataques DDoS).</li>\n<li>Descubrir y revelar secretos o datos personales.</li>\n<li>Estafas informáticas.</li>\n</ul>\n<div class=\"caso\"><b>Muy importante para un técnico</b>Tener permisos técnicos para acceder a algo no significa estar autorizado a hacerlo. Un administrador que mira por curiosidad el correo o el historial clínico de alguien comete una infracción grave y puede cometer un delito. Accede solo a lo que tu trabajo requiere.</div>"
  }
 ],
 "quiz": [
  {
   "q": "¿Qué es un dato personal según el RGPD?",
   "o": [
    "Solo el DNI",
    "Cualquier información sobre una persona identificada o identificable",
    "Solo los datos bancarios",
    "Solo los datos de salud"
   ],
   "a": 1,
   "e": "Un correo, una IP o una foto también pueden serlo."
  },
  {
   "q": "¿Qué norma regula el aviso legal y las cookies de una web?",
   "o": [
    "ENS",
    "LSSI",
    "eIDAS",
    "NIS2"
   ],
   "a": 1,
   "e": "Ley de Servicios de la Sociedad de la Información."
  },
  {
   "q": "¿A quién se aplica el Esquema Nacional de Seguridad?",
   "o": [
    "A todos los particulares",
    "A la Administración pública y sus proveedores tecnológicos",
    "Solo a bancos",
    "Solo a hospitales privados"
   ],
   "a": 1,
   "e": "Fija medidas según la categoría del sistema."
  },
  {
   "q": "¿Qué directiva europea refuerza la ciberseguridad de sectores esenciales?",
   "o": [
    "NIS2",
    "RGPD",
    "LSSI",
    "eIDAS"
   ],
   "a": 0,
   "e": "Afecta a energía, sanidad, transporte, etc."
  },
  {
   "q": "¿Es delito acceder sin autorización a un sistema aunque no se cause daño?",
   "o": [
    "No",
    "Sí, el acceso no autorizado está castigado",
    "Solo si se roban datos",
    "Solo de noche"
   ],
   "a": 1,
   "e": "El Código Penal castiga el acceso ilegítimo."
  },
  {
   "q": "Un administrador con permisos lee el correo de un compañero por curiosidad. ¿Qué es?",
   "o": [
    "Su trabajo",
    "Una infracción grave que puede ser delito",
    "Algo normal",
    "Una auditoría"
   ],
   "a": 1,
   "e": "Tener acceso técnico no es estar autorizado."
  }
 ]
});
