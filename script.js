const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

document.getElementById("copiar").style.display = "none";

//funciones para encriptar y desencriptar el texto
function btnencriptar (){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;

    document.getElementById("munheco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("txt").style.display = "none";
    document.getElementById("copiar").style.display = "block";
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) 
        }
    }
    return StringParaEncriptar;
}

function btndesencriptar (){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;

    document.getElementById("munheco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("txt").style.display = "none";
    document.getElementById("copiar").style.display = "block";
}

function desencriptar(StringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if(StringParaDesencriptar.includes(matrizCodigo[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return StringParaDesencriptar;
}

//funcion para el boton de copiar
function btncopiar(){
    var copyText = document.getElementById ("resultado");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Mensaje copiado " + copyText.value);
}


//funciones para no permitir caracteres especiales
function esValido(c) {
    c = c.charCodeAt(0);
    return (c >= 97 && c <= 122) || (c == 32); 
  }
  
  function validarEntrada(cadena) {
    for (var i = 0; i < cadena.length; i++) {
      if (!esValido(cadena[i])) {
        break;
      }
    }
    return i == cadena.length;
    
  }

function validarTextarea(elem) {
    var txt = elem.value;
    if (!validarEntrada(txt)) {
      elem.classList.add('invalido');
        if((validarEntrada(txt))==false){
          alert("No se permiten caracteres especiales");
          location.reload();
          
          }
    } else {
      elem.classList.remove('invalido');
    }
  }

 