import DS from 'ember-data';

var Recipe = DS.Model.extend({
  title: DS.attr('string'),
  steps: DS.attr(),
  description: DS.attr('string')
});

Recipe.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Spaghetti and meat",
      steps: [
        {string: "Cook noodles"},
        {string: "add meat"},
        {string: "eat the food"}
      ],
      description: "ITS NOODLES AND MEAT"
    },

    {
      id: 2,
      title: "Gyro",
      steps: [
        {string: "get lamb"},
        {string:"eat greek taco"}
      ],
      description: "ITS A TACO"
    }
  ]
});

export default Recipe;
