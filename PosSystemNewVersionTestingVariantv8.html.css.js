<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Coffee POS Dashboard</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<link href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" rel="stylesheet"/>
<link href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.dataTables.min.css" rel="stylesheet"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
<link href="https://github.com/guevaraprinceedward/study-projects/tree/master">
<style>

  body {

  	background:#f9f9f9;
  	font-family:'Segoe UI', sans-serif;
  	font-size:14px;
  	margin:0;

  }
  
  .sidebar {

    height: 100vh;
    background: #1f2d3d;
    color: white;
    position: fixed;
    width: 220px;
    padding-top: 20px;

  }
  
  .sidebar h4 {

    text-align:center;
    margin-bottom:30px;
    font-weight: 600;

  }

  .sidebar a {

    display:block;
    color:#c2c7d0;
    padding:10px 20px;
    text-decoration:none;
    transition: 0.2s;

  }
  
  .sidebar a:hover {

    background:#3c8dbc;
    color:white;

  }
  
  .main{

    margin-left:220px;
    padding:20px;

  }

  /* PRODUCT CARD */
  
.product-card{
    border:1px solid #ddd;
    border-radius:10px;
    padding:10px;
    text-align:center;
    background:white;
    transition:0.2s;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
  
.product-card:hover {

	box-shadow:0 4px 12px rgba(0,0,0,0.1);
    transform:scale(1.02);
    
  }

.product-img {

    background:transparent;
    margin-bottom:10px;
    border-radius:6px;
    display:flex;
    align-items:center;
    justify-content:center;
    height:120px;
    overflow:hidden;
    
}

  .product-img img {

    max-width:100%;
    max-height:100%;
    object-fit:contain;
    display: block;
    border-radius:6px;

  }
  
  /* ADD BUTTON */

.add-btn {
      background: linear-gradient(135deg, #0f6a58 0%, #36b39c 100%);
  color:white;
  border:none;
  padding:3px 50px;   /* mas maliit */
  border-radius:4px;
  font-size:11px;
  cursor:pointer;
  transition:0.75s ease;

  display:block;
  margin:auto;       /* center horizontally */
}
  
  .add-btn:hover {
  
  	transform: translateY(-10px);
    transtion: 0.8s ease;
  
  }
  
  /* CART PANEL (CONTAINER) */
  
  .cart-panel {
  
  	background:white;
    border-radius:10px;
    padding:15px;
    
  }
  
  .cart-panel table {
  
    font-size:13px;
    width:100%;
    border-collapse:collapse;
    table-layout:fixed; /* Ensures table fits inside panel */

  }
  
  .cart-panel table th,
  .cart-panel table td {
  
    padding:6px 8px; /* Slightly Smaller Padding */
    text-align:center;
    vertical-align:middle;
    border-bottom:1px solid #ddd; /* Only Bottom Border For Cleaner Look */
  
  }

/* Quantity Buttons Inside The Cart */
  .cart-panel .qty-btn {
  
    width:26px;
    height:26px;
    font-size:12px;
    padding:0;
    border:none;
    border-radius:4px;
    background:#8e44ad;
    color:white;
    cursor:pointer;
    margin:0 2px;
    transition:0.2s;
  
  }
  
  .cart-panel .qty-btn:hover {
  
  	background:#732d91;
    
  }
  
  .cart-item {

	border-bottom:1px solid #eee;
    padding:6px 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    
  }
  
  .qty-btn-ctm {

	border:none;
    background: linear-gradient(45deg, #4B2E2B, #A9746E);
    color:white;
    width:25px;
    height:25px;
    border-radius:4px;
    margin:0 2px;
    cursor:pointer;
    
  }
  
  .checkout-btn {
  
  	background: linear-gradient(135deg, #16a05f 0%, #36b39c 100%);
    color:white;
    border:none;
    transition: 0.8s ease;
    background-size: 200% 200%;
    
  }
  
  .checkout-btn:hover {

      background-position: right center;
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.2);
    
  }
  
  .clear-btn {
  
    background: linear-gradient(135deg, #e6534b 0%, #d6453d 100%);
    color:white;
    border:none;
    transition: 0.8s ease;
    background-size: 200% 200%;
  
  }
  
  .clear-btn:hover {
  
      background-position: right center;
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.2);
    
  }
  
  .checkout-btn, .clear-btn {
  
    width: 100%;
    text-align: center;
    
  }
  
  .fee-container {

    background:#f1f1f1;
    padding:10px;
    border-radius:8px;
    margin-top:15px;
    transition: 0.8s ease;
    animation: fadeIn 1.3s ease-out forwards;

  }
  
  @keyframes fadeIn {
  
  		from {
        
        	opacity: 0;
            
        }
        
        to {
        
        	opacity: 1;
            
        }
        
        
  }

  .fee-row {
  
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:6px 5px;
    margin-bottom:4px;
    
  }
  
  .fee-row p {
  
  	margin: 0;
    
  }

  .grand-total {

    font-weight:bold;
    font-size:16px;

  }
  
  /* Completed Orders Table Styling */
  #completedOrdersTable {
  
    background: #fdf6f0; /* Light Cream Color */
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    
  }

  #completedOrdersTable thead {
  
    background: linear-gradient(135deg, #6b4c3b, #a67c52); /* dark mocha to caramel */
    color: #fff;
    font-weight: bold;
    text-align: center;
    
  }

  #completedOrdersTable thead th {
  
	transition: background 0.3s, transform 0.2s;
    background: #f8f1eb; /* light coffee cream */
    border: none;
    text-align: center;
    vertical-align: middle;
    
  }

  #completedOrdersTable tbody tr {
  
  	transition: background 0.3s, transform 0.2s;
    background: #f8f1eb;
    
  }

  #completedOrdersTable tbody tr:hover {
  
  	background: #f4e1d2; /* slightly darker cream */
    transform: scale(1.02);
    
  }

  #completedOrdersTable tbody td {

    text-align: center;
    vertical-align: middle;
    border-top: 1px solid #d9c7b1; /* coffee beige border */
    color: #4b2e2b; /* dark coffee brown */
    
  }

  #completedOrdersTable_wrapper {
  
    padding: 10px;
    background: #f9f9f9;
    border-radius: 10px;
    
  }

