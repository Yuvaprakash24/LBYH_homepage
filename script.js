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