requirejs.config({
    baseUrl: 'js',
    paths: {

        //libraries
        jquery: [
            'https://code.jquery.com/jquery-3.6.0.min',
            'lib/jquery.min'
        ],

        //modules
        accordion: 'mod/_accordion.min',
        modal: 'mod/_modal.min'

    },
   
});

require(['jquery'],function(){

    $(document).ready(function(){
        if(typeof modules.accordion !== 'undefined' & modules.accordion === true){
            require(['accordion']);
        }

        if(typeof modules.modal !== 'undefined' & modules.modal === true){
            require(['modal']);
        }
    });
    
});