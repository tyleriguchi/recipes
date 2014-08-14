import DS from 'ember-data';

var Recipe = DS.Model.extend({
  title: DS.attr('string'),
  steps: DS.hasMany('step', { async: true }),
  description: DS.attr('string')
});

Recipe.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Spaghetti and meat",
      steps: [1, 2, 3],
      description: "ITS NOODLES AND MEAT"
    },

    {
      id: 2,
      title: "Gyro",
      steps: [4, 5],
      description: "ITS A TACO"
    }
  ]
});

export default Recipe;
