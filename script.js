const bar = document.querySelector('.bars');
const link = document.querySelector('.carrier');
const sun = document.querySelector('.light');
const l = document.querySelector('.l');
const search = document.querySelector('.search');
const form_ = document.querySelector('.input');
const faqs = document.querySelectorAll('.faq');
const direc = document.querySelector('.direction');
const links = document.querySelectorAll('.links');
const ancho = document.querySelector('.ancho');

// FOR TOGGLING  ------######

bar.addEventListener('click', togle)

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

links.forEach((ancho) => {
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

faqs.forEach((faq) => {
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


