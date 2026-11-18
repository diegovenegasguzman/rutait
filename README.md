# ITeca

Apuntes y tests gratuitos para los ciclos de informática de FP: SMR, ASIR, DAM y DAW.

## Estructura

```
index.html        Página principal: diseño, navegación, tests y herramientas
data/cursos.js    Cursos, módulos y qué temas tiene cada módulo
temas/*.js        Un archivo por tema (apuntes + preguntas del test)
```

## Añadir un tema

1. Crea `temas/<id>.js` siguiendo el formato de cualquier otro tema:
   `TEMA("<id>", { title, mins, intro, sections:[{h, html}], quiz:[{q, o, a, e}] });`
2. Añade `<id>` a la lista `t` del módulo que corresponda en `data/cursos.js`.

## Ver la web en local

Abre `index.html` en el navegador. No necesita servidor ni instalación.

## Publicación

Web estática: se puede publicar gratis con Cloudflare Pages conectando este repositorio
(sin comando de build y con `/` como carpeta de salida).

## Software de terceros

- [PDF.js](https://mozilla.github.io/pdf.js/) 3.11.174 (Mozilla), licencia Apache 2.0. Se usa en «Escuchar un PDF» para extraer el texto. Licencia en `vendor/pdfjs-LICENSE`.
- [Piper](https://github.com/rhasspy/piper) (voces neuronales), [onnxruntime-web](https://onnxruntime.ai/) 1.18 (MIT) y [piper-wasm](https://github.com/diffusionstudio/piper-wasm) (MIT). Se cargan en el navegador desde Hugging Face, cdnjs y jsDelivr; no se alojan en este repositorio.
  - Voz «David»: modelo es_ES-davefx-medium, conjunto de datos davefx con licencia CC0.
  - Voces «Mujer» y «Hombre»: modelo es_ES-sharvard-medium, basado en el corpus Sharvard (University of Edinburgh, https://datashare.ed.ac.uk/handle/10283/574), licencia CC BY 3.0.