/* Responsive scroll for small screens */
  .dataTables_wrapper .dataTables_scroll {
  
    border: none;
    
  }

/* Optional: style the table search box & length dropdown */
 
  .dataTables_filter input,
  .dataTables_length select {
  
    border-radius: 5px;
    padding: 3px 8px;
    border: 1px solid #ccc;
    font-size: 13px;
    
  }
  
  .table-btn {
    background: linear-gradient(135deg, #8b5e3c, #d4a373);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 3px 8px;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s;
}

.table-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
}

#completedOrdersTable tbody tr:nth-child(even) {
    background: #f4e7dd; /* light mocha */
}

#completedOrdersTable tbody tr:nth-child(odd) {
    background: #f8f1eb; /* cream */
}

@media (max-width:768px){

.sidebar{
    position:relative;
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
}

/* title */
.sidebar h4{
    font-size:16px;
    margin-bottom:8px;
}

/* menu row */
.nav-menu{
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:15px;
}

/* menu links */
.nav-menu a{
    font-size:13px;
    padding:5px 8px;
}

/* main full width */
.main{
    margin-left:0;
    padding:15px;
}

/* Product grid smaller */
#productList .col-md-4{
    width:50%;
}

/* Product image smaller */
.product-img{
    height:90px;
}

/* Product text smaller */
.product-card h6{
    font-size:13px;
}

/* Add button smaller */
.add-btn{
    padding:4px 20px;
    font-size:11px;
}

/* Cart panel spacing */
.cart-panel{
    margin-top:20px;
}

/* Cart table scrollable */
.cart-panel table{
    width: 100%;
    overflow-x:auto;
    white-space:nowrap;
}

/* Checkout buttons stacked */
.checkout-btn,
.clear-btn{
    font-size:13px;
    padding:8px;
}

/* Completed orders table smaller text */
#completedOrdersTable{
    font-size:12px;
}

/* Analytics charts spacing */
#analyticsSection canvas{
    margin-top:20px;
}

}

</style>
</head>
<body>

<div class="sidebar">
<h4> My AyosCoffeeNegosyo POS System </h4>

