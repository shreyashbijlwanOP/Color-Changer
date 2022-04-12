let spanChange = document.querySelector('span');
let Button = document.querySelector('button')
let MainColor = document.querySelector('main');

let hexCodeVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];




Button.addEventListener('click', () => {


 

    let randomChoice = Math.floor(Math.random() * 100 + 1)
    if (randomChoice % 2 == 0) {
        let h1 = hexCodeVal[Math.floor(Math.random() * hexCodeVal.length)].toString();
        let h2 = hexCodeVal[Math.floor(Math.random() * hexCodeVal.length)].toString();
        let h3 = hexCodeVal[Math.floor(Math.random() * hexCodeVal.length)].toString();
        let h4 = hexCodeVal[Math.floor(Math.random() * hexCodeVal.length)].toString();
        let h5 = hexCodeVal[Math.floor(Math.random() * hexCodeVal.length)].toString();
        let h6 = hexCodeVal[Math.floor(Math.random() * hexCodeVal.length)].toString();
        let hexcode = h1 + h2 + h3 + h4 + h5 + h6;
        spanChange.textContent = ` #${hexcode}`;
        spanChange.style.color = `#${hexcode}`
        MainColor.style.backgroundColor = `#${hexcode}`

    }
    else {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
       
        spanChange.style.color = `rgb(${red},${green},${blue})`;
        spanChange.textContent = ` rgb(${red},${green},${blue})`;
        MainColor.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }



})
