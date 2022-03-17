$("document").ready(function(){
    var page_url = window.location.href;
    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    
    if (page_id == "section3") {
        $('html, body').animate({
            scrollTop: $("#scroll-" + page_id).offset().top
        },2000);  
    }else if(page_id == "post"){
        $('html, body').animate({
            scrollTop: $("#scroll-" + page_id).offset().top
        },2000);  
    }

});



//DOM 
$(document).ready(function(){
    $('#btn1').click(function(){
       // alert($("#test1").text());
       $('#test1').text("This is the new text!");
    }) 
    $('#btn2').click(function(){
        //alert($("#test2").html());
        $('#test1').html("<i> This is the new text! </i>");
    }) 
    $('#btn1').click(function(){
        //alert($("#test3").val());
        $('#test3').val("New input data");
    }) 
});

var createEle = document.createElement("p");
createEle.innerHTML = "A new new Paragraph"


$('#container').append("A new paragraph, Another Paragrah"); //new last element on container
$('#container').prepend("<p> A new paragraph</p>"); //first last element on container
$('#container').before("<p> A new paragraph</p>"); //new element before continer
$('#container').after("<p> A new paragraph</p>"); //new element after container