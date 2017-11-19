// Para que estos eventos ocurran cuando la página haya cargado completamente, uso el evento load

window.addEventListener('load', function() { 
  var button = document.querySelector('button'); // Utilizo este método para que obtenga el primer valor cuyo selector de etiqueta sea button(botón).
  var textarea = document.querySelector('textarea'); // Utilizo este método para que obtenga el primer valor cuyo selector de etiqueta sea textarea(área de texto).
  // Estableciendo el evento click al elemento button
  button.addEventListener('click', function() {
    var sectionDivs = document.getElementsByTagName('section')[0]; // Seleccionando a la sección que contendra  alos divs con los comentarios.
    var div = document.createElement('div'); // Creando un div.
    var message = textarea.value; // Encapsulando lo escrito en el textarea en una variable.
    var text = document.createTextNode(message); // Creando un nodo de texto cuyo contenido es el valor de la variable message.
    div.appendChild(text); // Uniendo al nodo de texto 'text' con el nodo de tipo elemento div.   
    sectionDivs.appendChild(div); // Uniendo al nodo de tipo elemento div con el nodo de tipo elemento section, para que el div sea contenido dentro de la sección.
    div.classList.add('divText'); // Le asignamos el atributo disabled(deshabilitado en español)al button cuyo valor es true para que lo deshabilite
  });
});
