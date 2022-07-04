
((d)=>{
    /*cambio de color body */
  /*================>Hacer boton dia y noche<============*/
  //llamar a traves del id a las variables del html
  const toggleTheme=document.getElementById('toggle-theme');
  const toggleIcon=document.getElementById('toggle-icon');
  const toggleText=document.getElementById('toggle-text');
  
  /**invocamos a partir del id  */
  const toggleColors = document.getElementById("toggle-colors");
  /*tenemos todas nuestras variables css */
  const rootStyles = document.documentElement.style;
  
  /*toggle-> especie de interruptor entre si tiene o no tiene la clase
  si la tiene->Se la quita
  si no la tiene->se la pone*/
  toggleTheme.addEventListener("click", ()=>{
      document.body.classList.toggle("dark");
      if (toggleIcon.src.includes("moon.svg")) {
          toggleIcon.src="assets/icons/sun.svg"
          toggleText.textContent="Light Mode"
      }else{
          toggleIcon.src="assets/icons/moon.svg";
          toggleText.textContent="Dark Mode";
      }
  });
  /*evento de escucha*/
  toggleColors.addEventListener("click",(e)=>{
      rootStyles.setProperty("--primary-color", e.target.dataset.color);
  });
  
  
  })(document);