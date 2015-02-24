define(['jquery','handlebars','hbs', 'hbs!templates/login', 'backbone', 'marionette','collections/LoginCollection'],
    function ($,Handlebars,hbs, template, Backbone,LoginCollection) {
        //ItemView provides some default rendering logic
        return Backbone.View.extend({
            template: template,
           // collection:  LoginCollection,
            initialize: function(){
                _.bindAll(this, "Login","render");
                console.log('hit view Login');
                // Or, more commonly, create the collection outside the view
                // and say `new View({ collection: ... })`
                this.collection.on('reset', this.render, this);
                this.collection.fetch();
                this.render();
            },
            render: function() {
              /**  this.$el.html(this.template({someVar:"HIIIIIII", selectOptions: selectOptions}));
                return this;**/
                this.$el.html(this.template({user: this.collection.toJSON()}));
                return this;
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