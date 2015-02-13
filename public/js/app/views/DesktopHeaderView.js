define(['jquery', 'hbs!templates/desktopHeader', 'backbone', 'marionette'],
    function ($, template, Backbone) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            onRender: function(){
              console.log('hit desktop header temp.');
            },
            events: {
                "click li.main-menu":          "clickedHeader"
            },
            clickedHeader: function(e){
               this.$(e.currentTarget).addClass('active');
                this.$(e.currentTarget).siblings().removeClass('active');
            }
        });
    });