import DS from 'ember-data';

var step = DS.Model.extend({
  step: DS.attr('string'),
  recipe: DS.belongsTo('recipe')
});

step.reopenClass({
  FIXTURES: [
    {
      id: 1,
      step: "Cook noodles"
    },

    {
      id: 2,
      step: "add meat"
    },

    {
      id: 3,
      step: "eat the food"
    }
  ]
});

export default step;
