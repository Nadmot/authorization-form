function printFormData() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  console.log(login);
  console.log(password);
}

function checkParams() {
  var login = $("#login").val();
  var password = $("#password").val();
  if (login.length != 0 && password.length != 0) {
    $("#button").removeAttr("disabled");
  } else {
    $("#button").attr("disabled", "disabled");
  }
}
