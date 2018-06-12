'use strict';

import {storiesOf} from '@storybook/vue';
import {withNotes} from '@storybook/addon-notes';
import {withKnobs, number} from '@storybook/addon-knobs';

import MyPager from '../examples/pager.vue';
import VueInfoAddon from 'storybook-addon-vue-info';

const pagerEx = storiesOf('MyPager', module);
pagerEx.addDecorator(VueInfoAddon);
pagerEx.addDecorator(withKnobs);

pagerEx.add('pager', withNotes(`
  特記事項がある場合は
  ここに書く
`)( () => {
   const page = number('page', 1);
   const limit = number('limit', 20);
   const results = number('results', 999);

  return {
    components: {MyPager},
    template: `<MyPager page=${page} limit=${limit} results=${results}></MyPager>`,
  };
}));
