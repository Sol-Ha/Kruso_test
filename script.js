const scrollDown = document.querySelectorAll("li");

for(i=0; i<scrollDown.length; i++){
    scrollDown[i].addEventListener("click", function(){
        this.classList.toggle("active")
    })
}
