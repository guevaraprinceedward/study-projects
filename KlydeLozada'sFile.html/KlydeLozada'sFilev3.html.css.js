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
    
    <!-- SweetAlert -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- AOS CSS -->
    <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

    <!-- AOS JS -->
    <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

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
    
.btn-primary-prev {

    background: linear-gradient(135deg, #FFB22C, #000000);
    border: none;
    padding: 5px 30px;
    color: #fff;
    transition: all 0.4s ease;
    border-radius: 8px;

}

.btn-primary-prev:hover {

    color: #fff;
    background: linear-gradient(135deg, #1F1717, #FCF5ED);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;

}

	 
  .text-content {

    color: #fff;

  }
  
.thef1-container {

  position: relative;
  border-radius: 10px;
  overflow: hidden;
  transition: opacity 0.8s ease;
  
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

	.social-med-title {
    
      padding: 15px;
      font-weight: bold;
        
    }
               
    }
    
    .socialmed-container {
    background: linear-gradient(135deg, #393E46, #000000);
    color: white;
    border-radius: 10px;
    transition: all 0.8s ease;
    border: none;
}

.socialmed-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.12);
    transition: 0.8s ease
}

	/* MOBILE RESPONSIVED */
    
    @media (max-width: 768px) {
    
      .social-med-title {
    
            padding: 0px 15px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 8px 18px;
            background: linear-gradient(135deg, #37353E, #000000);
            color: #fff;
            border-radius: 8px;
            font-weight: bold;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
        
       }
    
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
            
.socialmed-container {
    background: linear-gradient(135deg, #393E46, #000000);
    color: white;
    border-radius: 10px;
    transition: all 0.4s ease;
    border: none;
}

.socialmed-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.12);
}
            
      	#projects {
        
        	background: linear-gradient(135deg, #DC143C, #000000);
            
        }
          
        }
        
        /* Form & Preview layout */

	#messagePreview {
    
    	display: none;
        background-color: #f1e3d3;
        border-radius: 10px;
        padding: 20px;
        transition: all 0.5s ease;
        
    }
    
    #messagePreview.show {
    
    	display: block;
        animation: slideInRight 0.6s forwards;
        
    }
    
/* Animation */

	@keyframes slideInRight {
    
    	0% {
        
        	transform: translateX(50px);
            opacity: 0;
            
        }
        
        100% {
        
        	transform: translateX(0);
            opacity: 1;
            
        }
        
    }
    
/* ============================= */
	/* CONTACT FORM STYLES */
/* ============================= */

/* CONTACT FORM & PREVIEW */

	.contact-container {
    	
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        align-items: flex-start;
        justify-content: center;
        
     }
     
/* Form styling */

	.contact-container form {
    
    	background: #fff;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        
    } 
    
    .contact-container form:hover {
    
    	transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.12);
        
    }
    
/* Preview styling */

	.contact-container #messagePreview {
    
    	background: #f1e3d3;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        display: none;
        
/* initially hidden */

		transition: transform 0.4s ease, opacity 0.4s ease;
        
	}
    
    .contact-container #messagePreview.show {
    
    	display: block;
        transform: translateY(0);
        opacity: 1;
        
    }
    
/* Input fields & textarea */

	.contact-container input, .contact-container textarea {
    
    	width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ccc;
        margin-bottom: 15px;
        font-size: 1rem;
        
    }
    
/* Button */

	.contact-container button {
    
    	background-color: #5C3A21;
        color: #fff;
        border-radius: 8px;
        padding: 12px;
        font-weight: bold;
        font-size: 1rem;
        transition: 0.3s;
        
    }
    
    .contact-container button:hover {
    
    	background-color: #3b2414;
        transform: translateY(-2px);
        
    }
    
