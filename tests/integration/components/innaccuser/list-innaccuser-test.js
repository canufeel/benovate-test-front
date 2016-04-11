import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('innaccuser/list-innaccuser', 'Integration | Component | innaccuser/list innaccuser', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{innaccuser/list-innaccuser}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#innaccuser/list-innaccuser}}
      template block text
    {{/innaccuser/list-innaccuser}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
