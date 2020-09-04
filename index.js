/*
Bienvenido/a!!

Te proponemos 10 ejercicios de JS para resolver de forma individual. Si te trabas con alguno, podes continuar con otro de forma independiente. Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. Algunos te piden solo tocar JS otros, JS + HTML.

Exitos! Happy coding! - Guayerd
*/

/*
Ej - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd"
*/
alert("Bievenidas/os al Maratón Guayerd")


/*
Ej - 2: Completar/arreglar el código para que la función focusHandler() se ejecute cuando el foco este puesto en el input.ej2-nombre. Y cuando el foco se pierda (evento blur), borrar el contenido del div.
*/
const ej2Nombre = document.querySelector("input.ej2-nombre");
const ej2Resultado = document.querySelector(".ej2-resultado"); //Se rompe lindo, no?
ej2Nombre.addEventListener("focus", focusHandler);
ej2Nombre.addEventListener("blur", blurHandler);

function focusHandler(e){
  ej2Resultado.innerText = "El input nombre tiene el foco";
}

function blurHandler(e){
  ej2Resultado.innerText = "";
}

/*
Ej - 3: Codear la función mostrarSaludo() para mostrar un saludo desde el div.ej3
*/

const ej3Div = document.querySelector(".ej3-resultado");

function mostrarSaludo(){
  ej3Div.innerText = txtSaludo;
}

const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at..." + (new Date()).toLocaleString();
mostrarSaludo(txtSaludo, ej3Div);


/*
Ej - 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
  a) Leer los campos ej4-email, ej4-mensaje
  b) Mostrar el valor de esos campos en div.ej4-resultado
  c) Limpiar los campos asignando "" a los mismos
*/

const ej4Email= document.querySelector(".ej4-email") 
const ej4Mensaje= document.querySelector(".ej4-mensaje") 
const ej4Resultado = document.querySelector(".ej4-resultado")
const ej4Btn = document.querySelector(".ej4-enviar")

ej4Btn.addEventListener("click",clikEj4)

function clikEj4(){
ej4Resultado.innerText= ej4Email.value + ej4Mensaje.value;
ej4Email.value="";
ej4Mensaje.value="";
}

/*
Ej - 5: Crear un div con 2 inputs y un boton "Sumar"
  a) Cuando se clickea en "sumar", sumar ambos valores de inputs y mostrar el resultado en el div.ej5-resultado
  b) Si alguno de los valores ingresados no es numérico (isNaN) informar en div.ej5-resultado "Ingreso erróneo"
*/

const ej5Resultado = document.querySelector(".ej5-resultado");
ej5Resultado.innerHTML = `<div><input type="number" class="ej5-number" placeholder="Ingrese un numero"><input type="number" class="ej5-number2" placeholder="Ingrese un numero"><button class="ej5-sumar">Sumar</button></div>`;
const ej5BtnSumar = document.querySelector(".ej5-sumar");
const ej5Number = document.querySelector(".ej5-number") ;
const ej5Number2 = document.querySelector(".ej5-number2") ;
let resultadoej5=0;

ej5BtnSumar.addEventListener("click",clikEj5)

function clikEj5(){
 resultadoej5 = parseInt(ej5Number.value) + parseInt(ej5Number2.value);
 console.log(resultadoej5)
  isNaN(resultadoej5) ? ej5Resultado.innerText = "Ingreso erróneo" : ej5Resultado.innerText = resultadoej5
}

/*
Ej - 6: Completar los elementos <select> del div.ej6 con los arrays correspondientes. Recorrerlos y crear los <option> según corresponda
*/
let paises = ["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","Paraguay","Perú","Uruguay","Venezuela"];
let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const ej6Paises = document.querySelector(".ej6-paises");
const ej6DiasSemana = document.querySelector(".ej6-diasSemana") ;

//const fragment6 = new DocumentFragment();
let paisEj6="";
let diasSemanaEj6="";

paises.forEach(function(pais){  
  paisEj6+=`<option value="${pais}">${pais}</option>`;
});

ej6Paises.innerHTML=paisEj6;

