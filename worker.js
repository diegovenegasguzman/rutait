// Sirve los archivos de la web y reenvía la descarga de las voces de Piper.
// Solo se permiten las voces que usa la web, y la respuesta se guarda en la caché de Cloudflare.
const ORIGEN = "https://huggingface.co/rhasspy/piper-voices/resolve/main/";
const PERMITIDAS = new RegExp("^(" + [
  "es/es_ES/davefx/medium/es_ES-davefx-medium",
  "es/es_ES/sharvard/medium/es_ES-sharvard-medium",
  "ca/ca_ES/upc_ona/medium/ca_ES-upc_ona-medium",
  "ca/ca_ES/upc_pau/x_low/ca_ES-upc_pau-x_low"
].map(v => v.replace(/[./]/g, "\\$&")).join("|") + ")\\.onnx(\\.json)?$");

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/voces/")) return env.ASSETS.fetch(request);

    const ruta = url.pathname.slice("/voces/".length);
    if (request.method !== "GET" || !PERMITIDAS.test(ruta)) return new Response("No encontrado", { status: 404 });

    const cache = caches.default;
    const guardada = await cache.match(request);
    if (guardada) return guardada;

    const remota = await fetch(ORIGEN + ruta, { cf: { cacheEverything: true, cacheTtl: 2592000 } });
    if (!remota.ok) return new Response("No se pudo descargar la voz", { status: 502 });

    const respuesta = new Response(remota.body, {
      headers: {
        "Content-Type": ruta.endsWith(".json") ? "application/json" : "application/octet-stream",
        "Content-Length": remota.headers.get("Content-Length") || "",
        "Cache-Control": "public, max-age=2592000, immutable"
      }
    });
    if (!respuesta.headers.get("Content-Length")) respuesta.headers.delete("Content-Length");
    ctx.waitUntil(cache.put(request, respuesta.clone()));
    return respuesta;
  }
};
