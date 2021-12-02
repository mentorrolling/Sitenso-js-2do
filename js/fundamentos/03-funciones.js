//funciones

//declarativas
function saludar() {
  //acciones
  console.log("Hola mundo");
}

//anónimas
const saludar2 = function () {
  console.log("Hola chicos");
};

//arrow function
const saludar3 = () => console.log("Hola chicos");

const getUsuario = function () {
  return {
    uid: "ABC123",
    username: "winner",
  };
};

const getUser = () => ({
  uid: "ABC123",
  username: "winner",
});

let usuarios = [
  { id: 1, username: "pmarino", role: "Admin" },
  { id: 2, username: "ftonin", role: "User" },
  { id: 3, username: "fgonzalez", role: "User" },
];

const respuesta = usuarios.map((user) => user.username);
