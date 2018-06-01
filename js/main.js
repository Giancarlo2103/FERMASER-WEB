
// alert("hola");
function validar() {

  var username = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var contraseña = document.getElementById('contraseña').value;
  var ccontraseña = document.getElementById('confirmar').value;

  if (username == "") {
    alert(" Escribe tu nombre");
    return false;
  }

  if (email == "") {
    alert(" Escribe tu correo");
    return false;
  }

  if (contraseña == "") {
    alert(" Escribe tu  contraseña");
    return false;
  }

  if (ccontraseña == "") {
    alert(" vuelva a escribir su contraseña");
    return false;
  }

}
