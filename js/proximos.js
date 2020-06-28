//Define las variables que necesites
  var next = [];
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

  //Selecciona los eventos que sean posteriores a la fecha actual del JSON
    for(var x = 0; x < show.length; x++){
      if(show[x].fecha > now){
        next.push(show[x]);
      }
    }

  //Ordena los eventos segun la fecha (los mas cercanos primero)
    next = next.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });

  //Crea un string que contenga el HTML que describe el detalle del evento
    var cadena = ""
    
  //Recorre el arreglo y concatena el HTML para cada evento
    for(y = 0; y < next.length; y++){
        cadena += `
                  <div class="box4">
                  <a href="detalle.html?id=${next[y].id}">${next[y].nombre}</a>
                  <h6>${next[y].fecha} - ${next[y].lugar}</h6>
                  <h6>${next[y].descripcion}</h6>
                  <h6>Invitados: ${next[y].invitados}</h6>
                  </div>          
        `
    }

  //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("proximos").innerHTML = cadena

  })
});
