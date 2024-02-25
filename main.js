

let lista = []

function nombre() {
  if (nombreUsuario !== null && lista.length>0) {
    let usuarioFiltrado = lista.filter((item) => item.nombre === nombreUsuario);
    console.log(usuarioFiltrado);
    if (usuarioFiltrado.length > 0) {
      let button = document.createElement("div");
      button.classList.add("button");

      button.innerHTML = `desconectar`;

      document.body.appendChild(button);

      button.addEventListener("click", function () {
        localStorage.removeItem("usuario");
        window.location.reload();
      });

      usuarioFiltrado.forEach((usuario) => {
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <strong>${usuario.nombre} ${usuario.apellido}</strong><br>
          Cedula: ${usuario.cedula}<br>
          Edad: ${usuario.edad}<br>
          Telefono: ${usuario.telefono}
        `;

        document.body.appendChild(card);
      });
      // pasamos el nombre de usuario a formato json
      let usuarioConvertido = JSON.stringify(nombreUsuario);
      // guardamos el usuario formateado
      localStorage.setItem("usuario", usuarioConvertido);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario no encontrado!!!",
        color: "white",
      });
    }
  }
}



function getLista() {
  axios
    .get("usuarios.json")
    .then((response) => {
      const data = response.data;
      lista = [...data];  
      console.log("Datos obtenidos:", lista);
      if(nombreUsuario){
        nombre()
      }
    })
    .catch((error) => {
      console.error("Error en la solicitud Axios:", error);
    });
}


getLista();


let nombreUsuario = JSON.parse(localStorage.getItem("usuario"));
console.log(nombreUsuario)

let ingreseNombre = document.getElementById("formulario");
// ver sustitur el prompt por un botton
let buscador = document.getElementById("buttonUno");

buscador.addEventListener("click", function (e) {
  e.preventDefault();
  
  if (nombreUsuario) {
    Swal.fire({
      title: "Desea confirmar el nombre?",

      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si,quiero",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Exito",
          text: "Se realizado la busqueda con exito",
          color: "white",
          icon: "success",
        });
        nombre();
      }
    });
  } else {
    console.log("Ingrese su nombre");
  }
});

ingreseNombre.addEventListener("change", function () {
  nombreUsuario = ingreseNombre.value;
  console.log(nombreUsuario);
  console.log(ingreseNombre.value);
});

if (nombreUsuario && lista.length>0){
  nombre();
}
