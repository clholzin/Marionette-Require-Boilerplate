define(["App","jquery","backbone","models/RegisterModel"],
  function(App,$, Backbone, RegisterModel) {
    // Creates a new Backbone Collection class object
    App.RegisterCollection = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: RegisterModel,
      url:'/register'
        /**parse: function(response) {
            return response.results;
        }**/
    });

    return App.RegisterCollection;
  });