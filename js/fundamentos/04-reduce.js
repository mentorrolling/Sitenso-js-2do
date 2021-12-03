//----Reduce--------------

// const reducer = (acumulador, valorActual) => nuevoAcumulador;

// const reducido = [1, 2].reduce((acc, el) => acc + el, 0);

// const numeros = [1, 2, 3, 4, 5];
// const resultado = numeros.reduce((acc, el) => acc + el, 0);

// const mascotas = [
//   { nombre: "Pelusa", edad: 12, tipo: "gato" },
//   { nombre: "Puchini", edad: 12, tipo: "perro" },
//   { nombre: "Pulga", edad: 10, tipo: "perro" },
//   { nombre: "Chanchito feliz", edad: 3, tipo: "perro" },
// ];

// const indexed = mascotas.reduce(
//   (acc, el) => ({
//     ...acc,
//     [el.nombre]: el,
//   }),
//   {}
// );

// const anidado = [1, [2, 3], 4, [5]];
// const respuesta = anidado.reduce((acc, el) => acc.concat(el), []);

const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reduce((acc, el) => acc + el, 0);
console.log(resultado);

const alumnos = [
  { nombre: "Fabrizio", apellido: "Tonin", edad: 25, comisión: "20i" },
  { nombre: "Carla", apellido: "Trevisan", edad: 28, comisión: "21i" },
  { nombre: "Carlos", apellido: "Sosa", edad: 35, comisión: "9i" },
  { nombre: "Patricia", apellido: "Gonzalez", edad: 40, comisión: "15i" },
  { nombre: "Roberto", apellido: "Axis", edad: 18, comisión: "14i" },
];

//Usando find para encontrar un elemento
console.log(alumnos.find((alumno) => alumno.nombre === "Fabrizio"));

//Indexo con reduce los elementos para encontrarlos sin find
const indexed = alumnos.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);

//devolver un arreglo plano concatenando los arreglos
const anidados = ["Goku", ["Picoro", "Freezer"], "Vegeta", ["Gohan", "Cell"]];
const personajes = anidados.reduce((acc, el) => acc.concat(el), []);

//devolver un arreglo con los números multiplicados por 2
const porDos = numeros.reduce((acc, el) => [...acc, el * 2], []);
console.log(porDos);
