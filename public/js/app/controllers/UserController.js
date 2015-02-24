define(['App', 'backbone', 'marionette', 'jquery',
        'views/DesktopHeaderView','views/LoginView','views/RegisterView'],
    function (App, Backbone, Marionette,  $, DesktopHeaderView,LoginView,RegisterView) {
        "use strict";
        return Backbone.Marionette.Controller.extend({
        initialize:function(options) {
            if(App.headerRegion.hasView()){

            }else{
                App.headerRegion.show(new DesktopHeaderView());
            }

        },
            login:function() {
                App.mainRegion.show(new LoginView());
                App.sideRegion.empty();
            },
            register:function() {
                App.mainRegion.show(new RegisterView());
                App.sideRegion.empty();
            }

    });
});