function showPass() {
  var y = document.getElementById("password2");
  var x = document.getElementById("password");
  if (x.type === "password") {
    y.type = "text";
    x.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}

function verifyPassw(senha) {
  if (senha.length < 6) {
    return false;
  }

  if (!/[@!#\$%\^&*]/.test(senha)) {
    return false;
  }

  if (!/[A-Z]/.test(senha)) {
    return false;
  }

  if (!/[a-z]/.test(senha)) {
    return false;
  }

  if (!/[0-9]/.test(senha)) {
    return false;
  }

  if (/(\w)\1\1/.test(senha)) {
    return false;
  }


  if (/987|789|876|678|765|576|654|456|543|345|432|234|321|123/.test(senha)) {
    return false;
  }

  return true;
}

function fazerLogin() {
  const passw1 = document.getElementById("password").value;
  const passw2 = document.getElementById("password2").value;

  if (passw1 === "Rafael_33855072" && passw2 === "Rafael_27055833") {
    document.getElementById("escrever").innerHTML = "Nome dos criadores OK!";
  } else if (passw1 === passw2 && verifyPassw(passw1)) {
    document.getElementById("escrever").innerHTML = "Login bem-sucedido";
  } else if (passw1 !== passw2) {
    document.getElementById("escrever").innerHTML = "As senhas não coincidem";
  }
  else {
    document.getElementById("escrever").innerHTML = "Sua senha não atende aos requisitos de validação.";
    
    requisitosSenha.style.display = "block";
    document.querySelector(".box2").style.bottom = "-50px";
    document.querySelector(".box2").style.height = "500px";
    document.querySelector(".box2").style.width = "600px";
    document.querySelector("h1").style.display = "none";
  }
}
