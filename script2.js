// Mostrar en consola los números del 1000 al 500 de 2 en 2.
const milaquinientos = (m) => {
    if (m < 500) return
    console.log(m)
    milaquinientos(m - 2)
}
milaquinientos(1000);