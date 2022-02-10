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
                    accPnl.slideDown();
                } else{
                    _this.removeClass('active');
                    accPnl.slideUp();
                }
                
            });

            _this.keydown(function(event){
                

                if (event.key == "ArrowUp") {
                    event.preventDefault();
                    _this.parent().prev().find('[data-acc="button"]').focus();
   
                }
                if (event.key == "ArrowDown") {
                    event.preventDefault();
                    _this.parent().next().find('[data-acc="button"]').focus();
             
                }
                if (event.key == "Home") {
                    event.preventDefault();
                    _this.closest('.acc').find('li:first-child > [data-acc="button"]').focus();
                }
                if (event.key == "End") {
                    event.preventDefault();
                    _this.closest('.acc').find('li:last-child > [data-acc="button"]').focus();
                }


            });


            // //Keyboard support

            // $(document).on('keydown', function(event) {

            //     if(_this.focus){
            //         if (event.key == "ArrowUp") {
            //             console.log('Up arrow pressed');
            //         }
            //         else if (event.key == "ArrowDown") {
            //             console.log('Down arrow pressed');
            //         }
            //     }
               
            // });
            
        });

       
    }

    accordion();
    
});