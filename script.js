// variable
const scrollDown = document.getElementsByTagName("li");
// event by click to toggle to switch between open and close
for(i=0; i<scrollDown.length; i++){
    scrollDown[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })
}

