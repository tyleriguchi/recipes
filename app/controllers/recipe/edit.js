import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function(model) {
      this.transitionToRoute('recipe', model);
    }
  }
});
