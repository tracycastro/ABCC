const NAVBUTTON = document.querySelector(".abc-nav-button");
toggle();
window.onresize = function() {
    toggle();
}
function toggle() {
    if (window.innerWidth <=768) {
        NAVBUTTON.classList.remove("active");
    }
    else {
        NAVBUTTON.classList.add("active");
    }
}
