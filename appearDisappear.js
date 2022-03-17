$(document).ready(function(){
    $('#close').click(function(){
        $("#side-nav").hide();
    })
    $('#open').click(function(){
        $("#side-nav").show();
    })
    $('#toggle').click(function(){
        //$("#side-nav").toggle();
        $("#side-nav").toggle(3000, function(){
            alert("Hi there");
        });
    })
    $('#fade').click(function(){
        $("#side-nav").fadeIn();
        $("#side-nav").fadeOut();
        $("#side-nav").fadeToggle();
    })
    $('#fade').click(function(){
        //$("#side-nav").toggle();
        $("#side-nav").fadeTo(1000, 0.5, function(){
            alert("Hi there");
        });
    })
});


