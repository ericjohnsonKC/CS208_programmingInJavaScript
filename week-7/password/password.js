/********************************
 *  Author: Eric Johnson
 *  Date: 6/24/2020
 * 
 *  Grantham University
 *  CS208 Programming in JavaScript
 * 
 *  Week 7:
 *  Control structures, exceptions,
 *  regular expressions, cookies
 * ******************************** */

"use strict";
$(document).ready(function() {
    var getRandomNumber = function(max) {
        var random;
        if (!isNaN(max)) {
            random = Math.random(); //value >= 0.0 and < 1.0
            random = Math.floor(random * max); //value is an integer between 0 and max - 1
            random = random + 1; //value is an integer between 1 and max
        }
        return random;
    };
    
    $("#generate").click(function() {
        $("#password").val( "" ); // clear previous entry
    
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";

        // Get value entered by number, validate entry, generate password:
        var entry = $("#num").val();
        var password = "";

        if ( isNaN(entry) ) {
            alert("Please enter a valid number."); // Validates
        } else {
            entry = parseInt(entry);
            for (let i = 0; i < entry; i++) {
                password += chars[getRandomNumber(chars.length) -1]; // Generates password
            }

            $("#password").val(password); // Inserts password into html password field
        }
        
        console.log(chars.length);
    }); // end click()
    
    $("#clear").click(function() {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()