let spanChange = document.querySelector('span');
let Button = document.querySelector('button')
let MainColor = document.querySelector('main');


Button.addEventListener('click',()=>{
   
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    spanChange.style.color = `rgb(${red},${green},${blue})`;

    spanChange.textContent = ` rgb(${red},${green},${blue})`;
    MainColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
   
})
