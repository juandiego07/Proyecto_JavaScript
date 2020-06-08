// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  if(formulario.nombres.value.trim().length==0){
    document.getElementById("errornombres").innerText = 'Campo es obligatorio';
    formulario.nombres.focus();
    return false;
  }

  if(formulario.email.value.trim().length==0){
    document.getElementById("errorEmail").innerText = 'Campo es obligatorio';
    formulario.email.focus();
    return false;
  }else{
    var valemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!valemail.test(formulario.email.value)){
      document.getElementById("errorEmail").innerText = 'Formato Invalido';
      formulario.email.focus();
      return false;
    }
  }

  if(formulario.contrasena.value.trim().length==0){
    document.getElementById("errorContrasena").innerText = 'Campo es obligatorio';
    formulario.contrasena.focus();
    return false;
  }else{
    if(formulario.contrasena.value.trim().length<7){
      document.getElementById("errorContrasena").innerText = 'La contraseña es de 7 caracteres mínimo';
      formulario.contrasena.focus();
      return false;
    }else{
      if(formulario.confirmacion.value.trim().length==0){
        document.getElementById("errorConfirmacion").innerText = 'Campo es obligatorio';
        formulario.confirmacion.focus();
        return false;
      }else{
        if(formulario.contrasena.value != formulario.confirmacion.value){
          formulario.confirmacion.focus();
          alert('La contraseña no coincide')
        }
      }
    }
  }

  if(formulario.tipo.value==-1){
    document.getElementById("errorTipo").innerText = 'Campo es obligatorio';
    formulario.tipo.focus();
    return false;
  }

  if(!formulario.acepto.checked){
    document.getElementById("errorAcepto").innerText = 'Debe aceptar los terminos';
    formulario.acepto.focus();
    return false;
  }


}
