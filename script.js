const pwd = document.getElementById("pwd");
const pwdConfirm = document.getElementById("pwd-confirm");

pwd.addEventListener("keyup", () => {
    if (pwd.value !== "" && pwd.value === pwdConfirm.value) {
        pwd.style.border = "2px solid green";
        pwdConfirm.style.border = "2px solid green";
    }
    else {
        pwd.style.border = "1px solid red";
        pwdConfirm.style.border = "1px solid red";
    }
});

pwdConfirm.addEventListener("keyup", () => {
    if (pwd.value !== "" && pwd.value === pwdConfirm.value) {
        pwd.style.border = "2px solid green";
        pwdConfirm.style.border = "2px solid green";
    }
    else {
        pwd.style.border = "1px solid red";
        pwdConfirm.style.border = "1px solid red";
    }
});