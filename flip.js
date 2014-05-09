(function(){
    $('.flip').click(function(){
        $(this).find('.card').toggleClass('flipped');
        return false;
    });
    
    var frontHeight = $('.front').outerHeight();
    var backHeight = $('.back').outerHeight();
    if (frontHeight > backHeight) {
        $('.flip, .back').height(frontHeight);
    }
    else if (frontHeight > backHeight) {
        $('.flip, .front').height(backHeight);
    }
    else {
        $('.flip').height(backHeight);
    }
})();    