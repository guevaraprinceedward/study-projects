<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Guevara's Website</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- DataTables CSS -->
    <link href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.dataTables.min.css" rel="stylesheet">


    <!-- Self-Made CSS -->
     <link rel="stylesheet" href="newtestswalfire.css">

     <link rel="stylesheet" href="newbootstrapv3.css">

     <!-- Self-Made CSS -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  <style>
    body {
      scroll-behavior: smooth;
    }
    .hero {
      height: 100vh;
      background: linear-gradient(135deg, #4e54c8, #8f94fb);
      color: white;
    }
    
	#about {
        
        	background: linear-gradient(135deg, white, darkgrey);
            color: #000;
            
        }
    
    .nav-hover {
    
    transition: 0.7s ease;
    
    }
    
    .nav-hover:hover {
    
    color: #fff;
    background-color: #0c0c0c;
    transition: 0.7s ease;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    display: flex;
    animation: slideInLeft 1.2s ease-out forwards;
    
    }
    
    @keyframes slideInTop {
    
    	0% {
        
        	transform: translateY(-50px);
            opacity: 0;
            
        }
        
        100% {
        
        	transform: translateY(0);
            opacity: 1;
    
    	}
        
    }
    
    @keyframes slideInLeft {
    
    	0% {
        
        transform: translateX(-50px);
        opacity: 0;
        
        }
    
    	100% {
        
        transform: translateX(0);
        opacity: 1;
        
        }
    
    
    }
    
    .work-btn {
    
    border: none;
    transition: 0.7s ease;
    
    }
    
    .work-btn:hover {
    
    border: none;
    transition: 0.7s ease;
    background: linear-gradient(135deg, #2b2b2b, #d4af37);
    color: #fff;
    
    }
    
    .brand-btn {
    
    color: linear-gradient(135deg, #FF1E1E, #8B0000);
    font-size: 1.35em
    
    }
    
    .gradient-text {
  background: linear-gradient(135deg, #fff, #FF1E1E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
    
    .main-head {
    
    animation: fadeIn 1.7s ease;
    
    }
    
    @keyframes fadeIn {
    
        from {

        opacity: 0;

        }

        to {

        opacity: 1;

        }
    
    }
    
    .secondary-head {
    
    	animation: slideInTop 1.65s ease-out forwards;
        
        }
        
    @keyframes slideInTop {
    
    	0% {
        
        transform: translateY(50px);
        opacity: 0;
        
        }
    
    	100% {
        
        transform: translateX(0);
        opacity: 1;
        
        }

    }
        

        .knight-tag {
        
        color: #fff;
        
        }

        @media (min-width: 992px) {

            .navbar-nav .nav-item:not(:first-child) {
                margin-left: 75px;
            }

            }

            /* ONLY WORK IN MOBILE RESPONSIVE */

            @media (max-width: 991px) {
            
                .responsive-anim {
                animation: slideInLeft 0.8s ease-out both;
                user-select: none;
            }

            }

            /* ONLY WORK IN DESKTOP*/
            @media (min-width: 992px) {
                
                .responsive-anim {
                animation: fadeIn 1.2s ease-in both;
                user-select: none;
            }

            }

            @media (min-width: 992px) {
                
                .responsive-hover {
                animation: fadeIn 1.2s ease-in both;
                user-select: none;
                padding: 0px 15px;
                
            }

            }
            
    .data-table-body {

        background-color: #BFC9D1;
        padding: 45px 0px;

    }

    section {

        scroll-margin-top: 80px;
    }

    .btn-primary:hover {

        color: #fff;
        background-color: #000;
        transition: 0.7s ease;
        

    }

	 
  .text-content {

    color: #fff;

  }
  
.thef1-container {

  position: relative;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.8s ease;
  
}

.thef1-container::before {

  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #FF0000, #000000);
  opacity: 0;
  transition: opacity 0.8s ease;
  z-index: 0;
  
}

.thef1-container:hover::before {

  opacity: 1;
  padding: 10px;
  
}

.thef1-container > * {

  position: relative;
  z-index: 1;
  transition: 0.8s ease;
}


.thef1-container {

  background: linear-gradient(135deg, #2f2f2f, #000000);
}


  .about-me {

    animation: slideInDown 1.3s ease-out forwards;
    transition: 0.7s ease;
	

  }

   @keyframes slideInDown {

	0% {
	transform: translateY(-50px);
	opacity: 0;
	}

	100% {
	transform: translateY(0);
	opacity: 1;
	}

}

	/* MOBILE RESPONSIVED */
    
    @media (max-width: 768px) {
    
    	#about {
        
        	background: linear-gradient(135deg, black, darkgrey);
            
            color: #fff;
            
        }
        
        #about .about-me {
        
        	padding: 20px;
            font-size: 2em; /* adjust as needed */
            color: #FF1E1E;   /* base text color: bright red */
            text-align: center;
            font-weight: bold;
            animation: text-glow 1.8s ease-in-out infinite alternate;
            text-shadow:
              0 0 5px #8B0000,
              0 0 10px #FF1E1E,
              0 0 20px #8B0000,
              0 0 40px #FF4500;
        
        }
        
        @keyframes glow {

  			0% {
            
    			text-shadow:
                
      				0 0 5px #8B0000,
      				0 0 10px #FF1E1E,
      				0 0 20px #8B0000,
      				0 0 40px #FF4500;
                    
  			}
            
  			100% {
            
    			text-shadow:
                
                    0 0 10px #FF1E1E,
                    0 0 20px #FF4500,
                    0 0 30px #8B0000,
                    0 0 50px #FF1E1E;
                    
  			}
            
        }
    
  </style>
</head>
<body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="100">

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand gradient-text" href="#"> <strong> The Lozada's Web<strong class=" knight-tag ">🏎</strong> </strong> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto responsive-anim">
        <li class="nav-item nav-hover responsive-hover"><a class="nav-link" href="#home">Home Page</a></li>
        <li class="nav-item nav-hover responsive-hover"><a class="nav-link" href="#about">About Us</a></li>
        <li class="nav-item nav-hover responsive-hover"><a class="nav-link" href="#projects">Our Projects</a></li>
        <li class="nav-item nav-hover responsive-hover"><a class="nav-link" href="#contact">Contact Us</a></li>
        <li class="nav-item nav-hover responsive-hover"><a class="nav-link" href="#table">Table</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section id="home" class="hero d-flex align-items-center">
  <div class="container text-center">
    <h1 class="display-4 fw-bold main-head">Greetings, I'm Klyde Lozada
    <p class="lead secondary-head">Editor | Artist | Senior High School Student</p>
    <a href="#projects" class="btn btn-light btn-lg mt-3 work-btn"> <strong> View My Work </strong> </a>
  </div>
</section>

<!-- About Section -->
<section id="about" class="py-5">
  <div class="container">
    <div class="row align-items-center">

      <!-- Image first on mobile, right side on desktop -->
      <div class="col-lg-6 text-center order-1 order-lg-2 mb-4 mb-lg-0 img-pic">
        <img src="https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/2026%20regulations/2026_Explainer_FIA_Front_3_4_1920x1080.webp"
             alt="Prince Guevara"
             class="img-fluid rounded shadow"
             style="max-height: 450px; object-fit: cover;">
      </div>

      <!-- Text on left on desktop, below image on mobile -->
      <div class="col-lg-6 order-2 order-lg-1">
        <div class="text-center text-lg-start mb-4">
          <h2 class="about-me mb-4"> <strong> About Me </strong> </h2>
          <p>
            "An F1 Editor and Artist passionate about motorsport visuals, specializing in creative edits, digital artwork, and high-energy racing content, with a deep enthusiasm for cars and automotive culture."
          </p>
          <p>
            "I strongly believe in the power of being wise and tactical in conquering the world,
            especially when it comes to technology. My obsession with winning at all times
            drives me toward unexpected success at the right moments."
          </p>

          <div class="thef1-container">
            <div class="mb-4 mb-lg-0" style="padding: 10px 15px;">
              <div class="text-content text-center">
                <p style="padding: 10px;">
                  "You always have to believe in yourself. In racing there will be pressure and mistakes, but what matters is how you keep pushing forward."
                </p>
                <h5>Max Verstappen</h5>
                <span>The F1 Contestant Racer | 2nd Place F1 Winner</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-4">My Social Media Platforms</h2>
    <div class="row g-4">

      <!-- Facebook Card -->
      <div class="col-md-4">
        <div class="card h-100 text-center p-3">
          <img src="https://img.freepik.com/premium-photo/facebook-logo_1080029-107.jpg?semt=ais_hybrid&w=740&q=80" alt="Facebook Logo" style="width:60px; margin-bottom:15px;">
          <div class="card-body">
            <h5 class="card-title">My Facebook Account</h5>
            <p class="card-text">Connect with my personal Facebook account and send me a message anytime.</p>
            <a href="https://www.facebook.com/yourprofile" target="_blank" class="btn btn-primary">View</a>
          </div>
        </div>
      </div>

      <!-- Instagram Card -->
      <div class="col-md-4">
        <div class="card h-100 text-center p-3">
          <img src="assets/logos/instagram-logo.png" alt="Instagram Logo" style="width:60px; margin-bottom:15px;">
          <div class="card-body">
            <h5 class="card-title">My Instagram Account</h5>
            <p class="card-text">Share my edited F1 competition videos and showcase the action and excitement of the races.</p>
            <a href="https://www.instagram.com/yourprofile" target="_blank" class="btn btn-primary">View</a>
          </div>
        </div>
      </div>

      <!-- TikTok Card -->
      <div class="col-md-4">
        <div class="card h-100 text-center p-3">
          <img src="assets/logos/tiktok-logo.png" alt="TikTok Logo" style="width:60px; margin-bottom:15px;">
          <div class="card-body">
            <h5 class="card-title">My TikTok Account</h5>
            <p class="card-text">Watch my F1 edits and creative racing videos shared globally for everyone to enjoy.</p>
            <a href="https://www.tiktok.com/@yourprofile" target="_blank" class="btn btn-primary">View</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-5">
  <div class="container">
    <h2 class="text-center mb-4">Contact Me</h2>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form>
          <input type="text" class="form-control mb-3" placeholder="Your Name" />
          <input type="email" class="form-control mb-3" placeholder="Your Email" />
          <textarea class="form-control mb-3" rows="4" placeholder="Your Message"></textarea>
          <button class="btn btn-dark w-100">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- Responsive DataTable Section -->
<section class="data-table-body">
<div class="container">
<h2 class="text-center mb-4">User Management Table</h2>

<div class="text-center mb-3">
<button id="table" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
Add User
</button>
</div>

<div class="table-responsive">
<table id="myTable" class="table table-striped nowrap" style="width:100%">
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Age</th>
<th>Action</th>
</tr>
</thead>
<tbody></tbody>
</table>
</div>

</div>
</section>


<!-- Footer -->
<footer class="bg-dark text-white text-center py-3">
  © 2026 Your Name. All rights reserved.
</footer>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">Add / Edit User</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
</div>
<div class="modal-body">
<form id="addUserForm">
<input type="text" class="form-control mb-2" id="userId" placeholder="ID" required>
<input type="text" class="form-control mb-2" id="userName" placeholder="Name" required>
<input type="email" class="form-control mb-2" id="userEmail" placeholder="Email" required>
<input type="number" class="form-control mb-2" id="userAge" placeholder="Age" required>
</form>
</div>
<div class="modal-footer">
<button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button class="btn btn-primary" id="saveUserBtn">Save</button>
</div>
</div>
</div>
</div>

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>

<!-- DataTables -->
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"></script>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<script>
$(document).ready(function () {

const table = $('#myTable').DataTable({
responsive: true,
autoWidth: false,
data: [
{ id: "1", name: "Pablo", email: "montecarlotechnologies@email.com", age: "29" },
{ id: "2", name: "Prince Edward Guevara", email: "guevaraprinceedward@email.com", age: "16" },
{ id: "3", name: "Web Master", email: "webmaster@email.com", age: "21" }
],
columns: [
{ data: 'id' },
{ data: 'name' },
{ data: 'email' },
{ data: 'age' },
{
data: null,
render: function () {
return `
<button class="btn btn-sm btn-warning editBtn mb-1">Edit</button>
<button class="btn btn-sm btn-danger deleteBtn">Delete</button>
`;
}
}
]
});

$('#saveUserBtn').click(function () {

const newUser = {
id: $('#userId').val().trim(),
name: $('#userName').val().trim(),
email: $('#userEmail').val().trim(),
age: $('#userAge').val().trim()
};

if (!newUser.id || !newUser.name || !newUser.email || !newUser.age) {
Swal.fire("Oops!", "Please fill all fields.", "error");
return;
}

table.row.add(newUser).draw();
$('#addUserForm')[0].reset();
bootstrap.Modal.getInstance(document.getElementById('exampleModalCenter')).hide();
Swal.fire("Success!", "User added successfully!", "success");
});

$('#myTable tbody').on('click', '.deleteBtn', function () {
table.row($(this).parents('tr')).remove().draw();
});

$('#myTable tbody').on('click', '.editBtn', function () {
const row = table.row($(this).parents('tr'));
const data = row.data();

$('#userId').val(data.id);
$('#userName').val(data.name);
$('#userEmail').val(data.email);
$('#userAge').val(data.age);

row.remove().draw();
new bootstrap.Modal(document.getElementById('exampleModalCenter')).show();
});

});
</script>

</body>
</html>
