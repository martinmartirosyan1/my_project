
let List = document.querySelector("form");

function validationForm() {
    List.forEach((validation) => {
        if (validation.value === "" || validation.value === null) {
            validation.classList.add("invalid");
            validation.classList.remove("valid");
            validation.setAttribute("required", "required")
            return (validation)
        }
        else (validation.classList.add("valid"))
        validation.classList.remove("invalid");
        return (validation)

    })
}
document.querySelector("button").addEventListener("click", validationForm)

function validation() {
    let form = document.querySelector("form")
    if (!form) {
        return;
    }
    form.addEventListener("submit", (x) => {
        let list = document.querySelectorAll(".valod");
        if (!list) {
            return;
        }
        list.forEach((cuurrentValue) => {
            if (cuurrentValue.value === "" || cuurrentValue.value.length < 5) {
                el.praventDefault()
            }
        })
    })
}





// funkcia  enq sarqelu  kanchenq funkcia
// 1---formi hamar popoxakan enq haytararum
// 2--stugum enq formi phopoxakany
// 3-- formi sbmitin avelacnel lissner (ivnty stacanq argmentav )
// 4-- stanal mer uzac inputnery
// 5-- ciklenq kurum mer uzac inputneri vire
// 6-- yuraqanchyur iteraciayi jamanak  tvyal iteraciayi arjeqy stugenq yethe

// function validation() {
//     let form = document.querySelector("form");
//     if (!form) {
//         return;
//     }
//     form.addEventListener("submit", (e) => {
//         let list = document.querySelectorAll(".valod");
//         if (!list) {
//             return;
//         }
//         list.forEach((currentValue) => {
//             if (currentValue.value === "" || currentValue.value.length < 5) {
//                 e.preventDefault();
//             }
//         });
//     });
// }




