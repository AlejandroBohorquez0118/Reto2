function consultar(){
    $.ajax({    
            url : 'https://g6c335b483ca254-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
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
                $("#resultado").empty();
                    for(i = 0;  i < json.items.length; i++){
                            $("#resultado").append(json.items[i].nombre+"<br>");
                    }
                    console.log(json)
            }
        });
}

 //fecha : $("#fecha").val(),
function guardar(){
    
$.ajax({    
    url : 'https://g6c335b483ca254-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
    data : { 
            nombre: $("#nombre").val(),
            valor: $("#valor").val(),
            fecha : "18/08/2021",
            descripcion: $("#desc").val(),
            nombre_usuario: $("#user").val() },
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
function editar(){
    $.ajax({    
        url : 'https://g6c335b483ca254-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
        data : {
                id: $("#id").val(),
                nombre: $("#nombre").val(),
                valor: $("#valor").val(),
                fecha: "18/08/2021",
                descripcion: $("#desc").val(),
                nombre_usuario : $("#user").val() },
        type: 'PUT',
        dataType : 'json',
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

function eliminar(){
    $.ajax({    
        url : 'https://g6c335b483ca254-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
        data : { 
                id: $("#id").val(),
                },
        dataType : 'json',
        type: 'DELETE',
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

function buscarPorID(id){
    $.ajax({    
        url : 'https://g6c335b483ca254-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos/'+id.val(),
        dataType : 'json',
        type : 'GET',
        dataType : 'json',
        success : function(json) {
                $("#resultado").empty();
                $("#resultado").append( json.items[0].nombre +" $"+json.items[0].valor);
                console.log(json);
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
    $("#nombre").val("");
    $("#valor").val("");
    $("#fecha").val("");
    $("#desc").val("");
    $("#user").val("");
}

function soloLectura(){
    $("#id").prop("readonly",false);
}

  /*
    $.ajax({
        url:"https://g6c335b483ca254-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos/",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        // obtener los elementos del json
        $('<h1/>').text(json.title).appendTo('body');
        $('<div class="content"/>')
            .html(json.html).appendTo('body');
        // mostrarlos por consola del navegado
            console.log(respuesta);
        }
    });    
    */   

