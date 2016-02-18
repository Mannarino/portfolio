$(document).ready(function(){
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
 


