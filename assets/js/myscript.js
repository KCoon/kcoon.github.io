/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

window.onload = function() {
    document.getElementById("content").style.marginTop = document.getElementById("topnav").clientHeight.toString() + "px";
    document.getElementById("content").style.marginBottom = document.getElementById("footer").clientHeight.toString() + "px";
}

var prevScrollpos = window.pageYOffset;

var isMobile = !(window.matchMedia("(-webkit-max-device-pixel-ratio: 1.5)").matches);
// console.log(isMobile);

window.onscroll = function() {
    if (isMobile) {
            var currentScrollPos = window.pageYOffset;
            
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("topnav").style.top = "0";
            } else {
                document.getElementById("topnav").style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
    }
}
