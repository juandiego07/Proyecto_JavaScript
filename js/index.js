//Define las variables que necesites
  var last = [];
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
  //Clasifica los eventos segun la fecha actual del JSON
    for(var x = 0; x < show.length; x++){
      if(show[x].fecha < now){
        last.push(show[x]);
      }else{
        next.push(show[x]);
      }
    }

  //Ordena los eventos segun la fecha (los mas cercanos primero)
    last = last.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });
  //Extrae solo dos eventos

  //Ordena los eventos segun la fecha (los mas cercanos primero)
    next = next.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });
  //Extrae solo dos eventos

  //Crea un string que contenga el HTML que describe el detalle del evento
    var cadena1 = ""
  
  //Recorre el arreglo y concatena el HTML para cada evento
  for(y = 0; y < 2; y++){
    cadena1 += `
              <div class="box">
              <a href="detalle.html?id=${last[y].id}">${last[y].nombre}</a>
              <h6>${last[y].fecha}</h6>
              <h6>${last[y].descripcion}</h6>
              </div>
        `
}

  //Modifica el DOM agregando el html generado
    document.getElementById("pasados").innerHTML = cadena1

  //Crea un string que contenga el HTML que describe el detalle del evento
    var cadena2 = ""

  //Recorre el arreglo y concatena el HTML para cada evento
    for(y = 0; y < 2; y++){
        cadena2 += `
                  <div class="box">
                  <a href="detalle.html?id=${next[y].id}">${next[y].nombre}</a>
                  <h6>${next[y].fecha}</h6>
                  <h6>${next[y].descripcion}</h6>
                  </div>
            `
    }
  //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = cadena2

  })
});
