/*----------------- CREATING THE INTERACTIVITY -----------------*/
/* ---------------------COLLECTING DOCUMENTS OBJECT MODELS--------------------- */
let btn = document.querySelector('button');
let planet = document.querySelector('select');
let mass = document.getElementById('mass');
let image = document.querySelector('.planet-image')

planet.addEventListener('change', ()=>{
    image.src = pictures[planet.selectedIndex - 1]
    if(planet.selectedIndex === 0){
        // image.src = pictures[2];
        document.querySelector('main').style.height = '150px' // reduce the height of the image's background
        let text = document.createElement('p'); //create an element to accomodate the new text.
        text.textContent = 'You have not chosen a planet';
        document.querySelector('.flex-container').append(text);
        text.style.cssText = 'font-size: 1.7em; letter-spacing: 1px; color: #000; padding: 15px; background-color: rgb(255, 254, 254);';
    }  
})
image.style.padding= '20px 40px';
// planet.addEventListener('click', ()=>{
    
// })
/* planet.addEventListener('change', ()=>{

    
}) */
/*----------------------------- PICTURE SELECTIONS -----------------------------*/
let pictures = ['./images/mercury.png', './images/venus.png', './images/earth.png', './images/moon.png',
            './images/mars.png', './images/jupiter.png', './images/saturn.png','./images/uranus.png', './images/neptune.png', './images/pluto.png']
         
btn.addEventListener('click', ()=> {
    if(mass.value.length===0){
        document.querySelector('.image').remove(image); //Remove the image
        document.querySelector('main').style.height = '150px' // reduce the height of the image's background
        let text = document.createElement('p'); //create an element to accomodate the new text.
        text.textContent = 'Mass is required';
        document.querySelector('.flex-container').append(text);
        text.style.cssText = 'font-size: 1.7em; letter-spacing: 1px; color: #000; padding: 15px; background-color: rgb(255, 254, 254);';
    }
    
})
/* -------------------=----ADDING LOGIC TO THE CODE-------------------=---- */

btn.addEventListener('click', (e)=>{
    console.log(e.target)
    do {
        if(typeof Number(mass.value) === 'number' && planet.selectedIndex>0){

        document.querySelector('.image').remove(image); //Remove the image
        document.querySelector('main').style.height = '150px' // reduce the height of the image's background
        let text = document.createElement('p'); //create an element to accomodate the new text.
        text.textContent = `Mass is ${Number(mass.value * planet.value).toFixed(3)}`;
        document.querySelector('.flex-container').append(text);
        text.style.cssText = 'font-size: 1.7em; letter-spacing: 1px; color: #000; padding: 15px; background-color: rgb(255, 254, 254);';
        }
    } while(btn.onclick === true)

})
/* --------------------------KEY CONSTANT VALUES-------------------------- */
/* 1. Mercury - 3.59
2. Venus -  8.87
3. Earth - 9.81
4. Moon - 1.62
5. Mars - 3.77
6. Jupiter - 25.95
7. Saturn - 11.08
8. Uranus - 10.67
9. Neptune - 14.07
10. Pluto - 0.42
 */