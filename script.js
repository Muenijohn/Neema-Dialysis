function registerPatient() {
    const name = document.getElementById("patientName").value;
    const age = document.getElementById("patientAge").value;
    const id = document.getElementById("patientID").value;
  
    if (name && age && id) {
      document.getElementById("registerOutput").innerText =
        `Patient ${name} (ID: ${id}) registered successfully.`;
    } else {
      document.getElementById("registerOutput").innerText =
        "Please fill in all fields.";
    }
  }
  // Image preview functionality
document.getElementById('profilePicture').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const preview = document.getElementById('imagePreview');
      preview.src = e.target.result;  // Set the image preview source to the uploaded image
      preview.style.display = 'block'; // Make sure the preview image is shown
    };
  
    if (file) {
      reader.readAsDataURL(file); // Read the image as a data URL
    }
  });
  
  // Form submission handling
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const profilePicture = document.getElementById('profilePicture').files[0];
  
    // For now, log the form data to the console 
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Profile Picture:', profilePicture);
  
  });
  
  
  function scheduleAppointment() {
    const id = document.getElementById("appointmentID").value;
    const date = document.getElementById("appointmentDate").value;
  
    if (id && date) {
      document.getElementById("appointmentOutput").innerText =
        `Appointment scheduled for Patient ID ${id} on ${date}.`;
    } else {
      document.getElementById("appointmentOutput").innerText =
        "Please enter patient ID and select a date.";
    }
  }
  
  function generateBill() {
    const id = document.getElementById("billID").value;
    const amount = document.getElementById("billAmount").value;
  
    if (id && amount) {
      document.getElementById("billOutput").innerText =
        `Bill of KES ${amount} generated for Patient ID ${id}.`;
    } else {
      document.getElementById("billOutput").innerText =
        "Please enter patient ID and billing amount.";
    }
  }
  function submitDailyReport() {
    const patientID = document.getElementById("reportPatientID").value;
    const remarks = document.getElementById("doctorRemarks").value;
    const progress = document.getElementById("healthProgress").value;
    const nextDate = document.getElementById("nextAppointment").value;
  
    if (patientID && remarks && progress && nextDate) {
      document.getElementById("reportOutput").innerText = 
        `✔️ Report Submitted for Patient ${patientID}.\n\nRemarks: ${remarks}\nProgress: ${progress}\nNext Appointment: ${nextDate}`;
    } else {
      document.getElementById("reportOutput").innerText = 
        "⚠️ Please fill in all fields before submitting.";
    }
  }
  // Function to show the selected section and hide others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.section');
    
    // Hide all sections first
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
  
    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.style.display = 'block';
    }
  }
  
  // Initially show the 'register' section or any default section
  showSection('register');
  let selectedRating = 0;

document.querySelectorAll(".star").forEach((star) => {
  star.addEventListener("click", function () {
    selectedRating = parseInt(this.getAttribute("data-value"));
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  document.querySelectorAll(".star").forEach((star, index) => {
    star.classList.toggle("selected", index < rating);
  });
}

function submitFeedback() {
  const name = document.getElementById("patientName").value;
  const comment = document.getElementById("feedbackComment").value;

  if (name && comment && selectedRating > 0) {
    const feedbackList = document.getElementById("feedbackList");

    const feedbackItem = document.createElement("div");
    feedbackItem.innerHTML = `
      <p><strong>${name}</strong> rated us ${selectedRating} ⭐</p>
      <p>${comment}</p>
      <hr/>
    `;

    feedbackList.appendChild(feedbackItem);

    // Reset form
    document.getElementById("feedbackForm").reset();
    selectedRating = 0;
    highlightStars(0);
  } else {
    alert("Please complete all fields and provide a rating.");
  }
}
function logout() {
    alert("You have been successfully logged out.");
    // Redirect or clear session here
    window.location.href = "login.html"; // Change to your login page
  }
  
  function logout() {
    // You can customize this logic to match your authentication/session setup
    document.getElementById("logoutMessage").textContent = "✅ You have been successfully logged out.";
  
    // Optionally redirect to login page
    // window.location.href = "login.html";
  }
  