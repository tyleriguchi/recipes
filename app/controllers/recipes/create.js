import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    create: function() {
      var store = this.store;
      var title = this.get('title');
      if (!title) { return false; }
      if (!title.trim()) { return; }

      var description = this.get('description');
      if (!description) { return false; }
      if (!description.trim()) { return; }

      // add some alert if nothing
      
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
