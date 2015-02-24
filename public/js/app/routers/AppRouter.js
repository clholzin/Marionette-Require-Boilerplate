define(['backbone', 'marionette'],
    function(Backbone, Marionette) {
        return Backbone.Marionette.AppRouter.extend({
           //"index" must be a method in AppRouter's controller
           appRoutes: {
               "": "index",
               "index": "index",
               "login": "login",
               "logout": "logout",
               "register": "register",
               "about": "about",
               "about/reports":"reports"
           },
            routes: {
                "about/reports":"reports"
            }
           /** reports: function(){
               var rview = new ReportsView();
            }**/
   });
});