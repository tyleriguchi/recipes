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
      var stepItem = this.get('stepItem');
      if (!description) { return false; }
      if (!description.trim()) { return; }
      var step = store.createRecord('step', {
        item: stepItem
      });

      var ingredientSize = this.get('ingredientSize');
      var ingredientItem = this.get('ingredientItem');

      var ingredient = store.createRecord('ingredient', {
        size: ingredientSize,
        item: ingredientItem
      });

      // need to reformat
      recipe.get('steps')
        .then(function(result) {
          result.pushObject(step);
        });

      recipe.get('ingredients')
        .then(function(result) {
          result.pushObject(ingredient);
          result.save();
        });

      this.transitionToRoute('recipe', recipe);

    }
  }
});
