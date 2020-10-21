/* CREATING THE INTERACTIVITY */
let btn = document.querySelector('button');
let planet = document.querySelector('select');
let mass = document.getElementById('mass');
let image = document.querySelector('.planet-image')
let pictures = ['./images/mercury.png', './images/venus.png', './images/earth.png', './images/moon.png',
            './images/mars.png', './images/jupiter.png', './images/saturn.png','./images/uranus.png', './images/neptune.png', './images/pluto.png']

btn.addEventListener('click', ()=> {
    if(mass.value.length===0){
        // image.style.visibility = 'hidden'
        document.querySelector('.image').remove(image);
        let text = document.createElement('p');
        document.querySelector('.image').append(text);
        
        text.textContent = 'Mass is required'
        text.style.cssText = 'font-size: 2em'
    }
})

image.style.padding= '20px 40px';
/* PICTURE SELECTIONS */
planet.addEventListener('change', ()=>{
    image.src = pictures[planet.selectedIndex - 1]
})