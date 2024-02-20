console.log("hola");
//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function numeroCaracteres(entrada) {
  try {
    if (typeof entrada !== "string") {
      throw new Error("Ingresa una cadena");
    } else {
      let num = entrada.length;
      console.log(num);
    }
  } catch (error) {
    console.error(error.message);
  }
}

try {
  numeroCaracteres();
} catch (error) {
  console.log("hubo error" + " " + error.message);
}

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function recortar(cadena = "", numero = undefined) {
  let resultado = "";
  for (let i = 0; i < cadena.length; i++) {
    if (i < numero) {
      resultado += cadena[i];
    }
  }
  return resultado;
}

console.log(recortar("lalo la locura", 7));

const recortarText = function (cadena = "", longitud = undefined) {
  if (!cadena) {
    console.warn("No ingresaste un cadena de texto");
  } else {
    console.info(cadena.slice(0, longitud));
  }
};

recortarText("Como andas", 3);

//resuleto con operador ternario
/*Sintaxis ---->  Operador ternario(condicion) ? verdadero: falsa   */
let edades = 19;
let mayorEdad = edades >= 18 ? "Eres mayor de Edad" : "Eres menor de edad";
console.log(mayorEdad);

const recortar2 = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : longitud === undefined
    ? console.warn("No ingrasaste la longitud")
    : console.info(cadena.slice(0, longitud));

recortar2("holas", 2);
recortar2("Como andas");

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

let devolverArray = function (cadena, separador) {
  let arreglo = cadena.split(separador);
  return arreglo;
};

console.log(devolverArray("hola.mundo.que.tal", "."));

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetir = (texto, repetir) => {
  const mood = texto + " ";
  console.log(`${mood.repeat(repetir)}`);
};

repetir("jhonatan nuñez", 2);

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto");
  if (veces === undefined)
    return console.warn("No ingresaste el numero de veces a repetir");
  if (veces === 0) return console.error("El numero a repetir no puede ser 0");
  if (Math.sign(veces) === -1)
    return console.log("El numero de veces no puede ser negativo");
  for (let i = 1; i <= veces; i++) {
    console.log(`${texto},${i}`);
  }
};

repetirTexto("hola", 3);

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const revertirTexto = (texto = "") => {
  let textoRevertido = "";
  if (!texto) {
    console.warn("No has ingresado una cadena");
  } else {
    textoRevertido = texto.split("");
    console.log(textoRevertido.reverse().join(""));
  }
};
revertirTexto("Hola mundo");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarNumeroRepetidas = (texto, palabra) => {
  const str = texto;
  let count = 0;
  let position = str.indexOf(palabra);

  while (position !== -1) {
    count++;
    position = str.indexOf(palabra, position + 1);
  }

  console.log(
    `En "${texto}" se encontro la palabra "${palabra}" ${count} veces`
  );
};

contarNumeroRepetidas(
  "hola mundo, mundo para soledad hola hola mundo mundo",
  "mundo"
);

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (texto = "") => {
  if (!texto) return console.warn("No ingrasaste una palabra o frase");

  comparar = texto.split("").reverse().join("").toLowerCase();
  dato = texto.toLowerCase();
  if (dato === comparar) {
    console.log("Es palindromo");
  } else {
    console.log("Es falso");
  }
};

palindromo("Salas");

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminaPalabras = (texto, reemplazar) => {
  console.log(texto.replaceAll(reemplazar, ""));
};

eliminaPalabras("xyz1,xyz2,xyz3,xyz4 y xyz5", "xyz");

const eliminarCaracteres = (texto = "", patron = "") => {
  !texto
    ? console.warn("No ingresaste un texto")
    : !patron
    ? console.warn("No ingresaste el patron")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));
};

