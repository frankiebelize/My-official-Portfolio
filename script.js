
// Active Nav Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 250;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
        });
    };
});
};

// Typing Animation for the header

var typed = new Typed('.text', {
    strings: ["Frontend Developer","Backend Developer","SQL Developer","C++ Developer" ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// Slide in animation on scroll for About Me
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".about-title")[0].classList.add("slideInRight");
            document.querySelectorAll(".about-desc")[0].classList.add("slideInLeft");
        }
    })
})

observer.observe(document.querySelector(".about-container"));

// Skills animation

const observerSkill = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".skills-title")[0].classList.add("slideInRight");
            document.querySelectorAll(".skills")[0].classList.add('fadeIn');
        }
    })
})

observerSkill.observe(document.querySelector('.skills-container'));

// project animation

const observerProject = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".project-title")[0].classList.add("slideInRight");
            document.querySelectorAll(".project-content")[0].classList.add('fadeIn');
        }
    })
})

observerProject.observe(document.querySelector('.project-container'));