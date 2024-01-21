function myFunction() {
    var x = document.getElementById("myNavbar");
    var menuIcon=document.getElementById("menuIcon");
    if (x.className === "navbar") {
        x.className += " responsive";
        menuIcon.innerHTML="X";
    } else {
        x.className = "navbar";
        menuIcon.innerHTML="☰";
    }
}
function subscribe() {
    var email = document.getElementById('email').value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(email  && emailRegex.test(email)) {
        document.getElementById('success').style.display = 'block';
        setTimeout(function() {
            success.style.display = 'none';
        }, 2000);
    }
    else {
        alert('Please enter a valid email address.');
    }
}
