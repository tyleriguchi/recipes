import DS from 'ember-data';

var Recipe = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string')
});

Recipe.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Spaghetti and meat",
      description: "ITS NOODLES AND MEAT"
    },

    {
      id: 2,
      title: "Gyro",
      descrption: "ITS A TACO"
    }
  ]
});

export default Recipe;
