'use strict';

import {storiesOf} from '@storybook/vue';
import {withNotes} from '@storybook/addon-notes';
import {withKnobs, text} from '@storybook/addon-knobs';

import MyButton from '../examples/button.vue';
import CodeExample from '../examples/code-example.vue';
// import VueInfoAddon from 'storybook-addon-vue-info';

const btnEx = storiesOf('MyButton', module);
btnEx.addDecorator(withKnobs);
btnEx.add('default', withNotes(`
  特記事項がある場合は
  ここに書く
`)( () => {
  const mod = text('Modifier', '');
  return {
    components: {CodeExample, MyButton},
    template: `<code-example>
      <my-button story="default" mod="${mod}"></my-button>
    </code-example>`,
  };
}));

btnEx.add('color', () => {
  const mod = text('Modifier', '');
  return {
    components: {CodeExample, MyButton},
    template: `<code-example>
      <my-button story="color" mod="${mod}"></my-button>
    </code-example>`,
  };
});

btnEx.add('size', () => {
  const mod = text('Modifier', '');
  return {
    components: {CodeExample, MyButton},
    template: `<code-example>
      <my-button story="size" mod="${mod}"></my-button>
    </code-example>`,
  };
});

btnEx.add('style', () => {
  const mod = text('Modifier', '');
  return {
    components: {CodeExample, MyButton},
    template: `<code-example>
      <my-button story="style" mod="${mod}"></my-button>
    </code-example>`,
  };
});
