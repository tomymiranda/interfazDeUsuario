var boton = document.querySelector("button");

var seEjecutaEnEvento =function(){
    
    //opcion para firefox
    //boton.insertAdjacentElement("beforeend ","<p>My new paragraph</p>");
    //opcio para chrome
    boton.insertAdjacentHTML("beforeEnd","<p>BEEP</p>");
    boton.classList.toggle("color");
};
boton.addEventListener("click", seEjecutaEnEvento);