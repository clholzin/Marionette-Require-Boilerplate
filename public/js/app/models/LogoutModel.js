define(["jquery", "backbone"],
    function($, Backbone) {
        // Creates a new Backbone Model class object
        var LogoutModel = Backbone.Model.extend({
            url:'http://localhost:8001/logout'
        });

        // Returns the Model class
        return LogoutModel;

    }

);