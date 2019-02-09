/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

window.onload = function(){
    var prevScrollpos = document.getElementById("content").scrollTop;
    document.getElementById("content").onscroll = function() {
        
        var currentScrollPos = document.getElementById("content").scrollTop;
        
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
            window.scrollTo(0, 0);
        } else {
            document.getElementById("navbar").style.top = "-100px";
            window.scrollTo(0, 10);
        }
        prevScrollpos = currentScrollPos;
    }
}