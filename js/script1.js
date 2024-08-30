document.getElementById("btnMenu").addEventListener("click",
    function () {
        let elemento = document.getElementById("navbar");
        if (elemento.classList.contains("navbar")) {
            elemento.classList.remove("navbar");
            elemento.classList.remove("no_navbar");
        } else {
            elemento.classList.remove("no_navbar");
            elemento.classList.remove("navbar");
        }
    });

    

const nombre = document.querySelector("#nombre");
const Telefono = document.querySelector("#tel");
const Email = document.querySelector("#Email");
const Mensaje = document.querySelector("#Men");
const formulario = document.querySelector(".fomulario");
formulario.addEventListener('submit', validarFormulario);


function validarFormulario(e){
    e.preventDefault();

    if (nombre.value ==="" || Telefono==="" || Mensaje === "" || correo === "") {
        
        alert('todos los campos son obligatorios')
        return;
    }

    alert('hemos recibidos su datos, pronto nos pondremos en contacto')


    console.log(nombre.value+" "+Telefono.value+" "+correo.value+" "+Mensaje.value);

    console.log('el nombre es :${nombre.value} su apellido es: ${telefono.value} ${correo.value} ${mensaje.value')
}

function mostraeError(mensaje) {
    const alert = document.createElement('p');
    alert.textContent =mensaje;
    alert.textContent ="red";
    alert.textContent ="whire";
    formulario.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    },5000);
}


    

