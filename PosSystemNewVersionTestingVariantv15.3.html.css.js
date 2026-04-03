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

	background: #eef2f5;
  	font-family:'Segoe UI', sans-serif;
  	font-size:14px;
  	margin:0;
    overflow-x: hidden;
    

  }
  
.brand-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 15px;
  background: #0f2233;
}

.brand-icon {
  color: #4dd0e1;
  font-size: 14px;
}

.brand-title {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}


  
  .sidebar {

    height: 100vh;
    background: #0f2233;
    color: white;
    position: fixed;
    width: 220px;
    

  }
  
  .sidebar h4 {

    text-align:center;
    margin-bottom:30px;
    font-weight: 600;

  }

  .sidebar a {

    display:block;
    color: rgba(232, 237, 243, 0.9);
    padding:10px 20px;
    text-decoration:none;
    transition: 0.2s;
    margin: 2px 5px;
    border-radius: 8px;
    font-size: 13px;

  }
  
  .sidebar a:hover {

    background:#ebf2f2;
    color: #227162;
    font-weight: bold;
    transition: 0.2s ease;

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

  width: 100%;
  max-width: 140px;
  margin: 0 auto 12px;
  height: 120px;
  padding: 10px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-img img {

  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  
}
  
  /* ADD BUTTON */

.add-btn {

  background: linear-gradient(135deg, #0f6a58 0%, #36b39c 100%);
  color:white;
  border:none;
  padding:3px 45px;
  border-radius:4px;
  font-size:11px;
  cursor:pointer;
  transition:0.75s ease;
  display:flex;
  margin: auto;
  gap: 3.5px;
  
}
  
  .add-btn:hover {
  
  	transform: translateY(-10px);
    transition: 0.8s ease;
  
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
    table-layout:fixed;

  }
  
  .cart-panel table th,
  .cart-panel table td {
  
    padding:6px 8px;
    text-align:center;
    vertical-align:middle;
    border-bottom:1px solid #ddd;
  
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
    color: white;
    border: none;
    background-size: 200% 200%;
    text-align: center;
    font-size: 13px;
    transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 10px rgba(22, 160, 95, 0.3);
}

.checkout-btn:hover {
    background-position: right center;
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

.clear-btn {
    background: linear-gradient(135deg, #e6534b 0%, #d6453d 100%);
    color: white;
    border: none;
    background-size: 200% 200%;
    text-align: center;
    font-size: 13px;
    transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 10px rgba(22, 160, 95, 0.3);
}

.clear-btn:hover {
    background-position: right center;
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
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
  
    background: #fdf6f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    
  }

  #completedOrdersTable thead {
  
    background: linear-gradient(135deg, #6b4c3b, #a67c52);
    color: #fff;
    font-weight: bold;
    text-align: center;
    
  }

  #completedOrdersTable thead th {
  
	transition: background 0.3s, transform 0.2s;
    background: #f8f1eb;
    border: none;
    text-align: center;
    vertical-align: middle;
    
  }

  #completedOrdersTable tbody tr {
  
  	transition: background 0.3s, transform 0.2s;
    background: #f8f1eb;
    
  }

  #completedOrdersTable tbody tr:hover {
  
  	background: #f4e1d2;
    transform: scale(1.02);
    
  }

  #completedOrdersTable tbody td {

    text-align: center;
    vertical-align: middle;
    border-top: 1px solid #d9c7b1;
    color: #4b2e2b;
    
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
    background: #f4e7dd;
}

#completedOrdersTable tbody tr:nth-child(odd) {
    background: #f8f1eb;
}

@media (max-width:768px){

.product-img {

  width: 100%;
  max-width: 140px;
  margin: 0 auto 12px;
  height: 120px;
  padding: 10px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-img img {

  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  
}

.brand-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 25px;
  background: #0f2233;
  border-left: 3px solid #4dd0e1;
  margin-bottom: 15px;
  border-radius: 15px 8px;
}

.brand-icon {
  color: #4dd0e1;
  font-size: 14px;
}

.brand-title {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}

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


/* Completed orders table smaller text */
#completedOrdersTable{
    font-size:12px;
}

/* Analytics charts spacing */
#analyticsSection canvas{
    margin-top:20px;
}

}

/* CART TABLE SPACING */
.cart-panel table td,
.cart-panel table th {
    padding: 10px 8px;
    text-align: center;
    vertical-align: middle;
}

.cart-panel table input[type="number"] {
    width: 50px;  /* fixed width */
    border-radius: 4px;
    padding: 4px;
    border: 1px solid #ccc;
    text-align: center;
}

