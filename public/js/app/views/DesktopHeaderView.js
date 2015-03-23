define(['jquery','underscore', 'hbs!templates/desktopHeader', 'backbone', 'marionette'],
    function ($,_, template, Backbone) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            type:'handlebars',
            template: template,
            title: 'Dassian',
            templateHelpers: {
                title: function () {
                    return this.title;
                },
                user: function () {
                    return this.model.attributes.user;
                }
            },
            initialize:function(){
                _.bindAll(this,"menuClicked", "LogoutClicked","Login");
               //this.listenTo(this.model, 'save', this.render);
                this.listenTo(this.model, 'change', this.render);
                //this.listenTo(this.model, 'set', this.render);
                //this.listenTo(this.collection, 'remove', this.render);
                console.log('Render HeaderItemView');

            },
            onRender: function(){

                var defer = $.Deferred();
                var Data = {};
                var Dmodel = this.model;
                Dmodel.fetch({
                    success:function(model,data,options){
                        defer.resolve(data);//arg1 value
                        model.set(data);
                        console.log(model.attributes.user);
                        console.log('Header Rendered data');
                    },
                    error:function(data){
                        defer.resolve(undefinded);
                        alert('Error: '+ data)
                    }
                });
                return defer.promise().done(function( arg1 ) {
                    // Will fire right away and alert "true"
                    if(arg1 != 'undefined') {
                        //var username = arg1.user.username;
                        //alert('Loggin: ' + JSON.stringify(username));
                    }


                });
            },
            events: {
                "click li.main-menu":       "menuClicked",
                "click .logout":            "LogoutClicked",
                "click #main button.loginbtn":    "Login"
            },
            menuClicked: function(e){
                this.$(e.currentTarget).addClass('active');
                this.$(e.currentTarget).siblings().removeClass('active');
            },
            Login:function(){
              this.render();
            },
            LogoutClicked: function(){
                console.log('Logout Clicked');
               this.render();
            },
            clicked: function(e){
                e.preventDefault();
                var id = $(e.currentTarget).data("id");
                var item = this.collection.get(id);
                var name = item.get("name");
                alert(name);
            }
        });


    });

