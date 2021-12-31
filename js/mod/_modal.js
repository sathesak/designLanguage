define(['modal','jquery'], function(){

    var modal = {};

    modal = function(){

        //Modal box trigger function

        var modalButton = $('[data-modalbtn]');

        modalButton.each(function(){
            var _this = $(this);
            var $id = _this.attr('data-modalbtn');

            _this.click(function(event){
                event.preventDefault();
                var scrollY = -window.scrollY;
                $('body').css(
                {
                    'top':scrollY,
                    'position':'fixed'
                });

                var modalWrap = $('[data-modalwrap="' + $id + '"]');
                var modalClose = modalWrap.find('[data-modalclose');
         
                modalWrap.fadeIn();
                modalClose.focus();

            });
            
        });

        //Modal close function

        var modalCloseFunction = function(){
            var scrollY = document.body.style.top;
         
            $('[data-modalwrap]').fadeOut();
            $('body').removeAttr('style');

            $('html').css({
                'scroll-behavior':'unset'
            });

            window.scrollTo(0,parseInt(scrollY || '0') * -1);
        };

        //close function applied on the close link
        var modalClose = $('[data-modalclose]');

        modalClose.click(function(event){
            event.preventDefault();
            
            modalCloseFunction();

        });

        //close function applied on the close link
        var modaloverlay = $('[data-modaloverlay]');

        modaloverlay.click(function(){

            modalCloseFunction();

        });


        //close function applied on the escape key link

        $(document).on('keydown', function(event) {
            if (event.key == "Escape") {
                modalCloseFunction();
            }
        });

        //close bar sticky function

        $('[data-modalbox]').scroll(function(){

            var _this = $(this);

            var bar = _this.find('[data-modalclosebar]');
            var barOffset = bar.offset().top;

            if (barOffset < 65){
                bar.addClass('sticky');
            }

            else if (barOffset >= 65){
                bar.removeClass('sticky');
            }

        });

    }

    modal();
    
});