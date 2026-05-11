function validar() {
    var usu = document.getElementById("usuario").value;
    var pass = document.getElementById("clave").value;

    if (usu == "usuario" && pass == "12345") {
        window.location.href = "principal.html";
    } else {
        alert("Usuario o contrasena incorrecta, vuelva a intentar.");
        document.getElementById("usuario").value = "";
        document.getElementById("clave").value = "";
    }
}





function limpiar() {
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
}

function cortes() {
    window.location.href = "cortes.html";
}

function productos() {
    window.location.href = "productos.html";
}

function volver() {
    window.location.href = "principal.html";
}
function cerrarsesion() {
    window.location.href = "index.html";
}







function cortedepelo() {
    var calidad = document.getElementById("calidad").value;
    var barba = document.getElementById("barba").checked;
    var pelo = document.getElementById("pelo").checked;
    var ambos = document.getElementById("ambos").checked;

    var result = 0;

    if (barba && calidad == "1") {
        result = 7000;
    }
    if (barba && calidad == "2") {
        result = 9000;
    }
    if (pelo && calidad == "1") {
        result = 16000;
    }
    if (pelo && calidad == "2") {
        result = 19000;
    }
    if (ambos && calidad == "1") {
        result = 22000;
    }
    if (ambos && calidad == "2") {
        result = 26000;
    }


    if (result > 0) {
        document.getElementById("totaljs").textContent = "$" + result;
    } else {
        document.getElementById("totaljs").textContent = "";
    }
}




function reservar() {
    if (document.getElementById("calidad").value != "0") {
        alert("Su turno se reservo con exito!!");
        window.location.href = "principal.html"
    }
}






Npolvo = 0;
function reservarpolvo() {
    Npolvo++;
    document.getElementById("npolvo").textContent = "(" + Npolvo + ")";
    document.getElementById("npolvo1").textContent = "(" + Npolvo + ")";
}

Ncera = 0;
function reservarcera() {
    Ncera++;
    document.getElementById("ncera").textContent = "(" + Ncera + ")";
    document.getElementById("ncera1").textContent = "(" + Ncera + ")";
}

Nspray = 0;
function reservarspray() {
    Nspray++;
    document.getElementById("nspray").textContent = "(" + Nspray + ")";
    document.getElementById("nspray1").textContent = "(" + Nspray + ")";
}





function multiplicacionpolvo() {
    var result = 14500 * Npolvo;

    document.getElementById("precio1").textContent = "$" + result;
}

function multiplicacioncera() {
    var result = 11800 * Ncera;

    document.getElementById("precio2").textContent = "$" + result;
}

function multiplicacionspray() {
    var result = 13200 * Nspray;

    document.getElementById("precio3").textContent = "$" + result;
}





function suma() {
    var totalpolvo = 14500 * Npolvo;
    var totalcera = 11800 * Ncera;
    var totalspray = 13200 * Nspray;

    var totalfinal = totalpolvo + totalcera + totalspray;

    document.getElementById("totalproductos").textContent = "$" + totalfinal;
}





function procesoP() {
    reservarpolvo();
    multiplicacionpolvo();
    suma();
}

function procesoC() {
    reservarcera();
    multiplicacioncera();
    suma();
}

function procesoS() {
    reservarspray();
    multiplicacionspray();
    suma();
}



function carrito() {
    var carro = document.getElementById("totalproductos").textContent;

    if (carro != "$0") {
        alert("La reserva de productos se registro correctamente! Visite alguna de nuestras sucursales para abonar y retirar su pedido! Muchas gracias por su compra!!")
        window.location.href = "principal.html";
    }
    if (carro == "$0") {
        alert("Ingrese productos al carrito para poder continuar.")
    }

}

