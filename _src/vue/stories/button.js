'use strict';

import {storiesOf} from '@storybook/vue';
import {withNotes} from '@storybook/addon-notes';

import MyButton from '../examples/button.vue';
import CodeExample from '../examples/code-example.vue';
// import VueInfoAddon from 'storybook-addon-vue-info';

const btnEx = storiesOf('MyButton', module);
// btnEx.addDecorator(withNotes);

btnEx.add('default', withNotes(`
  特記事項がある場合は
  ここに書く
`)( () => {
  return {
    components: {CodeExample, MyButton},
    template: `<CodeExample><MyButton story="default"></MyButton>`,
  };
}));

btnEx.add('color', () => {
  return {
    components: {CodeExample, MyButton},
    template: `<CodeExample><MyButton story="color"></MyButton>`,
  };
});

btnEx.add('size', () => {
  return {
    components: {CodeExample, MyButton},
    template: `<CodeExample><MyButton story="size"></MyButton></CodeExample>`,
  };
});

btnEx.add('style', () => {
  return {
    components: {CodeExample, MyButton},
    template: `<CodeExample><MyButton story="style"></MyButton></CodeExample>`,
  };
});
