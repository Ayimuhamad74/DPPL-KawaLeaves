document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for form submissions
    const loginForm = document.querySelector('#loginForm');
    const updateMenuForm = document.querySelector('#updateMenuForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.querySelector('#username').value.trim();
            const password = document.querySelector('#password').value.trim();

            if (username === '' || password === '') {
                alert('Both username and password are required.');
                return;
            }

            // Simulate form submission
            loginForm.submit();
        });
    }

    if (updateMenuForm) {
        updateMenuForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const menuItem = document.querySelector('#menu_item').value.trim();
            const description = document.querySelector('#description').value.trim();
            const price = document.querySelector('#price').value.trim();

            if (menuItem === '' || description === '' || price === '') {
                alert('All fields are required.');
                return;
            }

            if (isNaN(price) || price <= 0) {
                alert('Please enter a valid price.');
                return;
            }

            // Simulate form submission
            updateMenuForm.submit();
        });
    }
});
