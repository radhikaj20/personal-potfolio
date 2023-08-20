var typed = new Typed(".auto-typed", {
    strings: ["Full Stack Developer","Data Analyst", "Software Developer", "Data Engineer","Machine Learning Engineer","Tech Enthusiast "],
    typedSpeed: 150,
    backSpeed: 50,
    loop: true
})
//for index.html
const mobile_nav = document.querySelector('.mobile-navbar-btn');
const headerEl = document.querySelector('.header');
const main_body = document.querySelector('main');
const footer = document.querySelector('footer');

mobile_nav.addEventListener('click', function(){
    headerEl.classList.toggle('active');
    main_body.classList.toggle('only_mobile_nav');
    footer.classList.toggle('only_mobile_nav');
});

const sectionHeroEl = document.querySelector('.section-hero');
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
obs.observe(sectionHeroEl);