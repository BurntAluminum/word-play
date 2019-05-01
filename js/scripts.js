//gather input using a form -.submit-
//create an array from input -#words and .val-
//create an empty array -[]-
//loop through input array(.foreach .val)
//check word length -if statement under line 14. Word.length-
//if more than 3 characters long reverse -#reversedarray and .reverse and .join-

$(document).ready(function() {
    $("#wordstuff").submit(function(event) { //1
    event.preventDefault();
    var input = $("#words").val(); //2
    var splitInput = input.split(" ");
    var finalArray = [];//3
    splitInput.forEach(function(word){ //4
        if(word.length >= 3) //5
        finalArray.push(word)
    });
    var reversedArray = finalArray.reverse();
    $("span#output").text(reversedArray.join(" ")); //6
    });
});