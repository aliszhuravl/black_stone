$("#show-more").click(function(){
    $(".smth-else").fadeIn( 500 ).css('display', 'block').removeClass('hidden');
    $("#show-more").addClass('hidden');
});