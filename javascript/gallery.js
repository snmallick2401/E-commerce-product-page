const mainimages = document.querySelectorAll(".default .main-img img");
const thumbnails = document.querySelectorAll(".default .thumbnails div");
const lightboxMainImages = document.querySelectorAll(".lightbox .main-img img");
const lightboxThumbnails = document.querySelectorAll(".lightbox .thumbnails div");
const lightbox = document.querySelector('.lightbox');
const iconClose = document.querySelector('.icon-close');
const iconPrev = document.querySelector('.icon-prev');
const iconNext = document.querySelector('.icon-next');

let currentIndex = 0;


const changeImage = (index, mainimages, thumbnails) => {
    mainimages.forEach((img) => {
        img.classList.remove("active");
    });

    thumbnails.forEach((thumb) => {
        thumb.classList.remove("active");
    });

    mainimages[index].classList.add("active");
    thumbnails[index].classList.add("active");
    currentIndex = index;
};

// Default gallery
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        changeImage(index, mainimages, thumbnails);
    });
});

// Lightbox gallery
lightboxThumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        changeImage(index, lightboxMainImages, lightboxThumbnails);
    });
});

mainimages.forEach((img, index) => {
    img.addEventListener('click', ()=>{
       lightbox.classList.add('active');
       changeImage(index, lightboxMainImages, lightboxThumbnails);
    })
});

iconPrev.addEventListener('click', () => {
    if(currentIndex <=0){
        changeImage(mainimages.length - 1, lightboxMainImages, lightboxThumbnails)
    }
    else{
        changeImage(currentIndex - 1, lightboxMainImages, lightboxThumbnails)
    }
});

iconNext.addEventListener('click', () => {
    if (currentIndex >= mainimages.length - 1) {
        changeImage(0, lightboxMainImages, lightboxThumbnails);
    } else {
        changeImage(currentIndex + 1, lightboxMainImages, lightboxThumbnails);
    }
});



iconClose.addEventListener('click', () => {
    lightbox.classList.remove("active");
});

