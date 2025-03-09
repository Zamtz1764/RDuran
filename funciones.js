// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const fondo = document.querySelector('.fondo-animado');

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        fondo.style.backgroundPosition = `0% ${scrollY * 0.5}px`;
    });
});

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Abrir modal de proyectos
    const proyectos = document.querySelectorAll('.proyecto');
    proyectos.forEach(proyecto => {
        proyecto.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            const modal = document.getElementById(target);
            modal.style.display = 'block';
        });
    });

    // Cerrar modal de proyectos
    const cerrarModal = document.querySelectorAll('.cerrar-modal');
    cerrarModal.forEach(boton => {
        boton.addEventListener('click', function () {
            const modal = this.closest('.modal-proyecto');
            modal.style.display = 'none';
        });
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal-proyecto')) {
            e.target.style.display = 'none';
        }
    });

    // Efecto de movimiento del fondo
    const fondo = document.querySelector('.fondo-animado');
    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        fondo.style.backgroundPosition = `0% ${scrollY * 0.5}px`;
    });
});

// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const botonVerMas = document.querySelector('.ver-mas');
    const modalCarrusel = document.getElementById('carrusel-proyectos');
    const cerrarModal = document.querySelector('.modal-carrusel .cerrar-modal');
    const itemsCarrusel = document.querySelectorAll('.item-carrusel');
    const descripcionProyecto = document.getElementById('descripcion-proyecto');

    // Abrir la ventana flotante del carrusel
    botonVerMas.addEventListener('click', function (e) {
        e.preventDefault();
        modalCarrusel.style.display = 'block';
    });

    // Cerrar la ventana flotante del carrusel
    cerrarModal.addEventListener('click', function () {
        modalCarrusel.style.display = 'none';
    });

    // Mostrar descripción del proyecto seleccionado
    itemsCarrusel.forEach(item => {
        item.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            const descripcion = obtenerDescripcionProyecto(target); // Función para obtener la descripción
            descripcionProyecto.innerHTML = `<p>${descripcion}</p>`;
        });
    });

    // Función para obtener la descripción del proyecto (puedes personalizarla)
    function obtenerDescripcionProyecto(target) {
        const descripciones = {
            proyecto4: "Descripción detallada del proyecto de renovación de sala.",
            proyecto5: "Descripción detallada del proyecto de instalación de iluminación.",
            proyecto6: "Descripción detallada del proyecto de remodelación de terraza."
        };
        return descripciones[target] || "Descripción no disponible.";
    }

    // Efecto de movimiento del fondo
    const fondo = document.querySelector('.fondo-animado');
    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        fondo.style.backgroundPosition = `0% ${scrollY * 0.5}px`;
    });
});

// funciones.js
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-contacto');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        // Validar el formulario
        if (validarFormulario()) {
            // Simular el envío del formulario (puedes reemplazar esto con una llamada a un servidor)
            setTimeout(() => {
                formulario.reset(); // Limpiar el formulario
                formulario.style.display = 'none'; // Ocultar el formulario
                mensajeConfirmacion.style.display = 'block'; // Mostrar el mensaje de confirmación
            }, 1000); // Simular un retraso de 1 segundo
        }
    });

    // Función para validar el formulario
    function validarFormulario() {
        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar nombre
        if (nombre.length < 3 || nombre.length > 50) {
            alert('El nombre debe tener entre 3 y 50 caracteres.');
            return false;
        }

        // Validar teléfono
        if (!/^[0-9]{10}$/.test(telefono)) {
            alert('El teléfono debe tener 10 dígitos.');
            return false;
        }

        // Validar correo
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert('Ingresa un correo electrónico válido.');
            return false;
        }

        // Validar mensaje
        if (mensaje.length < 10 || mensaje.length > 500) {
            alert('El mensaje debe tener entre 10 y 500 caracteres.');
            return false;
        }

        return true; // El formulario es válido
    }
});