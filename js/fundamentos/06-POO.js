//POO

class Usuario {
  constructor(nombre, username, password) {
    (this.nombre = nombre), (this.username = username);
    this.password = password;
  }
  presentacion() {
    console.log("======Tarjeta de presentación======");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`UserName: ${this.username}`);
  }
}

const user1 = new Usuario("Pablo Marino", "pmarino", "123456");
const user2 = new Usuario("Andrea Espeche", "aespeche", "345678");

let usuarios = [user1, user2];

class Administrador extends Usuario {
  constructor(nombre, username, password, puesto, activo = true) {
    super(nombre, username, password), (this.puesto = puesto);
    this.activo = activo;
  }

  cambiarActivar() {
    this.activo = !this.activo;
  }
}

const admin1 = new Administrador(
  "Fabrizio Tonin",
  "ftonin",
  "123456",
  "Gerente"
);

/*
  
  Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
  Una propiedad titular.
  Una propiedad saldo, teniendo como valor inicial 0.
  Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
  Un método extraer() que permita retirar la cantidad pasada como parámetro.
  Un método informar() que retorne la información del estado de la cuenta. 
  
  Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
  Rectángulos
  
  */

class Cuenta {
  constructor(titular, saldo = 0) {
    (this.titular = titular), (this.saldo = saldo);
  }
  ingresar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      this.informar();
    } else {
      console.warn("El valor debe ser mayor a 0");
    }
  }
  extraer(valor) {
    if (valor > 0 && valor < this.saldo) {
      this.saldo -= valor;
    } else {
      console.warn("Saldo insuficiente");
    }
    this.informar();
  }
  informar() {
    console.log("======Datos de la cuenta======");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: $${this.saldo}`);
  }
}

const cuenta0023 = new Cuenta("Alex Pineiro");
