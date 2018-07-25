/*
$(function(){
        $(".btn-success").click(function () {
           var content = $(this).val();
              $("#display").val( content );
           });
        });
*/

$(function(){
        $(".btn").click(function () {
           if($(this).attr('data-role')!='op'){
                $("#display").val($("#display").val()+$(this).val());
           }
           else{
               if($("#display").val()!=''){
                   $("#display").val($("#display").val()+$(this).val());
               }
           }
         });


        $("#clear").click(function(){
            $("#display").val('');
        });

        $("#equal").click(function(){
            var expr=$("#display").val();
            $("#display").val(eval(expr));
        });
     });
