var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length
}

function creatListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
            creatListElement();
        }
}

input.addEventListener("keypress", addListAfterKeypress);