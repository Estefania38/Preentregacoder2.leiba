const disfraces = [
    { nombre: "batman", precio: 3999 },
    { nombre: "superman", precio: 2999 },
    { nombre: "gatubela", precio: 2499 },
    { nombre: "iron man", precio: 5999 },
];

let carrito = []

let seleccion = prompt("Hola desea comprar alguno de nuestros disfraces? Si o No")

while (seleccion != "Si" && seleccion != "No" && seleccion != "si" && seleccion != "no") {
    alert("Por favor ingrese Si o No")
    seleccion = prompt("Hola desea comprar alguno de nuestros disfraces? Si o No")
}

if (seleccion == "Si" || seleccion == "si") {

    alert("Podras seleccionar entre nuestros mas lindos disfraces, a continuacion te los mostraremos")
    let todosloDisfraces = disfraces.map(
        (disfraz) => disfraz.nombre + " " + "$" + disfraz.precio
    );
    alert(todosloDisfraces.join(" - "));
} else if (seleccion === "No" || seleccion === "no") {
    alert("Gracias por elegirnos. Hasta pronto")
}

while (seleccion == "Si" || seleccion == "si") {
    let disfraz = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if (disfraz == "batman" || disfraz == "superman" || disfraz == "gatubela" || disfraz == "iron man") {
        switch (disfraz) {
            case "batman": precio = 3999;
                break;
            case "superman": precio = 2999;
                break;
            case "gatubela": precio = 2499;
                break;
            case "iron man": precio = 5999;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades quieres llevar?"))

        carrito.push({ disfraz, unidades, precio })
        console.log(carrito)
    } else {
        alert("No tenemos ese disfraz, lo sentimos.")
    }

    seleccion = prompt("Desea seguir comprando?")

    while (seleccion == "No" || seleccion == "no") {
        alert("A continuacion te mostraremos el total de tu pedido.")
        carrito.forEach((carritoFinal) => {
            alert(`disfraz: ${carritoFinal.disfraz}, unidades: ${carritoFinal.unidades}, total por disfraz: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar de tu compra es: ${total}`)

