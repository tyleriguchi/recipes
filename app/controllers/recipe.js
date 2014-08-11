import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    edit: function() {
      this.transitionToRoute('recipe.edit');
    }
  }
});
