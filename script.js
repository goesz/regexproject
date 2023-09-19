function showPass() {
  var y = document.getElementById("password2");
  var x = document.getElementById("password");
  if (x.type === "password") {
    y.type = "text";
    x.type = "text";
    document.getElementById("showPassword").value = 'Esconder senha';
  } else {
    x.type = "password";
    y.type = "password";
    document.getElementById("showPassword").value = 'Mostrar senha';
  }

}
