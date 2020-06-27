//Define las variables que necesites
  var last = [];
  var now;
  var show;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX  
    $.ajax({
      url : "info.json"
    }).done(function (result) {
         
  //Guarda el resultado en variables
      show = result.eventos;
      now = result.fechaActual
      
  //Selecciona los eventos que sean anteriores a la fecha actual del JSON
    for(var x = 0; x < show.length; x++){
      if(show[x].fecha < now){
        last.push(show[x]);
      }
    }
  
  //Ordena los eventos segun la fecha (los mas recientes primero)
    last = last.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });
  
  //Crea un string que contenga el HTML que describe el detalle del evento
      var cadena = ""
  
  //Recorre el arreglo y concatena el HTML para cada evento
    for(y = 0; y < last.length; y++){
        cadena += `
                  <h1>${last[y].nombre}</h1>
                  <a id=${last[y].id} class="btn gradient-bg" name="detalle" href="detalle.html?id=${last[y].id}">Ver detalle</a>
            `
    }

  //Modifica el DOM agregando el html generado
    document.getElementById("pasados").innerHTML = cadena

  })
});
