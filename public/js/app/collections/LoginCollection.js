define(["App","jquery","backbone","models/LoginModel"],
  function(App,$, Backbone, LoginModel) {
    // Creates a new Backbone Collection class object
    App.LoginCollection = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: LoginModel,
      url:'/login',
      parse: function(response) {
            return response;
      }
    });

    return App.LoginCollection;
  });