/* Responsive: stack form & preview on smaller screens */

	@media (max-width: 991px) {
    
    	.contact-container {
        
        	flex-direction: column;
            
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
          <h2 data-aos="fade-up" data-aos-delay="200" class="about-me mb-4"> <strong> About Me </strong> </h2>
          <p data-aos="fade-up" data-aos-delay="400">
            "An F1 Editor and Artist passionate about motorsport visuals, specializing in creative edits, digital artwork, and high-energy racing content, with a deep enthusiasm for cars and automotive culture."
          </p>
          <p data-aos="fade-up" data-aos-delay="600">
            "I strongly believe in the power of being wise and tactical in conquering the world,
            especially when it comes to technology. My obsession with winning at all times
            drives me toward unexpected success at the right moments."
          </p>

          <div data-aos="fade-up" data-aos-delay="800" class="thef1-container">
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
    <h2 class="text-center mb-4 social-med-title">My Social Media Platforms</h2>
    <div class="row g-4 justify-content-center">

      <!-- Facebook Card -->
      <div data-aos="fade-up" data-aos-delay="200" class="col-md-4 d-flex justify-content-center">
        <div class="card h-100 text-center p-3 socialmed-container">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-icon-logo-png-transparent.png" alt="Facebook Logo" class="mx-auto mb-3" style="width: 135px;padding: 5px;margin-top: 10px;border-radius: 30px;">
          <div class="card-body">
            <h5 class="card-title">My Facebook Account</h5>
            <p class="card-text">Connect with my personal Facebook account and send me a message anytime.</p>
            <a href="https://www.facebook.com/yourprofile" target="_blank" class="btn btn-primary-prev">View</a>
          </div>
        </div>
      </div>

      <!-- Instagram Card -->
      <div data-aos="fade-up" data-aos-delay="400" class="col-md-4 d-flex justify-content-center">
        <div class="card h-100 text-center p-3 socialmed-container">
          <img src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_960_720.png" alt="Instagram Logo" class="mx-auto mb-3" style="width: 135px;padding: 5px;margin-top: 10px;border-radius: 30px;">
          <div class="card-body">
            <h5 class="card-title">My Instagram Account</h5>
            <p class="card-text">Share my edited F1 competition videos and showcase the action and excitement of the races.</p>
            <a href="https://www.instagram.com/yourprofile" target="_blank" class="btn btn-primary-prev">View</a>
          </div>
        </div>
      </div>

      <!-- TikTok Card -->
      <div data-aos="fade-up" data-aos-delay="600" class="col-md-4 d-flex justify-content-center">
        <div class="card h-100 text-center p-3 socialmed-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwC4Lu3zrLP5xh15XKQre2NMmEaWFGEZOP1A&s" alt="TikTok Logo" class="mx-auto mb-3" style="width: 135px;padding: 5px;margin-top: 10px;border-radius: 30px;">
          <div class="card-body">
            <h5 class="card-title">My TikTok Account</h5>
            <p class="card-text">Watch my F1 edits and creative racing videos shared globally for everyone to enjoy.</p>
            <a href="https://www.tiktok.com/@yourprofile" target="_blank" class="btn btn-primary-prev">View</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- CONTACT SECTION -->
<section id="contact" class="py-5" style="background-color:#EAEFEF;">
  <div class="container">
    <h2 data-aos="fade-up" data-aos-delay="200" class="text-center mb-5">Contact Us</h2>
    <div class="contact-container row g-4 justify-content-center">

      <!-- Form -->
      <div data-aos="fade-up" data-aos-delay="400" class="col-lg-6">
        <form id="contactForm" class="p-4 shadow-sm rounded bg-white">
          <h5 class="mb-3">Send us a message</h5>
          <input type="text" class="form-control mb-3" id="contactName" placeholder="Your Name" required>
          <input type="email" class="form-control mb-3" id="contactEmail" placeholder="Your Email" required>
          <textarea class="form-control mb-3" id="contactMessage" rows="6" placeholder="Your Message" required></textarea>
          <button type="submit" class="btn btn-coffee w-100 fw-bold">Send Message</button>
        </form>
      </div>

      <!-- Preview -->
      <div data-aos="fade-up" data-aos-delay="600" id="messagePreview" class="p-4 shadow-sm rounded bg-light">
        <h5 class="mb-3">Message Preview</h5>
        <div id="messageList"></div>
      </div>

    </div>
  </div>
</section>

<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
$(document).ready(function(){

  $('#contactForm').submit(function(e){
    e.preventDefault();

    // Get values
    const name = $('#contactName').val().trim();
    const email = $('#contactEmail').val().trim();
    const message = $('#contactMessage').val().trim();

    if(!name || !email || !message){
      Swal.fire('Error','Please fill all fields!','warning');
      return;
    }

    // Create message HTML using backticks
    const messageHTML = `
      <div class="border rounded p-3 mb-3 bg-white shadow-sm" style="animation: slideInRight 0.5s ease;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    // Append to message list
    $('#messageList').prepend(messageHTML);

    // Show the preview container
    $('#messagePreview').fadeIn();

    // Clear the form
    this.reset();

    // Success alert
    Swal.fire('Success','Your message has been sent!','success');
  });

  // Add slideInRight keyframes if not in CSS
  const slideInKeyframes = `
    @keyframes slideInRight {
      0% { transform: translateX(50px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
  `;

  if(!$('style#slideInRight').length){
    $('head').append(`<style id="slideInRight">${slideInKeyframes}</style>`);
  }

});
</script>

<!-- Responsive DataTable Section -->
<section class="data-table-body">
<div data-aos="fade-up" data-aos-delay="200" class="container">
<h2 class="text-center mb-4"> The list of Ticket Buyers for The F1 Championship Management Table </h2>
<div class="text-center mb-3">
<button id="table" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
Add User
</button>
</div>

<div data-aos="fade-up" data-aos-delay="400" class="table-responsive">
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
{ id: "1", name: "Prince Edward Guevara", email: "montecarlotechnologies@gmail.com", age: "16" },
{ id: "2", name: "Timothy Jedric Cantre Facundo", email: "timothys1k@gmail.com", age: "17" },
{ id: "3", name: "Justin Almanza", email: "justinalmanza@gmail.com", age: "17" },
{ id: "4", name: "Jadedidiah Sava", email: "jadedidiahsava@gmail.com", age: "16" }
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

AOS.init({duration:500,offset:120});
</script>

<!-- KLYDE LOZADA'S PERSONAL PROJECT IN ORACLE WEB PROGRAMMING -->
<!-- LASEST UPDATE: MAR 14 2026: 9:49PM -->
<!-- NEW CHANGES! -->
<!-- VERSION: v.01 -->

</body>
</html>
