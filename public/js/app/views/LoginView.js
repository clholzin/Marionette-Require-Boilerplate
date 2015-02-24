define(['jquery','underscore', 'hbs!templates/login', 'backbone','hbs!templates/welcome_user', 'marionette'],
    function ($, _, template, Backbone,WelcomeTemplate) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            initialize: function(){
                //_.bindAll(this);
            },
            title: 'Welcome',
            templateHelpers: {
                title: function () {
                    return this.title;
                },
                user: function () {
                    return this.model.attributes.user;
                }
            },
            onBeforeRender: function() {
                console.log('hit view LoginView');
                if(this.templateHelpers.user.username){
                    this.template = WelcomeTemplate;
                }

            },
            onRender:function(){

                var defer = $.Deferred();
                var Data = {};
                var Tmodel = this.model;
                Tmodel.fetch({
                    success:function(model,data,options){
                        defer.resolve(data);//arg1 value
                        model.set(data);
                       // console.log(json.stringify(options));
                        console.log('got to data');
                    },
                    error:function(data){
                        defer.resolve(undefinded);
                        alert('Error: '+ data)
                    }
                });
                return defer.promise().done(function( arg1 ) {
                    // Will fire right away and alert "true"
                  //alert('Loggin: ' + JSON.stringify(username));

                });
            },
            /**serializeData : function() {
                // Get the model attributes that need some formatting.
                //var username = this.model.get("user");
                // Return an object to match the keys in your template.
                return {
                    //'user' : username
                };
                    age : this.model.get('age'),
                    city : addressObject.city,
                    // using moment.js library to format the date.
                    date : moment.unix(unixDate).format('MM/DD/YYYY')

            },**/
            events: {
                "click .loginbtn":          "submitLogin"
            },
            submitLogin: function(e){
                e.preventDefault();
               console.log('submitLogin Clicked');
                var username = $("input[data-name='username']").val(),
                    password = $("input[data-name='password']").val();
                //user.create({username:username,password:password});
                this.model.save({ username: username,password: password});
                this.collection.add({user:{username:this.model.get('username')}});
               this.model.fetch();
                console.log(username +'  '+ password);
                this.$('ul li.main-menu').siblings().removeClass('active');
                //this.$('ul li.main-menu').first().addClass('active');
                $("input[data-name='username']").val('');
                $("input[data-name='password']").val('');
                window.location.hash = 'about';

                //this.render();
                //window.location.hash = '/#login';
            }
        });
    });