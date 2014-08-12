import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RecipesENV.locationType
});

Router.map(function() {
  this.resource('recipes', { path: '/recipes' }, function() {
    this.resource('recipe', { path: '/:recipe_id' }, function() {
      this.route('edit');
    });
  });
  this.route('create');
});

export default Router;
