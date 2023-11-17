//$(document).ready(function () {
//    alert("Listo");
//})

$("#form_categorias").submit(function () {
    var nombre = $("#categorias-submit").val() ;

    if($.trim(nombre) === '' ) {
        alert("Debe completar la categoria \nRoberto Carlos") ; 
        return false ; 
    }
    return true
})

$("#form-productos").submit(function () {
    var productos = $("#nombre-producto").val();
    var descripcion = $("#descripcion-producto").val();
    var categorias = $("#categoria-producto").val();
    var precio = $("#precio-producto").val();

    var errores = [];

    if($.trim(productos) === '' ) {
        errores.push("Debe ingresar un producto") ; 
    
    if($.trim(descripcion) === '' ) 
        errores.push("Debe ingresar una descripcion") ; 
    
    if($.trim(categorias) === '' ) 
        errores.push("Debe ingresar una categoria") ; 
    
    if($.trim(precio) === '' ) 
        errores.push("Debe ingresar un precio") ; 
    
    if(errores.length > 0)
    /* errores.push("Roberto Carlos") */
    alert(errores.join("\n"))
    return false;
    }
    return true;
})
