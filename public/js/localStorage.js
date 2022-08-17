window.addEventListener("load", () => {

    if(localStorage.getItem("nombreUsuario") == null) {
       let nombre = prompt("Dinos tu nombre");
       document.querySelector(".bienvenida").innerHTML = "Hola " + nombre;

        localStorage.setItem("nombreUsuario", nombre);
    }else{
        let nombre = localStorage.getItem("nombreUsuario");

       document.querySelector(".bienvenida").innerHTML = "Hola " + nombre;
    }

    console.log(localStorage);

})