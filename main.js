function printFormData() {
  document.getElementById("background").style.display="none"
  document.getElementById("spiner").style.display="block"
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
