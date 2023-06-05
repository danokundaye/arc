var burger = $("#burger");
var menu = $("#menu");

burger.click(function(){
    if (menu.hasClass("hidden")){
        menu.removeClass("hidden");
    }else{
        menu.addClass("hidden");
    }
})