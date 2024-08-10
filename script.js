const bar = document.querySelector('.bars');
const link = document.querySelector('.carrier');
const sun = document.querySelector('.light');
const btn = document.querySelectorAll('.btn');
const search = document.querySelector('.search');
const form_ = document.querySelector('.input');
const faq = document.querySelectorAll('.faq');
const direc = document.querySelector('.direction');
const ancho = document.querySelectorAll('.ancho');
const moreText = document.querySelector(".more-text");


// FOR TOGGLING  ------######

bar.addEventListener('click', togle);

function togle() {

    let svg = bar.querySelector('svg');
    if (svg.classList.contains('fa-bars')) {
        svg.classList.replace('fa-bars', 'fa-times');
    }
    else {
        svg.classList.replace('fa-times', 'fa-bars');
    }
    link.classList.toggle('effect');
}

ancho.forEach((ancho) => {
    ancho.addEventListener('click', togle)

})



// FOR ----SEARCH BARS---

search.addEventListener('click', function () {

    search.style.color = 'red'
    form_.classList.toggle('effect-1')
})

// ------FOR SCROLL BARS----

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)

})
// ----FOR FAQS----

faq.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        if (faq.classList.contains('open')) {
            faq.classList.add('pink');
        } else {

            faq.classList.remove('pink');
        }

        const icon = faq.querySelector('svg');
        if (icon.classList.contains('fa-plus')) {
            icon.classList.replace('fa-plus', 'fa-minus');
        }
        else {
            icon.classList.replace('fa-minus', 'fa-plus');
        }
    })
})
btn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        moreText.classList.toggle('open')
        // moreText.style.display='block';
    })
})
btn.addEventListener('click',()=>{
    
})
// btn.addEventListener('click',more);


// function more(){

//     moreText.classList.toggle('open');
// }

