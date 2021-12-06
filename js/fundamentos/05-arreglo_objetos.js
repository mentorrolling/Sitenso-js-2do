import { superheroes } from "./datos/heroes.js";

//arreglo de objetos

const buscarHeroes = (termino) => {
  const resultado = superheroes.filter((heroe) => {
    return heroe.superhero.toUpperCase().includes(termino.toUpperCase());
  });
  return resultado;
};

console.log(buscarHeroes("wo"));

function sortArray(x, y) {
  if (x.superhero < y.superhero) {
    return -1;
  }
  if (x.superhero > y.superhero) {
    return 1;
  }

  return 0;
}

const listarHeroes = () => {
  let heroes = superheroes.sort(sortArray);
  console.log(heroes);

  console.log("======Lista de héroes=======");
  heroes.map((heroe) => {
    console.log(`Nombre: ${heroe.superhero}`);
    console.log(`Alter Ego: ${heroe.alter_ego}`);
    console.log(`Publisher: ${heroe.publisher}`);
    console.log("==============================");
  });
  //   heroes.forEach((heroe) => {
  //     console.log(`Nombre: ${heroe.superhero}`);
  //     console.log(`Alter Ego: ${heroe.alter_ego}`);
  //     console.log(`Publisher: ${heroe.publisher}`);
  //     console.log("==============================");
  //   });
};

listarHeroes();
