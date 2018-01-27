$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
	"use strict";
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $("#header").show();
    } 
	else {
        $("#header").hide();
	}
    this.previousTop = currentTop;
});