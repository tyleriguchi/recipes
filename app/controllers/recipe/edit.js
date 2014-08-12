import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      var recipe = this.get('model');
      var steps = recipe.get('steps');
      
      recipe.save();
      this.transitionToRoute('recipe', recipe);
    }
  }
});
