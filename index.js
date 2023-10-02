var buttons = document.querySelectorAll("button");
let string = "";
var inputArea = document.querySelector("#input-field");
var resultArea = document.querySelector("#result");


Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (event) => {
        if(event.target.textContent == "="){
            string = eval(string);
            resultArea.value = string;
            inputArea.value = "";
            string = "";
        }
        else if(event.target.textContent == "C"){
            string = "";
            inputArea.value = string;
            resultArea.value = string;
        }
        else if(event.target.textContent == "X"){
            string = string + "*";
            inputArea.value = string;
        }
        else if(event.target.textContent == "+/-"){
            string = string + "-";
            inputArea.value = string;
        }
        else{
            string = string + event.target.textContent;
            inputArea.value = string;
        }
    })
})