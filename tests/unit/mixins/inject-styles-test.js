import { module, test } from 'qunit';
import EmberObject from '@ember/object';
import InjectStylesMixin from 'ember-emotion/mixins/inject-styles';

module('Unit | Mixin | inject styles', function() {
  test('it verifies that the object has a registry key', function(assert) {
    const Klass = EmberObject.extend(InjectStylesMixin);

    assert.expectAssertion(() => {
      Klass.create();
    }, 'Emotion-enabled component must have a registry key');
  });
});
