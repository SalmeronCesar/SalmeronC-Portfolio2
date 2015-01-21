$("document").ready(function() {
    $(".yeah").css("background-color", "blue");

    $('p:last').css({"background-color": "", "color": "blue"});

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('h1').bind('click', mouseClick);
    
    $('#replaceWText').bind('click',replaceWText);
    
    $('#randPara').bind('click',addAPara);
    
    $('#removePara').bind('click', removeAPara);
    
    $('#show').css('visibility', 'hidden');
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
    
    $('#Portfolio3').accordion({header: "h3"});
});

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 2500);
     $('show').hide('puff', {}, 2500);
}

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>Good I hope so.</p>');
}

function replaceWText(){
    $('#randPara').html('<h1>Hows it going?</h1>');
}

function mouseOverMe() {
    $("h1").html("Jquery");
}
function mouseOutMe() {
    $('h1').html('is cool.');
}
function mouseClick() {
    $('p').html('Hello');
}