define(['modal','jquery'], function(){

    var modal = {};

    modal = function(){

        var modalButton = $('[data-modalbtn]');

        modalButton.each(function(){
            var _this = $(this);
            var $id = _this.attr('data-modalbtn');

            _this.click(function(){
                event.preventDefault();
                var scrollY = -window.scrollY;
                $('body').css(
                {
                    'top':scrollY,
                    'position':'fixed'
                });
         
                
                $('[data-modalbox="' + $id + '"]').fadeIn();


            });
            
            console.log($id);

        });

        var modalClose = $('[data-modalClose]');

        modalClose.click(function(){
            event.preventDefault();

            var scrollY = document.body.style.top;
         
            $('[data-modalbox]').fadeOut();
            $('body').removeAttr('style');

            $('html').css({
                'scroll-behavior':'unset'
            });

            window.scrollTo(0,parseInt(scrollY || '0') * -1);

        });
        
        
    }

    modal();
    
});