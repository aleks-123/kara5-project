$( document ).ready(function() {

   //list
    
    $(".item1").click(function(){
    	$(".one").show();
        $(".two").hide();
    });
    $(".item1").click(function(){
    	$("#onHover").css("background-image","url(assets/images/img-1.jpg)");
    });
    $(".item2").click(function(){
    	$(".one").hide();
        $(".two").show();
    });
    $(".item2").click(function(){
    	$("#onHover").css("background-image","url(assets/images/img-2.jpg)");
    });
    $(".item3").click(function(){
        $(".one").show();
        $(".two").hide();
    });
    $(".item3").click(function(){
    	$("#onHover").css("background-image","url(assets/images/img-3.jpg)");
    });
    $(".item4").click(function(){
        $(".one").hide();
        $(".two").show();
    });
    $(".item4").click(function(){
    	$("#onHover").css("background-image","url(assets/images/img-1.jpg)");
    });
    $(".item5").click(function(){
        $(".two").hide();
        $(".one").show();
    });
    $(".item5").click(function(){
    	$("#onHover").css("background-image","url(assets/images/img-2.jpg)");
    });
    $(".item6").click(function(){
        $(".one").hide();
        $(".two").show();
    });
    $(".item6").click(function(){
    	$("#onHover").css("background-image","url(assets/images/img-3.jpg)");
    });
    $(".item7").click(function(){
        $(".two").hide();
        $(".one").show();
    });
    $(".item7").click(function(){
    	$("#onHover").css("background-image","url(assets/images/img-1.jpg)");
    });
    $(".item8").click(function(){
        $(".one").hide();
        $(".two").show();
    });
    $(".item8").click(function(){
    	$("#onHover").css("background-image","url(assets/images/img-2.jpg)");
    });
    $(".item9").click(function(){
        $(".two").hide();
        $(".one").show();
    });
    $(".item9").click(function(){
    	$("#onHover").css("background-image","url(assets/images/img-3.jpg)");
    });


    //hover (button,links)

    const arrow = "<i id='arrow' class='fa fa-arrow-right' aria-hidden='true'></i>"

    $("button").mouseover(function(){
        $(this).append(arrow);
    });
    $("button").mouseout(function(){
        $('#arrow').remove(); 
    });

    $(".aRed").mouseover(function(){
        $(this).append(arrow)
    });
    $(".aRed").mouseout(function(){
        $('#arrow').remove(); 
    });


});