function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Trim the inputs to avoid leading/trailing spaces
    if (username.trim() === '' || password.trim() === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Missing Information',
            text: 'Please enter both username and password.'
        });
        return false;
    } 
    // Check for case-insensitive comparison and trimmed input
    else if (username.trim().toLowerCase() === 'admin' && password.trim().toLowerCase() === 'admin') {
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            text: 'Please wait for a moment.',
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
                window.location.href = 'deshboard.html';
            }
        });
        return false; 
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Username or Password',
            text: 'Please try again.'
        });
        return false;
    }
}
