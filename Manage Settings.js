document.querySelector('form').addEventListener('submit', function (event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    if (!email || !password || !username) {
        alert('All fields are required!');
        event.preventDefault();
    }
});
