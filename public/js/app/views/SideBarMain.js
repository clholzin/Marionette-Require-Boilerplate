define(['jquery', 'hbs!templates/main_sidebar', 'backbone', 'marionette'],
    function ($, template, Backbone) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            events: {
                "click li#sideMenu":          "clickedSideNav"
            },
            clickedSideNav: function(e){
                //console.log(e);
                $('li#sideMenu.active').removeClass('active');
                $(e.currentTarget).addClass('active');

                //$(e.currentTarget).siblings().removeClass('active');
            }
        });
    });