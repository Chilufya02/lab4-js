document.querySelector('.burger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('nav-active');
  document.querySelector('.burger').classList.toggle('toggle');
});

// Theme change logic
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
      const body = document.body;
      
      // Check for saved theme
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
          body.classList.toggle('dark-theme', savedTheme === 'dark');
      }

      themeToggle.addEventListener('click', () => {
          body.classList.toggle('dark-theme');
          const isDark = body.classList.contains('dark-theme');
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
  }

  // Contact form interactivity logic
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
      contactForm.addEventListener("submit", (e) => { 
          e.preventDefault(); 
          const name = document.getElementById("name").value.trim(); 
          const email = document.getElementById("email").value.trim();
          const subject = document.getElementById("subject").value.trim();
          const message = document.getElementById("message").value.trim(); 
          if (name === "" || message === "" || email === "" || subject === "") { 
              alert("Please fill out all mandatory fields."); 
          } else { 
              alert(`Thanks, ${name}. We'll get back to you soon!`);
              e.target.reset(); 
          } 
      }); 
  }

  // Fetch team list
  const loadUsersBtn = document.getElementById("loadUsersBtn");
  if (loadUsersBtn) {
      loadUsersBtn.addEventListener("click", async () => { 
          try { 
              const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
              const users = await res.json(); 
              const userList = document.getElementById("userList"); 
              userList.innerHTML = ""; 
              users.forEach(user => { 
                  const li = document.createElement("li"); 
                  li.textContent = user.name; 
                  userList.appendChild(li); 
              }); 
          } catch (err) { 
              console.error("Failed to load users:", err); 
          } 
      }); 
  }

  // FAQ logic
  const questions = document.querySelectorAll(".question");
  if (questions.length > 0) {
      questions.forEach((q) => {
          q.addEventListener("click", () => {
              // Toggle the active class on the question
              q.classList.toggle("active");
              // Toggle the visible class on the answer
              q.nextElementSibling.classList.toggle("visible");
          });
      });
  }
});

/* Real-time clock logic */
// Real-time clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const clockElement = document.getElementById('clock');
  if (clockElement) {
      clockElement.textContent = timeString;
  }
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);