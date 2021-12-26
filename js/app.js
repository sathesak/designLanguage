requirejs.config({
    baseUrl: 'js',
    paths: {

        //libraries
        jquery: [
            'https://code.jquery.com/jquery-3.6.0.min',
            'lib/jquery.min'
        ],

        //modules
        accordion: 'mod/_accordion.min'

    },
   
});

require(['jquery'],function(){

    $(document).ready(function(){
        if(document.typ)
        require(['accordion']);
    });
    
});