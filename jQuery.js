// conect library to HTML <head></head>.  
/*
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
*/

//JS 
document.getElementById('test').onclick = function(){
    alert('clicked');
}
//jQuery
$('#test').click(function(){
    alert('Clicked');
})

//BestPractice 
$(document).ready(function(){
    $('#test').click(function(){
        alert('Clicked');
    })
})


//EVENTS
$(document).ready(function(){
    $('#p1').hover(function(){
        $(this).hide();
    });
    $('#p2').click(function(){
        $(this).hide();
    });
    $('#p3').dbclick(function(){
        $(this).hide();
    });
    $('#p4').mouseout(function(){
        $(this).hide();
    });

    var menuTrigger = false;
    $(document).keypress(function(e){
        if(e.which == 13) {
            if(menuTrigger === false){
                $('nav').fadeIn(500);
                menuTrigger = true;
            }
            else if(menuTrigger === true){
                $('nav').fadeOut(500);
                menuTrigger = false;
            }
        }
    })
})

///Animate. nide animatetion
$('.content-box').click(function(){
    $('.content-box').animate({
        width: '500px',
        height: '400px'
    }, 3000).animate({
        fontSize: '30px'
    },3000).fadeOut();
});


//stiop animation 
$('.button').click(function(){
    $('.content-box').stop(true, true); 
    //$('.content-box').stop(true); 
});

