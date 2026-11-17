# Cicloteca

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
