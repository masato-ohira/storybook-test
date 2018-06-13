'use strict';

import {storiesOf} from '@storybook/vue';
import {withNotes} from '@storybook/addon-notes';

import MyTitle from '../examples/title.vue';
import CodeExample from '../examples/code-example.vue';
// import VueInfoAddon from 'storybook-addon-vue-info';

const btnEx = storiesOf('MyTitle', module);
// btnEx.addDecorator(withNotes);

btnEx.add('default', withNotes(`
  特記事項がある場合は
  ここに書く
`)( () => {
  return {
    components: {CodeExample, MyTitle},
    template: `<code-example>
      <my-title story="default"></my-title>
    </code-example>`,
  };
}));

btnEx.add('size', () => {
  return {
    components: {CodeExample, MyTitle},
    template: `<code-example>
      <my-title story="size"></my-title>
    </code-example>`,
  };
});
