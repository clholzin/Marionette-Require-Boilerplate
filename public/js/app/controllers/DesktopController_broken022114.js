define(['App', 'backbone', 'marionette', 'jquery', 'views/WelcomeView', 'views/AboutView',
        'views/DesktopHeaderView', 'views/SideBarMain','views/ReportsView','views/LoginView','views/RegisterView',
        'collections/LoginCollection','collections/RegisterCollection','models/LoginModel'],
    function (App, Backbone, Marionette,  $, WelcomeView, AboutView,DesktopHeaderView,
              SideBarMain,ReportsView,LoginView,RegisterView,
              LoginCollection,RegisterCollection,LoginModel) {
        "use strict";
        return Backbone.Marionette.Controller.extend({

        initialize:function(attributes,options) {
            var user = new LoginCollection,
                userModel = new LoginModel;
                  /**var desktopHeaderView = new DesktopHeaderView({collection: response});
                   App.headerRegion.show(desktopHeaderView);
                   }});**/

                  user.fetch({
                      success: function (collection, response) {
                         // _.each(collection.models, function (model) {
                  //DesktopHeaderView = new DesktopHeaderView({collection: collection});
                          console.log(response);
               DesktopHeaderView = new DesktopHeaderView({collection: collection,serializeData:function(){return response;}});
                        //  });
                      }

                  });
            App.headerRegion.show(DesktopHeaderView);
            //desktopHeaderView.render();
            //this.options = options;
            //var f = Marionette.getOption(this, "username");
            //console.log(f);
        },
        //gets mapped to in AppRouter's appRoutes]
        index:function() {
            App.mainRegion.show(new WelcomeView());
            App.sideRegion.empty();
        },
        login:function() {
            var user = new LoginCollection,
                userModel = new LoginModel;
          /**  user.on("add", function(item) {
                alert("Ahoy " + item.get("user") + "!");
            });**/
            App.mainRegion.show(new LoginView({collection:user,model:userModel}));
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