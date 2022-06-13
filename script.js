// Mostrar en consola los números del 1 al 100 de 1 en 1.
const unoacien = (n) => {
    if (n > 100) return;
    console.log(n)
    unoacien(n + 1)
}
unoacien(1);