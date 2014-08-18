import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    create: function() {
      var store = this.store;
      var title = this.get('title').trim();
      var description = this.get('description').trim();

      var recipe = this.get('model');
      recipe.setProperties({
        'title': title,
        'description': description
      });
      var item = this.get('stepItem');
      var step = store.createRecord('step', {
        item: item
      });

      recipe.get('steps').then(function(result) {
        result.pushObject(step);
        result.save();
      });

      this.transitionToRoute('recipe', recipe);

    }
  }
});
