import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('recipe');
  },
  renderTemplate: function() {
    this.render('recipe.edit', {
      controller: 'create'
    });
  }
});
