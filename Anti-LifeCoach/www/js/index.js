console.log("yo");

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