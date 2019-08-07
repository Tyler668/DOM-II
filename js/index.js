// Your code goes here
//----------------------------------------------------------------------------------------------------------------|
// On key press log which key was pressed
document.addEventListener('keydown', logKey);
function logKey(e) {
    console.log(` ${e.code}`);
}
//----------------------------------------------------------------------------------------------------------------|
// (1) Logo animation using MOUSEOVER ===
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (e) => {
    TweenMax.to(e.target, 1, { rotation: 360 });
});
logo.addEventListener('mouseleave', (e) => {
    TweenMax.to(e.target, 1, { rotation: -360 });
});

//----------------------------------------------------------------------------------------------------------------|
// (2) Body color change on KEYDOWN ===
const body = document.querySelector('body');

body.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        body.style.backgroundColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        //Random color hex
    }
});
//----------------------------------------------------------------------------------------------------------------|
// Hover nav link behavior ===
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(a => {
    a.addEventListener('mouseover', (e) => { //Mouse on
        e.target.style.color = "lightgreen";
        e.preventDefault();
    });
    a.addEventListener('mouseleave', (e) => {  //Mouse off
        e.target.style.color = "black";
        e.preventDefault();
    });
});
//----------------------------------------------------------------------------------------------------------------|
// (3) Preventing nested elements from bubbling using stopPropagation utilizing CLICK===
const intro = document.querySelector('.intro');
const introImg = document.querySelector(".intro img");

intro.addEventListener('click', (e) => {
    alert("outer");
});

introImg.addEventListener('click', (e) => {
    alert("inner");
    e.stopPropagation();
});
//----------------------------------------------------------------------------------------------------------------|
// (4) Rotate images in different directions depending on direction of mouse scroll using WHEEL===
const imgContentImgs = document.querySelectorAll('.img-content img');
imgContentImgs.forEach(img =>{
    img.addEventListener('wheel', (e)=>{
        e.preventDefault();
        if(e.deltaY < 0){TweenMax.to(e.target, 1, { rotation: 360 });}
        if(e.deltaY > 0){TweenMax.to(e.target, 1, { rotation: -360 });}
    });
})
//----------------------------------------------------------------------------------------------------------------|
// (5) Blur bottom image on double click using DBLCLICK
const imgContentDestination = document.querySelector('.content-destination img');
 imgContentDestination.addEventListener('dblclick', (e) =>{
    TweenMax.to(e.target, 0.5, {
        scale: 1,
        filter: 'grayscale(1) blur(3px)',
        ease: Power1.easeIn
      })

      
 });
//----------------------------------------------------------------------------------------------------------------|
// (6) On page load you are alerted to the simple fact that the page has loaded using LOAD
// window.addEventListener('load', (event) => {
//     alert('WARNING:\n Page is fully loaded');
//   });
//----------------------------------------------------------------------------------------------------------------|
// (7) Added a form so I could use FOCUS on the fields when they are in use.
const allFields = document.querySelectorAll('input');
allFields.forEach(e =>{
    e.addEventListener('focus', (e) =>{
        e.target.style.backgroundColor = "yellow";
    })
})
//----------------------------------------------------------------------------------------------------------------|
// (8) On page resize you are alerted using RESIZE event.
window.addEventListener('resize',()=>{
    alert("DON'T DO THAT BRO \nI'M NOT THAT GOOD AT RESPONSIVE DESIGN");
})
//----------------------------------------------------------------------------------------------------------------|
// (9) When a piece of the page is copied this comes up. Utilizes COPY
window.addEventListener('copy', ()=>{
    alert("PLAGIARISM DETECTED\nCONTACTING FBI...");
})
//----------------------------------------------------------------------------------------------------------------|
// (10) When a non primary mouse button is pressed this will delete the selected image using AUXCLICK
imgContentImgs.forEach(img =>{
    img.addEventListener('auxclick', (e)=>{
        e.target.style.display = "none";
    });
})
//----------------------------------------------------------------------------------------------------------------|
//
      