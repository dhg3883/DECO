const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {  
        if (entry.isIntersecting) {
            entry.target.classList.add('showw')
        }else{
            entry.target.classList.remove('showw')
        }
    });
})
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))
if (screen.width<=800){
    $("td.r").replaceWith("<tr>",$("td.r"),"</tr>")
}

