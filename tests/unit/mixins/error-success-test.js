import Ember from 'ember';
import ErrorSuccessMixin from 'benov-front/mixins/error-success';
import { module, test } from 'qunit';

module('Unit | Mixin | error success');

// Replace this with your real tests.
test('it works', function(assert) {
  let ErrorSuccessObject = Ember.Object.extend(ErrorSuccessMixin);
  let subject = ErrorSuccessObject.create();
  assert.ok(subject);
});
