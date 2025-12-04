window.onload = function () {

    let nombre = prompt("¿Cuál es tu nombre?");
    let nacimiento = prompt("¿En qué año naciste?");
    let añoActual = 2025;

    
    nacimiento = parseInt(nacimiento);

    
    let edad = añoActual - nacimiento;

    
    const resultado = document.getElementById("resultado");

    
    if (!nombre || isNaN(nacimiento)) {
        resultado.textContent = "Datos inválidos. Recarga la página e intenta nuevamente.";
        return;
    }

    resultado.textContent = `Hola, ${nombre}. Tienes ${edad} años.`;
};
