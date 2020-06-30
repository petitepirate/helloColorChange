//function for getting random color each time you load the page
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}
//selecting the letters
const letters = document.querySelectorAll('.letter');
//setting the interval and function to change colors
setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000)

//If you wanted to only make this happen for a little bit.
//in front of your set interval, save it to a constant "intervalID"
//You would then call clearInterval(intervalID)
//He shows this last part in the console instead of in the code.
