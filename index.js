const domElements = document.documentElement;
document.querySelector('body').style.background="linear-gradient(-45deg,black, #173969)"
domElements.style.color = 'white';


let elements = document.querySelectorAll(".card")

const observer = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    entries.forEach((entry) => {
        entry.target.classList.toggle("slide", entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target);
        
    });
}, {
    threshold:0.3,
})

elements.forEach((element,i) =>{
    if(i%2 === 0){
        element.classList.add("left-to-right");
        observer.observe(element)
    } else {
        element.classList.add("right-to-left");
        observer.observe(element)
    }
});

