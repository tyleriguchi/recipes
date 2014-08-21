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
  visit('/recipes/create');
  andThen(function() {
    fillIn('input[name="title"]', 'test');
    fillIn('.description-textarea', 'this is an integration test');
    fillIn('.number', 1);
    fillIn('.ingredient', 'testies');
    fillIn('.step', 'test step');
    click('.btn');
    andThen(function() {
      equal(find('h2').text(), 'test');
      equal(find('.recipe--text').text(), 'Description: this is an integration test');
      equal(find('.ingredient').text(), '1, testies');
      equal(find('.step').text(), 'test step');
    });
  });
});
