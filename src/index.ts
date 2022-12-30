import { Interface } from "readline"

console.log("Hello Juan")

// Comentario en TS

/*
Comentario en varias lineas de TS

*/

// Declaración de variables:
//Se puede utilizar ; para cerrar la linea o no hacerlo

var nombre = "Juan" // Para variables globales
let email = "juan12@hotmail.com" // Para variables locales dentro de funciones 
const PI = 3.1416 // Para constantes que no van a poder ser modificadas despues de su inicialización

console.log("Hola " + nombre)
console.log("Hola", nombre, "que tal?")
console.log(`Como han ido las vacaciones ${nombre}`)
console.log(`El email de ${nombre} es ${email}`)

//Se puede tipar las variables para establecer el tipo 

var apellido: string = "Jimenez"
var edad: number = 24

//Una vez definida una variable con un tipo en concreto, ya no puede cambiar, aunque no se haya inferido el tipo en su inicialización

//Si no se inicializa una variable sin el tipo inferido, nos la inicializa como any
var error
error = false

//Si inicializamos una variable como any, el tipo puede cambiar en cualquier momento
var ciudad:any = "Madrid"
ciudad = 23

// Instanciacion multiple de variables
let a:number, b:any, c:string
a = 23
b = true
c = "hola"

//Tipos predefinidos: number, string, boolean, void, null, undefined

//Tipos mas complejos
let listaTareas: string[] = ["Cama", "Silla"]

//Tambien se pueden hacer arrays multitipo
let listaSitios = ["Madrid", 23, true]

//Combinacion de tipos en listas

let listaValores: (boolean | number | string)[] = ["23", 23, true]

//Podemos usar enumerados: 

enum Estados {
    "Completado" = 1,
    "Pendiente" = "22"
}

let estados = Estados.Completado


//Interfaces
interface Tarea {
    nombre: string,
    texto: string,
    tel: number
}

//Inicializamos una tarea

let tarea: Tarea = {
    nombre:"Juan",
    texto: "hhasdfds",
    tel:23
}
console.log(`Tarea: ${tarea.nombre}`)
 
//Podemos crear tipos propios de Typescript

type producto = {
    precio:number,
    nombre: string
}

let coche:producto = {
    precio:23,
    nombre:"Toyota"
}

console.log(`Producto: ${coche.nombre}`)

//Condicionales

//Podemos usar operadores ternarios
console.log(coche.precio > 20 ? `Producto: ${coche.nombre} es barato` : "Nada")

//If else
if(error){
    console.log("Hay error")
}else{
    console.log("No hay error")
}
 
//If encadenados
if(error){
    console.log("Hay error")
}else if(coche.precio>10){
    console.log("Coche barato")
}else{
    console.log("Coche caro")
}
 
//Switch
switch (error){
    case true:
        console.log("Hubo error")
        break
    case false:
        console.log("No hubo error")
        break
    default:
        break
    }


let listaDeTareas : Tarea[] = [
    { 
        nombre:"Tarea1",
        tel:2323,
        texto: "oehehe"
    },   
    { 
        nombre:"Tarea2",
        tel:232312,
        texto: "oehehsasAe"
    },
    { 
        nombre:"Tarea2",
        tel:23231,
        texto: "oe111hehe"
    }, 
]

//Para utilizar el bucle for sobre un array de tareas, utilizamos dentro una funcion flecha
listaDeTareas.forEach(
    (tarea:Tarea,indice:number) => {
        console.log(`${indice} - ${tarea.nombre}`)
    }
)

//O se puede utilizar la estructura clasica del for
for (let index = 0; index < listaDeTareas.length; index++) {
    const element = listaDeTareas[index];
}

//Podemos usar tambien bucles while

let contador = 0
while (contador < 10){
    console.log("contador:",contador)
    contador++
}

//Tambien tenemos do-while
let contador2 = 0
do {
    console.log("contador:",contador2)
    contador2++
    
} while (contador2 <10);


//Podemos hacer declaracion de listas multiples y concatenarlas, propagacion

let listaLunes: string [] = ["Leche", "Huevos"]
let listaMartes : string [] = [...listaLunes, "Carne"]

//Tambien podemos aplicar cambios a tipos por propagacion

let estadoApp = {
    usuario: "Juan",
    session: 3,
    jwt: "Bearer2312443fesfef"
}

let nuevoEstado = {
    ...estadoApp, 
    session:4
}