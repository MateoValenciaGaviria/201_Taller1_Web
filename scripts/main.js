var mainheader__nav = document.querySelector('.mainheader__nav');
var hambtn = document.querySelector('.hamburguerbtn');

console.log('algo');

function handleHamClick(){
    /* if(mainheader__nav.classList.contains('mainheader__nav--mobile')){
        mainheader__nav.classList.remove('mainheader__nav--mobile');
    }else {
        mainheader__nav.classList.add('mainheader__nav--mobile');
    } */

    mainheader__nav.classList.toggle('mainheader__nav--mobile');
}

hambtn.addEventListener('click', handleHamClick);