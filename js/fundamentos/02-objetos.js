//Objetos
let persona = {
  nombre: "Fabrizio",
  apellido: "Tonin",
  edad: 25,
  domicilio: {
    calle: "Thames 789",
    ciudad: "San Miguel de Tucumán",
    provincia: "Tucumán",
  },
  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  },
};

console.log(persona.domicilio.calle);
console.log(persona.nombre);
console.log(persona["edad"]);

//template string
console.log(`Hola, mi nombre es ${persona.nombre} ${persona.apellido}`);

//desestructuracion de objetos

const {
  nombre,
  apellido,
  domicilio: { ciudad, calle },
} = persona;

// const { ciudad, calle } = domicilio;
console.log(`Hola, mi nombre es ${nombre} ${apellido} y vivo en ${ciudad}`);

//Iterar un objeto
for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

//borrar una propiedad
delete persona.edad;

//agregar una prop
persona.puesto = "Gerente";

//Arreglo de objetos

let usuarios = [
  { id: 1, username: "pmarino", role: "Admin" },
  { id: 2, username: "ftonin", role: "User" },
  { id: 3, username: "fgonzalez", role: "User" },
];
