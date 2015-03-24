define(["App","jquery", "backbone"],
    function(App,$, Backbone) {
        // Creates a new Backbone Model class object
       App.RegisterModel = Backbone.Model.extend({
            idAttribute: "_id",
            urlRoot:'http://192.68.2.98:8001/register',
            // Model Constructor
            initialize: function() {
                this.on('error', this.showError);
                //this.bind('remove', this.removeUser);
            },
            // Default values for all of the Model attributes
            defaults: {
                username:'',
                password:''
            },
            // Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {
                if (!attrs.username) {
                    return "Please enter a username";
                }
                if (!attrs.password) {
                    return "Please enter a password";
                }
            },
            showError: function (model, error) {
                console.log('removed user');
                //alert('Removed Task');
            }

        });

        // Returns the Model class
        return App.RegisterModel;

    }

);