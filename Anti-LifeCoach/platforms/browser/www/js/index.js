console.log("yo");

var $$ = Dom7;

var badDeed = $(".item-input-info")

var counter = 0;

var cSrc;

var rants = ["I need clothes!", "Do bad things!", "Skip class to finish your app!", "ENERGY DRINKS"]

var app = new Framework7({
    //app root element!
    root: '#app',
    //other parameters

    routes: [{
            path: '/',
            url: 'index.html'
    },
        {
            path: '/page2/',
            url: './pages/page2.html'
        },
            
        {
            path: '/page3/',
            url: './pages/page3.html'
        },

    ]
});

var mainView = app.views.create('.view-main');



    setInterval(function(){
        
    $(".rants").text(rants[counter]);
        counter++;
        
        if(counter == rants.length){
            
            counter = 0;
        }
        
    }, 4000);


$(".devil").on("click", function(){
    
   cSrc = $(this).attr("src");
});

$$(document).on('page:init', '.page[data-name="page2"]', function() {
    
    console.log(cSrc);
    
    $("#devil").html("<img src='" + cSrc + "' class='pet'>");
    
    $("#naked_devil").remove()
    
});

$(".button").on("click", function(){
    
    console.log("purchase");
    $("#naked_devil").html('<img src="img/gifs/ballerina_blink.gif">');
});