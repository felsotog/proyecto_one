
function relog(){
    var nombres_dias = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado")
    var nombres_meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")

    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + ":" + minuto + ":" + segundo

    dia = momentoActual.getDate() //dia del mes
    dia_semana = momentoActual.getDay() //dia de la semana
    mes = momentoActual.getMonth() + 1
    anio = momentoActual.getFullYear()

    fecha_actual  = nombres_dias[dia_semana] +", "+ dia +" de "+ nombres_meses[mes -1] +" de "+anio

    //document.form_reloj.reloj.value = horaImprimible
    document.getElementById('relog').innerHTML = fecha_actual +" | "+horaImprimible;
    setTimeout("relog()",1000)
} 

// Selecciono el cuerpo del documento HTML (body) 
var cuerpoweb = document.body; 

// Obtengo el valor actual de la key 'modo' en localStorage 
var modocolor = localStorage.getItem("modo"); 

// Esta función carga el modo Oscuro o Claro, según el usuario haya configurado 
function cargarModo() {    

    if (modocolor === "oscuro") {               
        cuerpoweb.classList.add("oscuro");
    } else {
        cuerpoweb.classList.add("claro");
    }

}

// Cuando el usuario presiona el botón, llama a la función que corresponde
// ya sea para activar el modo claro o el modo oscuro
var btnpresionado = false;

function cambiarModo() {

    if (btnpresionado) { // Si No es presionado el botón 
        cuerpoweb.classList.remove("oscuro");
        localStorage.setItem("modo", "claro");
        cuerpoweb.classList.add("claro");
        btnpresionado = false;
    } else { // Si es presionado el botón 

        if (modocolor === "oscuro") {
            resetear(); 
            btnpresionado = true;           
        } else {

            cuerpoweb.classList.remove("claro");
            localStorage.setItem("modo", "oscuro");
            cuerpoweb.classList.add("oscuro");        
            btnpresionado = true;

        }        
    }
}

// Reseteamos la configuración realizada y refrescamos la página (Esto es opcional, tu decides usarlo o no)
function resetear() {

    localStorage.removeItem('modo');
    location.reload();

}


  function convertir(){
      var valor=parseFloat(document.getElementById("cantidad").value);
      document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
      var de=document.getElementById("de").value;
      var a=document.getElementById("a").value;
      var dolar=720;
      var euro=879;
      var resultado=0;

      //peso a dolar
      if(de==1 && a==2){
          resultado=valor/dolar;
      }
      //peso a euro
      else if(de==1 && a==3){
          resultado=valor/euro;
      }
      //dolar a peso
      else if(de==2 && a==1){
        resultado=valor*dolar;
    }
    //dolar a euro
    else if(de==2 && a==3){
        resultado=valor*(dolar/euro);
    }
    //euro a peso
    else if(de==3 && a==1){
        resultado=valor*euro
    }
    //euro a dolar
    else if(de==3 && a==2){
        resultado=valor*(euro/dolar);
    }
    //en los dos lo mismo
    else{
        resultado=valor;
    }
    document.getElementById("resultado").innerHTML="Conversión: $"+resultado.toFixed(2);

  }