$(document).ready(function(){

	 $('#img-uno').mouseover(agrandar);
          $('#img-uno').mouseout(achicar);
          function agrandar(){
          	     $('#imagen-uno').addClass('activo');
          }
           function achicar(){
          	     $('#imagen-uno').removeClass('activo');
          }


          $('#img-dos').mouseover(agrandardos);
          $('#img-dos').mouseout(achicardos);
          function agrandardos(){
          	     $('#imagen-dos').addClass('activo');
          }
           function achicardos(){
          	     $('#imagen-dos').removeClass('activo');
          }



          $('#img-tres').mouseover(agrandartres);
          $('#img-tres').mouseout(achicartres);
          function agrandartres(){
          	       $('#imagen-tres').addClass('activo');
          }
           function achicartres(){
          	       $('#imagen-tres').removeClass('activo');
          }



          $('#img-cuatro').mouseover(agrandarcuatro);
          $('#img-cuatro').mouseout(achicarcuatro);
          function agrandarcuatro(){
                  $('#imagen-cuatro').addClass('activo');
          }
           function achicarcuatro(){
                  $('#imagen-cuatro').removeClass('activo');
          }



          $('#img-cinco').mouseover(agrandarcinco);
          $('#img-cinco').mouseout(achicarcinco);
          function agrandarcinco(){
                  $('#imagen-cinco').addClass('activo');
          }
           function achicarcinco(){
                  $('#imagen-cinco').removeClass('activo');
          }
          

          $('#img-seis').mouseover(agrandarseis);
          $('#img-seis').mouseout(achicarseis);
          function agrandarseis(){
                  $('#imagen-seis').addClass('activo');
          }
           function achicarseis(){
                  $('#imagen-seis').removeClass('activo');
          }

          $('#siete').mouseover(agrandarsiete);
          $('#siete').mouseout(achicarsiete);
          function agrandarsiete(){
                  $('#imagen-siete').addClass('activo');
          }
           function achicarsiete(){
                  $('#imagen-siete').removeClass('activo');
          }

           $('#img-ocho').mouseover(agrandarocho);
          $('#img-ocho').mouseout(achicarocho);
          function agrandarocho(){
                  $('#imagen-ocho').addClass('activo');
          }
           function achicarocho(){
                  $('#imagen-ocho').removeClass('activo');
          }
          
	$(document).ajaxStart(function(){
		$('#formulario').css('display','none');
		$('#carga').css('display','block');
	});
	$(document).ajaxComplete(function(){
		
		$('#carga').css('display','none');
	});

		$('#formu').validate({

							    rules: {

								nombre:{required:true,
									minlength:3,
									maxlength:20,
								}
								,email:{required:true,
									minlength:3,
									maxlength:200,
									email:true,
									}
								,comentario:{required:true,
									minlength:3,
									maxlength:600,
									}	
							    }
							    ,messages:
							    {
							    	nombre:{required:'Completar es requerido',},
							    	comentario:{required:'Completar es requerido',},
							    	email:{required:'Completar es requerido',}
							    }
							    ,
						        submitHandler: function(form){
						            data=$('#formu').serialize();
				                      $.ajax({
				                        url:'contacto.php',
				                        type:'post',
				                        data:data,
				                                   success:function(datos){
				                                   $('#formulario').css('display','none');
				                                   $('#mostrar').html(datos);
				                                   $("#mostrar").fadeIn(3500);
				                                   
				                                   }
				                             });       
						                }
					    });

	
	
});




function limpiar()
 {
 	document.form.reset();
 	document.form.nombre.focus();
 }
 


