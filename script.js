const bar = document.querySelector(".bars");
const link = document.querySelector(".carrier");
const sun = document.querySelector(".light");
const search = document.querySelector(".search");
const form_ = document.querySelector(".input");
const faq = document.querySelectorAll(".faq");
const direc = document.querySelector(".direction");
const ancho = document.querySelectorAll(".ancho");
const more = document.querySelectorAll(".more-text");
const btns = document.querySelectorAll(".js-btn");
// FOR TOGGLING  ------######

bar.addEventListener("click", togle);

function togle() {
  let svg = bar.querySelector("svg");
  if (svg.classList.contains("fa-bars")) {
    svg.classList.replace("fa-bars", "fa-times");
  } else {
    svg.classList.replace("fa-times", "fa-bars");
  }
  link.classList.toggle("effect");
}

ancho.forEach((ancho) => {
  ancho.addEventListener("click", togle);
});

// FOR ----SEARCH BARS---

search.addEventListener("click", function () {
  search.style.color = "red";
  form_.classList.toggle("effect-1");
});

// ------FOR SCROLL BARS----

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});
// ----FOR FAQS----

faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    if (faq.classList.contains("open")) {
      faq.classList.add("pink");
    } else {
      faq.classList.remove("pink");
    }

    const icon = faq.querySelector("svg");
    if (icon.classList.contains("fa-plus")) {
      icon.classList.replace("fa-plus", "fa-minus");
    } else {
      icon.classList.replace("fa-minus", "fa-plus");
    }
  });
});


 const container = document.addEventListener("click", (event) => {
     let target = event.target;
     if (target.matches(".js-btn")) {
       target.previousElementSibling.classList.toggle("hide");
      //  console.dir(target);
     }
   });


// btns.forEach((btn, offset) => {
//   btn.addEventListener("click", () => {
//     console.dir(btn);
//     learnMore[offset].classList.toggle("hide");
//     // btn.previousElementSibling.classList.toggle("hide");
//   });
// });



// btns.forEach((btn)=>{
//   btn.addEventListener('click', () =>{
// console.dir(btn)
// btn.previousElementSibling.classList.toggle('hide')
//   })
// })



// let learnMore = document.querySelectorAll(".learn-more");


// const container = document.querySelector(".courses-container");

// container.addEventListener("click", (event) => {
//   let target = event.target;
//   if (target.matches(".js-btn")) {
//    target.previousElementSibling.classList.toggle('hide');
//   }
//   console.dir(target)
// });

// document
//   .querySelector(".courses")
//   .addEventListener("click", (event) => {
//     const faq = event.target.closest(".js-btn");
//     if (faq) {
//       faq.previousElementSibling.classList.toggle("hide");
//       console.log(faq)
//     }
//   });

// document.querySelector(".faq_container")?.addEventListener("click", (event) => {
//   const faq = event.target.closest(".faq");
//   if (faq) {
//     faq.classList.toggle("open");
//   console.log(faq)
//   }
// });

// let faqs = document.querySelector(".faq_container");
// faqs.addEventListener('click',(event)=>{
// let target = event.target.closest;
// if (target.matches(".faq")) {
//   faq.classList.toggle("open");
//   console.log("hello");
// }
//   console.dir(target)
// })

// document.querySelector(".faq_container").addEventListener("click", (event) => {
//   if (event.target.matches(".faq")) {
//     event.target.classList.toggle("open");
//   }
// });

// let learnMore = document.querySelector(".learn-more");

// for (i = 0; i < learnMore.length; i++) {
//   let btn1 = learnMore[i];
//   btns.addEventListener("click", function () {
//     btn1.classList.toggle("hide");
//   });
//   console.log(btn1);
//   console.log(btns);
// }

// let moreText = document.querySelector(".more-text");
// const faq = document.querySelector(".faq");

// for (i = 0; i < faq.length; i++) {
//   let text = faq[i];
//   text.addEventListener("click", () => {
//     text.classList.toggle("open");
//   });
// }

