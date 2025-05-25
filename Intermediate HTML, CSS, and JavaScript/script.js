document.getElementById('survey-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();

    if (name === '' || email === '' || number === '') {
        alert('Please fill in all required fields.');
        e.preventDefault();
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
    }

    alert('Thank you for completing the form, young wizard!');
});
