
// Get HTML elements
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

// Switch to Signup Form
showSignup.addEventListener("click", function(event) {
    event.preventDefault();

    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");

    clearErrors();
});

// Switch to Login Form
showLogin.addEventListener("click", function(event) {
    event.preventDefault();

    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");

    clearErrors();
});

// Email Validation Function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Clear Error Messages
function clearErrors() {
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
        
    });
    document.querySelectorAll(".success").forEach(function(message) {
    message.textContent = "";
    });
}

// Login Form Validation
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    clearErrors();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    let isValid = true;

    // Email Validation
    if (email === "") {
        document.getElementById("loginEmailError").textContent =
            "Email is required";
        isValid = false;
    }
    else if (!validateEmail(email)) {
        document.getElementById("loginEmailError").textContent =
            "Please enter a valid email";
        isValid = false;
    }

    // Password Validation
    if (password === "") {
        document.getElementById("loginPasswordError").textContent =
            "Password is required";
        isValid = false;
    }
    else if (password.length < 6) {
        document.getElementById("loginPasswordError").textContent =
            "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
    document.getElementById("loginSuccess").textContent =
        "Login form validated successfully!";
    }
});

// Signup Form Validation
signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    clearErrors();

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    let isValid = true;

    // Email Validation
    if (email === "") {
        document.getElementById("signupEmailError").textContent =
            "Email is required";
        isValid = false;
    }
    else if (!validateEmail(email)) {
        document.getElementById("signupEmailError").textContent =
            "Please enter a valid email";
        isValid = false;
    }

    // Password Validation
    if (password === "") {
        document.getElementById("signupPasswordError").textContent =
            "Password is required";
        isValid = false;
    }
    else if (password.length < 6) {
        document.getElementById("signupPasswordError").textContent =
            "Password must be at least 6 characters";
        isValid = false;
    }

    // Confirm Password Validation
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password";
        isValid = false;
    }
    else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match";
        isValid = false;
    }

    // Final Validation
    if (isValid) {
    document.getElementById("signupSuccess").textContent =
        "Signup form validated successfully!";
    }
});

// Password Show / Hide
const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const targetId = button.dataset.target;
        const passwordInput = document.getElementById(targetId);

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            button.textContent = "Hide";
        }
        else {
            passwordInput.type = "password";
            button.textContent = "Show";
        }

    });

});
