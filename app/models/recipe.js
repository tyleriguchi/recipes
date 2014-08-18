import DS from 'ember-data';

var Recipe = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  steps: DS.hasMany('step', { async: true }),
  ingredients: DS.hasMany('ingredient', { async: true })
});

Recipe.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Spaghetti and meat",
      description: "ITS NOODLES AND MEAT",
      steps: [1, 2, 3],
      ingredients: [1,2,3]
    },

    {
      id: 2,
      title: "Gyro",
      description: "ITS A TACO",
      steps: [4, 5],
      ingredients: [4, 5]
    }
  ]
});

export default Recipe;
