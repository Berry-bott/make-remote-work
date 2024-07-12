var bar = document.querySelector('.bars');
var link = document.querySelector('.carrier');
var sun = document.querySelector('.light');
var l = document.querySelector('.l');
var search = document.querySelector('.search');
var form_ = document.querySelector('.input')
const faqs =document.querySelectorAll('.faq');
const direc = document.querySelector('.direction')

// FOR TOGGLING------######

bar.addEventListener('click', function () {
    let svg = bar.querySelector('svg');
    if (svg.classList.contains('fa-bars')) {
        svg.classList.replace('fa-bars','fa-times')
    }
    else {
        svg.classList.replace('fa-times', 'fa-bars')

    }
    link.classList.toggle('effect')
})

// FOR ----SEARCH BARS---

search.addEventListener('click', function () {

    search.style.color = 'red'
    form_.classList.toggle('effect-1')
})

// ------FOR SCROLL BARS----
window.addEventListener('scroll',()=>{
document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100)

})
// ----FOR FAQS----
faqs.forEach((faq)=>{
faq.addEventListener('click',()=>{
    faq.classList.toggle('open');
    if(faq.classList.contains('open')){
        faq.classList.add('pink');
    }else{
        
        faq.classList.remove('pink');
    }
 

    const icon =faq.querySelector('svg');
    if(icon.classList.contains('fa-plus')){
        icon.classList.replace('fa-plus','fa-minus');
    }
    else{
        icon.classList.replace('fa-minus','fa-plus');
    }
})
})

link.forEach((a)=>{

})

