$(document).ready(function() {

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
          });