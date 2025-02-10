
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

    function isContactValid() {
        let email = document.getElementById("email-input").value;
        let name = document.getElementById("name-input").value;
        let subject = document.getElementById("subject-input").value;
        let message = document.getElementById("text-input").value;

        let emailError = document.getElementById("email-error");
        let nameError = document.getElementById("name-error");
        let subjectError = document.getElementById("subject-error");
        let messageError = document.getElementById("message-error");

        let isValid = true;

        // Reset error messages
        emailError.textContent = '';
        nameError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Name validation 
        if (name.trim().split(" ").length < 2) {
            nameError.textContent = 'Please enter your full name (First and Last).';
            isValid = false;
        }

        if (subject.trim().split(" ").length < 2 || subject.trim().split(" ").length > 50) {
            subjectError.textContent = 'Subject must be between 2 and 50 words long.';
            isValid = false;
        }

        // Message validation 
        if (message.length < 20) {
            messageError.textContent = 'Message must be at least 20 characters long.';
            isValid = false;
        }
        
        return isValid;
    }

    const form = document.getElementById("MyContact__Form");
    form.addEventListener("submit", function (event) {
        if (!isContactValid()) {
            event.preventDefault();
            document.getElementById('Universal-Overlay__ErrorField').innerHTML = 'Please fill in all fields correctly';
            showOverlay();
        } else {
            document.getElementById('Universal-Overlay__ErrorField').innerHTML = 'Thanks for the message! We will be right back!';
            showOverlay();
            form.reset();
        }
    });
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
            navElement.classList.add('selected');
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

// Submit Form Validation Check
function IsCartValid() {
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





// Full Name Validation Check
document.getElementById("name-input").addEventListener("input", function () {
    let name = this.value;
    let error = document.getElementById("name-error");
    if (!/^[a-zA-Z\s]{2,}$/.test(name) || name.trim().split(" ").length < 2) {
        error.textContent = "* Full name must include at least first and last name and contain only alphabets.";
    } else {
        error.textContent = "";
    }
});

// Email Validation Check
document.getElementById("email-input").addEventListener("input", function () {
    let email = this.value;
    let error = document.getElementById("email-error");

    if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "* Invalid Email format!";
    } else {
        error.textContent = "";
    }
});

// Subject Validation Check
document.getElementById("subject-input").addEventListener("input", function () {
    let subject = this.value;
    let error = document.getElementById("subject-error");
    if (!/^[a-zA-Z\s]{3,}$/.test(subject) || subject.trim().split(" ").length < 3) {
        error.textContent = "* Invalid Subject format!";
    } else {
        error.textContent = "";
    }
});

// Message Validation Check
document.getElementById("text-input").addEventListener("input", function () {
    let message = this.value;
    let error = document.getElementById("message-error");
    if (message.trim().split(" ").length < 5) {
        error.textContent = "* Message must be at least 5 words long.";
    } else {
        error.textContent = "";
    }
});

// Phone Number Validation Check
document.getElementById("phone-input").addEventListener("input", function () {
    let phone = this.value;
    let error = document.getElementById("phone-error");

    if (!/^\d{11}$/.test(phone)) {
        error.textContent = "* Invalid phone number format! Must be 11 digits.";
    } else {
        error.textContent = "";
    }
});


// Form Submission Overlay

function showOverlay() {
    document.querySelector(".Universal-Overlay").classList.add("active");
}

function hideOverlay() {
    document.querySelector(".Universal-Overlay").classList.remove("active");
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

function ScrollTop() {
    window.scrollTo(0, 0);
}