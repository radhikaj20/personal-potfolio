//for education.html
const mobile_nav_contact = document.querySelector('.mobile-navbar-btn-contact');
const headerEl_contact = document.querySelector('.header-contact');
const main_body_contact = document.querySelector('.main-contact');
const footer_contact = document.querySelector('.footer-contact');

mobile_nav_contact.addEventListener('click', function(){
    console.log("Clicked");
    headerEl_contact.classList.toggle('active');
    main_body_contact.classList.toggle('only_mobile_nav');
    footer_contact.classList.toggle('only_mobile_nav');
});

const sectionHeroEl_contact = document.querySelector('.main-contact');
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
obs.observe(sectionHeroEl_contact);