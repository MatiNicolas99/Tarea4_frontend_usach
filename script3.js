// Obtener el promedio de notas de un alumno considerando que la
// suma de notas debe ser el retorno de una función y el promedio
// el retorno de otra función. Las notas son: 6,8,9,2,5,10.

let notas = [6, 8, 9, 2, 5, 10];
const sumaNotas = (notas) => {
    let i = 0, sum = 0, largoArray = notas.length;
    while (i < largoArray) {
        sum = sum + notas[i++];
    }
    return sum;
}
const promedioNotas = (sumaNotas) => {
    let prom = sumaNotas / notas.length;
    return prom;
  }

const suma_notas = sumaNotas(notas);
console.log("La suma de las notas del alumno es : " + suma_notas)

const promedio_notas = promedioNotas(sumaNotas(notas));
console.log("El promedio de notas del alumno es: "+ promedio_notas);