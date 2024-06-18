const products = [
    {
        "image": "./img/collection1.jpg",
        "title": "Party Shirt",
        "price": "$220",
        "tags": "new,Red,Party"
    },
    {
        "image": "./img/collection2.jpg",
        "title": "Beach Shirt",
        "price": "$220",
        "tags": "new,white,beach"
    },
    {
        "image": "./img/collection3.jpg",
        "title": "Beach Shirt",
        "price": "$220",
        "tags": "old,white,beach"
    },
    {
        "image": "./img/collection4.jpg",
        "title": "Floral Summer Shirt",
        "price": "$220",
        "tags": "new,Blue,summer"
    },
    {
        "image": "./img/collection5.jpg",
        "title": "Beach Shirt",
        "price": "$220",
        "tags": "new,green,beach"
    },
    {
        "image": "./img/collection6.jpg",
        "title": "Floral Summer Shirt",
        "price": "$220",
        "tags": "old,green,beach"
    },
    {
        "image": "./img/shirt4.jpg",
        "title": "Beach Shirt",
        "price": "$220",
        "tags": "new,white,beach"
    },
    {
        "image": "./img/collection3.jpg",
        "title": "Floral Summer Shirt",
        "price": "$220",
        "tags": "old,white,summer"
    },
    {
        "image": "./img/shirt5.jpg",
        "title": "Party Shirt",
        "price": "$220",
        "tags": "new,white,party"
    }
];


//Offer Box

var closeoffer = document.querySelector(".closeoffer")
var offerWrapper = document.querySelector(".offerWrapper")

closeoffer.addEventListener("click",()=>{
    offerWrapper.style.display = "none"
})

// Side Bar

var navWrapper = document.querySelector(".navWrapper-mob")
var menuIcon = document.querySelector("#menuIcon")
var closeNav = document.querySelector("#closeNav")

menuIcon.addEventListener("click",()=>{
    navWrapper.style.right = 0;
})
closeNav.addEventListener("click",()=>{
    navWrapper.style.right = "-50%";
})
//checkBox
var check = document.querySelectorAll('input[type="checkbox"]');


// check.forEach(checkbox => {
//     checkbox.addEventListener("click", () => {
//         let collection = [];
//         check.forEach((cb) => {
//             if (cb.checked) {
//                 collection.push(cb.value);
//             }
//         });
//         productSearch.forEach(products => {
//             console.log(products)
//             let tags = product.querySelector('span').textContent.split(',');
//             console.log(tags)
//             let isVisible = collection.every(product => tags.includes(product.trim()));
//             product.style.display = isVisible ? "block" : "none";
//         });
//     });
// });

function filterProducts() {
    let collection = [...check]
        .filter(cb => cb.checked)
        .map(cb => cb.value.toLowerCase());

    document.querySelectorAll('.product').forEach(product => {
        let tags = product.querySelector('span').textContent.toLowerCase().split(',');
        let isVisible = collection.length === 0 || collection.every(item => tags.includes(item.trim()));
        product.style.display = isVisible ? "block" : "none";
    });
}

check.forEach(check => {
    check.addEventListener('change', filterProducts);
});

// search
var searchInput = document.querySelector("#search")

searchInput.addEventListener("input",()=>{
    const inputValue = searchInput.value.toUpperCase()
    const filtervalues = products.filter(product => product.title.toUpperCase().includes(inputValue));
    displayProducts(filtervalues)
})

// fliter
    const gridViewBtn = document.getElementById("gridViewBtn");
    const listViewBtn = document.getElementById("listViewBtn");
    const productList = document.querySelector(".productList");
    var productSearch =productList.querySelectorAll(".product")

    
    function generate(product) {
        return `
            <div class="product">
                <img src="${product.image}" alt="">
                <h1 class="text-2xl">${product.title}</h1>
                <p class="text-xl">${product.price}</p>
                <span style="visibility:hidden;">${product.tags}</span>
            </div>
        `;
    }

    function displayProducts(products) {
        productList.innerHTML = products.map(generate).join('');
    }

    gridViewBtn.addEventListener("click", function() {
        productList.classList.add("grid-view");
        productList.classList.remove("list-view");
    });

    listViewBtn.addEventListener("click", function() {
        productList.classList.remove("grid-view");
        productList.classList.add("list-view");
    });

    displayProducts(products);


