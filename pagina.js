window.onload = function () {

    let nombre = prompt("¿Cuál es tu nombre?");
    let nacimiento = prompt("¿En qué año naciste?");
    let añoActual = 2025;

    // Convertir el año a número
    nacimiento = parseInt(nacimiento);

    // Calcular edad
    let edad = añoActual - nacimiento;

    // Seleccionamos el div del resultado
    const resultado = document.getElementById("resultado");

    // Validaciones básicas
    if (!nombre || isNaN(nacimiento)) {
        resultado.textContent = "Datos inválidos. Recarga la página e intenta nuevamente.";
        return;
    }

    resultado.textContent = `Hola, ${nombre}. Tienes ${edad} años.`;
};
