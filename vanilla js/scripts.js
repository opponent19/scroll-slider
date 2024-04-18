let scrollConainer = document.querySelector('.gallery');
 
let backbtn = document.getElementById('backBtn');
let nextbtn = document.getElementById('nextBtn');

scrollConainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollConainer.scrollLeft += evt.deltaY
    scrollConainer.style.scrollBehavior = 'auto';
})
nextbtn.addEventListener('click', () =>{
    scrollConainer.style.scrollBehavior = 'smooth';
    scrollConainer.scrollLeft += 100;
})
backbtn.addEventListener('click', () =>{
    scrollConainer.style.scrollBehavior = 'smooth';
    scrollConainer.scrollLeft -= 100;
})