eliminarCaracteres("xyz1,xyz2,xyz3,xyz4 y xyz5", "xyz");

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
/*
    const numeroAleatorio = () =>{
        numero = Math.ceil((Math.random() + 5)*100)
        console.log(numero)
    }

    numeroAleatorio()

    const aleatorio = () => console.info(Math.floor((Math.random()+1) * 500) )

    aleatorio()

    const generarAleatorio = (min, max) => {
        return Math.floor(Math.random()*(max-min + 1)) + min;
    };

    for ( let x = 0 ; x <= 200; x++){
        console.log(generarAleatorio(10,20))
    }


    function generate(){
      let num = Math.floor((Math.random()*100)+1);
      console.log(num)
    }
    generate()
*/

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const numeroCapicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste numero");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}"ingresado no es un numero`);
  convertido = numero.toString();
  cadena = convertido.split("").reverse().join("");
  if (convertido === cadena) {
    console.log("Es capicua");
  } else {
    console.log("No es");
  }
};

numeroCapicua(212.212);

//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined) => {
  if (!numero) return console.log("Ingresa el factoria de que numero quieres");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}"ingresado no es un numero`);
  if (numero === 0) return console.error("El numero no puede ser 0");
  if (Math.sign(numero) === -1)
    return console.log("El numero no puede ser negativo");
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  console.log(factorial);
};

factorial(8);

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {
  if (!numero) return console.log("Ingresa el factoria de que numero quieres");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}"ingresado no es un numero`);
  if (numero === 0) return console.error("El numero no puede ser 0");
  if (numero === 1) return console.error("El numero no puede ser 1");
  if (Math.sign(numero) === -1)
    return console.log("El numero no puede ser negativo");
  let divisible = false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.log(`El numero ${numero} No es primo`)
    : console.log(`El numero ${numero} Si es primo`);
};

numeroPrimo(4);

function numeroPrimo2(numero) {
  if (numero <= 0) return false;
  let contador = 0;
  for (var i = 1; i <= numero; i++) {
    if (numero % i === 0) contador++;
  }
  return console.log(contador === 2 ? true : false);
}

numeroPrimo2(5);

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

let parOimpar = (numero = undefined) => {
  if (!numero) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number") return console.warn("Tiene que se numero");
  if (numero % 2 === 0) {
    console.log(`El numero ${numero} es par`);
  } else {
    console.log(`El numero ${numero} es impar`);
  }
};
parOimpar(104);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

let convertir = (numero = 0, convertir = "") => {
  if (typeof numero !== "number") return console.warn("No es un numero");
  if (!convertir) return console.log(`no ingresaste a que convertir "c" o "f"`);
  if (typeof convertir !== "string")
    return console.log(`no es una letra "c" o "f"`);
  let unidad = convertir.toLowerCase();
  let fahrenheit = 0;
  let celcius = 0;
  switch (unidad) {
    case "c":
      fahrenheit = numero * 1.8 + 32;
      console.log(`${fahrenheit}°F`);
      break;
    case "f":
      celcius = (numero - 32) / 1.8;
      console.log(`${celcius}°C`);
      break;
    default:
      console.log(`Tiene que ser "c" o "f"`);
      break;
  }
};

