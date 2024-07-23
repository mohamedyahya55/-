let elment = document.querySelector(".scroller") ;
let height = document.documentElement.scrollHeight  ;

window.addEventListener("scroll",() => {
    let scrollTop = document.documentElement.scrollTop ;
    elment.style.width = `${(scrollTop / height) * 100}%` ;
})




let span = document.querySelector(".up") ;
window.onscroll= function(){
    if(this.scrollY >= 1000){
        span.classList.add("show") ;
    }else{
        span.classList.remove("show") ;
    }
}

span.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


let home = document.getElementById("home1") ;
let about = document.getElementById("about2") ;
let services = document.getElementById("services3") ;
let offers = document.getElementById("offers4") ;
let Packages = document.getElementById("Packages5") ;

window.onscroll= function(){
    if(this.scrollY >= 0){
        home.classList.add("active") ;
        about.classList.remove("active") ;
        services.classList.remove("active") ;
        offers.classList.remove("active") ;
        Packages.classList.remove("active") ;
        span.classList.remove("show") ;


    }if(this.scrollY >= 600){
        home.classList.remove("active") ;
        about.classList.add("active") ;
        span.classList.add("show") ;
        services.classList.remove("active") ;
        offers.classList.remove("active") ;
        Packages.classList.remove("active") ;
    }if(this.scrollY >= 1400 ){
        home.classList.remove("active") ;
        about.classList.remove("active") ;
        services.classList.add("active") ;
        offers.classList.remove("active") ;
        Packages.classList.remove("active") ;
    }if(this.scrollY >= 4500 ){
        home.classList.remove("active") ;
        about.classList.remove("active") ;
        services.classList.remove("active") ;
        offers.classList.add("active") ;
        Packages.classList.remove("active") ;
    }if(this.scrollY >= 6000){
        home.classList.remove("active") ;
        about.classList.remove("active") ;
        services.classList.remove("active") ;
        offers.classList.remove("active") ;
        Packages.classList.add("active") ;
    }
}

