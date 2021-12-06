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
