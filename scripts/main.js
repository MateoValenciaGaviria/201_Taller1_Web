/* var mainheader__nav = document.querySelector('.mainheader__nav');
var hambtn = document.querySelector('.hamburguerbtn');

console.log('algo');

function handleHamClick(){
    if(mainheader__nav.classList.contains('mainheader__nav--mobile')){
        mainheader__nav.classList.remove('mainheader__nav--mobile');
    }else {
        mainheader__nav.classList.add('mainheader__nav--mobile');
    }

    mainheader__nav.classList.toggle('mainheader__nav--mobile');
}

hambtn.addEventListener('click', handleHamClick); */

var mouseTrackingColor = document.querySelector('.mainkeyboard__color');
var hoverLayoutMouse = document.addEventListener.bind(document);

var mouseX, mouseY;

hoverLayoutMouse('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

var x = void 0, y = void 0,  key = -1;

var followMouse = function followMouse(){
    key = requestAnimationFrame(followMouse);

    if(!x || !y){
        x = mouseX || e.pageX;
        y = mouseY || e.pageY;
    } else {
        x = mouseX || e.pageX;
        y = mouseY || e.pageY;
   }
   mouseTrackingColor.style.left = x + 'px';
   mouseTrackingColor.style.top = y + 'px'; 
};

window.onload = function() {
    followMouse();
};

