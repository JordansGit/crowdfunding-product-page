var bookmarkBtn = document.querySelector(".button-bookmark");
var bookmarkText = document.getElementById("bookmark-text"); 
var bookmarkPath = document.querySelector(".bookmark-svg > g > path");
var bookmarkCircle = document.querySelector(".bookmark-svg > g > circle");
var check = false; 


bookmarkBtn.onclick = function() {
  if (check == false) {
    bookmarkText.innerHTML = "Bookmarked";
    bookmarkBtn.style.width = "215px";
    bookmarkPath.style.fill = "hsl(0, 0%, 100%)";
    bookmarkBtn.style.backgroundColor = "hsl(176, 50%, 94%)";  
    bookmarkCircle.style.fill = "hsl(176, 72%, 28%)"; 
    check = true; 
  } else {
    bookmarkText.innerHTML = "Bookmark";
    bookmarkBtn.style.width = "192px";
    bookmarkPath.style.fill = "hsl(176, 50%, 47%)";
    bookmarkBtn.style.backgroundColor = "hsl(176, 50%, 90%)";  
    bookmarkCircle.style.fill = "rgb(47, 47, 47)"; 
    check = false; 
  }
}



/* 
on active: 
 -> change text from bookmark -> bookmarked. **DONE. 
 -> change the width of .button-bookmark to 215px. 

 -> change the 'path' from medium grey to white / w.e the section colour is. 
 -> change the circle colour of the button to a lighter shade of same colour. 


*/ 