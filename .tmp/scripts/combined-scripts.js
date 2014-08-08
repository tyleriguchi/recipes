(function() {

var App = window.App = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

App.RecipeController = Ember.ObjectController.extend({
  // Implement your controller here.
});


})();

(function() {

App.RecipeEditController = Ember.ObjectController.extend({
  needs: 'recipe',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.recipe.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('recipe',this.get('model'));
    }
  }
});


})();

(function() {

App.RecipesController = Ember.ObjectController.extend({
  // Implement your controller here.
});


})();

(function() {

App.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

/*global Ember*/
App.Recipe = DS.Model.extend({
    title: DS.attr('string'),

    description: DS.attr('string')
});

// probably should be mixed-in...
App.Recipe.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
App.Recipe.FIXTURES = [

  {
    id: 0,

    title: 'spaghetti',

    description: 'it has noodles'

  },

  {
    id: 1,

    title: 'paella',

    description: 'it has rice and stuff'

  }

];


})();

(function() {

App.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

App.RecipeEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('recipe', this.modelFor('recipe').id);
  },
  setupController: function(controller, model){
    controller.set('model', model);
    buffer = model.get('attributes').map(function(attr){
      return { key: attr.get('key'), value: attr.get('value') }
    });
    controller.set('buffer', buffer)
  }
});


})();

(function() {

App.RecipeRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('recipe', params.recipe_id);
  }
});


})();

(function() {

App.RecipesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('recipe');
  }
});


})();

(function() {

App.RecipeEditView = Ember.View.extend({
});


})();

(function() {

App.RecipeView = Ember.View.extend({
});


})();

(function() {

App.RecipesView = Ember.View.extend({
});


})();

(function() {

App.Router.map(function () {

  this.resource('recipes', function(){
    this.resource('recipe', { path: '/:recipe_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });

});


})();