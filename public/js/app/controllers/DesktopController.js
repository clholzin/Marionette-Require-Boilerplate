define(['App', 'backbone', 'marionette', 'jquery', 'views/WelcomeView', 'views/AboutView',
        'views/DesktopHeaderView', 'views/SideBarMain','views/ReportsView','views/LoginView'],
    function (App, Backbone, Marionette,  $, WelcomeView, AboutView,DesktopHeaderView,
              SideBarMain,ReportsView,LoginView) {
        "use strict";
        return Backbone.Marionette.Controller.extend({
        initialize:function(options) {
            App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes]
        index:function() {
            App.mainRegion.show(new WelcomeView());
            App.sideRegion.empty();
        },
            login:function() {
                App.mainRegion.show(new LoginView());
                App.sideRegion.empty();
            },
        about:function() {
            if(App.sideRegion.hasView()){
                App.mainRegion.show(new AboutView());
            }else{
                App.mainRegion.show(new AboutView());
                App.sideRegion.show(new SideBarMain());
            }
        },
            //part of About
                reports:function() {
                    console.log('hit reports controller');
                    if(App.sideRegion.hasView()){
                        App.mainRegion.show(new ReportsView());
                    }else{
                        App.mainRegion.show(new ReportsView());
                        App.sideRegion.show(new SideBarMain());
                    }
                    //App.sideRegion.show(new SideBarMain());
                }
    });
});