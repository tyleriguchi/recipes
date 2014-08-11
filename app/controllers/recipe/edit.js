import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      var recipe = this.get('model');
      
      recipe.save();
      this.transitionTo('recipe', recipe);
    }
  }
});
