
$(document).ready(function(){
    for (var i = 0; i < 8; i++) {  
        var img = "<img src ='ninja.jpeg' id='myid"+i+"'/>"; 
        $("body #myimg").append(img);
        
    }
})

$("body #myimg").click(function(){
    $("body #myimg").hide();
});

$("button.restore").click(function(){
    $("body #myimg").show();
});
