/*
Estilos para la creación de variables
nombre_producto = 'Monitor HD' //Underscore
nombreProducto = 'Monitor HD' //Camelcase
NombreProducto = 'Monitor HD' //Pascalcase
nombreproducto = 'Monitor HD' //Lowercase

JavaScript es sencible en minusculas y mayusculas
Variables Let
Son similares a var
Variables cont
Las variables deben inicializarse con un valor y no se pueden reasignar
Tipos de Datos
String*/
const producto = "Monitor de 20\¨"
const producto1 = String('Monitor de 20 Pulgadas')
const producto2 = new String('Monitor de 20 Pulgadas')
console.log(producto.length)//metodo para contar las cantidad de caracteres

//IndexOf - metodo para encontrar un valor en una cadena de texto retornando la posicion
console.log(producto.indexOf('de'));
//Include - metodo para encontrar un valor en una cadena de texto con true or false
console.log(producto.includes('de'));