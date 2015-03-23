define(["App","jquery", "backbone"],
    function(App,$, Backbone) {
        // Creates a new Backbone Model class object
        App.LoginModel = Backbone.Model.extend({
            idAttribute: "_id",
            url:'http://localhost:8001/login',
            // Model Constructor
            initialize: function() {
                this.on('error', this.showError);
                this.on('getUser', this.getUser);
                this.bind('remove', this.removeUser);
            },

            // Default values for all of the Model attributes
            defaults: {
            },
            parse:function(response){
                return response.result;
            },
            // Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {
                /**if (!attrs.username) {
                    return "Please enter a username";
                }
                if (!attrs.password) {
                    return "Please enter a password";
                }**/
            },
            showError: function (model, error) {
                console.log(error);
                alert(error);
                //alert('Removed Task');
            },
            removeUser: function () {
                this.destroy();
            },
            getUser: function(){
                //this.set('votes', this.get('votes') + 1);
                this.get('username');
            }
            /**saveUser: function(user){
                //this.set('votes', this.get('votes') + 1);
                this.save(user);
            }**/

        });

        // Returns the Model class
        return App.LoginModel;

    }

);