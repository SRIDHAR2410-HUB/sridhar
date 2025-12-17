/***********************
 PRODUCT LIST (YOUR DATA – UNCHANGED)
************************/
const products = [
  {id:1,name:"Notebook",price:120,img:"https://tse3.mm.bing.net/th/id/OIP.gx-piagQVjCPV66l88LyjgHaES?pid=Api&P=0&h=180"},
  {id:2,name:"Ball Pen Pack",price:90,img:"https://m.media-amazon.com/images/I/91b2xCfhzpS._AC_.jpg"},
  {id:3,name:"Calculator",price:450,img:"https://content.etilize.com/2000/1045600478.jpg"},
  {id:4,name:"Sticky Notes",price:70,img:"https://tse3.mm.bing.net/th/id/OIP.27i0DoQwhOj_HfQOWxYKqAHaG8?pid=Api&P=0&h=180"},
  {id:5,name:"Scissors",price:110,img:"https://tse2.mm.bing.net/th/id/OIP.pJMSNKdDbuq3s1wtNtf90AHaGR?pid=Api&P=0&h=180"},
  {id:6,name:"Stapler",price:180,img:"https://tse2.mm.bing.net/th/id/OIP.9Gdv_pY256yzgaNWHsy_RQHaEJ?pid=Api&P=0&h=180"},
  {id:7,name:"Paper Clips",price:60,img:"https://m.media-amazon.com/images/I/817gzOQg0VL._AC_.jpg"},
  {id:8,name:"Color Pencils",price:220,img:"https://www.artnews.com/wp-content/uploads/2021/04/AdobeStock_297459335.jpeg"},
  {id:9,name:"Crayons",price:160,img:"https://assets.parenttown.com/product_affiliate/products/18104529481674115743.jpg"},
  {id:10,name:"Glue Stick",price:50,img:"https://tse3.mm.bing.net/th/id/OIP.KEf2a98tEDDWt4boCRBRKQHaE8?pid=Api&P=0&h=180"},
  {id:11,name:"Pencil Box",price:120,img:"https://m.media-amazon.com/images/I/61KasEBk3HL._AC_UY1100_.jpg"},
  {id:12,name:"Towels",price:200,img:"https://tse2.mm.bing.net/th/id/OIP.UCpScnpHgjQnHzCLKCpv-QHaHa?pid=Api&P=0&h=180"},
  {id:13,name:"Water Bottle",price:300,img:"https://tse1.mm.bing.net/th/id/OIP.7vlg0T-FHbgsmbL8RY2aigHaH1?pid=Api&P=0&h=180"},
  {id:14,name:"Bowl",price:230,img:"https://tse2.mm.bing.net/th/id/OIP.hVSIAISl-aZBIWp8b-CFJwHaFz?pid=Api&P=0&h=180"},
  {id:15,name:"Tea Cup",price:300,img:"https://tse2.mm.bing.net/th/id/OIP.buDkAgKlWz3sN7OEoxen7wHaE8?pid=Api&P=0&h=180"},
  {id:16,name:"Kerchief",price:80,img:"https://tse3.mm.bing.net/th/id/OIP.kRgf3crDIe0LbCC8l8ndCwHaHa?pid=Api&P=0&h=180"},
  {id:17,name:"Slipper",price:450,img:"https://tse2.mm.bing.net/th/id/OIP.uhlA_coYP0GX7P3R1ZCV7wHaHa?pid=Api&P=0&h=180"},
  {id:18,name:"Headphone",price:1350,img:"https://www.boat-lifestyle.com/cdn/shop/files/8_9d4b4dbd-193c-4ea3-8007-b7d8c2ab4655_1500x.png?v=1721116299"},
  {id:19,name:"Laptop",price:49999,img:"https://tse4.mm.bing.net/th/id/OIP.YLWminn1U8KnclVR_ZwlJQAAAA?pid=Api&P=0&h=180"},
  {id:20,name:"Mobile",price:20000,img:"https://tse2.mm.bing.net/th/id/OIP.gF1yJrkh8OKOdAvm_kEZtAAAAA?pid=Api&P=0&h=180"},
  {id:21,name:"Bag",price:700,img:"https://tse3.mm.bing.net/th/id/OIP.DV1sM7KgCS8JK5xtG4tGaQHaJQ?pid=Api&P=0&h=180"},
  {id:22,name:"Pencil",price:80,img:"https://tse2.mm.bing.net/th/id/OIP.WALpYqCigCk96eiIxPzkWwHaKg?pid=Api&P=0&h=180"},
  {id:23,name:"Perfume",price:500,img:"https://tse1.mm.bing.net/th/id/OIP.etbfJWMQWQvNX7TBBw4jfwHaJ4?pid=Api&P=0&h=180"},
  {id:24,name:"Sunscreen",price:400,img:"https://tse3.mm.bing.net/th/id/OIP.3Yg_voMfr3nxGJaVts6OFQHaHa?pid=Api&P=0&h=180"},
  {id:25,name:"Shirt",price:650,img:"https://tse3.mm.bing.net/th/id/OIP.52HF78o6Zp7kFszyhmUecgHaHa?pid=Api&P=0&h=180"},
  {id:26,name:"Pant",price:800,img:"https://tse1.mm.bing.net/th/id/OIP.bqCd2NSNfrfAX5_6JX2gcgHaJb?pid=Api&P=0&h=180"},
  {id:27,name:"T Shirt",price:350,img:"https://tse2.mm.bing.net/th/id/OIP.5cN_zvKz3OajU_cv0ZJJAQHaE7?pid=Api&P=0&h=180"},
  {id:28,name:"Mobile Case",price:200,img:"https://tse2.mm.bing.net/th/id/OIP.QeNkZgLE5O_-cOkLuQlLBQHaHa?pid=Api&P=0&h=180"},
  {id:29,name:"Soap",price:80,img:"https://www.todayifoundout.com/wp-content/uploads/2013/03/lavendarsoap-640x640.jpg"},
  {id:30,name:"Shampoo",price:250,img:"https://tse2.mm.bing.net/th/id/OIP.-XW_flydMH6nkoSTWZhCrAHaHa?pid=Api&P=0&h=180"}
];

