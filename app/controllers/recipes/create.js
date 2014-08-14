import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    create: function() {
      var recipe = this.get('model');
      recipe.get('steps').then(function(steps) {
        Ember.Logger.debug('steps', steps.get('item'));
        steps.pushObject(recipe);
        recipe.save();
        // this.transitionToRoute('recipe', recipe);
      });

      // Ember.Logger.debug("recipe: ", newRecipe.get('steps'));
    }
  }
});
