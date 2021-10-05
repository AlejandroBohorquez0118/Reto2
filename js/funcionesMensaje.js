function consultar(){
    $.ajax({    
            url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        //  data : { id : 123 },
            type : 'GET',
            dataType : 'json',
            
            error : function(xhr, status) {
                alert('ha sucedido un problema, '+xhr.status);
            },
            complete : function(xhr, status) {
                alert('Petición realizada, '+xhr.status);
            },
            success : function(json) {
                $("#resultados").empty();
                var misItems=json.items;
                    
                for(i=0;i<misItems.length;i++){
                 
                  $("#resultados").append("<tr>");
                  $("#resultados").append("<td>"+misItems[i].id+" || "+ "</td>");
                  $("#resultados").append("<td>"+misItems[i].messagetext+" || "+"</td>");
                  $("#resultados").append('<td><button onclick="eliminar('+misItems[i].id+')">Borrar</button></td>');
                  $("#resultados").append('<td><button onclick="obtenerItemEspecifico('+misItems[i].id+')">Cargar</button></td>');
                  $("#resultados").append("</tr>");
        
                }
            }
        });
}

 //fecha : $("#fecha").val(),
function guardar(){
    
$.ajax({    
    url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
    data : { 
            id: $("#id").val(),
            messagetext: $("#messagetext").val()
            },
    type : 'POST',
    dataType: 'json',
    
    success : function(json, textStatus, xhr) {

            console.log(json);
    },
    error : function(xhr, status) {
        alert('ha sucedido un problema'+ xhr.status);
        
    },
    complete : function(xhr, status) {
        alert('Petición realizada '+xhr.status);
        limpiarFormulario();
    }
    
});
}

   //fecha : $("#fecha").val(),
function editar(idElemento,messaElemento){

    idElemento=$("#id").val(),
    messaElemento=$("#messagetext").val()

    var elemento ={

        id:idElemento,
        messagetext:messaElemento

    };
    var dataToSend=JSON.stringify(elemento);
    
    $.ajax({    

        dataType : 'json',
       
        data : dataToSend,

        url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
        
        type: 'PUT',
        contentType:'application/json',
        success : function(json, textStatus, xhr) {
         
                console.log(json);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema'+ xhr.status);
           
        },
        complete : function(xhr, status) {
            alert('Petición realizada '+xhr.status);
            limpiarFormulario();
        }
    });
}

function eliminar(idElemento){
    
var elemento={
    id:idElemento
  };
  
  
  var dataToSend=JSON.stringify(elemento);
$.ajax({    
    
    dataType : 'json',
       
    data : dataToSend,

        url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',

        type: 'DELETE',
        contentType:'application/json',
        success : function(json, textStatus, xhr) {
          
                console.log(json);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema'+ xhr.status);
            
        },
        complete : function(xhr, status) {
            alert('Petición realizada '+xhr.status);
            limpiarFormulario();
        }
    });
}

function buscarPorID(idItem){
    $.ajax({    
        url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/'+idItem.val(),
        
        type : 'GET',
        dataType : 'json',
        success : function(json) {
                $("#resultados").empty();
                
                var misItems=json.items;
               
                $("#resultados").append("<tr>");
                $("#resultados").append("<td>"+misItems[0].id+" || "+ "</td>");
                $("#resultados").append("<td>"+misItems[0].messagetext+" || "+"</td>");
               $("#resultados").append('<td><button onclick="eliminar('+misItems[0].id+')">Borrar</button></td>');
                $("#resultados").append('<td><button onclick="obtenerItemEspecifico('+misItems[0].id+')">Cargar</button></td>');
                $("#resultados").append("</tr>");
      
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema'+ xhr.status);
        },
        complete : function(xhr, status) {
            alert('Petición realizada '+xhr.status);
        }
    });
}


function limpiarFormulario(){
    $("#id").val("");
    $("#messagetext").val("");
}


function obtenerItemEspecifico(idItem){
    $.ajax({    
        url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/'+idItem,
        type : 'GET',
        dataType : 'json',        

        success : function(json) {               
                console.log(json.items[0].id +" $"+json.items[0].messagetext);

                var misItems=json.items;
    
          $("#id").val(misItems[0].id);
          $("#messagetext").val(misItems[0].messagetext);
          },})}  