const mainNav=document.getElementById('main-nav');
const toggleMenu=document.getElementById('toggle-menu');
const mainMenu=document.getElementById('main-menu')

const fulImgBox=document.getElementById("full-img-box");
const fulImg=document.getElementById("full-img");

toggleMenu.addEventListener('click',()=>{
mainNav.classList.toggle('nav--show');/*este classlist es para que le quite la clase o se lo ponga*/
mainMenu.classList.toggle('main-manu--show')
})
window.addEventListener('resize', ()=>{
    if(mainNav.classList.contains('nav--show')){
        mainNav.classList.remove('nav--show');
        mainMenu.classList.remove('main-menu--show')
    }
})
function openImg(reference){
    fulImgBox.style.display="flex";
    fulImg.src=reference;
}
function closeImg(){
    fulImgBox.style.display="none"; 
}
