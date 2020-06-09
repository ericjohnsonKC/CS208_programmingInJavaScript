var $ = function(id) {
    return document.getElementById(id);
};

"use strict";  // Following guidance from the text book, strict mode employed below

function makeChange(changeDue){                      // This function will handle the logic to make appropriate change
    $("quarters").value = parseInt(changeDue / 25);
    changeDue -= $("quarters").value * 25;

    $("dimes").value = parseInt(changeDue / 10);
    changeDue -= $("dimes").value * 10;

    $("nickels").value = parseInt(changeDue / 5);
    changeDue -= $("nickels").value * 5;

    $("pennies").value = parseInt(changeDue / 1);
    changeDue -= $("pennies").value * 1;

}

var processEntry = function(){                      // This function will provide rudimentary input validation and call the makeChange() function.
    var changeDue = $("cents").value;
    if (isNaN(changeDue) || parseFloat(changeDue) < 0 || parseFloat(changeDue) > 99){    // Establishes how invalid input will be handled.
        alert("Change amount must be a number from 0 to 99");
    }
    else{
        makeChange(parseFloat(changeDue));
    }
};

window.onload = function(){                    // The onload() method ensures the DOM is loaded prior to attaching event handler.
  this.$("calculate").onclick = processEntry;   // Sets p and event handler for the click event, specifies the processEntry() method for handling.
};