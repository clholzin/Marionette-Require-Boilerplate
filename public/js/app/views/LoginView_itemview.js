define(['jquery', 'hbs!templates/login', 'backbone', 'marionette','collections/LoginCollection'],
    function ($, template, Backbone,LoginCollection) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            collection:  LoginCollection,
            initialize: function(){
                _.bindAll(this, "Login");
            },
            onBeforeRender: function(){
                console.log('hit view LoginView');
                //this.collection.fetch();
            },
            serializeData : function() {
                // Get the model attributes that need some formatting.
                //var username = this.model.get("user");
                // Return an object to match the keys in your template.
                return {
                    //'user' : username
                };
                    /**age : this.model.get('age'),
                    city : addressObject.city,
                    // using moment.js library to format the date.
                    date : moment.unix(unixDate).format('MM/DD/YYYY')**/

            },
            events: {
                "click .loginbtn":          "Login"
            },
            Login: function(e){
                e.preventDefault();
               console.log('Login Clicked');
                var username = $("input[data-name='username']").val(),
                    password = $("input[data-name='password']").val();
                this.collection.add([
                    {username:username,password:password}
                ]);
                //this.model.save(username);
                //this.model.save(password);
                console.log(username +'  '+ password);
               // $('li.active').removeClass('active');
                //$(e.currentTarget).addClass('active');
                //$(e.currentTarget).siblings().removeClass('active');
            }
        });
    });