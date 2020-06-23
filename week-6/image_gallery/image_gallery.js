/*  *******************************
*   Author: Eric Johnson
*   Date: 6/23/20
*
*   Gratham University
*   CS208 Programming in JavaScript
* 
*   Week 6 Assignment
*   Image Swap Application
***********************************/

$(document).ready(function() {
    // preload images
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    }); // end of preloading images

    // Setting up event handlers for the links
    $("#image_list a").click(function(e) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#image").attr("src", imageURL);

        // swap caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);

        // cancel the default action of the link
        e.preventDefault(); // jQuery cross-browser compatible     

    }); // end of setting up event handlers

    // Move the focus to the first link
    $("li:first-child a").focus();

}); // end document.ready