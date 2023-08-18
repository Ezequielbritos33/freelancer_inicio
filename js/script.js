//  document.addEventListener('DOMContentLoaded', function() {
// Tu código aquí



//Modo visible e invisible
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect().top;
      
      // Si el elemento está dentro del área visible
      if (position < window.innerHeight) {
        element.classList.add('visible');
      }
    }
  });
  

//Pasos a seguir para aplicar el modo oscuro en la pagina web.
//Agregamos un boton o interruptor en el html.
//Ese mismo boton lo llamamos en javascript con querySelector.
//Luego llamamos el elemento que queremos modificar con el modo oscuro.
//Agregamos un evento que va a ocurrir cuando se presione ese boton,atraves de addEventListener.
//Luego asociamos el elemento html que queremos modificar con "toggle" que es el alternador del claro y oscuro.
//Y en una unica hoja de estilos vamos a tener ambos modos,al modo oscuro lo llamamos "elemento.dark-mode" si tiene id.
//En caso de que sea una clase,lo llamamos ".dark-mode . elemento"

  //Modo Oscuro Body
  const boton = document.querySelector('#dark-mode');
 const body = document.querySelector('body');
  boton.addEventListener('click', e =>{
  body.classList.toggle('dark-mode');
  });

 //Modo Oscuro Main,contenedor-sobremi,Servicio,Barra-footer
const btn = document.querySelector('#dark-mode');
const main = document.querySelector('#main');
const contenedorsobremi = document.querySelector('.contenedor-sobremi')
const servicio = document.querySelector('.servicio');
const barrafooter = document.querySelector('.barra-footer');
btn.addEventListener('click', e =>{
main.classList.toggle('dark-mode');
contenedorsobremi.classList.toggle('dark-mode');
servicio.classList.toggle('dark-mode');
barrafooter.classList.toggle('dark-mode');
  } );
  

//Modo Oscuro Formulario
const dark = document.querySelector('#dark-mode');
const form = document.querySelector('#form');
dark.addEventListener('click', e =>{
form.classList.toggle('dark-mode');
});



// // //Objeto(5)
// const datos ={
//     nombre:'',
//     email:'',
//     telefono:'',
//     mensaje:''
//     }
// //Variables (1)
// const nombre = document.querySelector('#nombre');
// const email = document.querySelector('#email');
// const telefono = document.querySelector('#telefono');
// const mensaje = document.querySelector('#mensaje');
// const formulario = document.querySelector('.formulario');

// //Eventos (2)
// nombre.addEventListener('input', LeerTexto);
// email.addEventListener('input', LeerTexto);
// telefono.addEventListener('input', LeerTexto);
// mensaje.addEventListener('input', LeerTexto);
// //El evento submit. (3)
// formulario.addEventListener('submit', function(evento){
//     evento.preventDefault();

// //    // validar formulario. (6)
//      const { nombre, email, telefono, mensaje} = datos;
//      if(document.querySelector(".error")===null && 
//      document.querySelector(".correcto")=== null){
//      if(nombre.length>=50 || email.length>=30 || telefono.length>=10 || mensaje.length>=200){
//        // (7)
//        mostrarMensaje("Mensaje enviado correctamente");
//          //return;//Corta la ejecucion de codigos.
//      }else{
//   //Crear alerta de Enviar correctamente. (10)
//   mostrarError("Todos los campos son obligatorios");
//      }
//      }
//  });

//  (4)
//  function LeerTexto(e){//e.target hace referencia al objeto y dispara un evento.
//  datos[e.target.id] = e.target.value;
// // console.log(datos);
// };


// function mostrarError(mensaje) {
//   const error = document.createElement('p');
//   error.textContent = mensaje;
//   error.classList.add('error');

//   const contenedorError = document.createElement('div');
//   contenedorError.appendChild(error);

//   formulario.appendChild(contenedorError);

//   setTimeout(() => {
//       contenedorError.remove();
//   }, 3000);
// }

// function mostrarMensaje(mensaje) {
//   const alerta = document.createElement('p');
//   alerta.textContent = mensaje;
//   alerta.classList.add('correcto');

//   const contenedorAlerta = document.createElement('div');
//   contenedorAlerta.appendChild(alerta);

//   formulario.appendChild(contenedorAlerta);

//   setTimeout(() => {
//       contenedorAlerta.remove();
//   }, 3000);
// }
// });











// //8
// function mostrarError(mensaje){
//     const error = document.createElement('P');//parrafo.
//     error.textContent = mensaje;//Contenido de texto.
//     error.classList.add('error');//clase.
//     formulario.appendChild(error);

//     //Desaparezca despues de 5 segundos. (9)
//     setTimeout(()=>{
//         error.remove();
//     },3000);
// };

// //Muestra una alerta de que se envio correctamente.(11)
// function mostrarMensaje(mensaje){
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje;
//     alerta.classList.add('correcto');
//     formulario.appendChild(alerta);

//     //desaparezca en 5 segundos. (12)
//     setTimeout(()=>{
//         alerta.remove();//remove=eliminar.
//     },3000);
// };


