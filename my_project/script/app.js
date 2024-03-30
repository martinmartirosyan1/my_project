

function Nav() {

    let hamburger = document.querySelector(".hamburger");
    let navMenu = document.querySelector(".nav-menu");
    if (!hamburger || !navMenu) {
        
        return;
    }
    hamburger.addEventListener("click", () => { // Corrected from btn.addEventListener to hamburger.addEventListener
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        });
alert(test)
}
Nav();