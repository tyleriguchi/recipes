import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function(model) {
      // var steps = model.get('steps');
      // var content = steps.get('content').get('content');
      // content.forEach(function(item) {
      //   Ember.Logger.debug('item: ', item);
      // });
      // steps.each(function(item) {
      //   Ember.Logger.debug('item: ', item);
      // });
      this.transitionToRoute('recipe', model);
    }
  }
});
