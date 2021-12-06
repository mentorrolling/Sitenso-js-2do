import { superheroes } from "./datos/heroes.js";

// console.log(superheroes);

// let heroe = superheroes[1];

// console.log(heroe);

const buscarHeroes = (termino) => {
  //   superheroes.map((heroe) => console.log(heroe.superhero.toUpperCase()));
  const resultado = superheroes.filter((heroe) =>
    heroe.superhero.toUpperCase().includes(termino.toUpperCase())
  );

  return resultado;
};

console.log(buscarHeroes("sp"));

const listarHeroes = () => {
  function SortArray(x, y) {
    if (x.superhero < y.superhero) {
      return -1;
    }
    if (x.superhero > y.superhero) {
      return 1;
    }
    return 0;
  }

  let heroes = superheroes.sort(SortArray);

  console.log("======Lista de Heroes======");
  heroes.forEach((heroe) => {
    console.log(`Nombre: ${heroe.superhero}`);
    console.log(`Alter ego: ${heroe.alter_ego}`);
    console.log(`publisher: ${heroe.publisher}`);
    console.log("==========================");
  });
};

console.log(listarHeroes());

//-----Eliminar un superheroe

// const eliminarHeroe = (nombre) => {
//   let indice = null;
//   for (const heroe of superheroes) {
//     indice = heroe.superhero.toUpperCase().indexOf(nombre.toUpperCase());
//   }

//   if (indice > 0) {
//     let validar = confirm(
//       `Esta seguro que quiere eliminar a ${superheroes[indice].superhero}`
//     );

//     if (validar) {
//       superheroes.splice(indice, 1);
//       alert("Eliminado el heroe");
//     }
//   } else {
//     alert("El heroe no existe en la base de datos");
//   }
// };

// eliminarHeroe("Superman");
