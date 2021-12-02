//arreglos
let alumnos = [
  "Lucas Gali",
  "Rosendo Alves",
  "Francisco Merchan",
  "Nicolas Cortés",
  "Gimena Ledesma",
];

// console.log(alumnos[3]);

//ultima posición
// console.log(alumnos[alumnos.length - 1]);

//recorrer un arreglo

// for (let i = 0; i < alumnos.length; i++) {
//   //accion
//   console.log(alumnos[i]);
// }

// for (const alumno of alumnos) {
//   console.log(alumno);
// }

alumnos.forEach(function (alumno, index) {
  console.log(index + 1 + " " + alumno);
});

//añadir elementos en un arreglo - arrays
alumnos.push("Walter", "Fabrizio", "Florinda");
alumnos.unshift("Fanco", "Pablo");

//Eliminar elementos
alumnos.pop();
alumnos.shift();

//eliminar un elemento con su posición
let pos = 5;
// alumnos.splice(pos, 1);
// alumnos.splice(pos, 2);

//Obtener la posicion de un elemento
let indice = alumnos.indexOf("Walter");
alumnos.splice(indice, 2, "Pedro", "Josefina", "Loli");

//ordenar alfabeticamente
alumnos.sort();
alumnos.reverse();

let numeros = [17, 35, 4, 25, 87, 1, 42, 16];

numeros.sort(function (a, b) {
  return a - b;
});

//----métodos con callback

//find
let resultado = numeros.find(function (numero) {
  return numero % 2 === 0;
});

//filter
let numerosPares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

//buscar un término con filter
let termino = "mE";
let newAlumnos = alumnos.filter(function (alumno) {
  return alumno.toUpperCase().includes(termino.toUpperCase());
});

console.log(newAlumnos);
