function calc(){
    var val1 = parseInt(document.querySelector("#value1").value);
    var val2 = parseInt(document.querySelector("#value2").value);
    var operator = document.querySelector("#operator").value;
    var calculate;

    if(operator == "add"){
        calculate = val1 + val2;
    } else if(operator == "sub"){
        calculate = val1 - val2;
    } else if(operator == "div"){
        calculate = val1 / val2;
    } else if(operator == "mul"){
        calculate = val1 * val2;
    }

    // This will only display it in console
    // console.log(calculate);

    //This will print it in the 'results' div located in the HTML file.
    document.querySelector("#results").innerHTML = calculate;

}