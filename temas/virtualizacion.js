TEMA("virtualizacion", {
 "title": "Virtualización",
 "mins": 15,
 "intro": "Cómo un solo ordenador físico puede ejecutar muchos sistemas a la vez: tipos de hipervisor, recursos y redes virtuales, snapshots y la diferencia entre máquinas virtuales y contenedores.",
 "sections": [
  {
   "h": "Qué es virtualizar",
   "html": "\n<p>Virtualizar es ejecutar varias <b>máquinas virtuales (VM)</b> sobre un mismo equipo físico. Cada VM cree que tiene su propio procesador, su memoria y su disco, y ejecuta su propio sistema operativo.</p>\n<p>El programa que reparte el hardware real entre las VM es el <b>hipervisor</b>.</p>\n<ul>\n<li><b>Aprovechamiento:</b> un servidor físico suele estar ocioso la mayor parte del tiempo. Con 10 VM en él, se usa de verdad.</li>\n<li><b>Aislamiento:</b> si una VM se rompe o se infecta, las demás siguen funcionando.</li>\n<li><b>Flexibilidad:</b> crear un servidor nuevo cuesta minutos, no semanas de compra e instalación.</li>\n<li><b>Pruebas:</b> puedes destrozar una VM practicando y volver atrás en segundos.</li>\n</ul>"
  },
  {
   "h": "Tipos de hipervisor",
   "html": "\n<p>El hipervisor es el programa que crea y ejecuta las máquinas virtuales. Hay dos tipos, según dónde se instale.</p>\n<table>\n<tr><th></th><th>Tipo 1 (nativo o bare-metal)</th><th>Tipo 2 (alojado)</th></tr>\n<tr><td>Se instala…</td><td>Directamente sobre el hardware</td><td>Como un programa dentro de un sistema operativo</td></tr>\n<tr><td>Rendimiento</td><td>Muy alto</td><td>Menor (hay un sistema operativo en medio)</td></tr>\n<tr><td>Uso típico</td><td>Servidores y centros de datos</td><td>Pruebas y prácticas en tu PC</td></tr>\n<tr><td>Ejemplos</td><td>VMware ESXi, Hyper-V, Proxmox VE (KVM), Xen</td><td>VirtualBox, VMware Workstation</td></tr>\n</table>\n<p>Para virtualizar con buen rendimiento, el procesador necesita extensiones de virtualización: <b>Intel VT-x</b> o <b>AMD-V</b>. A veces vienen desactivadas y hay que activarlas en la UEFI.</p>",
   "check": {
    "q": "Una empresa quiere montar 20 servidores virtuales en producción. ¿Qué tipo de hipervisor es el adecuado?",
    "o": [
     "Tipo 2, como VirtualBox",
     "Tipo 1, como Proxmox o ESXi",
     "Cualquiera, da igual",
     "Ninguno, mejor 20 servidores físicos"
    ],
    "a": 1,
    "e": "En producción se usa un hipervisor de tipo 1: está instalado directamente sobre el hardware y rinde mucho más."
   }
  },
  {
   "h": "Recursos y redes virtuales",
   "html": "\n<p>A cada VM se le asignan <b>vCPU</b>, <b>RAM</b> y uno o varios <b>discos virtuales</b>, que en realidad son archivos: VDI (VirtualBox), VMDK (VMware), VHDX (Hyper-V) o qcow2 (KVM). Pueden ser de <b>tamaño fijo</b> (ocupan todo desde el principio, algo más rápidos) o <b>dinámicos</b> (crecen según se llenan).</p>\n<p>La red de la VM puede configurarse de varias formas:</p>\n<table>\n<tr><th>Modo</th><th>Qué ocurre</th></tr>\n<tr><td>NAT</td><td>La VM sale a Internet a través del anfitrión, pero los demás equipos de la red no la ven</td></tr>\n<tr><td>Adaptador puente (bridge)</td><td>La VM aparece en la red real como un equipo más, con su propia IP del router</td></tr>\n<tr><td>Red interna</td><td>Solo se ven entre sí las VM conectadas a esa red</td></tr>\n<tr><td>Solo anfitrión</td><td>La VM y el anfitrión se ven, pero sin salida a Internet</td></tr>\n</table>\n<div class=\"caso\"><b>Típico en las prácticas</b>Montas un servidor DHCP en una VM y quieres que reparta IP solo a otras VM sin afectar a la red de tu casa. Pon todas las VM en <b>red interna</b>. Si usaras modo puente, tu servidor DHCP competiría con el del router de casa.</div>",
   "check": {
    "q": "Quieres que una VM tenga una IP de tu red real y que otros PC de casa puedan conectarse a ella. ¿Qué modo de red usas?",
    "o": [
     "NAT",
     "Adaptador puente",
     "Red interna",
     "Solo anfitrión"
    ],
    "a": 1,
    "e": "En modo puente la VM se conecta a la red física como un equipo más."
   }
  },
  {
   "h": "Snapshots y clones",
   "html": "\n<p>Una de las grandes ventajas de virtualizar es poder volver atrás o duplicar una máquina en segundos.</p>\n<ul>\n<li>Un <b>snapshot</b> guarda el estado de la VM en un momento dado. Si algo sale mal, vuelves a ese punto. Perfecto antes de una actualización o de una práctica arriesgada.</li>\n<li>Un <b>clon</b> es una copia completa de la VM, independiente de la original. Sirve para desplegar varios servidores iguales.</li>\n</ul>\n<div class=\"note\"><b>Un snapshot no es una copia de seguridad</b>Depende del disco original: si se pierde el disco, se pierden también los snapshots. Además, acumular muchos ralentiza la VM. Úsalos de forma temporal.</div>"
  },
  {
   "h": "Máquinas virtuales y contenedores",
   "html": "\n<p>Las máquinas virtuales y los contenedores sirven para aislar aplicaciones, pero lo hacen a niveles distintos.</p>\n<table>\n<tr><th></th><th>Máquina virtual</th><th>Contenedor</th></tr>\n<tr><td>Qué virtualiza</td><td>Un equipo completo, con su propio sistema operativo</td><td>Solo la aplicación; comparte el kernel del anfitrión</td></tr>\n<tr><td>Tamaño</td><td>Gigabytes</td><td>Megabytes</td></tr>\n<tr><td>Arranque</td><td>Minutos</td><td>Segundos</td></tr>\n<tr><td>Aislamiento</td><td>Muy alto</td><td>Menor</td></tr>\n<tr><td>Ejemplo</td><td>Un Windows Server en Proxmox</td><td>Una web en Docker</td></tr>\n</table>\n<p>No compiten: lo habitual es tener VM y, dentro de ellas, contenedores. La nube (AWS, Azure, Google Cloud) se basa en lo mismo: cuando «alquilas un servidor», en realidad te dan una VM (<b>IaaS</b>, infraestructura como servicio).</p>"
  }
 ],
 "quiz": [
  {
   "q": "¿Cómo se llama el software que reparte el hardware entre las máquinas virtuales?",
   "o": [
    "Kernel",
    "Hipervisor",
    "Contenedor",
    "Firmware"
   ],
   "a": 1,
   "e": "El hipervisor crea y gestiona las VM."
  },
  {
   "q": "¿Cuál de estos es un hipervisor de tipo 2?",
   "o": [
    "VMware ESXi",
    "Proxmox VE",
    "VirtualBox",
    "Hyper-V Server"
   ],
   "a": 2,
   "e": "VirtualBox se instala como un programa más dentro de Windows, Linux o macOS."
  },
  {
   "q": "¿Qué hay que activar en la UEFI para virtualizar con buen rendimiento en un Intel?",
   "o": [
    "Secure Boot",
    "Intel VT-x",
    "Hyper-Threading",
    "Modo CSM"
   ],
   "a": 1,
   "e": "VT-x (o AMD-V en AMD) son las extensiones de virtualización del procesador."
  },
  {
   "q": "¿Qué modo de red deja a las VM comunicarse solo entre ellas?",
   "o": [
    "NAT",
    "Puente",
    "Red interna",
    "Solo anfitrión"
   ],
   "a": 2,
   "e": "La red interna aísla las VM del anfitrión y de la red real."
  },
  {
   "q": "¿Para qué sirve un snapshot?",
   "o": [
    "Para hacer copias de seguridad permanentes",
    "Para volver la VM a un estado anterior",
    "Para clonar el anfitrión",
    "Para ahorrar espacio"
   ],
   "a": 1,
   "e": "Guarda un punto de restauración temporal de la VM."
  },
  {
   "q": "¿Qué comparte un contenedor con el anfitrión?",
   "o": [
    "Nada",
    "El kernel del sistema operativo",
    "Solo la red",
    "La BIOS"
   ],
   "a": 1,
   "e": "Por eso es mucho más ligero que una máquina virtual."
  },
  {
   "q": "¿Qué tipo de disco virtual ocupa solo el espacio que se va usando?",
   "o": [
    "Fijo",
    "Dinámico",
    "Físico",
    "RAID"
   ],
   "a": 1,
   "e": "El disco dinámico crece a medida que se llena."
  },
  {
   "q": "Alquilar una máquina virtual en Azure o AWS es un ejemplo de…",
   "o": [
    "SaaS",
    "PaaS",
    "IaaS",
    "On-premise"
   ],
   "a": 2,
   "e": "IaaS: el proveedor te da infraestructura (VM, redes, discos) y tú gestionas el sistema."
  }
 ]
});
