define(["jquery","backbone","models/AboutModel"],
  function($, Backbone, AboutModel) {
    // Creates a new Backbone Collection class object
    var AboutCollection = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: AboutModel
    });

    return AboutCollection;
  });