let emailInput = document.querySelector(".email input");
let passwordInput = document.querySelector(".password input");
let submitInput = document.querySelector(".submit input");
let loggedUser;
let data = [
    {
        title: "Magic coat",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 180,
        imgSrc: './imgs/product1.jpeg'
    },
    {
        title: "Driving suit",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 250,
        imgSrc: './imgs/product2.jpeg'
    },
    {
        title: "Space suit",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 320,
        imgSrc: './imgs/product3.jpeg'
    },
    {
        title: "Iron man suit",
        details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 1350,
        imgSrc: './imgs/product4.jpeg'
    }
];
let users = [
    // {
    //     id: 1,
    //     user: "mohamed",
    //     password: "987123",
    //     cartItems: ["Magic coat", "Driving suit"],
    //     isLogged: false
    // }
]
// window.localStorage.setItem("users", JSON.stringify(users))
if (window.localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
    users.forEach(user => {
        if(user.isLogged == true) {
            goToTheHomePage();
            loggedUser = user;
        }
    });
}

if (!loggedUser) {
    // goToTheHomePage(loggedUser);
    submitInput.onclick = function(e) {
        e.preventDefault();
        if (users != []) {
            users.forEach((user) => {
                if(user.user == emailInput && user.password == passwordInput) {
                    goToTheHomePage();
                    user.isLogged = true;
                    localStorage.setItem(users);
                }})    
        }

        if(emailInput.value !== "" && passwordInput.value.length > 5) {
                users.push({
                    id: 2,
                    user: emailInput.value,
                    password: passwordInput.value,
                    cartItems: [],
                    isLogged: true
                })
                window.localStorage.setItem("users", JSON.stringify(users));
                goToTheHomePage();
            }
    }
}




// window.localStorage.setItem("islogged", false);
// window.localStorage.setItem("data", JSON.stringify(data));
// if(!window.localStorage.getItem("users")) {
//     window.localStorage.setItem("users", []);
// }
// submitInput.addEventListener("click", function(e) {
//     e.preventDefault();
//     if (emailInput.value !== "" && passwordInput.value.length > 5) {
//         window.localStorage.setItem("islogged", true);
//         window.localStorage.setItem("users", [].push({
//             user: emailInput.value,
//             password: passwordInput.value
//         }));
//             window.location.replace("/home.html");
//         }
//     })

function goToTheHomePage(user) {
    window.location.replace("/home.html");
}