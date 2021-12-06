let usuarios = [];
class Usuario {
  constructor(nombre, username, password) {
    // propiedad:valor
    this.name = nombre;
    this.user = username;
    this.pass = password;
  }

  presentacion() {
    console.log("======Tarjeta de presentación======");
    console.log(`Nombre: ${this.name}`);
    console.log(`UserName: ${this.user}`);
  }
}

function crearUser() {
  let nombre = prompt("Ingrese el nombre");
  let usuario = prompt("Ingrese el usuario");
  let password = prompt("Ingrese la contraseña");

  usuarios.push(new Usuario(nombre, usuario, password));
}

let user1 = new Usuario("Nicolas", "nabc", "ABC123456");
let user2 = new Usuario("Pablo", "pmarino", "123456");

usuarios.push(user1, user2);

//------------------------

class Administrador extends Usuario {
  constructor(nombre, username, password, puesto, activo = true) {
    super(nombre, username, password);
    this.puesto = puesto;
    this.activo = activo;
  }
  cambiarActivar() {
    this.activo = !this.activo;
  }
}

let admin1 = new Administrador("José", "jgonzalez", "123456", "Gerente");

/*
  
  Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
  Una propiedad titular.
  Una propiedad saldo, teniendo como valor inicial 0.
  Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
  Un método extraer() que permita retirar la cantidad pasada como parámetro.
  Un método informar() que retorne la información del estado de la cuenta. 
  
  Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
   
  */

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(valor) {
    //evaluar si el saldo no es negativo, si es negativpo mostrar un mensaje
    this.saldo += valor;
    this.informar();
  }

  extraer(valor) {
    //si el valor es negativo o es mayor que el saldo mostrar un mensaje
    this.saldo -= valor;
    this.informar();
  }

  informar() {
    console.log("======Datos de la cuenta======");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: $${this.saldo}`);
  }
}
