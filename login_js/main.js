var username = document.getElementById("kodeVoucher");
var password = document.getElementById("password");
function setpass() {
    var user = username.value;
    password.value = user;
}
username.onchange = setpass;

function showNotif() {
    document.getElementById("notification").classList.toggle("hidden");
}
function showMember() {
    document.getElementById("member").classList.toggle("hidden");
}
function showVoucher() {
    document.getElementById("voucher").classList.toggle("hidden");
}
function caraLogin() {
    document.getElementById("caraLogin").classList.toggle("hidden");
}
function loginWithVoucher() {
    document.getElementById("voucher").classList.toggle("hidden");
    showMember();
    focusVoucher();
}
function loginWithMember() {
    document.getElementById("member").classList.toggle("hidden");
    showVoucher();
    focusMember();
}
function focusMember() {
    document.getElementById("kodeMember").focus();
}
function focusVoucher() {
    document.getElementById("kodeVoucher").focus();
}

$('a[href="#voucher"]').click(() => {
    showVoucher();
    focusVoucher();
});
$('a[href="#member"]').click(() => {
    showMember();
    focusMember();
});
function showPassword() {
    var pass = document.getElementById("passwordMember");
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
//login by-Member
function memberLogin() {
    document.loginMember.username.value = document.login.username.value;
    document.loginMember.password.value = hexMD5(
        "$(chap-id)" + document.login.password.value + "$(chap-challenge)"
    );
    document.loginMember.submit();
    return false;
}
//login by-Voucher
function doLogin() {
    document.loginvoucher.username.value = document.login.username.value;
    document.loginvoucher.password.value = hexMD5(
        "$(chap-id)" + document.login.password.value + "$(chap-challenge)"
    );

    document.loginvoucher.submit();
    return false;
}
function openLogin() {
    if (window.name != "hotspot_logout") return true;
    open("$(link-login)", "_blank", "");
    window.close();
    return false;
}

function myFunction() {
    var element = document.getElementById("dark-mode");
    element.classList.toggle("light-mode");
}
function whiteMode() {
    document.getElementById("white-mode").classList.toggle("white-mode");
}

function alert() {
    document.getElementById("alert").classList.toggle("hidden");
    document.getElementById("notif").innerHTML = "Saya di Klik";
    const reloadButton = document.getElementById("reload");
    if (reloadButton) {
        reloadButton.addEventListener("click", () => {
            console.log("Saya di Tutup");
        });
    }
}
