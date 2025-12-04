function calcularEdad() {
    const nombre = document.getElementById("nombre").value;
    const nacimiento = parseInt(document.getElementById("nacimiento").value);
    const añoActual = 2025;

    const resultado = document.getElementById("resultado");

    if (!nombre || isNaN(nacimiento)) {
        resultado.textContent = "Por favor, completa todos los campos.";
        return;
    }

    const edad = añoActual - nacimiento;

    resultado.textContent = `Hola ${nombre}, tienes ${edad} años de edad.`;
}
