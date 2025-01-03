
var username = document.getElementById("kodeVoucher")
var password = document.getElementById("password")
function setpass() {
  var user = username.value
  password.value = user;
}
username.onchange = setpass;
function showNotif() {
  document.getElementById('notification').classList.toggle('hidden')
}
function showMember() {
  document.getElementById('member').classList.toggle('hidden')
}
function caraLogin() {
  document.getElementById('caraLogin').classList.toggle('hidden')
}
function loginWithVoucher() {
  document.getElementById('member').classList.toggle('hidden')
  focusVoucher()
}
function focusVoucher() {
  document.getElementById("kodeVoucher").focus()
}

$('a[href="#voucher"]').click(function () {
  caraLogin()
  focusVoucher()
});
function showPassword() {
  var pass = document.getElementById('passwordMember');
  if (pass.type === "password") {
    pass.type = "text"
  } else {
    pass.type = "password"
  }
}

