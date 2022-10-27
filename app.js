const displayScreen = document.getElementById("displayScreen");

//special functions
const ac = document.getElementById("ac");
const percent = document.getElementById("percent");
const equalTo = document.getElementById("equalTo");
const plus = document.getElementById("plus");


const seven = document.getElementById("seven");

seven.addEventListener("click", function(){
    let currValue = displayScreen.value; 
    displayScreen.value += 7;
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
})