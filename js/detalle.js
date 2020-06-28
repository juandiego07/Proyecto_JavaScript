// Hemos omitido los acentos en los comentarios por compatibilidad
  var show;
$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  function vdetalle() {
    var purl = window.location.search.substring(1);
      for (var i = 0; i < purl.length; i++) {
        if (purl[i] == '=') {
          return purl[i+1];
          break;
        }
      }
     return null;
    }
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
      url : "info.json"
    }).done(function (result) {
  //Guarda el resultado en una variable
    show = result.eventos;
  //Busca el elemento en el arreglo
    var cadena = ""
  //Crea un string que contenga el HTML que describe el detalle del evento
    for(y = 0; y < show.length; y++){
      if( show[y].id == vdetalle()) {
        cadena += `
                  <div class="box2">
                  <h1>${show[y].nombre}</h1>
                  <p>${show[y].fecha} - ${show[y].lugar}</p>
                  <p>${show[y].descripcion}</p>
                  <p>Costo: ${show[y].precio}</h6>
                  <p>Invitados: ${show[y].invitados}</p>
                  </div>
            `

      }
    }
  //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("evento").innerHTML = cadena
  })
});
