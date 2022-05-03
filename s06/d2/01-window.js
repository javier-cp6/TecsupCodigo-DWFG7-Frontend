// objeto window
// no es necesario referenciarlo con window....
window.console.log("hola");

console.log(typeof window);
console.log(`Info del navegador ${navigator.userAgent}`);

navigator.geolocation.getCurrentPosition(function (infoUbicacion) {
    console.log(infoUbicacion);
    console.log(`Latitud: ${infoUbicacion.coords.latitude}`);
});

// console.log(window.document);
console.log(document);
console.log(typeof document);

let body = document.querySelector("body");
// innerHTML es una propiedad del objeto body
body.innerHTML = "<h1>Título</h1>";
console.log(body.innerHTML);