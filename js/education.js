//for education.html
const mobile_nav_edu = document.querySelector('.mobile-navbar-btn-edu');
const headerEl_edu = document.querySelector('.header-edu');
const main_body_edu = document.querySelector('.main-edu');
const footer_edu = document.querySelector('.footer-edu');

mobile_nav_edu.addEventListener('click', function(){
    console.log("Clicked");
    headerEl_edu.classList.toggle('active');
    main_body_edu.classList.toggle('only_mobile_nav');
    footer_edu.classList.toggle('only_mobile_nav');
});

const sectionHeroEl_edu = document.querySelector('.main-edu');
const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    if(!ent.isIntersecting){
        document.body.classList.add('sticky');
    }
    if(ent.isIntersecting){
        document.body.classList.remove('sticky');
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: '-30px'
});
obs.observe(sectionHeroEl_edu);