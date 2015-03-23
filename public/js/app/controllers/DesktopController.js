define(['App','underscore', 'backbone', 'marionette', 'jquery', 'views/WelcomeView', 'views/AboutView',
        'views/DesktopHeaderView', 'views/SideBarMain','views/ReportsView','views/LoginView','views/RegisterView',
        'collections/LoginCollection','collections/RegisterCollection','models/LoginModel',
        'models/LogoutModel'],
    function (App, _, Backbone, Marionette,  $, WelcomeView, AboutView,DesktopHeaderView,
              SideBarMain,ReportsView,LoginView,RegisterView,
              LoginCollection,RegisterCollection,LoginModel,LogoutModel) {
        //"use strict";
        return Backbone.Marionette.Controller.extend({

        initialize:function(options) {
            var loginModel = new LoginModel;
           // var loginCollection = new LoginCollection();
            var  desktopHeaderView = new DesktopHeaderView({
                model: loginModel });
            App.headerRegion.show(desktopHeaderView);

           /**loginModel.on("change", function(DesktopHeaderView) {
                var d = new DesktopHeaderView;
                d.render();
            });**/

        },
        //gets mapped to in AppRouter's appRoutes]
        index:function() {
            App.mainRegion.show(new WelcomeView());
            App.sideRegion.empty();

        },
        login:function() {
            var loginModel = new LoginModel;
            var loginCollection = new LoginCollection();

            loginModel.on("set", function(item) {
                alert("Ahoy " + item.get("username") + "!");
                this.initialize();
            });
          var loginView = new LoginView({
              collection:loginCollection,
              model:loginModel });
            App.mainRegion.show(loginView);
            App.sideRegion.empty();
        },
        logout:function() {
            var logoutModel = new LogoutModel;
            var loginModel = new LoginModel;
            var loginCollection = new LoginCollection();
            loginModel.clear();
            loginCollection.remove();
            logoutModel.fetch();
            loginModel.on("clear", function(item) {
                alert("Bye bye!");
                this.initialize();
            });
            App.mainRegion.show(new LoginView({collection:loginCollection,model:loginModel}));
            App.sideRegion.empty();
        },
        register:function() {
            var register = new RegisterCollection;
            App.mainRegion.show(new RegisterView({collection: register}));
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

/**App.mainRegion.on("swap", function(view, region, options){
             this.initialize();
            });**/
/** App.mainRegion.on("show", function(DesktopHeaderView, region, options){
                var d = new DesktopHeaderView;
                d.render();
            });**/

/**  user.on("add", function(item) {
                alert("Ahoy " + item.get("user") + "!");
            });**/

/**App.headerRegion.on("show", function(view, region, options){
                view.render();
            });**/
