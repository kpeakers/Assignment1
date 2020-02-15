console.log("yo");

var $$ = Dom7;

//var badDeed = $("input.val()")



var counter = 0;

var cSrc;

var rants = ["I need clothes!", "Do bad things!", "Skip class to finish your app!", "ENERGY DRINKS", "I been drinking green tea all god damn day, you wanna bring the demons outta me?!"]

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


//cSrc = $('<img class="devil" id="main_devil" src="img/gifs/blink.gif">');


    setInterval(function(){
        
    $(".rants").text(rants[counter]);
        counter++;
        
        if(counter == rants.length){
            
            counter = 0;
        }
        
    }, 4000);


$("#main_devil").on("click", function(){
    
  console.log("they clicked me!");

  $("#main_devil").html('<img src="img/gifs/bataway.gif">');
    
   setTimeout(function(){
              
              $("#main_devil").hide();
              
              }) 
    , 2000
    
    $("#main_devil").show();  
});
//THIS ONLY WORKS UPON REFRESHING THE APP FOR SOME REASON???



$(".devil").on("click", function(){
    
   cSrc = $(this).attr("src");
 
    
$$(document).on('page:init', '.page[data-name="page2"]', function() {
   
    
    console.log(cSrc);
    
    $("#devilbox").html("<img src='" + cSrc + "' class='pet'>");
    
    $("#main_devil").remove();
    
});

});
//^^ TRYING TO GET THE MAIN DEVIL TO SWITCH BETWEEN OUTFITS

//$(".button").on("click", function(){
//    
//    console.log("purchase");
//    $("#naked_devil").html('<img src="img/gifs/ballerina_blink.gif">');
//});



//badDeed.on("keypress", function(e){
//     
//    if(e.key == "Enter"){
//        
//        var badDeed = $(this).val();
//        
//        console.log(badDeed.val());
//        
//        $('.item-input-info').prepend("<h1>" + badDeed + "</h1>");
//    }
//});
//^^TRYING TO MAKE THE LOGS STORE ON PAGE 3 AFTER YOU HIT ENTER 


$("#name").on("keypress", function(e){
    if(e.key == "K"){
        var name = $(this).val();
        console.log(name);
        $('.page-content').append("<h2>" + name + "</h2>");
//        $("#name").hide();
    }
});
    
