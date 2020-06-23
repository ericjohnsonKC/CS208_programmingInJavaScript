/**************************************
 *  Author: Eric Johnson
 *  Date 6/21/20
 *  
 * Grantham Univeristy
 * CS208 Programming in JavaScript
 * 
 * Week 5
 * Digital Clock Application
 *************************************/ 
 
 "use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
    var now = new Date();   // Create new date object
    var hours = now.getHours();  // Store hours in variable
    var minutes = now.getMinutes();  // Store minutes in variable
    var seconds = now.getSeconds();  // Store seconds in variable
    var am_or_pm = 'AM';

    //  The following sets am_or_pm to AM or PM...
    if (hours >= 12) {
        am_or_pm = 'PM'
    }
    
    /*  The following block converts hours to 12-hr format
        and two digit format. */
    if (hours == 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = padSingleDigit(hours - 12);
    } else {
        hours = padSingleDigit(hours);
    }

    // The following reformats minutes and seconds to two digit format...
    minutes = padSingleDigit(minutes);
    seconds = padSingleDigit(seconds);

    //  The following code inserts the formatted time into the DOM...
    var hoursElement = $("hours");        // Hooks into hours span tag 
    var minutesElement = $("minutes");    // Hooks into minutes span tag
    var secondsElement = $("seconds");    // Hooks into seconds span tag
    var ampmElement = $("ampm");          // Hooks into ampm span tag

    hoursElement.textContent = hours;     // Inserts hours variable
    minutesElement.innerHTML = minutes;   // Demonstrating another technique for inserting minutes
    secondsElement.firstChild.nodeValue = seconds; // Demonstrating another technique for seconds
    ampmElement.textContent = am_or_pm; // Inserting am or pm 
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    
    /*  The following creates an interval timer that calls
        the displayCurrentTime() function at one second intervals. */
    setInterval(displayCurrentTime, 1000);
};