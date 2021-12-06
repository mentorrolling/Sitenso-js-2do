//BOM

console.log(navigator.vendor);

function success(pos) {
  const { latitude, longitude } = pos.coords;
  console.log({
    latitud: latitude,
    longitud: longitude,
  });
}

navigator.geolocation.getCurrentPosition(success);

//Location

function redireccionar() {
  location.assign("https://google.com");
  //   location.replace("https://google.com");
}

console.log(location.host);

//history
function irA() {
  history.go(-1);
}

//-------------------------------------
// setInterval
let segundero;
function iniciar() {
  segundero = setInterval(() => {
    let seg = new Date().getSeconds();
    if (seg < 10) {
      console.log("0" + seg);
    } else {
      console.log(seg);
    }
  }, 1000);
}

// clearInterval
function detener() {
  clearInterval(segundero);
}

// setTimeout

setInterval(() => {
  console.log("Hola mundo");
}, 3000);