<div class="nav-menu">
<a href="#posSection"> POS System </a>
<a href="#completedOrdersSection"> Completed Orders </a>
<a href="#analyticsSection"> Sales Analytics </a>
</div>

</div>

<div class="main">

<section id="posSection">
<div class="topbar mb-3">
<h5 style="text-align: center;"> Point of Sales System ( Coffee Products )</h5>
<span>Admin</span>
</div>

<div class="row">
<div class="col-lg-8">
<div class="d-flex justify-content-between align-items-center mb-3 gap-2">

  <!-- SEARCH (LEFT) -->
  <input type="text" id="searchProduct"
    class="form-control"
    placeholder="Search product...">

  <!-- CATEGORY (RIGHT) -->
  <select id="categoryFilter" class="form-select" style="max-width:200px;">
    <option value="all">All Categories</option>
    <option value="coffee">Coffee</option>
    <option value="soda">Fruit Soda</option>
    <option value="tao">Tao Waffle</option>
    <option value="hao">Hao Stuffed Muffin</option>
  </select>

</div>

<div class="row g-3" id="productList"></div>
</div>



<div class="col-lg-4">
<div class="cart-panel">
<h6>Cart</h6><hr>
<div id="cartItems"></div><hr>
<p>Service Charge: <input type="number" id="serviceCharge" class="form-control form-control-sm" value="0"></p>
<p>Customer: <input type="text" id="customerName" class="form-control form-control-sm" placeholder="Optional"></p>
<h6 class="mt-3">Payments</h6>
<select id="paymentMethod" class="form-select form-select-sm mb-2">
<option value="cash">Cash</option>
<option value="gcash">GCash</option>
<option value="card">Card</option>
</select>
<div class="fee-container">

<div class="fee-row">
<p>Subtotal:</p>
<span>₱<span id="subtotal">0.00</span></span>
</div>

<div class="fee-row">
<p>Tax:</p>
<span>₱<span id="tax">0.00</span></span>
</div>

<div class="fee-row">
<p>Service:</p>
<span>₱<span id="serviceTotal">0.00</span></span>
</div>

<hr>

<div class="fee-row grand-total">
<span>Grand Total:</span>
<span>₱<span id="grandTotal">0.00</span></span>
</div>

</div>

<div class="row mt-3">
  <div class="col-6">
    <button class="btn checkout-btn w-100" id="checkoutBtn">Checkout</button>
  </div>
  <div class="col-6">
    <button class="btn clear-btn w-100" id="clearBtn">Clear</button>
  </div>
</div>

</div>
</div>
</div>
</section>

<hr>

<section id="completedOrdersSection" class="mt-5">

<h4>Completed Orders</h4>

<div class="table-responsive">

<table id="completedOrdersTable" class="table table-bordered nowrap" style="width:100%">

<thead>
<tr>

<th>#</th>

<th>Customer</th>
<th>Items</th>
<th>Subtotal</th>
<th>Tax</th>
<th>Service</th>
<th>Grand Total</th>
<th>Payment</th>
<th>Date</th>

</tr>
</thead>
<tbody></tbody>
</table>

</div>

<hr>

<section id="analyticsSection" class="mt-5">

<h4>Sales Analytics</h4>

<div class="row">

<div class="col-md-6">
<h6>Top 6 Sold Products</h6>
<ul id="topProductsList" class="list-group"></ul>
</div>

</div>

<div class="row mt-4">

<div class="col-md-6">
<h6>Top 5 Products (Units)</h6>
<canvas id="topProductsChart"></canvas>
</div>

<div class="col-md-6">
<h6>Daily Transactions</h6>
<canvas id="dailyTransactionsChart"></canvas>
</div>

</div>

</section>

</section>

</div>

