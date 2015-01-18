$("document").ready(function() {
    $(".yeah").css("background-color", "blue");

    $('p:last').css({"background-color": "", "color": "white"});

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('h1').bind('click', mouseClick);
    
    $('#replaceWText').bind('click',replaceWText);
    
    $('#randPara').bind('click',addAPara);
    
    $('#removeApara').bind('click', removeAPara);
    
    $('#show').css('visibility', 'hidden');
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
    
    $('#Portfolio3').accordion({header: "h3"});
});

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('#div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 2500);
     $('show').hide('puff', {}, 2500);
}

function removeAPara(){
    $('#randPara').remove();
}

function addAPara(){
    $('#randPara').append('<p>Click me.</p>');
}

function replaceWText(){
    $('#randPara').html('<h1></h1>');
}

function mouseOverMe() {
    $("p").html("Jquery");
}
function mouseOutMe() {
    $('h1').html('Jquery');
}
function mouseClick() {
    $('p').html('');
}