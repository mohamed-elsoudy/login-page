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
    {
        id: 1,
        user: "mohamed",
        password: "987123",
        cartItems: ["Magic coat", "Driving suit"],
        isLogged: true
    }
]
window.localStorage.setItem("users", JSON.stringify(users))
if (window.localStorage.getItem("users")) {
    JSON.parse(window.localStorage.getItem("users")).forEach(element => {
        if(element.isLogged == true) {
            loggedUser = element;
        }
    });
    if (loggedUser) {
        writeCartPage(loggedUser.cartItems);
    }
}
function writeCartPage(userItems) {
    document.getElementsByClassName("products")[0].innerHTML = "";
    let thisItemData;
    userItems.forEach((item) => {
        data.forEach((el) => {
            if (el.title == item) {
                thisItemData = el;
            }
        });

        document.getElementsByClassName("products")[0].innerHTML =`
        ${document.getElementsByClassName("products")[0].innerHTML}
        <div class="product d-flex">
            <img src="${thisItemData.imgSrc}" width="150px" class="rounded" alt="">
            <div class="details">
                <span class="title d-block fs-2 d-block pb-4 mb-4">${thisItemData.title}</span>
                <div class="amount pt-4 d-flex">
                    <span class="rounded-circle p-3 text-bg-secondary">+</span>
                    <span class="fs-2"> 1</span>
                    <span class="rounded-circle p-3 text-bg-secondary">-</span>
                </div>
            </div>
            <div class="price fs-2 d-flex align-items-end">
                ${thisItemData.price}$
            </div>
            <div class="price fs-2 d-flex align-items-end ms-4">
                <button class="btn btn-danger">
                    Remove item
                </button>
            </div>
            </div>
        </div>
            `

    })
}
