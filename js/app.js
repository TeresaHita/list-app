$(document).ready(function(){
    $('.button').click(function(){
        var introduce = $('.text').val();
        $('.shopping-list').prepend("<li class='listitem'>" + introduce + "<button class='delete'>x</button> </li>");
        $('.text').val('');
    });
    $('text').click(function(){
        $('.text').val('');
    });
    $("ul").on("click", ".delete", function(){
        $(this).closest("li").remove();
    });
});