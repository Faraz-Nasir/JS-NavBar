let navtoggle=document.querySelector(".nav-toggle")
navtoggle.addEventListener("click",function(event){
    let links=document.querySelector(".links")
    let navcenter=document.querySelector(".nav-center")
    console.log(navtoggle.style)
    if(links.childNodes.length!=0){
        links.remove()
        navcenter.append(links)
        links=links.childNodes
        
        for(let i=1;i<9;i+=2)
        {
            console.log(links[i].style.flexDirection="column")
        }//fix link tab for smaller window
    }}
    )
    
