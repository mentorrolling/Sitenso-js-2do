//BOM
console.log(navigator.vendor);

function success(pos) {
  //   console.log(pos.coords);
  const { latitude, longitude } = pos.coords;
  console.log({
    latitud: latitude,
    longitud: longitude,
  });
}

navigator.geolocation.getCurrentPosition(success);

//location

function redireccion() {
  // location.replace("https://www.google.com");
  location.assign("https://www.google.com");
}

//history
function irA(num) {
  history.go(num);
}

//--------------------------------

let segundero = null;
//setInterval
//Ejecutar acciones cada cierto tiempo

function iniciar() {
  segundero = setInterval(() => {
    //acciones
    let seg = new Date().getSeconds();
    if (seg < 10) {
      console.log("0" + seg);
    } else {
      console.log(seg);
    }
  }, 1000);
}

//clearInterval
//detiene la ejecucion del setInterval
function detener() {
  clearInterval(segundero);
}

//setTimeout
//Ejecuta la accion despues de x tiempo
setTimeout(() => {
  //accion
  alert("Tiempo cumplido");
}, 3000);
