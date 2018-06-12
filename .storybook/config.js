'use strict';

import {configure} from '@storybook/vue';
import Vue from 'vue';

function loadStories() {
  require('../_src/vue/stories');
}

configure(loadStories, module);
