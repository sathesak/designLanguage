define(['accordion','jquery'], function(){

    var accordion = {};

    accordion = function(){
        
        var accBtn = $('[data-acc="button"]');

        $(accBtn).each(function() {
            var _this = $(this);
            var accPnl = _this.next();

            _this.click(function(){
                event.preventDefault();

                if(accPnl.is(':hidden')){
                    _this.addClass('active');
                    accPnl.slideDown();
                } else{
                    _this.removeClass('active');
                    accPnl.slideUp();
                }
                
            });
            
        });
    }

    accordion();
    
});