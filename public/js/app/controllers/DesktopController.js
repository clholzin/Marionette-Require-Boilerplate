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
            var loginCollection = new LoginCollection();

            var  desktopHeaderView = new DesktopHeaderView({
                collection:loginCollection,
                model:loginModel });
            App.headerRegion.show(desktopHeaderView);
            App.mainRegion.on("swap", function(view, region, options){
            return this.initialize();
            });
            App.headerRegion.on("show", function(view, region, options){
                return this.initialize();
            });
            /**  user.on("add", function(item) {
                alert("Ahoy " + item.get("user") + "!");
            });**/

            /**App.headerRegion.on("show", function(view, region, options){
                view.render();
            });**/

        },
        //gets mapped to in AppRouter's appRoutes]
        index:function() {
            App.mainRegion.show(new WelcomeView());
            App.sideRegion.empty();
            return this.initialize();

        },
        login:function() {
            var loginModel = new LoginModel;
            var loginCollection = new LoginCollection();

          /**  user.on("add", function(item) {
                alert("Ahoy " + item.get("user") + "!");
            });**/
          var  loginView = new LoginView({
              collection:loginCollection,
              model:loginModel });
            App.mainRegion.show(loginView);
            App.sideRegion.empty();
            return this.initialize();
        },
        logout:function() {
            var logoutModel = new LogoutModel;
            var loginModel = new LoginModel;
            var loginCollection = new LoginCollection();
            loginModel.clear();
            loginCollection.remove();
            logoutModel.fetch();

            App.mainRegion.show(new LoginView({collection:loginCollection,model:loginModel}));
            App.sideRegion.empty();
            return this.initialize();
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
            return this.initialize();
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