
let plus = document.querySelector(".increase")
let set = document.querySelector(".reset")
let negat = document.querySelector(".decrease")
let counter = document.querySelector(".num")

set.addEventListener("click", ()=>counter.innerHTML = 0 )
plus.addEventListener("click", ()=> counter.innerHTML++ )
negat.addEventListener("click",()=> counter.innerHTML-- )

// let count = 0;

// let btns = document.querySelectorAll(".count span");
// let counter = document.querySelector(".num");

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         let styles = e.currentTarget.classList;
//         if (styles.contains("decrease")) {
//             count--;
//         } else if (styles.contains("increase")) {
//             count++;
//         } else {
//             count = 0;
//         }


//         if (count > 0) {
//             counter.style.color = "green";
//         }
//         if (count < 0) {
//             counter.style.color = "red";
//         }
//         if (count === 0) {
//             counter.style.color = "#222";
//         }
//         counter.textContent = count;
//     })
// })

    