const menuIcon = document.querySelector(".menu-icon");
const backdrop = document.querySelector(".backdrop");
const navlinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener('click', () =>{
    navlinks.classList.add("active");
    backdrop.classList.add("active");
})

closeIcon.addEventListener('click', () => {
    navlinks.classList.remove("active");
    backdrop.classList.remove("active");
});

backdrop.addEventListener('click', () => {
    navlinks.classList.remove("active");
    backdrop.classList.remove("active");
});
