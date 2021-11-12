let price = Number(window.prompt("Introduce la cantidad a pagar sin impuestos", ""));

function costoTotal () {
    let totalPrice = (price * 1.01) + 3;
    alert("El total que pagaras es: " + totalPrice);
}

costoTotal();