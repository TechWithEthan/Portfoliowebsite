document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password === confirmPassword) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').textContent = 'Registration successful!';
      
      // Simulate a delay before redirecting
      setTimeout(function() {
        window.location.href = "success.html"; // Replace with the URL of the next page
      }, 2000); // Redirects after 2 seconds
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').textContent = 'Passwords do not match!';
    }
  });
  