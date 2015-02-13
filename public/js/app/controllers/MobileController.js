define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/AboutView', 'views/MobileHeaderView'],
    function (App, Backbone, Marionette, WelcomeView, AboutView, MobileHeaderView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new MobileHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            App.mainRegion.show(new WelcomeView());
        },
        about:function () {
            App.mainRegion.show(new AboutView());
        }
    });
});