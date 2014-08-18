import DS from 'ember-data';

var ingredient = DS.Model.extend({
  size: DS.attr(),
  item: DS.attr('string'),
  ingredient: DS.belongsTo('recipe')
});

ingredient.reopenClass({
  FIXTURES: [
    {
      id: 1,
      size: '1',
      item: "noodles"
    },

    {
      id: 2,
      size: '2 ounces',
      item: "meat"
    },

    {
      id: 3,
      size: '3 tablespoons',
      item: "Sauce"
    },

    {
      id: 4,
      size: '2 pounds',
      item: "lamb"
    },

    {
      id: 5,
      size: '1 tablespoon',
      item: "tzatziki"
    }
  ]
});

export default ingredient;
