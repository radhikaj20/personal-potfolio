//for experience.html
const mobile_nav_expe = document.querySelector('.mobile-navbar-btn-expe');
const headerEl_expe = document.querySelector('.header-expe');
const main_body_expe = document.querySelector('.main-expe');
const footer_expe = document.querySelector('.footer-expe');

mobile_nav_expe.addEventListener('click', function(){
    console.log("Clicked");
    headerEl_expe.classList.toggle('active');
    main_body_expe.classList.toggle('only_mobile_nav');
    footer_expe.classList.toggle('only_mobile_nav');
});

const sectionHeroEl_expe = document.querySelector('.main-expe');
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
obs.observe(sectionHeroEl_expe);