/***********************
 GLOBAL VARIABLES
************************/
let selectedProduct = null;

/***********************
 PAGE NAVIGATION
************************/
function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");
}

/***********************
 LOGIN
************************/
function login() {
  const email = document.getElementById("loginEmail").value;
  if (!email) return alert("Enter email");
  localStorage.setItem("email", email);
  showPage("home");
}

/***********************
 DISPLAY PRODUCTS
************************/
function displayProducts(list = products) {
  const listDiv = document.getElementById("productList");
  listDiv.innerHTML = "";
  list.forEach(p => {
    listDiv.innerHTML += `
      <div class="card" onclick="openProduct(${p.id})">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
      </div>`;
  });
}

/***********************
 SEARCH
************************/
document.getElementById("searchInput").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});

/***********************
 PRODUCT DETAILS
************************/
function openProduct(id) {
  selectedProduct = products.find(p => p.id === id);
  detailImg.src = selectedProduct.img;
  detailName.innerText = selectedProduct.name;
  detailDesc.innerText = "High quality product";
  detailPrice.innerText = "₹" + selectedProduct.price;
  showPage("productDetails");
}

/***********************
 CART
************************/
function addToCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(selectedProduct);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart");
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCount.innerText = cart.length;
}

function showCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cartItems.innerHTML = cart.map(p => {
    total += p.price;
    return `<p>${p.name} - ₹${p.price}</p>`;
  }).join("");
  cartTotal.innerText = "Total: ₹" + total;
  showPage("cart");
}

/***********************
 ORDERS
************************/
function placeOrder() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.length) return alert("Cart empty");

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push({ id: Date.now(), items: cart });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");
  updateCartCount();
  showOrders();
}

function showOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  ordersList.innerHTML = orders.map(o => `
    <div>
      <b>Order ID:</b> ${o.id}<br>
      ${o.items.map(i => `${i.name} - ₹${i.price}`).join("<br>")}
      <br><button onclick="showPage('tracking')">Track Order</button>
    </div><hr>
  `).join("");
  showPage("orders");
}

/***********************
 PROFILE
************************/
function showProfile() {
  pEmail.value = localStorage.getItem("email") || "";
  pName.value = localStorage.getItem("name") || "";
  pAddress.value = localStorage.getItem("address") || "";
  showPage("profile");
}

function saveProfile() {
  localStorage.setItem("name", pName.value);
  localStorage.setItem("address", pAddress.value);
  alert("Profile saved");
}

/***********************
 INIT
************************/
if (!localStorage.getItem("email")) {
  showPage("login");
} else {
  showPage("home");
}

displayProducts();
updateCartCount();
