function obtenerValores() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    return { n1, n2 };
}

function mostrarResultado(valor) {
    document.getElementById("resultado").textContent = valor;
}

function sumar() {
    const { n1, n2 } = obtenerValores();
    mostrarResultado(n1 + n2);
}

function restar() {
    const { n1, n2 } = obtenerValores();
    mostrarResultado(n1 - n2);
}

function multiplicar() {
    const { n1, n2 } = obtenerValores();
    mostrarResultado(n1 * n2);
}

function dividir() {
    const { n1, n2 } = obtenerValores();

    if (n2 === 0) {
        mostrarResultado("Error (división entre 0)");
    } else {
        mostrarResultado(n1 / n2);
    }
}