diasSemana.forEach(function(diaSemana){  

  diasSemanaEj6+=`<option value="${diaSemana}">${diaSemana}</option>`;
});
ej6DiasSemana.innerHTML=diasSemanaEj6;




/*
Ej - 7: Dado el siguiente array, mostrar en el div.ej7-resultado el valor del select cuando el usuario selecciona un valor
*/
const momentosDia = ["Mañana","Tarde","Noche"];

const ej7Resultado = document.querySelector(".ej7-resultado");

let momentoOption="";

const ej7momento =  document.querySelector(".momentos");

momentosDia.forEach(function(momento){  
  momentoOption+=`<option value="${momento}">${momento}</option>`;
});
ej7momento.innerHTML=momentoOption;

ej7momento.addEventListener("change",ej7ChangeHandler)
function ej7ChangeHandler(event){
      ej7Resultado.textContent=event.target.value;
}

/*
Ej - 8: Validar un ingreso de usuario al sistema utilizando localStorage. Mostrar en div.ej8-resultado "OK" o "Error".
  El form esta creado en el div.ej8
*/
localStorage.setItem("password","js2020"); //Este es el password que deben comparar con el ingreso del usuario

const passwordEj8= localStorage.getItem("password");

const password =  document.querySelector("#password");
const ej8Resultado = document.querySelector(".ej8-resultado");
const ej8Btn = document.querySelector(".contenedor.ej8 button")

ej8Btn.addEventListener("click",clikEj8)
function clikEj8(){
  console.log(passwordEj8)
  password.value===passwordEj8 ? ej8Resultado.innerText = "OK" : ej8Resultado.innerText = "Error"  
}

/*
Ej - 9: Mostrar en el div.ej9-resultado el listado de usuarios que se encuentra en el array utilizando la siguiente plantilla:

<div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre:</span><span>valor</span>
    <span class="title">NroCliente:</span><span>valor</span>
  </div>
  <div class="fila2">
    <span class="title">DNI:</span><span>valor</span>
    <span class="title">Fecha Nacimiento:</span><span>valor</span>
  </div>
</div>
*/

const usuarios = [
  {
    nombre: "Juan Perez",
    nroCliente: 1001,
    dni: 88888888,
    fechaNacimiento: "10/10/1988"
  },
  {
    nombre: "Ana Martinez",
    nroCliente: 1010,
    dni: 88888886,
    fechaNacimiento: "10/10/1990"
  },
  {
    nombre: "Susana Gomez",
    nroCliente: 1021,
    dni: 88888889,
    fechaNacimiento: "10/10/1985"
  },
];
const ej9Resultado = document.querySelector("div.ej9-resultado") 

let usuarioHtlm="";

usuarios.forEach(function(usuario){
  usuarioHtlm +=`<div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre:</span>${usuario.nombre}<span>valor</span>
    <span class="title">NroCliente:</span>${usuario.nroCliente}<span>valor</span>
  </div>
  <div class="fila2">
    <span class="title">DNI:</span>${usuario.dni}<span>valor</span>
    <span class="title">Fecha Nacimiento:</span>${usuario.fechaNacimiento}<span>valor</span>
  </div>
</div>`  
});
ej9Resultado.innerHTML= usuarioHtlm

/*
Ej - 10: Nuestro cliente es una empresa de marketing que busca generar una base de datos de contactos para poder vender productos. Debemos crear para ellos un formulario de carga con los siguientes datos:

  - Nombre
  - Email
  - Teléfono
  - Horario de contacto (Mañana/Tarde/Noche)
  - Producto (Crédito/Celular/Viajes/Seguros)
  - Botón "Guardar"
  - Botón "Finalizar"

  a) Crear el <form> dentro del elemento div.ej10-form
  b) Crear los elementos input, select, button que correspondan
  c) Cuando el usuario hace "click" en el botón, guardar los datos de contacto en un array
  d) Limpiar los elementos del form
  e) Cada vez que se guarden datos, guardarlos tambien en localStorage
  f) Cuando la página se vuelve a cargar, recuperar el array desde localStorage si es que existe.
  e) Cuando se hace click en "Finalizar", mostrar de forma clara el listado de contactos y sus datos dentro de div.ej10-resultado y limpiar el localStorage.

  Bonus!!
  1) Validar los datos según el tipo.
  2) Todos los datos son requeridos. Evitar cargar datos vacios.
  3) Evitar cargar datos si el email ya existe en el array de contactos.
  4) En todos los casos, informar de forma clara al usuario si hay problemas de validación de datos.
*/

