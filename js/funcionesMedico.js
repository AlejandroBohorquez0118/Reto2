function consultar(){
    $.ajax({    
            url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor',
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
                              $("#resultados").append("<td>"+misItems[i].specialty+" || "+"</td>");
                              $("#resultados").append("<td>"+misItems[i].graduate_year+" || "+"</td>");
                              $("#resultados").append("<td>"+misItems[i].department_id+" || "+"</td>");
                              $("#resultados").append("<td>"+misItems[i].name+" || "+"</td>");
                              $("#resultados").append('<td><button onclick="eliminar('+misItems[i].id+')">Borrar</button></td>');
                              $("#resultados").append('<td><button onclick="obtenerItemEspecifico('+misItems[i].id+')">Cargar</button></td>');
                              $("#resultados").append("</tr>");
                    
                            }
                    
                          }
                
                    
            }
        );
}

function guardar(){
    
$.ajax({    
    url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor',
    data : { 
            id: $("#ID").val(),
            specialty: $("#specialty").val(),
            graduate_year: $("#graduate_year").val(),
            department_id: $("#department_id").val(),
            name: $("#name").val() },
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

function editar(idElemento,speElemento,graduaElemento,depaElemento,nameElemento){
    idElemento=$("#id").val(),
    speElemento= $("#specialty").val(),
    graduaElemento= $("#graduate_year").val(),
    depaElemento= $("#department_id").val(),
    nameElemento= $("#name").val()

    var elemento={
        id:idElemento,
        specialty:speElemento,
        graduate_year:graduaElemento,
        department_id:depaElemento,
        name:nameElemento
    };
    
    var dataToSend=JSON.stringify(elemento);
    $.ajax({    

        dataType : 'json',
       
        data : dataToSend,
        
        url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor',
        
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
        
       
        url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor',
        type: 'DELETE',
        contentType:'application/json',
        success : function(json, textStatus, xhr) {
          
                console.log(idElemento);
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
        url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor/'+idItem.val(),
        type : 'GET',
        dataType : 'json',        

        success : function(json) {
                $("#resultados").empty();
               
                console.log(json.items[0].id +" $"+json.items[0].name);

                var misItems=json.items;
                    
                
                 
                  $("#resultados").append("<tr>");
                  $("#resultados").append("<td>"+misItems[0].id+" || "+ "</td>");
                  $("#resultados").append("<td>"+misItems[0].specialty+" || "+"</td>");
                  $("#resultados").append("<td>"+misItems[0].graduate_year+" || "+"</td>");
                  $("#resultados").append("<td>"+misItems[0].department_id+" || "+"</td>");
                  $("#resultados").append("<td>"+misItems[0].name+" || "+"</td>");
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
    $("#department_id").val("");
    $("#specialty").val("");
    $("#graduate_year").val("");
    $("#name").val("");
    $("#id").val("");
}


function obtenerItemEspecifico(idItem){
    $.ajax({    
        url : 'https://ga9c9b6eca3f530-db202109271959.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor/'+idItem,
        type : 'GET',
        dataType : 'json',        

        success : function(json) {               
                console.log(json.items[0].id +" $"+json.items[0].name);

                var misItems=json.items;
    
          $("#id").val(misItems[0].id);
          $("#name").val(misItems[0].name);
          $("#department_id").val(misItems[0].department_id);
          $("#graduate_year").val(misItems[0].graduate_year);
          $("#specialty").val(misItems[0].specialty);
  
  
        },})}