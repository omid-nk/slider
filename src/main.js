const projectCardBg = document.querySelectorAll(".project-card__bg")

function removeActiveAll(){
    projectCardBg.forEach(function(item){
        item.classList.remove("active");
    })
}



projectCardBg.forEach(function(item){
    item.addEventListener("click",(event)=>{
        removeActiveAll()
        event.target.classList.add("active")
    })
})