let logoutBtn = document.getElementById("logout-btn");
let newArr = [];
newArr = JSON.parse(window.localStorage.getItem("users"));
logoutBtn.onclick = function () {
    newArr.forEach(u => {
        if (u.isLogged === true) {
            u.isLogged = false;
        }
    });
    console.log(newArr[0].isLogged);
    
    window.localStorage.setItem("users", JSON.stringify(newArr));
    goToTheLoginPage();
}

function goToTheLoginPage() {
    window.location.replace("/login.html");
}