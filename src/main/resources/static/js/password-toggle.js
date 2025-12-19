// Password toggle functionality
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const toggleButton = passwordField.nextElementSibling;
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.innerHTML = '👁️‍🗨️'; // Eye with slash (hidden)
        toggleButton.setAttribute('aria-label', 'Hide password');
    } else {
        passwordField.type = 'password';
        toggleButton.innerHTML = '👁️'; // Eye (visible)
        toggleButton.setAttribute('aria-label', 'Show password');
    }
}

// Initialize password toggles when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const passwordToggles = document.querySelectorAll('.password-toggle');
    
    passwordToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const fieldId = this.getAttribute('data-target');
            togglePassword(fieldId);
        });
    });
});