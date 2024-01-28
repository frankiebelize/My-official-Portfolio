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

observer.observe(document.querySelector(".container"));

// Typing animation for about me description

var typed1 = new Typed('.about-desc-title', {
    strings: ["Frontend Developer","Backend Developer","SQL Developer","C++ Developer" ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:5000,
    loop:true
})

var typed1 = new Typed('.about-desc-desc', {
    strings: ["I am a Front End Developer with expirence in building attractive, responsive and optimized webpages","Backend Developer","SQL Developer","C++ Developer" ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:5000,
    loop:true
})