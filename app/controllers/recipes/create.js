import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    create: function() {
      var store = this.store;
      var recipe = store.createRecord('recipe', {
        title: 'this is a test',
        description: 'ohhh boy',
      });
      var item = store.createRecord('step', {
        item: 'item'
      });

      recipe.get('steps').then(function(step) {
        step.pushObject(item);
      });
        // this.transitionToRoute('recipe', recipe);
    }
  }
});
