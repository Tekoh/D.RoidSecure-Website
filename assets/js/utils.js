
//Scroll Check Function

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('div');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < windowHeight * 0.8 && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }

    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
});


// Setting Active Page Local Function

document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname;
    const navItems = {
        '/assets/pages/plans.html': 'Plans',
        '/assets/pages/products.html': 'Products',
        '/assets/pages/services.html': 'Services',
        '/assets/pages/about-us.html': 'AboutUs',
        '/assets/pages/contact-us.html': 'ContactUs'
    };

    if (navItems[currentPath]) {
        const navElement = document.getElementById(navItems[currentPath]);
        if (navElement) {
            navElement.classList.add('active');
        }
    }
});

// Dark Mode Toggle Function

const toggleButton = document.getElementById('theme-toggle');
const DRoidBody = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
    DRoidBody.classList.add('dark-mode');
}
toggleButton.addEventListener('click', () => {
    DRoidBody.classList.toggle('dark-mode');

    if (DRoidBody.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.removeItem('dark-mode');
    }
});

// Dark Mode System Auto Function

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    DRoidBody.classList.add('dark-mode');
}

//Form Validation Checks

// Email Validation Check
document.getElementById("email-input").addEventListener("input", function () {
    let email = this.value;
    let error = document.getElementById("email-error");

    if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Invalid email format!";
    } else {
        error.textContent = "";
    }
});

// Phone Number Validation Check
document.getElementById("phone-input").addEventListener("input", function () {
    let phone = this.value;
    let error = document.getElementById("phone-error");

    if (!/^\d{11}$/.test(phone)) {
        error.textContent = "Invalid phone number format! Must be 11 digits.";
    } else {
        error.textContent = "";
    }
});

// Full Name Validation Check
document.getElementById("name-input").addEventListener("input", function () {
    let name = this.value;
    let error = document.getElementById("name-error");

    if (name.trim().split(" ").length < 2) {
        error.textContent = "Full name must include at least first and last name.";
    } else {
        error.textContent = "";
    }
});

// Submit Form Validation Check
function isFormValid() {
    let email = document.getElementById("email-input").value;
    let phone = document.getElementById("phone-input").value;
    let name = document.getElementById("name-input").value;

    let emailError = document.getElementById("email-error").textContent;
    let phoneError = document.getElementById("phone-error").textContent;
    let nameError = document.getElementById("name-error").textContent;

    if (!email.includes("@") || !email.includes(".") || !/^\d{11}$/.test(phone) || name.trim().split(" ").length < 2 || emailError || phoneError || nameError) {
        return false;
    }
    return true;
}

// Form Submission Error Showup 

function showError() {
    document.querySelector(".submissionerror").classList.add("active");
}

function hideError() {
    document.querySelector(".submissionerror").classList.remove("active");
}
// Form Submission Success Showup
function showSuccess() {
    document.querySelector(".submissionsuccess").classList.add("active");
}
function hideSuccess() {
    document.querySelector(".submissionsuccess").classList.remove("active");
}

// Redirect to Home Page Function

function goHome() {
    window.location.href = "/index.html";
}

function goCart() {
    window.location.href = "/assets/pages/cart.html";
}

function showToast(name) {
    var toastEl = document.getElementById('cartToast');
    var toast = new bootstrap.Toast(toastEl);
    document.getElementById('itemname').innerHTML = name;
    toast.show();
}