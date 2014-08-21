import startApp from '../helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - create a recipe', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Create a recipe', function() {
  visit('/recipes');
  andThen(function() {
    click('button');
    andThen(function() {
    });
  });
});
