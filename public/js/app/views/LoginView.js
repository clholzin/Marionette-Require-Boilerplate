define(['jquery', 'hbs!templates/login', 'backbone', 'marionette'],
    function ($, template, Backbone) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            events: {
                "click .loginbtn":          "clickeLogin"
            },
            clickeLogin: function(e){
               console.log('Login Clicked');
               // $('li.active').removeClass('active');
                //$(e.currentTarget).addClass('active');

                //$(e.currentTarget).siblings().removeClass('active');
            }
        });
    });