var student;
$(document).ready(function(){
    $("button#new").click(function(){
    $(".bank").hide();
    $(".container1").show();

    var name =$('#namee').val();
    
    $('#dg').text(name);

    var student =$('#initial').val();
    console.log(student)
    $('#mg').text(student);

    $("#submit").click(function(){
        var kub = parseInt($('#kubitsa').val());
        var withdr = parseInt($('#kubikuza').val());
        
        var sum = kub + parseInt(student);
        $('#mg').text(sum);
        // var sub =parseInt(student)-withdr;
        // $('#mg').text(sub);

       
    });

});

});
