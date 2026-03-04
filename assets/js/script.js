document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Escuchar el evento submit del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío por defecto
        
        // Llamar a la función de validación
        if (validateForm()) {
            alert('✅ ¡Formulario válido! Registro exitoso.');
            // Opcional: limpiar el formulario después de enviar
            // form.reset();
        } else {
            alert('❌ Por favor, corrija los errores en el formulario.');
        }
    });
});

/**
 * Función principal de validación del formulario
 * Retorna true si todos los campos son válidos, false si hay errores
 */
function validateForm() {
    let isValid = true;
    const nombre = document.getElementById('nombre');
    const valorNombre = nombre.ariaValueMax.trim();

    if(valorNombre === ''){
        nombre.classList.add('no-valid');
        isValid = false;
    } else if (valorNombre.length < 2){
        nombre.classList.add('no-valid');
        isValid = false;

    } else {
        nombre.classList.remove('no-valid');
    }
}

function validateForm() {
    let isValid = true;
    const ciudad = document.getElementById('ciudad');
    const valorCiudad = nombre.ariaValueMax.trim();

    if(valorCiudad === ''){
        ciudad.classList.add('no-valid');
        isValid = false;
    } else if (valorCiudad.length < 2){
        ciudad.classList.add('no-valid');
        isValid = false;

    } else {
        ciudad.classList.remove('no-valid');
    }
}

// ==========================================
// FUNCIONES AUXILIARES (OPCIONALES)
// ==========================================
// Puedes crear funciones auxiliares para evitar repetir código
// Por ejemplo:

/**
 

@param {HTMLElement} campo - El elemento input a validar
@param {number} minLength - Longitud mínima requerida
@returns {boolean} - true si es válido, false si no*/
function validarCampoTexto(campo, minLength) {
    const valor = campo.value.trim();

    if (valor === '' || valor.length < minLength) {
        campo.classList.add('no-valid');
        return false;
    } else {
        campo.classList.remove('no-valid');
        return true;
    }
}