<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"></script>
<script>
// ===================== DATA =====================
const products = [
  { sku: "COF-ESPR", name: "Espresso", price: 109, stock: 100, category: "coffee", imgUrl: "https://png.pngtree.com/png-clipart/20231018/original/pngtree-espresso-coffee-cup-isolated-png-image_13342545.png" },
  
  { sku: "COF-CRML", name: "Caramel Latte", price: 119, stock: 100, category: "coffee", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Caramel.Latte.png" },
  
  { sku: "FRP-MCHA", name: "Mocha Frappe", price: 99, stock: 100, category: "coffee", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Mocha.Frappe.png" },
  
  { sku: "COF-SPA", name: "Spanish Latte", price: 99, stock: 100, category: "coffee", imgUrl: "https://png.pngtree.com/png-vector/20241031/ourmid/pngtree-latte-isolated-on-white-background-png-image_14218052.png" },
  
  { sku: "COF-AMRC", name: "Americano", price: 79, stock: 100, category: "coffee", imgUrl: "https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-americano-coffee-beans-transparent-white-background-png-image_6698453.png" },
  
  { sku: "SODA-STRAW", name: "Fruit Soda (Strawberry)", price: 59, stock: 100, category: "soda", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Strawberry.png" },
  
  { sku: "SODA-BLUE", name: "Fruit Soda (Blueberry)", price: 59, stock: 100, category: "soda",  imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Blueberry.png" },
  
  { sku: "SODA-GAPL", name: "Fruit Soda (Green Apple)", price: 59, stock: 100, category: "soda", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Green_Apple.png" },
  
  { sku: "SODA-GALX", name: "Fruit Soda (Galaxy)", price: 69, stock: 100, category: "soda", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Galaxy.png" },
  
  { sku: "SODA-COCO", name: "Fruit Soda (Coconut)", price: 59, stock: 100, category: "soda", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Coconut.png" },
  
  { sku: "SODA-MANG", name: "Fruit Soda (Mango)", price: 59, stock: 100, category: "soda", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Mango.png" },
  
  { sku: "SODA-PAPPL", name: "Fruit Soda (Pineapple)", price: 59, stock: 100, category: "soda", imgUrl: "https://png.pngtree.com/png-clipart/20240508/original/pngtree-glass-of-pineapple-juice-and-group-fruits-png-image_15036853.png" },
  
  { sku: "SODA-MELON",name: "Fruit Soda (Watermelon)", price: 59, stock: 100, category: "soda", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrphUZzZjySH5fAu0tNBlb-YuuWOUSH1T5Q&s" },
  
  { sku: "SODA-ORNG",name: "Fruit Soda (Orange)", price: 59, stock: 100, category: "soda", imgUrl: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL2hpcHBvdW5pY29ybl9kaWdpdGFsX2FydF9pbGx1c3RyYXRpb25fb2Zfb3JhbmdlX2p1aWNlaXNvbGF0ZWRfb18wODhhZmFjNS05ZTRiLTQyMTItYTQ1ZS0xOGNlNTBhZjVjZDEucG5n.png" },
  
  { sku: "SODA-PTCH",name: "Fruit Soda (Peach)", price: 59, stock: 100, category: "soda", imgUrl: "https://img.freepik.com/premium-photo/glass-peach-juice-cut-fresh-peach-fruits-isolated-white-background_124717-835.jpg?w=360" },
  
  { sku: "TAO-CHEE",name: "Tao Waffle n’ Cheese (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-CHEE.png" },
  
  { sku: "TAO-CHOC", name: "Tao Choco n' Crust (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-CHOC.png" },
  
  { sku: "TAO-CUST", name: "Tao Custard (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-CUST.png" },
  
  { sku: "TAO-MOZZ", name: "Tao Mozzarella (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-MOZZ.png" },
  
  {	sku: "TAO-STRAW", name: "Tao Strawberry Waffle", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-STRAW.png" },
  
  { sku: "TAO-UBE", name: "Tao Ube Waffle (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-UBE.png" },
  
  { sku: "HAO-BEEF", name: "Hao Beef Taco", price: 49, stock: 100, category: "hao", imgUrl: "https://ayosnegosyoph.com/public/product/MANT-BEEF.png" },
  
  { sku: "HAO-PEPP", name: "Hao Pepperoni", price: 49, stock: 100, category: "hao", imgUrl: "https://ayosnegosyoph.com/public/product/MANT-PEPP.png" }
];

let cart = [];
let salesData = [];
let completedOrdersTable;
let topProductsChart;
let dailyChart;

// ===================== INIT =====================
$(document).ready(() => {
  completedOrdersTable = $('#completedOrdersTable').DataTable({ responsive: true });
  renderProducts();
  updateCart();

  $("#searchProduct").on("input", renderProducts);
  $("#categoryFilter").on("change", renderProducts);

  $("#checkoutBtn").click(checkout);
  $("#clearBtn").click(() => { cart = []; updateCart(); });
  $("#serviceCharge").on("input", updateCart);
  $("#paymentMethod").on("change", updateCart);
});

// ===================== RENDER PRODUCTS =====================
function renderProducts() {
  const search = $("#searchProduct").val().toLowerCase();
  const selectedCategory = $("#categoryFilter").val();
  $("#productList").empty();

  products.forEach(p => {
    if (!p.name.toLowerCase().includes(search)) return;
    if (selectedCategory !== "all" && p.category !== selectedCategory) return;

    const stockText = p.stock === 0 ? 'Out of stock' : p.stock;
    const stockColor = p.stock === 0 ? 'red' : 'black';
    const sku = `SKU: ${p.sku}`;

    $("#productList").append(`
      <div class="col-md-4">
        <div class="product-card">
          <div class="product-img"><img src="${p.imgUrl}" alt="${p.name}"></div>
          <h6>${p.name}</h6>
          <p style="font-size: 13px; color: #555;"><strong>${sku}</strong></p>
          <p style="font-size: 14px; color:${stockColor}">₱${p.price.toFixed(2)} | Stock: ${stockText}</p>
          <button class="add-btn" ${p.stock===0?'disabled':''} onclick="addToCart('${p.name}')">+ Add</button>
        </div>
      </div>
    `);
  });
}

// ===================== CART FUNCTIONS =====================
function addToCart(name) {
  const product = products.find(p => p.name === name);
  if (!product || product.stock === 0) return;
  const existing = cart.find(i => i.name === name);
  if (existing) {
    if (existing.qty >= product.stock) return Swal.fire("Not enough stock","","warning");
    existing.qty++;
  } else {
    cart.push({ name, price: product.price, qty: 1 });
  }
  updateCart();
}

function changeQty(index, amount) {
  const item = cart[index];
  const product = products.find(p => p.name === item.name);
  item.qty += amount;
  if (item.qty <= 0) cart.splice(index, 1);
  else if (item.qty > product.stock) item.qty = product.stock;
  updateCart();
}

// ===================== UPDATE CART =====================
function updateCart() {
  let subtotal = 0;
  let html = "";

  if (cart.length) {
    html = `<table class="table table-sm text-center mb-0">
      <thead><tr><th>Product</th><th>Qty</th><th>Price</th><th>Total</th><th>Action</th></tr></thead>
      <tbody>`;
    cart.forEach((item,i) => {
      const total = item.qty * item.price;
      subtotal += total;
      html += `<tr>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>₱${item.price.toFixed(2)}</td>
        <td>₱${total.toFixed(2)}</td>
        <td>
          <button class="qty-btn-ctm" onclick="changeQty(${i}, -1)">-</button>
          <button class="qty-btn-ctm" onclick="changeQty(${i}, 1)">+</button>
        </td>
      </tr>`;
    });
    html += `</tbody></table>`;
  } else {
    html = `<p class="text-center text-muted mb-0" style="padding:20px;">Cart is empty</p>`;
  }
  $("#cartItems").html(html);

  const service = parseFloat($("#serviceCharge").val()) || 0;
  const method = $("#paymentMethod").val();
  const taxRate = method === "cash" ? 0.10 : method === "gcash" ? 0.20 : 0.35;
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + tax + service;

  $("#subtotal").text(subtotal.toFixed(2));
  $("#tax").text(tax.toFixed(2));
  $("#serviceTotal").text(service.toFixed(2));
  $("#grandTotal").text(grandTotal.toFixed(2));
}

// ===================== CHECKOUT =====================
function checkout() {
  if (!cart.length) return Swal.fire("Cart is empty","","warning");

  // ✅ VALIDATION
  const customer = $("#customerName").val().trim();
  const payment = $("#paymentMethod").val();
  const serviceInput = $("#serviceCharge").val();

  if (!customer) return Swal.fire("Please enter customer name","","warning");
  if (!payment) return Swal.fire("Please select a payment method","","warning");
  if (serviceInput === "" || isNaN(parseFloat(serviceInput))) 
    return Swal.fire("Please enter a valid service charge","","warning");

  // Confirm checkout
  Swal.fire({
    title: "Confirm Checkout?",
    icon: "question",
    showCancelButton: true
  }).then(res => {
    if (!res.isConfirmed) return;

    const subtotal = parseFloat($("#subtotal").text());
    const tax = parseFloat($("#tax").text());
    const service = parseFloat(serviceInput) || 0;
    const grand = parseFloat($("#grandTotal").text());
    const date = new Date();

    // Save order
    salesData.push({
      customer,
      items: cart.map(i => ({ name: i.name, qty: i.qty })),
      subtotal, tax, service, grand, payment, date
    });

    // Reduce stock
    cart.forEach(c => {
      const p = products.find(pr => pr.name === c.name);
      if (p) p.stock -= c.qty;
    });

    // Add to completed orders table
    completedOrdersTable.row.add([
      completedOrdersTable.rows().count()+1,
      customer,
      cart.map(i => `${i.name} x${i.qty}`).join(", "),
      subtotal.toFixed(2),
      tax.toFixed(2),
      service.toFixed(2),
      grand.toFixed(2),
      payment.toUpperCase(),
      date.toLocaleString()
    ]).draw();

    Swal.fire("Payment Successful","","success");
    cart = [];
    updateCart();
    renderProducts();
    updateAnalytics();
  });
}

// ===================== ANALYTICS =====================
function updateAnalytics() {
  const productSales = {};
  const dailyTransactions = {Monday:0,Tuesday:0,Wednesday:0,Thursday:0,Friday:0,Saturday:0,Sunday:0};

  salesData.forEach(order => {
    const day = order.date.toLocaleDateString('en-US', { weekday: 'long' });
    if (dailyTransactions[day] !== undefined) dailyTransactions[day]++;
    order.items.forEach(i => productSales[i.name] = (productSales[i.name] || 0) + i.qty);
  });

  const top6 = Object.entries(productSales).sort((a,b)=>b[1]-a[1]).slice(0,6);
  $("#topProductsList").html(top6.map(p=>`<li class="list-group-item d-flex justify-content-between">${p[0]} <span>${p[1]} sold</span></li>`).join(""));

  createCharts(productSales, dailyTransactions);
}

// ===================== CHARTS =====================
function createCharts(productSales, dailyTransactions) {
  const top5 = Object.entries(productSales).sort((a,b)=>b[1]-a[1]).slice(0,5);
  if (topProductsChart) topProductsChart.destroy();
  topProductsChart = new Chart($("#topProductsChart"), {
    type: "bar",
    data: { labels: top5.map(p=>p[0]), datasets: [{ label:"Units Sold", data: top5.map(p=>p[1]), backgroundColor: "#8b5e3c" }] }
  });

  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  if (dailyChart) dailyChart.destroy();
  dailyChart = new Chart($("#dailyTransactionsChart"), {
    type: "line",
    data: { labels: days, datasets: [{ label:"Transactions", data: days.map(d=>dailyTransactions[d]), borderColor:"#36b39c", backgroundColor:"rgba(54,179,156,0.2)", fill:true, tension:0.3 }] },
    options: { responsive:true, plugins:{legend:{display:true}}, scales:{y:{beginAtZero:true, ticks:{stepSize:1}}} }
  });
}

</script>

<!-- ibang scripts mo -->
<script src="https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js"></script>

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- main javascript file mo -->
<script src="pos.js"></script>

<!-- GITHUB: IMPLEMENT ACCOUNT -->


<!-- POS SYSTEM NEW UPDATE VERSION 7.0 -->
<!-- NEW CHANGES VARIANTS IN SYSTEMS -->
<!-- NEW SYSTEM ( TOP 5 PRODUCTS (UNITS) ) -->
<!-- NEW SYSTEM ( SALES ANALYTICS ) -->
<!-- NEW SYSTEM ( DAILY TRANSACTIONS ) -->
<!-- NEW CREATED AT MAR 17 2026: 8:17PM -->
<!-- PESONAL TEST PROJECT FOR PABLO -->

</body>
</html>
