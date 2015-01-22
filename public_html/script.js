$("document").ready(function() {
    /*!These 2 lines of code are telling you what background color you want.In my 
  case I dont want a color because I have a background image already*/
    $(".yeah").css("background-color", "");
    
    $('p:last').css({"background-color": "", "color": ""});
/*!Here in the 1st header mouseover function and mouseout function are taking place
 * and when you hover over a specific area the function will take place*/
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
/*!Here in the 1st header mouseClick function is taking place and so if you click 
 * on a specific place the function has been activated*/
    $('h1').bind('click', mouseClick);
/*!Here if you click on a specific area it will replace that certain text*/
    $('#replaceWText').bind('click', replaceWText);
/*!Here if you click on a certain place you will add a sentence,paragraph and or a word*/
    $('#randPara').bind('click', addAPara);
/*!Here if you click on a certain area you will remove a sentence,paragraph and or a word*/
    $('#removePara').bind('click', removeAPara);
/*!Here it hides a text*/
    $('#show').css('visibility', 'hidden');
/*!Here if you click on hide it will hide the whole website*/
    $('#hide').bind('click', hideThePage);
/*!Here if you click on a button "Welcome" the page will reappear*/
    $('#show').bind('click', showThePage);

    $('#Portfolio3').accordion({header: "h3"});
    /*!Here draggable is a function where you can move images around the screen*/
    $(function(){
        $("#draggable").draggable();
    });
});
/*!Here is the function where you hide the page*/
function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}
/*!Here is the function where you show the page or make it reappear*/
function showThePage() {
    $('div').show('fold', {}, 2500);
    $('show').hide('puff', {}, 2500);
}
/*!Here is the function where you remove a paragraph, sentence or word*/
function removeAPara() {
    $('#randPara p:last').remove();
}
/*!Here is the function where you add a paragraph, sentence or word but in this case
 * it will add "Aye hows it going?".*/
function addAPara() {
    $('#randPara').append('<p>Aye hows it going?</p>');
}
/*!Here is the function where you replace a text and in this case it will be "Hello and click me.*/
function replaceWText() {
    $('#randPara').html('<h1>Hello and click me.</h1>');
}
/*!Here this is the mouseover function and will "Jquery" when mluse is over it.*/
function mouseOverMe() {
    $("h1").html("Jquery");
}
/*!Here this is the mouseout function and will be is cool when mouse is not hovering over it.*/
function mouseOutMe() {
    $('h1').html('is cool.');
}
/*!Here this is the function mouseClick and so when you click on a certain word in
 * this case the word "Hello" will appear.*/
function mouseClick() {
    $('p').html('Hello');
}