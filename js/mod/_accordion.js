define(['accordion','jquery'], function(){

    var accordion = {};

    accordion = function(){
        
        var accBtn = $('[data-acc="button"]');

        $(accBtn).each(function() {
            var _this = $(this);
            var accPnl = _this.next();

            _this.focus(function(){
                _this.parent('li').addClass('focus');
            });

            _this.blur(function(){
                _this.parent('li').removeClass('focus');
            });

            _this.click(function(){
                event.preventDefault();

                if(accPnl.is(':hidden')){
                    _this.addClass('active');
                    _this.attr('aria-expanded','true');
                    accPnl.slideDown();
                } else{
                    _this.removeClass('active');
                    _this.attr('aria-expanded','false');
                    accPnl.slideUp();
                }
                
            });

            _this.keydown(function(event){
                
                if (event.key == "ArrowUp" || event.key == "ArrowLeft") {
                    event.preventDefault();
                   

                    if(_this.closest('li').is(':first-child')){
                        _this.closest('.acc').find('li:last-child > [data-acc="button"]').focus();
                    }else{
                        _this.parent().prev().find('[data-acc="button"]').focus();
                    }
                }
                if (event.key == "ArrowDown" || event.key == "ArrowRight") {
                    event.preventDefault();
                    

                    if(_this.closest('li').is(':last-child')){
                        _this.closest('.acc').find('li:first-child > [data-acc="button"]').focus();
                    }else{
                        _this.parent().next().find('[data-acc="button"]').focus();
                    }
                }
                if (event.key == "Home") {
                    event.preventDefault();
                    _this.closest('.acc').find('li:first-child > [data-acc="button"]').focus();
                }
                if (event.key == "End") {
                    event.preventDefault();
                    _this.closest('.acc').find('li:last-child > [data-acc="button"]').focus();
                }
                if (event.keyCode == 32) {
                    event.preventDefault();
                    _this.click();
                }

            });
        });

       
    }

    accordion();
    
});