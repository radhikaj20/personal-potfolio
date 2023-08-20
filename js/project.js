//for project.html
const mobile_nav_project = document.querySelector('.mobile-navbar-btn-project');
const headerEl_project = document.querySelector('.header-project');
const main_body_project = document.querySelector('.main-project');
const footer_project = document.querySelector('.footer-project');

mobile_nav_project.addEventListener('click', function(){
    console.log("Clicked");
    headerEl_project.classList.toggle('active');
    main_body_project.classList.toggle('only_mobile_nav');
    footer_project.classList.toggle('only_mobile_nav');
});

const sectionHeroEl_project = document.querySelector('.main-project');
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
obs.observe(sectionHeroEl_project);