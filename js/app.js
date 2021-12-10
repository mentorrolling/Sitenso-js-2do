//DOM
import { usuarios } from "./datos/usuarios.js";
console.log(usuarios);

let contenedor = document.querySelector("#root");
let contenedor_tarjetas = document.querySelector("#container_card");
let texto = document.createElement("h1");
texto.innerText = "Ejercicios del DOM";

let imagen = document.createElement("img");
imagen.src = "https://hourofcode.com/images/hora-del-codigo-en-vivo.png";
imagen.width = "200";

// contenedor.appendChild(texto, imagen);

let tabla = document.createElement("table");
tabla.classList = "table";
tabla.innerHTML = `
<thead>
<tr>
<th>Nombre</th>
    <th>Apellido</th>
</tr>
</thead>
<tbody>
<tr>
    <td>Pablo</td>
    <td>Marino</td>
    </tr>
<tr>
<td>Fabrizio</td>
<td>Tonin</td>
</tr>
<tr>
    <td>Pablo</td>
    <td>Frias</td>
    </tr>
    </tbody>
    `;

const crearTarjetas = () => {
  usuarios.map((usuario) => {
    let div = document.createElement("div");
    div.classList = "col";

    let tarjeta = `
<div class="card h-100">
  <img src=${usuario.avatar} class="card-img-top img-card" alt=${usuario.first_name}>
  <div class="card-body">
    <h5 class="card-title">${usuario.first_name} ${usuario.last_name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <small class="text-muted">${usuario.email}</small>
  </div>
</div>
`;
    div.innerHTML = tarjeta;
    contenedor_tarjetas.appendChild(div);
  });
};
// document.body.appendChild(texto)
// document.body.appendChild(imagen)
// document.body.appendChild(tabla)

contenedor.append(texto, imagen, tabla);
crearTarjetas();
