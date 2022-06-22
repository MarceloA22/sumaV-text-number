/*let indice:number;
let cantidad: number = Number(prompt("Ingrese la cantidad del arreglo"))
let arreglo:number[]=new Array(cantidad)
for(indice=0; indice<cantidad;indice++){
  arreglo[indice]=Number(prompt(`Ingrese el número en la posciión ${indice}`))
  }
  for(indice=0; indice<cantidad;indice++){
  console.log(arreglo[indice])}*/
function cVTexto(v: string[], cantidad: number) {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    v[indice] = String(prompt(`Ingrese el nombre en la posición ${indice}`));
  }
}
function cVNumber(v: number[], cantidad: number) {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    v[i] = Number(prompt(`Ingrese el número en la posición ${i}`));
  }
}
function mostrarVector(v: number[], cantidad: number) {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    console.log(v[i]);
  }
}
function sumaV(
  v1: string[],
  v2: number[],
  v3: number[],
  vSuma: string[],
  cantidad: number
) {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    vSuma[i] = v1[i] + v2[i] + v3[i];
  }
}

let cantidad: number = Number(prompt(`ingrese la cantidad de los arreglos`));
let v1: string[] = new Array(cantidad);
let v2: number[] = new Array(cantidad);
let v3: number = new Array(cantidad);
let vSuma: string = new Array(cantidad);

cVTexto(v1, cantidad);
mostrarVector(v1, cantidad);
cVNumber(v2, cantidad);
mostrarVector(v2, cantidad);
cVNumber(v3, cantidad);
mostrarVector(v3, cantidad);

sumaV(v1, v2, v3, vSuma, cantidad);
mostrarVector(vSuma, cantidad);
