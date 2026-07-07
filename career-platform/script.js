const candidateBtn =
    document.getElementById("candidateBtn");

const employerBtn =
    document.getElementById("employerBtn");

if (candidateBtn && employerBtn) {

    candidateBtn.onclick = () => {

        candidateBtn.classList.add("active-btn");

        employerBtn.classList.remove("active-btn");

    };

    employerBtn.onclick = () => {

        employerBtn.classList.add("active-btn");

        candidateBtn.classList.remove("active-btn");

    };

}

const signupPageBtn = document.getElementById("signupBtn");

if (signupPageBtn) {

    signupBtn.addEventListener("click", () => {

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword =
            document.getElementById("confirmPassword").value;

        if (name === "" || email === "" || password === "") {

            alert("Please fill all fields");
            return;

        }

        if (password !== confirmPassword) {

            alert("Passwords do not match");
            return;

        }

        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Account Created Successfully");

        window.location.href = "login.html";

    });

}

const loginPageBtn =
    document.getElementById("loginBtn");

if (loginPageBtn) {

    loginBtn.addEventListener("click", () => {

        let email =
            document.getElementById("loginEmail").value;

        let password =
            document.getElementById("loginPassword").value;

        let savedEmail =
            localStorage.getItem("userEmail");

        let savedPassword =
            localStorage.getItem("userPassword");

        if (
            email === savedEmail &&
            password === savedPassword
        ) {

            alert("Login Successful");

            window.location.href =
                "index.html";

        }
        else {

            alert("Invalid Email or Password");

        }

    });

}

function showMoreContent() {
    document.getElementById("moreContent").style.display = "block";
    document.getElementById("viewMoreBtn").style.display = "none";
}

function hideMoreContent() {
    document.getElementById("moreContent").style.display = "none";
    document.getElementById("viewMoreBtn").style.display = "inline-block";

    document.querySelector(".view-more-section")
        .scrollIntoView({ behavior: "smooth" });
}

