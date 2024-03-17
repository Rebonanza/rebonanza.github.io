const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
       
       const animationClass = entry.target.dataset.animation; 
        if (entry.isIntersecting) {
            console.log('tes')
            entry.target.classList.add(animationClass);
    
        } else {
            console.log('halo')
            entry.target.classList.remove(animationClass);
        }
    });
};



const observerOptions = {
    root: null,
    rootMargin: '100% 0px 100% 0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
document.querySelectorAll('[data-animation]').forEach(element => {
    observer.observe(element);
});


const swiper = new Swiper('#expertise-swiper', {
    autoplay: {
        delay: 2000,
    },
    slidesPerView: 6,
    spaceBetween: 50,
    loop: true,
  });

  
