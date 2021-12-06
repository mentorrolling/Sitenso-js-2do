//reduce
const reducer = (acumulador, valorActual) => nuevoAcumulador;

const numeros = [1, 2, 3, 4, 5];

console.log(numeros.reduce((acc, el) => acc + el, 20));

const alumnos = [
  { nombre: "Fabrizio", apellido: "Tonin", edad: 25, comisión: "20i" },
  { nombre: "Carla", apellido: "Trevisan", edad: 28, comisión: "21i" },
  { nombre: "Carlos", apellido: "Sosa", edad: 35, comisión: "9i" },
  { nombre: "Patricia", apellido: "Gonzalez", edad: 40, comisión: "15i" },
  { nombre: "Roberto", apellido: "Axis", edad: 18, comisión: "14i" },
];

console.log(alumnos.find((alumno) => alumno.apellido === "Sosa"));

const indexed = alumnos.reduce(
  (acc, el) => ({
    ...acc,
    [el.apellido]: el,
  }),
  {}
);

const anidados = ["Goku", ["Picoro", "Freezer"], "Vegeta", ["Gohan", "Cell"]];

const personajes = anidados.reduce((acc, el) => acc.concat(el), []);

const porDos = numeros.reduce((acc, el) => [...acc, el * 2], []);

const numeritos = numeros.map((num) => num * 2);
