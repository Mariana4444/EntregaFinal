/* constructor*/

class Usuario {
  constructor(nombre, apellido, cedula, edad, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cedula = cedula;
    this.edad = edad;
    this.telefono = telefono;
  }
}

let usuario1 = new Usuario("Mariana", "Garcia", 41456958, 40, 92598756);
let usuario2 = new Usuario("Joel", "Cabrera", 46327892, 42, 96567456);
let usuario3 = new Usuario("Maria", "Silveira", 9865324, 24, 94562315);
let usuario4 = new Usuario("Luisa", "Altamiranda", 19872314, 70, 94712698);
let usuario5 = new Usuario("Sergio", "Muniz", 3621987, 85, 36521456);
let usuario6 = new Usuario("Noire", "Migues", 24893569, 56, 98320146);
let usuario7 = new Usuario("Odin", "Altamiranda", 62318974, 25, 96741836);
let usuario8 = new Usuario("Simba", "Gutierrez", 38974125, 64, 93823789);
let usuario9 = new Usuario("Claudia", "Mendez", 61473968, 36, 96378116);
let usuario10 = new Usuario("Andres", "Lima", 21476650, 56, 93874123);
let usuario11 = new Usuario("Mariana", "Lima", 21476650, 56, 93874123);
let usuario12 = new Usuario("Joel", "Rodrigues", 21476650, 56, 93874123);
let usuario13 = new Usuario("Noire", "Bertotti", 21476650, 56, 93874123);
let usuario14 = new Usuario("Odin", "Fernandez", 21476650, 56, 93874123);
let usuario15 = new Usuario("Simba", "Secco", 21476650, 56, 93874123);

let lista = [
  usuario1,
  usuario2,
  usuario3,
  usuario4,
  usuario5,
  usuario6,
  usuario7,
  usuario8,
  usuario9,
  usuario10,
  usuario11,
  usuario12,
  usuario13,
  usuario14,
  usuario15,
];

function nombre() {
  let nombreUsuario = localStorage.getItem("usuario")
  if(!nombreUsuario){
     nombreUsuario = prompt("ingrese su nombre");
  console.log(nombreUsuario);
  }
  
  if (nombreUsuario !== null) {
    let usuarioFiltrado = lista.filter((item) => item.nombre === nombreUsuario);
    console.log(usuarioFiltrado);
    if (usuarioFiltrado.length > 0) {
      let button = document.createElement('div');
        button.classList.add('button');

        button.innerHTML = `desconectar`

        document.body.appendChild(button)

        button.addEventListener('click', function() {
          
          localStorage.removeItem('usuario');
          window.location.reload()
          
      });

      usuarioFiltrado.forEach((usuario) => {
        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <strong>${usuario.nombre} ${usuario.apellido}</strong><br>
          Cedula: ${usuario.cedula}<br>
          Edad: ${usuario.edad}<br>
          Telefono: ${usuario.telefono}
        `;

        document.body.appendChild(card)
        localStorage.setItem("usuario", nombreUsuario)
      });
    } else {
      alert("Usuario no encontrado");
    }
  }
}



nombre();
