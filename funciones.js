var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
$(document).ready(function(){
    $('.descripcion').hide();
    $('#boton1').on('click',function(){
        if(x1==0){
            $('#boton1').animate({
                borderTopLeftRadius: 0, 
                borderTopRightRadius: 0, 
                borderBottomLeftRadius: 0, 
                borderBottomRightRadius: 0,
            }, 500);
            $('#descripcion1').slideDown("slow");
            $('#boton1').html("Cerrar<br>descripción");
            x1=1;
            
        }else{
            $('#boton1').animate({
                borderTopLeftRadius: 0, 
                borderTopRightRadius: 0, 
                borderBottomLeftRadius: 10, 
                borderBottomRightRadius: 10,
            }, 500);
            $('#descripcion1').slideUp("slow");
            $('#boton1').html("Mostrar<br>descripción");
            x1=0;
            
        }
    });
    $('#boton2').on('click',function(){
        if(x2==0){
            $('#boton2').animate({
                borderTopLeftRadius: 0, 
                borderTopRightRadius: 0, 
                borderBottomLeftRadius: 0, 
                borderBottomRightRadius: 0,
            }, 500);
            $('#descripcion2').slideDown("slow");
            $('#boton2').html("Cerrar<br>descripción");
            x2=1;
        }else{
            $('#boton2').animate({
                borderTopLeftRadius: 0, 
                borderTopRightRadius: 0, 
                borderBottomLeftRadius: 10, 
                borderBottomRightRadius: 10,
            }, 500);
            $('#descripcion2').slideUp("slow");
            $('#boton2').html("Mostrar<br>descripción");
            x2=0;
        }
    });
    $('#boton3').on('click',function(){
        if(x3==0){
            $('#boton3').animate({
                borderTopLeftRadius: 0, 
                borderTopRightRadius: 0, 
                borderBottomLeftRadius: 0, 
                borderBottomRightRadius: 0,
            }, 500);
            $('#descripcion3').slideDown("slow");
            $('#boton3').html("Cerrar<br>descripción");
            x3=1;
        }else{
            $('#boton3').animate({
                borderTopLeftRadius: 0, 
                borderTopRightRadius: 0, 
                borderBottomLeftRadius: 10, 
                borderBottomRightRadius: 10,
            }, 500);
            $('#descripcion3').slideUp("slow");
            $('#boton3').html("Mostrar<br>descripción");
            x3=0;
        }
    });
    $('#boton4').on('click',function(){
        if(x4==0){
            $('#boton4').animate({
                borderTopLeftRadius: 0, 
                borderTopRightRadius: 0, 
                borderBottomLeftRadius: 0, 
                borderBottomRightRadius: 0,
            }, 500);
            $('#descripcion4').slideDown("slow");
            $('#boton4').html("Cerrar<br>descripción");
            x4=1;
        }else{
            $('#boton4').animate({
                borderTopLeftRadius: 0, 
                borderTopRightRadius: 0, 
                borderBottomLeftRadius: 10, 
                borderBottomRightRadius: 10,
            }, 500);
            $('#descripcion4').slideUp("slow");
            $('#boton4').html("Mostrar<br>descripción");
            x4=0;
        }
    });
})