//let nombreEj10=    ;
const ej10div = document.querySelector("div.ej10-form");
ej10div.innerHTML=`<form class="formEj10">
  <input type="text" class="ej10-nombre" placeholder="Ingrese su nombre" required>
  <input type="text" class="ej10-email" placeholder="Ingrese su email" required>
  <input type="number" class="ej10-number" placeholder="Ingrese su teléfono" required>  
  <select class="ej10-Horario">Horario de contacto 
    <option value="Mañana">Mañana</option> 
    <option value="Tarde">Tarde</option>
    <option value="Noche">Noche</option>
  </select>
  <select class="ej10-Producto">Producto
    <option value="Crédito">Crédito</option> 
    <option value="Celular">Celular</option>
    <option value="Viajes">Viajes</option>
    <option value="Seguros">Seguros</option>
  </select>
  <button class="ej10-finalizar">Finalizar</button>
  <button class="ej10-guardar">Guardar</button>
</form>`;

const ej10Nombre = document.querySelector(".ej10-nombre");
const ej10Email = document.querySelector(".ej10-email");
const ej10Number = document.querySelector(".ej10-number");
const ej10Horario = document.querySelector(".ej10-Horario");
const ej10Producto = document.querySelector(".ej10-Producto");
const ej10Finalizar = document.querySelector(".ej10-finalizar");
const ej10Guardar = document.querySelector(".ej10-guardar");
const ej10ResultadoDiv = document.querySelector("div.ej10-resultado");

let arrayEj10=[];

ej10Guardar.addEventListener("click",clickGuardarEj10)
function clickGuardarEj10(event){
  event.preventDefault()
  //arrayEj10.push(ej10Nombre.value,ej10Email.value,ej10Number.value,ej10Horario.value,ej10Producto.value)
  arrayEj10.push({Nombre: ej10Nombre.value ,Email: ej10Email.value,Teléfono: ej10Number.value,Horariodecontacto: ej10Horario.value,Producto: ej10Producto.value});
  //JSON.parse(arrayEj10)
  localStorage.setItem("cliente", JSON.stringify(arrayEj10));
console.log(arrayEj10)
ej10Nombre.value="";
ej10Email.value="";
ej10Number.value="";
ej10Horario.value="";
ej10Producto.value="";



}

ej10Finalizar.addEventListener("click",clickFinalizarEj10)

function clickFinalizarEj10(event){
  event.preventDefault()
  ej10ResultadoDiv.innerHTML="";
let fragmentEj10 = new DocumentFragment();
 let olEj10 = document.createElement("ol");
ej10ResultadoDiv.appendChild(olEj10)

   let clientesEj10 = JSON.parse(localStorage.getItem("cliente"));

console.log(clientesEj10)

  clientesEj10.forEach(function (cliente){
    let liEj10 = document.createElement("li");  

    liEj10.textContent=`"Nombre: ${cliente.Nombre}, Email: ${cliente.Email}, Teléfono: ${cliente.Teléfono}, Horario de contacto: ${cliente.Horariodecontacto}, Producto: ${cliente.Producto}."`;
    fragmentEj10.appendChild(liEj10)
  });
  olEj10.appendChild(fragmentEj10)
  
  localStorage.removeItem("cliente");
  arrayEj10=[];
}

/* 
{
    Nombre: ${ej10Nombre.value},
    Email: ${ej10Email.value},
    Teléfono: ${ej10Number.value},
    Horario de contacto: ${ej10Horario.value},
    Producto: ${ej10Producto.value}
   } */
