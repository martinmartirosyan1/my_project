function Nav() {
    let hamburger = document.querySelector(".hamburger");
    let navMenu = document.querySelector(".nav-menu");
    if (!hamburger || !navMenu) {
        return;
    }
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-link").forEach(n => n.
        addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        })
    );
}
Nav();
function validation() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let message = document.getElementById("message")
    let form = document.querySelector("form");
    erorMessage = document.querySelector(".eror")
    if (!form) {
        return;
    }
    form.addEventListener("submit", (e) => {
        let list = document.querySelectorAll("input")
        if (!list) {
            return;
        }
        list.forEach((currentValue) => {
            if (currentValue.value === "" || currentValue.value.length < 5) {
                e.preventDefault();
                email.classList.toggle("eror")
                name.classList.toggle("eror")
                message.classList.toggle("eror")
                return;
            }
        });
    });
}

validation()




