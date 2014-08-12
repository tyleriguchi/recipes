import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      var newRecipe = this.get('model');
      console.log(newRecipe);
      newRecipe.save();
      this.transitionTo('recipe', newRecipe);
    }
  }
});
