/*MENU */
/*Funcion anonima autoejecutable 
((d)=>{}(document)*/
((d)=>{
    const $btnMenu=d.querySelector(".menu-btn"),
    $menu=d.querySelector(".menu");

    /*evento click al boton */
    $btnMenu.addEventListener("click",(e)=>{
        /*recorrido del DOM 1:10:00*/
        /*la clase none la tiene el tache
        dentro de el boton de menu ques esta en variable btnMenu
        al primer elemento hijo es svg de las barras, le intercambie en 
        su lista de clases. la clase none y lo mismo con last element child(tache) */
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        /*al elemento del menu en su lista de clases, le cambias la clase
        is-active(permite mostrar o ocultar la opacidad del menu) */
        $menu.classList.toggle("is-active");
    });
/*rutina detecta el enlace del elemento menu 
al dar click se quite la claseis-active(el menu) y regrese
 none al icono */
d.addEventListener("click",(e)=>{
   if(!e.target.matches(".menu a"))return false;
   $btnMenu.firstElementChild.classList.remove("none");
   $btnMenu.lastElementChild.classList.add("none");
   $menu.classList.remove("is-active");
});
/*Tecnica delegacion de Eventos 
asignar eel click a un elemento superior(document) y se evalua
cual es el elemento que va adetonar este click-> en este caso e.target
elemento qe origina el evento matches(selector valido)
si el selector que actiba este evento es un enlace que esta dentro del menu
no es un enlace que esta dentro del menu entonces retorna falso, pero en el caso de que si
sea un enlace que esta dentro del menu entonces el primer elemento que es 
las barras svg le quitas la clase none,a la tache ultimo elemento 
a ese le agregas el none y finalmente al menu le quitas clase (is-active)*/
d.addEventListener("click",(e)=>{
    if(!e.target.matches(".menu a"))return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");


});
})(document); 

/*ContactForm */
((d)=>{
  const $form=d.querySelector(".contact-form"),
  $loader=d.querySelector(".contact-form-loader"),
  $response=d.querySelector(".contact-form-response");
   
  $form.addEventListener("submit",(e)=>{
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/isaac.albarran07@gmail.com",{
        method:"POST",
        body:new FormData(e.target),
  })
  .then((res)=>(res.ok?res.json():Promise.reject(res)))
  .then((json)=>{
    console.log(json);
    location.hash="#gracias";
    $form.reset();
  })
  .catch((err)=>{
    console.log(err);
    let message=
    err.statusText||"Ocurrio un erro al enviar,intenta nuevamente";
    $response.querySelector(
      "h3"
      ).innerHTML='h3';
  })
  .finally(()=>{
    $loader.classList.add("none");
    setTimeout(()=>{
        location.hash="#close";
     },3000);
    });
  });

})(document); 