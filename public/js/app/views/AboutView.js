define( ['App', 'backbone', 'marionette', 'jquery', 'models/AboutModel', 'hbs!templates/about'],
    function(App, Backbone, Marionette, $, AboutModel, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend( {
            template: template,
            model: new AboutModel({
                mobile: App.mobile
            }),

            // View Event Handlers
            events: {

            },
            remove: function(){
                // custom destroying and cleanup goes here
            }
            /**
                tagName: "li",
                events: {
                "click a": "clicked"
                },
                clicked: function(e){
                e.preventDefault();
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