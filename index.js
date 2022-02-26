
let count = 0;
let count_element = document.getElementById("count-el");
let num = document.getElementById("save-el"); 


function increment() {

    count = count + 1;
    count_element.innerHTML = count;

}

function save() {

    let numstr = count + " - ";
    num.textContent += numstr
    console.log(count)
    count_element.textContent = 0;
    count = 0;

}