.cart-table td:first-child {
  min-width: 220px !important;
  max-width: 400px !important;
  white-space: normal !important;
  word-break: break-word !important;
  overflow: visible !important;
}


.cart-panel table td:first-child {
  line-height: 1.2;
}

@media (min-width: 769px) {
  .cart-panel table td:first-child {
    max-width: 300px;
    white-space: normal !important;
    overflow: visible !important;
    text-overflow: unset !important;
  }
}

/* MOBILE VIEW */
@media (max-width: 768px) {
  .cart-panel table td:first-child {
    max-width: 150px;
    white-space: normal;
    word-wrap: break-word;
  }
}

.cell-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

/* PRODUCT NAME MULTILINE */
.product-name {
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  line-height: 1.2;
}

/* INPUT STYLE */
.cell-flex input {
  width: 55px;
  text-align: center;
}

/* OPTIONAL: mas clean ₱ */
.cell-flex span:first-child {
  opacity: 0.7;
}

.profile-container {
  text-align: center;
  background: #1f2d3d;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
}

.profile-container img {
  width: 105px;
  height: 105px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #36b39c;
  margin-bottom: 8px;
}

.profile-name {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.profile-role {
  margin: 0;
  font-size: 12px;
  color: #c2c7d0;
}

.system-title {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.product-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  padding-bottom: 8px;
  
  
}

.products-container {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.products-header i {
  font-size: 18px;
  color: #36b39c;
}

#productList {

	border: none;
 
}

.brand-icon {
  font-size: 10px;
    display: flex;
  align-items: center;
}

#prevPage:hover, #nextPage:hover {
  transform: translateY(-3.5px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
  transition: 0.8s ease;
}

#prevPage:active, #nextPage:active {
  transform: scale(0.97);
  transition: 0.8s ease;
}

.icon-badge {

  color: #000;
  border-radius: 12px;
  padding: 2.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.btn-sm {

  padding: 5px 10px;
  line-height: 1.5;
  border-radius; 3px;

}

#searchProduct:focus {
  outline: none !important;
  border: 1px solid #36b39c !important;
  box-shadow: 0 0 0 4px rgba(54, 179, 156, 0.25) !important;
}

#paymentMethod:focus {
  outline: none !important;
  border: 1px solid #36b39c !important;
  box-shadow: 0 0 0 4px rgba(54, 179, 156, 0.25) !important;
}

#amountPaid:focus {
  outline: none !important;
  border: 1px solid #36b39c !important;
  box-shadow: 0 0 0 4px rgba(54, 179, 156, 0.25) !important;
}

#serviceCharge:focus {
  outline: none !important;
  border: 1px solid #36b39c !important;
  box-shadow: 0 0 0 4px rgba(54, 179, 156, 0.25) !important;
}

#customerName:focus {
  outline: none !important;
  border: 1px solid #36b39c !important;
  box-shadow: 0 0 0 4px rgba(54, 179, 156, 0.25) !important;
}

#categoryFilter:focus {
  outline: none !important;
  border: 1px solid #36b39c !important;
  box-shadow: 0 0 0 4px rgba(54, 179, 156, 0.25) !important;
}

#lowStockTable thead th {
  font-size: 13px;
  text-align: center;
}

#lowStockTable tbody td {
  text-align: center;
  font-size: 13px;
}

.low-stock-safe {
  background-color: #d4edda !important; /* greenish */
  color: #155724;
}

.low-stock-warning {
  background-color: #fff3cd !important; /* yellow/orange */
  color: #856404;
}

.low-stock-critical {
  background-color: #f8d7da !important; /* red */
  color: #721c24;
}

.stock-badge {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
  vertical-align: middle;
}

.card-header {
  font-size: 14px;
}

#lowStockTable {
  width: 100% !important;
  table-layout: auto !important;
}

.table-responsive {
  overflow-x: auto;
}

