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
                  <h1>${next[y].nombre}</h1>
                  <a id=${next[y].id} class="btn gradient-bg" name="detalle" href="detalle.html?id=${next[y].id}">Ver detalle</a>
            `
    }

  //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("proximos").innerHTML = cadena

  })
});
