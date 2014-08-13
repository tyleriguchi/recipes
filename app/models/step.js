import DS from 'ember-data';

var step = DS.Model.extend({
  item: DS.attr('string'),
  recipe: DS.belongsTo('recipe')
});

step.reopenClass({
  FIXTURES: [
    {
      id: 1,
      item: "Cook noodles"
    },

    {
      id: 2,
      item: "add meat"
    },

    {
      id: 3,
      item: "eat the food"
    }
  ]
});

export default step;
