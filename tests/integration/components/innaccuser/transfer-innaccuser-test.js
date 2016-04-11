import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('innaccuser/transfer-innaccuser', 'Integration | Component | innaccuser/transfer innaccuser', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{innaccuser/transfer-innaccuser}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#innaccuser/transfer-innaccuser}}
      template block text
    {{/innaccuser/transfer-innaccuser}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
