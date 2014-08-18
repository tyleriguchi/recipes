import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    edit: function() {
      this.transitionToRoute('recipe.edit');
    },

    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('recipes');
    }
  }
});
