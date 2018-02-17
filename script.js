var colors  = [];
var numSquares  = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");


init();

function init() {
    setupModeButtons();
    setupSquares();
    reset1();
}

function setupModeButtons() {
    for(var i=0; i<modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //ternary operator
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            
            reset1();
        });
    }
}

function setupSquares() {
    for(var i=0; i<squares.length; i++)
    {
        //add initial colors to square
        squares[i].style.background = colors[i];
        //add click listeners
        squares[i].addEventListener("click", function()
        {
            var clickedColor = this.style.background;

            if(clickedColor === pickedColor)
            {
                message.textContent = "CORRECT!";
                changeColors(clickedColor);
                h1.style.background = pickedColor;
                reset.textContent = "Play Again?";
            }
            else
            {
                this.style.background = "#232323";
                message.textContent = "Try Again!";
            }
        });
    }
}

function reset1() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++)
    {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else
            squares[i].style.display = "none";
    }
    h1.style.background = "steelblue";
    message.textContent = "";
    this.textContent = "New Game";
}

reset.addEventListener("click", function() {
    reset1();
});

colorDisplay.textContent = pickedColor;

function changeColors(color)
{
    //loop through all square
    for(var i=0; i<colors.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i=0; i<num; i++)
    {
        arr.push(randomColor());
        //get random color and push into arr
    }
    //return array
    return arr;
}

function randomColor()
{
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}