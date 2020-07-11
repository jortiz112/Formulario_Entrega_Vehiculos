var bandera, banderaNombre;

function validacion() {
    'use strict';
    var nombre, empresa, direccion, email, telefono, fecha, marca, modelo, motorizacion, potencia, puertas, carroceria, averia, expresion, expresion2, error;
    nombre = document.querySelector("#nombre");
    empresa = document.querySelector("#empresa");
    direccion = document.querySelector("#direccion");
    email = document.querySelector("#email");
    expresion = /\w+@\w+\.+[a-z]/;
    telefono = document.querySelector("#telefono");
    fecha = document.querySelector("#fecha");
    marca = document.querySelector("#marca");
    modelo = document.querySelector("#modelo");
    expresion2 = /[0-9]{4}[a-zA-Z]{3}/;
    motorizacion = document.querySelector("#motorizacion");
    potencia = document.querySelector("#potencia");
    puertas = document.querySelector("#puertas");
    carroceria = document.querySelector("#carroceria");
    averia = document.querySelector("#averia");
    if (nombre.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error2");
        error.innerHTML = "Por favor debe ingresar un nombre, no puede estar en blanco";
        nombre.style.borderColor = '#ff0000';
        nombre.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (empresa.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error3");
        error.innerHTML = "Por favor debe ingresar un nombre de empresa, no puede estar en blanco";
        empresa.style.borderColor = '#ff0000';
        empresa.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (direccion.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error4");
        error.innerHTML = "Por favor debe ingresar una dirección, no puede estar en blanco";
        direccion.style.borderColor = '#ff0000';
        direccion.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (email.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error5");
        error.innerHTML = "Por favor debe ingresar un email, no puede estar en blanco";
        email.style.borderColor = '#ff0000';
        email.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (!expresion.test(email.value) && (banderaNombre === -1)) {
        error = document.querySelector("#error5");
        error.innerHTML = "Por favor ingresar un email válido, puede que le falte el @ y al menos un punto.";
        email.style.borderColor = '#ff0000';
        email.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (telefono.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error6");
        error.innerHTML = "Por favor debe ingresar un teléfono válido, no puede estar en blanco";
        telefono.style.borderColor = '#ff0000';
        telefono.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (fecha.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error7");
        error.innerHTML = "Por favor debe ingresar una fecha válida, no puede estar en blanco";
        fecha.style.borderColor = '#ff0000';
        fecha.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (marca.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error8");
        error.innerHTML = "Por favor debe ingresar una marca, no puede estar en blanco";
        marca.style.borderColor = '#ff0000';
        marca.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (modelo.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error9");
        error.innerHTML = "Por favor debe ingresar un modelo, no puede estar en blanco";
        modelo.style.borderColor = '#ff0000';
        modelo.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (!expresion2.test(modelo.value) && (banderaNombre === -1)) {
        error = document.querySelector("#error9");
        error.innerHTML = "Por favor debe ingresar un modelo válido, debe tener cuatro números y tres letras";
        modelo.style.borderColor = '#ff0000';
        modelo.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (motorizacion.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error10");
        error.innerHTML = "Por favor debe ingresar la motorizacion, no puede estar en blanco";
        motorizacion.style.borderColor = '#ff0000';
        motorizacion.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (potencia.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error11");
        error.innerHTML = "Por favor debe ingresar la potencia, no puede estar en blanco";
        potencia.style.borderColor = '#ff0000';
        potencia.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (puertas.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error12");
        error.innerHTML = "Por favor debe ingresar el número de puertas, no puede estar en blanco";
        puertas.style.borderColor = '#ff0000';
        puertas.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (carroceria.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error13");
        error.innerHTML = "Por favor debe ingresar la carroceria, no puede estar en blanco";
        carroceria.style.borderColor = '#ff0000';
        carroceria.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (averia.value === "" && (banderaNombre === -1)) {
        error = document.querySelector("#error14");
        error.innerHTML = "Por favor debe ingresar la descripción de la averia, no puede estar en blanco";
        averia.style.borderColor = '#ff0000';
        averia.style.borderRadius = '.4em';
        error.style.color = 'red';
    }
}

function dnival() {
    'use strict';
    var dni1, dni, error, letra, letr, numero, expresion1;
    dni1 = document.querySelector("#dni");
    dni = document.querySelector("#dni").value;
    numero = dni.substring(0, dni.length - 1);
    letr = dni.substring(8);
    numero = numero % 23;
    letra = 'TRWAGMYFPDXBNJZSQVHLCKE';
    letra = letra.substring(numero, numero + 1);
    expresion1 = /^\d{8}[A-Z]$/;

    if (dni === "") {
        error = document.querySelector("#error1");
        error.innerHTML = "Por favor debe ingresar un DNI válido, no puede estar en blanco";
        dni1.style.borderColor = '#ff0000';
        dni1.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (!expresion1.test(dni)) {
        error = document.querySelector("#error1");
        error.innerHTML = "Por favor debe ingresar un DNI válido, no tiene 8 dígitos o la letra del NIF es minúscula o no corresponde";
        dni1.style.borderColor = '#ff0000';
        dni1.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else if (letra !== letr) {
        error = document.querySelector("#error1");
        error.innerHTML = "Por favor debe ingresar un DNI válido, la letra del NIF no corresponde";
        dni1.style.borderColor = '#ff0000';
        dni1.style.borderRadius = '.4em';
        error.style.color = 'red';
    } else {
        bandera = -1;
        banderaNombre = -1;
        error = document.querySelector("#error1");
        error.innerHTML = "";
        dni1.style.borderColor = '';
        dni1.style.borderRadius = '';
        validacion();

    }

}

function resetElement() {
    'use strict';
    var nombre, empresa, direccion, email, telefono, fecha, marca, modelo, motorizacion, potencia, puertas, carroceria, averia, expresion, expresion2, error;
    nombre = document.querySelector("#nombre");
    empresa = document.querySelector("#empresa");
    direccion = document.querySelector("#direccion");
    email = document.querySelector("#email");
    expresion = /\w+@\w+\.+[a-z]/;
    telefono = document.querySelector("#telefono");
    fecha = document.querySelector("#fecha");
    marca = document.querySelector("#marca");
    modelo = document.querySelector("#modelo");
    expresion2 = /[0-9]{4}[a-zA-Z]{3}/;
    motorizacion = document.querySelector("#motorizacion");
    potencia = document.querySelector("#potencia");
    puertas = document.querySelector("#puertas");
    carroceria = document.querySelector("#carroceria");
    averia = document.querySelector("#averia");

    if (nombre.value !== "") {
        error = document.querySelector("#error2");
        error.innerHTML = "";
        nombre.style.borderColor = '';
        nombre.style.borderRadius = '';
        if (empresa.value !== "") {
            error = document.querySelector("#error3");
            error.innerHTML = "";
            empresa.style.borderColor = '';
            empresa.style.borderRadius = '';
            if (direccion.value !== "") {
                error = document.querySelector("#error4");
                error.innerHTML = "";
                direccion.style.borderColor = '';
                direccion.style.borderRadius = '';
                if (email.value !== "" && expresion.test(email.value)) {
                    error = document.querySelector("#error5");
                    error.innerHTML = "";
                    email.style.borderColor = '';
                    email.style.borderRadius = '';
                    if (telefono.value !== "") {
                        error = document.querySelector("#error6");
                        error.innerHTML = "";
                        telefono.style.borderColor = '';
                        telefono.style.borderRadius = '';
                        if (fecha.value !== "") {
                            error = document.querySelector("#error7");
                            error.innerHTML = "";
                            fecha.style.borderColor = '';
                            fecha.style.borderRadius = '';
                            if (marca.value !== "") {
                                error = document.querySelector("#error8");
                                error.innerHTML = "";
                                marca.style.borderColor = '';
                                marca.style.borderRadius = '';
                                if (modelo.value !== "" && expresion2.test(modelo.value)) {
                                    error = document.querySelector("#error9");
                                    error.innerHTML = "";
                                    modelo.style.borderColor = '';
                                    modelo.style.borderRadius = '';
                                    if (motorizacion.value !== "") {
                                        error = document.querySelector("#error10");
                                        error.innerHTML = "";
                                        motorizacion.style.borderColor = '';
                                        motorizacion.style.borderRadius = '';
                                        if (potencia.value !== "") {
                                            error = document.querySelector("#error11");
                                            error.innerHTML = "";
                                            potencia.style.borderColor = '';
                                            potencia.style.borderRadius = '';
                                            if (puertas.value !== "") {
                                                error = document.querySelector("#error12");
                                                error.innerHTML = "";
                                                puertas.style.borderColor = '';
                                                puertas.style.borderRadius = '';
                                                if (carroceria.value !== "") {
                                                    error = document.querySelector("#error13");
                                                    error.innerHTML = "";
                                                    carroceria.style.borderColor = '';
                                                    carroceria.style.borderRadius = '';
                                                    if (averia.value !== "") {
                                                        error = document.querySelector("#error14");
                                                        error.innerHTML = "";
                                                        averia.style.borderColor = '';
                                                        averia.style.borderRadius = '';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
    }

}

function hacerclic() {
    'use strict';
    var elementos;
    elementos = document.querySelector("#procesar");
    elementos.addEventListener("click", validacion, false);
    elementos.addEventListener("click", resetElement, false);
    elementos.addEventListener("click", dnival, false);

}
window.addEventListener("load", hacerclic, false);
