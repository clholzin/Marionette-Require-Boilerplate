define( ['App', 'backbone', 'marionette', 'jquery', 'models/RegisterModel', 'hbs!templates/register'],
    function(App, Backbone, Marionette, $, RegisterModel, template) {
        //ItemView provides some default rendering logic
        return  Backbone.Marionette.ItemView.extend( {
            template: template,
            initialize: function(){
                _.bindAll(this, "register");
            },
            // View Event Handlers
            events: {
                "click .register":   "register"

            },
            register: function(e){
                e.preventDefault();
                var username = $("input[data-name='username']").val(),
                    password = $("input[data-name='password']").val();
                this.collection.create({ username: username,password: password}, {
                    success: function(item){
                        console.log(item.username.toJSON());
                    }
                });
               // console.log(username +'  '+ password);

            }
            /**
                tagName: "li",
                events: {
                "click a": "clicked"
                },
                clicked: function(e){
                e.preventDefault();
                var username = $("input[data-name='username']").val(),
                    password = $("input[data-name='password']").val();
                var name = this.model.get("name");
                alert(name);
                },

                render: function(){
                var template = $("#item-template");
                var html = template.tmpl(this.model.toJSON());
                $(this.el).append(html);
                }
             **/
        });
    });