/*En JavaScript, cuando exportas algo como predeterminado (usando export default),
puedes hacerlo con cualquier valor, ya sea una función, una clase, un objeto, etc. 
Sin embargo, las declaraciones de variables (let, const, var) no se pueden exportar
 directamente como el valor predeterminado de un módulo. Esto se debe a que las declaraciones 
 de variables no son expresiones que puedan ser asignadas directamente como exportación 
 predeterminada.*/ 
//NOTA: No se puede hacer export default de dos objetos o funciones u otros elementos

export const PI = Math.PI;

export let usuario = "jon"

let password = "qwerty"
// export default password;

export function saludar(){
    console.log("Hola Módulos + ES6")
}

export default class Saludar{
    constructor(){
        console.log("Hola Módulos desde una clase")
    }
}