convertir(0, "f");

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
//Mi solución
let convertir2 = (numero, base) => {
  switch (base) {
    case 2:
      let cadena = numero.toString().split("").reverse();
      let acumulador = 0;
      let acumu = 0;
      for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === "1") {
          acumu = parseInt(cadena[i]) * 2 ** i;
          acumulador = acumulador + acumu;
        }
      }
      console.log(acumulador);

      break;
    case 10:
      let cociente = 0;
      let array = [];
      let respuesta = "";
      while (Math.round(numero / 2) !== 0) {
        cociente = Math.floor(numero / 2);
        residuo = numero % 2;
        numero = cociente;
        array.push(residuo);
      }
      console.log(parseInt(array.reverse().join("")));

    default:
      console.log(`Tiene que ser "c" o "f"`);
      break;
  }
};
    convertir2(10101, 2);
    convertir2(1555, 10);

    let binario = "1010";
    let decimal = parseInt(binario, 2);

    console.log(decimal); // Imprimirá 10

    let decimal2 = 200;
    let binari2 = parseInt(decimal2, 10).toString(2);

    console.log(binari2); 
  //otra solucion
  const convertirBinarioDecimal = (numero = undefined,base = undefined) => {
    if(numero === undefined) return console.warn ("No ingresaste el numero a convertir");
    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresasdo,No es un numero`);
    if(base=== undefined) return console.warn("No ingresaste la base a convertir")
    if(typeof base !== "number") return console.error(`El valor ${base} ingresado No es un número`)

    if(base === 2){
      return console.info(`${numero} base ${base} = ${parseInt(numero,2)} base 10`)
    }else if(base === 10){
      return console.info(`${numero} base ${base} = ${parseInt(numero.toString(2))} base 2`)

    }else{
      return console.log("El tipo de base a convertir No es valido")
    }
  }
  convertirBinarioDecimal(1110010,2)
  convertirBinarioDecimal(4,10)

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

  const aplicarDescuento = (monto = undefined,descuento = 0) =>{
    if(monto === undefined) return console.warn ("No ingresaste el monto");
    if(typeof monto !== "number") return console.error(`El valor ${monto} ingresasdo,No es un numero`);
    if(monto === 0) return console.error("El monto no puede ser 0")
    if(Math.sign(monto) === -1) return console.error("El monto no puede ser negativo")
    if(typeof descuento !=="number") return console.error(`El valor "${descuento}" ingresado no es un numero`)
    return console.info(`${monto} - ${descuento}% = ${monto - ((monto*descuento)/100)}`)
  } 

  aplicarDescuento(100,25)


//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

  let anios = (fecha = undefined) =>{
    if(fecha === undefined) return console.warn("No ingresaste la fecha")
    if(!fecha instanceof Date) return console.error(`El valor que ingresaste no es una fecha valida`)
    
    let currentDate = new Date()
    let paso = currentDate.getFullYear() - fecha.getFullYear()

    if(currentDate.getMonth() <= fecha.getMonth() && currentDate.getDate() < fecha.getDate())
    paso--;
    
    console.log(paso)
  }

  anios(new Date(1984,4,23))

  const calcularAnios = (fecha = undefined) =>{
    if(fecha === undefined) return console.warn("No ingresaste la fecha")
    if(!(fecha instanceof Date)) return console.error(`El valor que ingresaste no es una fecha valida`)

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    aniosEnMs = 1000 * 60 * 60 * 24 * 365
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs)

    return(Math.sign(aniosHumanos) === -1) 
      ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`) 
      :(Math.sign(aniosHumanos) === 1)
        ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
        : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
  }

  calcularAnios(new Date(1984,4,23))


  //18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
    const contarLetras = (cadena = "") => {
      if (!cadena) return console.warn("No ingresate una cade de texto")
      if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado,no es una cadena de texto`)
      let vocales = 0
          consonantes= 0

      cadena = cadena.toLowerCase()
    
      for(let letra of cadena){
        if (/[aeiouáéíóúü]/.test(letra))
        vocales++
      }
      for(let letra of cadena){
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra))
        consonantes++
      }

      console.info({
        cadena:cadena,
        vocales:vocales,
        consonantes:consonantes
      })
    }

    contarLetras("Hola mundo")

  //19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("jhonatan yataco") devolverá verdadero.
    const validarNombre = (nombre = "") => {
    if (!cadena) return console.warn("No ingresate un nombre")
    if(typeof cadena !== "string") return console.error(`El valor "${nombre}" ingresado,no es una cadena de texto`)

    let expReg = /^[A-Za-zÑñáéíóúÁÉÍÓÚü\s]+$/g.test(nombre)

    return (expReg)
      ? console.info(`"${nombre}", es un nombre valido`)
      :console.warn(`"${nombre}", no es un no valido`)
    
    }

    validarNombre("jhonatan armando")

  //20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

  const validarEmail = (email = "") => {
    if (!email) return console.warn("No ingresate un email")
    if(typeof email !== "string") return console.error(`El valor "${email}" ingresado,no es una cadena de email`)

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

    return (expReg)
      ? console.info(`"${email}", es un email valido`)
      :console.warn(`"${email}", no es un email valido`)
    
    }

    validarEmail("jhonatan@gmail.com")

  //Fusion 19 y 20

  const validarPatron = (cadena = "",patron = undefined) =>{

    if (!cadena) return console.warn("No ingresate una cadena")
    if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado,no es una cadena valida`)

    if (patron === undefined) return console.warn("No ingresate una patron")
    if(!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado,no es una expesion regular`)

    let expReg = patron.test(cadena)

    return (expReg)
    ? console.info(`"${cadena}", cumple con el patrón ingresado`)
    :console.warn(`"${cadena}", no cumple con el patrón ingresado`)

  }

  validarPatron("jhonata nuñez",/^[A-Za-zÑñáéíóúÁÉÍÓÚü\s]+$/g)

  //21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
    const devolverCuadrados = (arr = undefined) => {
      if(arr === undefined) return console.warn("No ingresaste un arregl de números")
      if(!(arr instanceof Array)) return console.log("No ingresaste un arreglo")
      if(arr.length === 0) return console.error("El arreglo esta vacio")
        
        for(let elemento of arr){
          if(typeof elemento !== "number"){
            return console.log(`El valor ${elemento} no es un numero`)
          }
        }
        const newArr = arr.map(el => el* el);
        return console.info(`Arreglo original:${arr}\n Arreglo al cuadrado: ${newArr}`)
      }
   

    devolverCuadrados([1,4,8])

  //22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

     const arrayMinMax = (arr) => {
      if(arr === undefined) return console.warn("No ingresaste un arregl de números")
      if(!(arr instanceof Array)) return console.log("No ingresaste un arreglo")
      if(arr.length === 0) return console.error("El arreglo esta vacio")
        
        for(let elemento of arr){
          if(typeof elemento !== "number"){
            return console.log(`El valor ${elemento} no es un numero`)
          }
        }

        return console.info(`Arreglo original: ${arr}\nValor mayor:${Math.max(...arr)},\nValor menor:${Math.min(...arr)}`)
     } 

     arrayMinMax([-2,0,4,10,-8])

  //23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

     const separarParesImpares = (arr = undefined ) => {
      if(arr === undefined) return console.warn("No ingresaste un arregl de números")
      if(!(arr instanceof Array)) return console.log("No ingresaste un arreglo")
      if(arr.length === 0) return console.error("El arreglo esta vacio")
        
        for(let elemento of arr){
          if(typeof elemento !== "number"){
            return console.log(`El valor ${elemento} no es un numero`)
          }
        }

        return console.log({
          pares: arr.filter(num => num % 2 === 0),
          impares: arr.filter(num => num % 2 === 1)
        })
     }

     separarParesImpares([1,2,3,4,5,6,7,8,9,10])


  //24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
     const ordenarArreglo = (arr) =>{
      if(arr === undefined) return console.warn("No ingresaste un arregl de números")
      if(!(arr instanceof Array)) return console.log("No ingresaste un arreglo")
      if(arr.length === 0) return console.error("El arreglo esta vacio")
        
        for(let elemento of arr){
          if(typeof elemento !== "number"){
            return console.log(`El valor ${elemento} no es un numero`)
          }
        }

        return console.info({
          arr:arr,
          asc:arr.map(el => el).sort(),
          desc:arr.map(el => el).sort().reverse()
        })
     }

     ordenarArreglo([9,8,6,2,5,3,7,4,1])
     
  //25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

     const quitarDuplicados = (arr = undefined) => {
      if(arr === undefined) return console.warn("No ingresaste un arreglo de números")
      if(!(arr instanceof Array)) return console.log("El valor que ingrasaste no es un arreglo")
      if(arr.length === 0) return console.error("El arreglo esta vacio")
      if(arr.length === 1) return console.error("El arreglo debe tener mas de un elemento")
      
      return console.info({
        original:arr,
        sinDuplicados: arr.filter((value,index,self) => self.indexOf(value) === index)
      })
     }

     quitarDuplicados(["x",10,"x",20,14,"z",20])


  //26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.