// Add Products Data
const productsData = [
    { name:"Gold Wood Chair", price:2000, image:"YourKart/pexels-algrey-3705539.jpg" },
    { name:"White Frames", price:1000, image:"YourKart/pexels-alleksana-4185946.jpg" },
    { name:"Vintage Chair", price:3000, image:"YourKart/pexels-busranur-aydin-3800407-10529586.jpg" },
    { name:"Brown Chair", price:2500, image:"YourKart/pexels-cottonbro-4273433.jpg" },
    { name:"Wood Chair", price:1500, image:"YourKart/pexels-cup-of-couple-6633450.jpg"},
    { name:"Soft Chair", price:3500, image:"YourKart/pexels-kseniachernaya-5716714.jpg"},
    { name:"Wood Ambiance", price:4500, image:"YourKart/pexels-fotios-photos-1090638.jpg"},
    { name:"Lights", price:5500, image:"YourKart/pexels-hatice-baran-153179658-13344098.jpg"},
    { name:"Interiors", price:7500, image:"YourKart/pexels-huy-phan-316220-2826787.jpg"},
    { name:"Flowers", price:500, image:"YourKart/pexels-nastyasensei-66707-2575834.jpg"},
    { name:"Flat Chair", price:3000, image:"YourKart/pexels-shvetsa-3771691.jpg"},
    { name:"Wall Light", price:1500, image:"YourKart/pexels-sofia-marquet-453708414-18969790.jpg"},
    { name:"Sofa Set", price:10500, image:"YourKart/pexels-maksgelatin-4352247.jpg"},
    { name:"Black Frames", price:500, image:"YourKart/pexels-punttim-139764.jpg"},
    { name:"Wooden Desk", price:4500, image:"YourKart/pexels-taryn-elliott-9565728.jpg"},
    { name:"Mirror", price:7500, image:"YourKart/pexels-whynugrohou-3097112.jpg"},
    { name:"Hanging Lights", price:2500, image:"YourKart/pexels-valeriya-1129413.jpg"},
    { name:"Wooden Frame", price:500, image:"YourKart/pexels-karola-g-4207785.jpg"},
    { name:"Dark colour Chair", price:2500, image:"YourKart/pexels-cottonbro-4273433.jpg" },
    { name:"Teak wood Chair", price:1500, image:"YourKart/pexels-cup-of-couple-6633450.jpg"},
]

const productsDiv = document.getElementById("products");

productsData.forEach(p=>{
    productsDiv.innerHTML += `
    <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class ="added" onclick="addToCart('${p.name}',${p.price},'${p.image}')">
            Add to Cart
        </button>
    </div>`;
});

//Add TO Cart
let cart = [];
let total = 0;

function addToCart(name, price, image) {
 
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ name, price, image, qty: 1 });
    }

    total += price;
    document.getElementById("total").innerText = total;
    
    renderCart();
}


function renderCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-details">
                    <p class="cart-name">${item.name}</p>
                    <p>Qty: ${item.qty}</p>
                    <p>₹${item.price * item.qty}</p>
                </div>
            </div>
        `;
    });
}


const cartPage = document.getElementById("cart");
const checkOut = document.getElementById("checkOut");

function openCart() {
    productsDiv.style.display = "none";
    cartPage.style.display = "block";
}

function closeCart() {
    productsDiv.style.display = "flex";
    cartPage.style.display = "none";
    checkOut.style.display = "none";
}

function clearCart() {
    cart = [];
    total = 0;

    document.getElementById("cartItems").innerHTML = "";
    document.getElementById("total").innerText = 0;
}
 
function openCheckOut() {
    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }
    checkOut.style.display = "block";
}

function placeOrder() {
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (phone === "" || address === "") {
        alert("Please fill all the fields");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }

    alert("Your Order is Placed Sucessfully");
    clearCart();
    checkOut.style.display = "none";
    productsDiv.style.display = "flex";
    cartPage.style.display = "none";
}
