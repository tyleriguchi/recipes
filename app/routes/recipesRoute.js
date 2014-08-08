import Ember from 'ember';

var RecipesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('recipe');
  }
})