.btn-refill-action {

	background: linear-gradient(135deg, #16a05f 0%, #36b39c 100%);
    color: white;
    border: none;
    background-size: 200% 200%;
    text-align: center;
    font-size: 13px;
    transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 10px rgba(22, 160, 95, 0.3);

}

.btn-refill-action:hover {
    background-position: right center;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

.btn-out-of-stock-status,
.btn-critical-status {

	background: linear-gradient(135deg, #e6534b 0%, #d6453d 100%);
    color: #000;
    border: none;
    background-size: 200% 200%;
    text-align: center;
    font-size: 13px;
    transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 10px rgba(22, 160, 95, 0.3);
    
}

.btn-low-stock-status {

	background: linear-gradient(135deg, #e6534b 0%, #d6453d 100%);
    color: white;
    border: none;
    background-size: 200% 200%;
    text-align: center;
    font-size: 13px;
    transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 10px rgba(22, 160, 95, 0.3);
    
}

.sku-text {
  color: #6c757d; /* Bootstrap text-muted */
  font-size: 12px;
  margin-bottom: 1em;
}

.price-text {
  color: #6c757d; /* same muted tone */
  font-size: 12px;
}

</style>
</head>
<body>

<div class="sidebar">

<div class="brand-header">
  <i class="bi bi-lightning-charge-fill brand-icon"></i>
  <span class="brand-title">AyosCoffeeNegosyoPH</span>
</div>

<div class="profile-container">
  <img src="https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/CEO.Mr.JohnPaul.Ramos.Image.png" alt="Mr.Paul">
  <h6 class="profile-name">Owner: Mr. ???</h6>
  <p class="profile-role">CEO of Ayos Coffee Negosyo</p>
</div>

<div class="nav-menu">
  <a href="#posSection">
    <i class="bi bi-calculator-fill me-2 pos-icon"></i>
    POS System
  </a>

  <a href="#completedOrdersSection">
    <i class="bi bi-check-circle me-2 nav-icon"></i>
    Completed Orders
  </a>

  <a href="#analyticsSection">
    <i class="bi bi-bar-chart-line me-2 nav-icon"></i>
    Sales Analytics
  </a>
  
  <a href="#lowStockTable" class="d-flex align-items-center">
  <!-- Warning Icon -->
  <i class="bi bi-exclamation-triangle-fill me-2" style="color: #FFA500; position: relative; font-size: 1rem;">
    <!-- Optional small badge inside icon -->
    <span style="
      position: absolute;
      top: -5px;
      right: -5px;
      background-color: #FF4C4C;
      color: white;
      font-size: 0.3em;
      font-weight: bold;
      padding: 1px 3px;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0,0,0,0.3);
    ">!</span>
  </i>
  Low Stock
</a>

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

<div class="products-container">

  <div class="d-flex align-items-center gap-2 product-header">
    <i class="bi bi-basket-fill"></i>
    <span>Products</span>
  </div>

<div class="d-flex justify-content-between align-items-center mb-3 gap-2">



  <!-- SEARCH (LEFT) -->
  <input type="text" id="searchProduct"
    class="form-control"
    placeholder="Search product, SKU">

  <!-- CATEGORY (RIGHT) -->
  <select id="categoryFilter" class="form-select" style="max-width:200px;">
    <option value="all">All Categories</option>
    <option value="coffee">Coffee - Classic</option>
    <option value="coffee-series">Coffee - Series</option>
    <option value="soda">Fruit Soda - Classic</option>
    <option value="soda-series">Fruit Soda - Series</option>
    <option value="tao">Tao (Mini Waffles)</option>
    <option value="hao">Cheesy Stuffed Bread (Hao)</option>
  </select>

</div>

<div class="row g-3" id="productList"></div>

<div class="d-flex justify-content-between align-items-center mt-3">
<button class="btn btn-sm btn-outline-secondary" id="prevPage"
        style="background: rgba(245, 245, 245, 0.6) !important; 
               color: #495057 !important; 
               border: 1px solid rgba(0,0,0,0.1) !important; 
               border-radius: 10px !important;">
  Previous
</button>
  <span id="pageInfo" style="font-size: 13px;"></span>
<button class="btn btn-sm btn-outline-secondary" id="nextPage" 
        style="background: linear-gradient(135deg, #667eea, #764ba2); color: #ffffff; border: none; border-radius: 10px;">
  Next
</button>
</div>

</div>

</div>

<div class="col-lg-4">

<div class="cart-panel">

<div class="d-flex align-items-center gap-2 product-header">
  <div class="icon-badge">
    <i class="bi bi-box-seam"></i>
  </div>
  <span>Cart</span><hr>
</div>


	<div id="cartItems"></div><hr>

    <p>Service Charge: <input type="number" id="serviceCharge" class="form-control form-control-sm" value="0"></p>

    <p>Customer: <input type="text" id="customerName" class="form-control form-control-sm" placeholder="Optional"></p>

<h6 class="mt-3">Payments</h6>

<div class="d-flex align-items-center gap-3 mb-2">
  <select id="paymentMethod" class="form-select form-select-sm">
    <option value="cash">Cash</option>
    <option value="gcash">GCash</option>
    <option value="card">Card</option>
  </select>

  <input type="number" id="amountPaid" 
         class="form-control form-control-sm" 
         placeholder="Amount Paid">
</div>

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

<!-- Change -->
<div class="fee-row">
  <p>Change:</p>
  <span>₱<span id="change">0.00</span></span>
</div>

<hr>

<div class="fee-row grand-total">
<span>Grand Total:</span>
<span>₱<span id="grandTotal">0.00</span></span>
</div>

</div>

<div class="row mt-3">
  <div class="col d-flex justify-content-start">
    <button class="btn btn-sm checkout-btn" id="checkoutBtn"><i class="bi bi-check-lg" style="margin-right: 1.5px;"></i>Checkout</button>
  </div>
  <div class="col d-flex justify-content-end">
    <button class="btn btn-sm clear-btn" id="clearBtn"><i class="bi bi-trash" style="margin-right: 1.5px;"></i>Clear</button>
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
<th>Amount Paid</th>
<th>Change</th>
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

<div class="mt-4">
  <div class="card shadow-sm">
    
    <div class="card-header bg-light">
      <strong>⚠ Low Stock Alert</strong>
    </div>

    <div class="table-responsive p-3">
      <table class="table table-bordered mb-0" id="lowStockTable">
        <thead class="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SKU</th>
            <th>On Hand</th>
            <th>Reorder Level</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-center text-muted">
              No low stock products.
            </td>
          </tr>
        </tbody>
      </table>
      
<div class="d-flex justify-content-between align-items-center mt-3 px-2">
  <button class="btn btn-sm btn-outline-secondary" id="lowPrev">Previous</button>
  <span id="lowPageInfo" style="font-size:13px;"></span>
  <button class="btn btn-sm btn-outline-secondary" id="lowNext">Next</button>
</div>

    </div>

  </div>
</div>

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

  { sku: "COF-MAT", name: "Matcha Cream", price: 99, stock: 100, category: "coffee", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Matcha.Latte.Coffee.png" },
  
  { sku: "COF-HON-ELGN", name: "Honey Élégance", price: 99, stock: 100, category: "coffee-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Lavander.Honey.Latte.Coffee.png" },
  
  { sku: "COF-LAV-HON", name: "Lavander Honey Latte", price: 99, stock: 100, category: "coffee-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Lavander.Honey.Latte.Coffee.png" },
  
  { sku: "COF-MID-COA", name: "Midnight Cocoa Blend", price: 99, stock: 100, category: "coffee-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Midnight.Cocoa.Blend.Coffee.png" },
  
  { sku: "COF-BURN-CRML", name: "Burn't Caramel Luxe", price: 109, stock: 100, category: "coffee-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Burnt.Caramel.Luxe.Coffee.png" },
  
  { sku: "COF-VAN-WHIS", name: "Vanilla Bean Whisper", price: 99, stock: 100, category: "coffee-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Vanilla.Bean.Whisper.Coffee.png"  },
  
  { sku: "COF-AMB-SPIC", name: "Amber Spiced Latte", price: 109, stock: 100, category: "coffee-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Amber.Spiced.Iced.Latte.Coffee.png" },
  
  { sku: "SODA-STRAW", name: "Fruit Soda Strawberry", price: 59, stock: 100, category: "soda", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Strawberry.png" },
  
  { sku: "SODA-BLUE", name: "Fruit Soda Blueberry", price: 59, stock: 100, category: "soda",  imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Blueberry.png" },
  
  { sku: "SODA-GAPL", name: "Fruit Soda Green Apple", price: 59, stock: 100, category: "soda", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Green_Apple.png" },
  
  { sku: "SODA-COCO", name: "Fruit Soda Coconut", price: 59, stock: 100, category: "soda", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Coconut.png" },
  
  { sku: "SODA-MANG", name: "Fruit Soda Mango", price: 59, stock: 100, category: "soda", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Mango.png" },
  
  { sku: "SODA-PAPPL", name: "Fruit Soda Pineapple", price: 59, stock: 100, category: "soda", imgUrl: "https://png.pngtree.com/png-clipart/20240508/original/pngtree-glass-of-pineapple-juice-and-group-fruits-png-image_15036853.png" },
  
  { sku: "SODA-MELON",name: "Fruit Soda Watermelon", price: 59, stock: 100, category: "soda", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrphUZzZjySH5fAu0tNBlb-YuuWOUSH1T5Q&s" },
  
  { sku: "SODA-ORNG",name: "Fruit Soda Orange", price: 59, stock: 100, category: "soda", imgUrl: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL2hpcHBvdW5pY29ybl9kaWdpdGFsX2FydF9pbGx1c3RyYXRpb25fb2Zfb3JhbmdlX2p1aWNlaXNvbGF0ZWRfb18wODhhZmFjNS05ZTRiLTQyMTItYTQ1ZS0xOGNlNTBhZjVjZDEucG5n.png" },
  
  { sku: "SODA-PTCH",name: "Fruit Soda Peach", price: 59, stock: 100, category: "soda", imgUrl: "https://img.freepik.com/premium-photo/glass-peach-juice-cut-fresh-peach-fruits-isolated-white-background_124717-835.jpg?w=360" },
  
  { sku: "SODA-GALX", name: "Fruit Soda Galaxy", price: 69, stock: 100, category: "soda-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Galaxy.png" },
  
  { sku: "SODA-SUN", name: "Fruit Soda Sunrise", price: 69, stock: 100, category: "soda-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Sunrise.png" },
  
  { sku: "SODA-AMBER", name: "Fruit Soda Amber Glow", price: 69, stock: 100, category: "soda-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Amber.Glow.png" },
  
  { sku: "SODA-BLU-BREE", name: "Fruit Soda Blush Breeze", price: 69, stock: 100, category: "soda-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Blush.Breeze.png" },
  
  { sku: "SODA-PALM-BREE", name: "Fruit Soda Palm Breeze", price: 69, stock: 100, category: "soda-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Palm.Breeze.png" },
  
  { sku: "SODA-OCN-MIST", name: "Fruit Soda Ocean Mist", price: 69, stock: 100, category: "soda-series", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Fruit.Soda.Ocean.Mist.png" },
  
  { sku: "TAO-CHEE",name: "Tao Cream Cheese (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-CHEE.png" },
  
  { sku: "TAO-CHOC", name: "Tao Choco n' Crust (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-CHOC.png" },
  
  { sku: "TAO-CUST", name: "Tao Custard (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-CUST.png" },
  
  { sku: "TAO-MOZZ", name: "Tao Mozzarella (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-MOZZ.png" },
  
  {	sku: "TAO-STRAW", name: "Tao Strawberry (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-STRAW.png" },
  
  { sku: "TAO-UBE", name: "Tao Ube (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://ayosnegosyoph.com/public/product/MANJU-UBE.png" },
  
  { sku: "TAO-BNA-CRML", name: "Banana Caramel Drizzle (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Banana.Caramel.Drizzle.Waffles.png" },
  
  { sku: "TAO-BLUE-RYL", name: "Tao Blueberry Cream Royale (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Blueberry.Cream.Royale.Waffles.png" },
  
  { sku: "TAO-CRML-CHEE", name: "Tao Caramel Cheesecake (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Caramel.Cheesecake.Waffles.png" },
  
  { sku: "TAO-MANG-CHEE", name: "Tao Mango Cheesecake (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Mango.Cheesecake.Waffles.png" },
  
  { sku: "TAO-MAT-CRM", name: "Tao Matcha Cream (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Matcha.Cream.With.Cheese.Waffles.png" },
  
  { sku: "TAO-HON-ALM", name: "Tao Honey Almond Cream (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Honey.Almond.With.Cheese.Waffles.png" },
  
  { sku: "TAO-PEA-CHR", name: "Tao Peach Charm (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Peach.Cream.With.Cheese.Butter.Waffles.png" },
  
  { sku: "TAO-HAZ-TRF", name: "Tao Hazelnut Truffle (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Hazelnut.Truffle.With.Cheese.Cocoa.Waffles.png" },
  
  { sku: "TAO-VEL-CRME", name: "Tao Velgian Cream (10 pcs)", price: 99, stock: 100, category: "tao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Belgian.Cream.With.Berries.Waffles.png" },
  
  { sku: "HAO-BEEF", name: "Hao Beef Taco", price: 49, stock: 100, category: "hao", imgUrl: "https://ayosnegosyoph.com/public/product/MANT-BEEF.png" },
  
  { sku: "HAO-TUNA", name: "Hao Tuna Taco", price: 49, stock: 100, category: "hao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Hao.Tuna.Taco.png" },
  
  { sku: "HAO-PEPP", name: "Hao Pepperoni", price: 49, stock: 100, category: "hao", imgUrl: "https://ayosnegosyoph.com/public/product/MANT-PEPP.png" },
  
  { sku: "HAO-PEST-CRM", name: "Hao Pesto Cream", price: 49, stock: 100, category: "hao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Pesto.Cream.With.Cheese.Cheesy.Stuffed.Bread.png" },
  
  { sku: "HAO-MUSH-FON", name: "Hao Mushroom & Fontina", price: 49, stock: 100, category: "hao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Cheesy.Mushroom.With.Cream.Cheesy.Stuffed.Bread.png" },
  
  { sku: "HAO-GAR-HERB", name: "Hao Garlic Herb Supreme", price: 49, stock: 100, category: "hao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Garlic.Herb.Fromage.Supreme.Cheesy.Stuffed.Bread.png" },
  
  { sku: "HAO-BAC-CRME", name: "Hao Bacon Crème", price: 49, stock: 100, category: "hao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Bacon.Cr%C3%A8me.Cheesy.Stuffed.Bread.png" },
  
  { sku: "HAO-MAPL-GLAZ", name: "Hao Maple Glaze", price: 49, stock: 100, category: "hao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Maple.Glaze.Cheesy.Stuffed.Bread.png" },
  
  { sku: "HAO-VEL-MELT", name: "Hao Cheddar Velvet Melt", price: 49, stock: 100, category: "hao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Golden.Cheddar.Velvet.Melt.Cheesy.Stuffed.Bread.png" },
  
  { sku: "HAO-SALM-CRME", name: "Hao Smoked Salmon Crème", price: 49, stock: 100, category: "hao", imgUrl: "https://raw.githubusercontent.com/guevaraprinceedward/study-projects/refs/heads/master/Smoked.Salmon.Creme.Cheesy.Stuffed.Bread.png" }
 
  
];

products.forEach(p => {
  if (!p.reorderLevel) {

    if (p.category === "coffee") {
      p.reorderLevel = 15;

    } else if (p.category === "coffee-series") {
      p.reorderLevel = 12;

    } else if (p.category === "soda") {
      p.reorderLevel = 25;

    } else if (p.category === "soda-series") {
      p.reorderLevel = 20;

    } else if (p.category === "tao") {
      p.reorderLevel = 30;

    } else if (p.category === "hao") {
      p.reorderLevel = 18;

    } else {
      p.reorderLevel = 20; // default
    }

  }
});

let cart = [];
let salesData = [];

let currentPage = 1;
const itemsPerPage = 6; // 6 products per page

let completedOrdersTable;
let topProductsChart;
let dailyChart;

// ===================== INIT =====================
$(document).ready(() => {
  completedOrdersTable = $('#completedOrdersTable').DataTable({ responsive: true });
  renderProducts();
  updateCart();
  updateLowStockTable();

  // SEARCH & FILTER ( Reset Page )
  $("#searchProduct").on("input", () => {
    currentPage = 1;
    renderProducts();
  });

  $("#categoryFilter").on("change", () => {
    currentPage = 1;
    renderProducts();
  });

  // PAGINATION BUTTONS
  $("#prevPage").click(() => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts();
    }
  });

  $("#nextPage").click(() => {
    currentPage++;
    renderProducts();
  });

  // OTHER BUTTONS
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

    // FILTER
    const filtered = products.filter(p => {
        return (
            (p.name.toLowerCase().includes(search) || p.sku.toLowerCase().includes(search)) &&
            (selectedCategory === "all" || p.category === selectedCategory)
        );
    });

    // TOTAL PAGES
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;

    // PAGINATION
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    // DISPLAY
    paginated.forEach(p => {
        const stockText = p.stock === 0 ? 'Out of stock' : p.stock;
        $("#productList").append(`
            <div class="col-md-4">
                <div class="product-card">
                    <div class="product-img"><img src="${p.imgUrl}" alt="${p.name}"></div>
                    <h6>${p.name}</h6>
                    <p class="sku-text">SKU: ${p.sku}</p>
                    <p class="price-text">Php ${p.price.toFixed(2)} | Stock: ${stockText}</p>
                    <button class="add-btn" ${p.stock === 0 ? 'disabled' : ''} onclick="addToCart('${p.name}')">
                        <i class="bi bi-bag-plus-fill"></i> Add
                    </button>
                </div>
            </div>
        `);
    });

    // PAGE INFO
    $("#pageInfo").text(`Page ${currentPage} of ${totalPages || 1}`);

    // BUTTON STATES
    $("#prevPage").prop("disabled", currentPage === 1);
    $("#nextPage").prop("disabled", currentPage === totalPages || totalPages === 0);
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

function setQty(index, value) {
    const product = products.find(p => p.name === cart[index].name);
    let qty = parseInt(value);
    if (isNaN(qty) || qty < 1) qty = 1;
    if (qty > product.stock) qty = product.stock;
    cart[index].qty = qty;
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// ===================== UPDATE CART =====================
function updateCart() {
    let subtotal = 0;
    let html = "";

    if (cart.length) {
        html += `<table class="table table-sm">
            <thead>
                <tr>
                    <th style="background-color:#ededed">Product</th>
                    <th style="background-color:#ededed">Qty</th>
                    <th style="background-color:#ededed">Price</th>
                    <th style="background-color:#ededed">Total</th>
                    <th style="background-color:#ededed">Action</th>
                </tr>
            </thead>
            <tbody>`;

        cart.forEach((item, i) => {
            const product = products.find(p => p.name === item.name);
            const total = item.price * item.qty;
            subtotal += total;

            html += `<tr>
                <td>${item.name}</td>
                <td><input type="number" min="1" max="${product.stock}" value="${item.qty}" style="width:50px; text-align:center;" onchange="setQty(${i}, this.value)"></td>
                <td>Php ${item.price.toFixed(2)}</td>
                <td>Php ${total.toFixed(2)}</td>
                <td><button class="btn btn-sm btn-danger" style="font-size: 10px;" onclick="removeItem(${i})"><i class="bi bi-x-lg"></i></button></td>
            </tr>`;
        });

        html += `</tbody></table>`;
    } else {
        html = `<table class="table table-sm">
            <thead>
                <tr>
                    <th style="background-color:#ededed">Product</th>
                    <th style="background-color:#ededed">Qty</th>
                    <th style="background-color:#ededed">Price</th>
                    <th style="background-color:#ededed">Total</th>
                    <th style="background-color:#ededed">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="5" style="text-align:center; padding:20px; color:#999;">No items yet.</td>
                </tr>
            </tbody>
        </table>`;
    }

    $("#cartItems").html(html);

    // COMPUTATION
    const service = parseFloat($("#serviceCharge").val()) || 0;
    const paymentMethod = $("#paymentMethod").val();
    const taxRate = paymentMethod === "cash" ? 0.10 : paymentMethod === "gcash" ? 0.20 : 0.35;
    const tax = subtotal * taxRate;
    const grandTotal = subtotal + tax + service;

    const amountPaid = parseFloat($("#amountPaid").val()) || 0;
    const change = amountPaid - grandTotal;

    $("#subtotal").text(subtotal.toFixed(2));
    $("#tax").text(tax.toFixed(2));
    $("#serviceTotal").text(service.toFixed(2));
    $("#grandTotal").text(grandTotal.toFixed(2));
    $("#change").text(change >= 0 ? change.toFixed(2) : "0.00");
}

// ===================== CHECKOUT =====================
// ===================== CHECKOUT =====================
function checkout() {
    if (!cart.length) return Swal.fire("Cart is empty","","warning");

    const customer = $("#customerName").val().trim();
    const payment = $("#paymentMethod").val();
    const service = parseFloat($("#serviceCharge").val()) || 0;
    const amountPaid = parseFloat($("#amountPaid").val()) || 0;

    if (!customer) return Swal.fire("Please enter customer name","","warning");
    if (!payment) return Swal.fire("Please select a payment method","","warning");

    Swal.fire({
        title: "Confirm Checkout?",
        icon: "question",
        showCancelButton: true
    }).then(res => {
        if (!res.isConfirmed) return;

        const subtotal = parseFloat($("#subtotal").text());
        const tax = parseFloat($("#tax").text());
        const grandTotal = subtotal + tax + service;
        const change = amountPaid - grandTotal;
        const date = new Date();

        // Save order
        salesData.push({
            customer,
            items: cart.map(i => ({ name: i.name, qty: i.qty })),
            subtotal, tax, service, grandTotal, payment, amountPaid, change, date
        });

        // Reduce stock
        cart.forEach(c => {
            const p = products.find(pr => pr.name === c.name);
            if (p) p.stock -= c.qty;
            updateLowStockTable();
        });

        // Add to completed orders table
        completedOrdersTable.row.add([
            completedOrdersTable.rows().count() + 1,
            customer,
            cart.map(i => `${i.name} x${i.qty}`).join(", "),
            subtotal.toFixed(2),
            tax.toFixed(2),
            service.toFixed(2),
            grandTotal.toFixed(2),
            payment.toUpperCase(),
            amountPaid.toFixed(2),
            change.toFixed(2),
            date.toLocaleString()
        ]).draw();

        Swal.fire("Payment Successful","","success");

        // Clear cart
        cart = [];
        updateCart();
        renderProducts();
        updateAnalytics();
    });
}


// ===================== CHARTS =====================
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

// ===================== NAME FORMAT =====================
function formatName(name) {
  const words = name.split(" ");

  let line1 = words.slice(0, 2).join(" ");
  let line2 = words.slice(2, 4).join(" ");
  let line3 = words.slice(4).join(" ");

  let result = line1;

  if (line2) result += "<br>" + line2;
  if (line3) result += "<br>" + line3;

  return result;
}

function updateLowStockTable() {
  let html = "";

  const lowStockProducts = products.filter(p => p.stock <= p.reorderLevel);

  lowStockProducts.forEach((p, index) => {

    let status = "";
    if (p.stock === 0) {
      status = `<span class="badge bg-danger btn-out-of-stock-status">Out of Stock</span>`;
    } else if (p.stock <= p.reorderLevel / 2) {
      status = `<span class="badge bg-danger btn-critical-status">Critical</span>`;
    } else {
      status = `<span class="badge bg-warning text-dark btn-low-stock-status">Low Stock</span>`;
    }

    html += `
      <tr>
        <td>${index + 1}</td> <!-- ID -->
        <td>${p.name}</td>
        <td>${p.sku}</td>
        <td>${p.stock}</td> <!-- ON HAND -->
        <td>${p.reorderLevel}</td> <!-- REORDER LEVEL -->
        <td>${status}</td> <!-- STATUS -->
        <td>
          <button class="btn btn-sm btn-success btn-refill-action" onclick="refillStock(${index})">
            Refill
          </button>
        </td>
      </tr>
    `;
  });

  if (!html) {
    html = `
      <tr>
        <td colspan="7" class="text-center text-muted">
          No low stock products.
        </td>
      </tr>
    `;
  }

  $("#lowStockTable tbody").html(html);
}



function refillStock(index) {
    const product = products[index];
    if (!product) return;

    Swal.fire({
        title: `Refill ${product.name}`,
        input: "number",
        inputLabel: "Enter quantity to add",
        inputAttributes: { min: 1 },
        showCancelButton: true
    }).then(result => {
        if (!result.isConfirmed) return;

        const qty = parseInt(result.value);
        if (isNaN(qty) || qty <= 0) return Swal.fire("Invalid quantity","","error");

        product.stock += qty;

        Swal.fire("Stock Updated","","success");

        renderProducts();
        updateLowStockTable();
        updateCart();
    });
}
// ===================== LOW STOCK TABLE =====================
function renderLowStockTable() {
  const tbody = $("#lowStockTable tbody");
  tbody.empty();

  const lowStockProducts = products.filter(p => p.stock <= p.reorderLevel);

  if (lowStockProducts.length === 0) {
    tbody.append(`<tr>
      <td colspan="7" class="text-center text-muted">
        No low stock products.
      </td>
    </tr>`);
    return;
  }

  lowStockProducts.forEach((p, index) => {

    let status = "";
    if (p.stock === 0) {
      status = `<span class="badge bg-danger">Out of Stock</span>`;
    } else if (p.stock <= p.reorderLevel / 2) {
      status = `<span class="badge bg-danger">Critical</span>`;
    } else {
      status = `<span class="badge bg-warning text-dark">Low Stock</span>`;
    }

    tbody.append(`
      <tr>
        <td>${index + 1}</td>
        <td>${p.name}</td>
        <td>${p.sku}</td>
        <td>${p.stock}</td>
        <td>${p.reorderLevel}</td>
        <td>${status}</td> <!-- ✅ STATUS COLUMN -->
        <td>
          <button class="btn btn-sm btn-success" onclick="refillStock(${index})">
            Refill
          </button>
        </td>
      </tr>
    `);
  });
}

// ===================== REFILL STOCK =====================
function refillStock(index) {
    const product = products[index];
    if (!product) return;

    Swal.fire({
        title: `Refill ${product.name}`,
        input: "number",
        inputLabel: "Enter quantity to add",
        inputAttributes: { min: 1 },
        showCancelButton: true
    }).then(result => {
        if (!result.isConfirmed) return;

        const qty = parseInt(result.value);
        if (isNaN(qty) || qty <= 0) return Swal.fire("Invalid quantity","","error");

        product.stock += qty;

        Swal.fire("Stock Updated","","success");

        renderProducts();       // Refresh product cards
        updateLowStockTable();  // Refresh low stock table
        updateCart();           // Update cart if any product was in cart
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


<!-- POS SYSTEM NEW UPDATE VERSION 10.4-->
<!-- NEW CHANGES VARIANTS IN SYSTEMS ( FIXED ) -->
<!-- NEW CHANGES: SIDEBAR PROFILE & BRAND LOGO & LOW STOCK CATEGORY SYSTEM & PRODUCT RE-FILL CATEGORY -->
<!-- NEW SYSTEM ( TOP 5 PRODUCTS (UNITS) ) -->
<!-- NEW SYSTEM ( SALES ANALYTICS ) -->
<!-- NEW SYSTEM ( DAILY TRANSACTIONS ) -->
<!-- NEW CREATED AT APR 3 2026: 5:14PM -->
<!-- PESONAL TEST PROJECT FOR PABLO / MONTE CARLO TECHNOLOGIES -->

</body>
</html>
