const displayScreen = document.getElementById("displayScreen");

//special functions
const ac = document.getElementById("ac");
const percent = document.getElementById("percent");
const equalTo = document.getElementById("equalTo");
const plus = document.getElementById("plus");


const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");

seven.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 7;
});

eight.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 8;
});

nine.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 9;
});

plus.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += "+";
});


equalTo.addEventListener("click", function(){
    const result = eval(displayScreen.value);
    let currValue = displayScreen.value;
    displayScreen.value += "="+result;
    //console.log(result);
});