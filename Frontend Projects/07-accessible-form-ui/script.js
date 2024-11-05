const form = document.getElementById('profile-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const togglePasswordButtons = document.querySelectorAll('.toggle-password');

// Email validation regex (biểu thức chính quy)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to toggle password visibility
togglePasswordButtons.forEach(button => {
    button.addEventListener('click', function(){
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.setAttribute('aria-label', 'Hide password');
        }else {
            input.type = 'password';
            this.setAttribute('aria-label', 'Show password');
        }
    });
});

// Form validation on submit
form.addEventListener('submit', (e) => {
    let isValid = true;

    // Validate Full Name
    const fullname = document.getElementById('fullname');
    const fullnameError = document.getElementById('fullname-error');
    if (fullname.value.trim() === '') {
        fullnameError.textContent = 'Full Name is required.';
        isValid = false;
    }else if (/\d/.test(fullname.value)) {
        fullnameError.textContent = 'Full Name cannot contain numbers.';
    isValid = false;
    } else {
        fullnameError.textContent = '';
    }

    // Validate Email
    const emailError = document.getElementById('email-error');
    if(!emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        email.setAttribute('aria-invalid', 'true');
        isValid = false;
    } else {
        emailError.textContent = '';
        email.setAttribute('aria-invalid', 'false');
    }

    // Validate Passwords
    const passwordError = document.getElementById('password-error');

    // Kiểm tra mật khẩu không được để trống và phải có ít nhất một chữ cái, một chữ số, và một ký tự đặc biệt
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Tối thiểu 8 ký tự
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (!passwordRegex.test(password.value)) {
        passwordError.textContent = 'Password needs letter, number, symbol.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Kiểm tra xác nhận mật khẩu
    const confirmPasswordError = document.getElementById('confirm-password-error');
    if (confirmPassword.value.trim() === '' || confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Passwords must match';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    // Prevent form submission if any validation failed
    if (!isValid) {
        e.preventDefault();
    }
})