import DS from 'ember-data';
import attr from 'ember-data/attr';
import Ember from 'ember';

let inflector = Ember.Inflector.inflector;
inflector.uncountable('innaccuser');

export default DS.Model.extend({
  account: attr('number'),
  inn: attr('string')
});
