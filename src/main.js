import Vue from 'nativescript-vue';
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

import './styles.scss';

import Login from './views/login';
import Tabs from './views/tabs';

// TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': 'fontawesome.css',
};
TNSFontIcon.loadCss();

new Vue({
  render: h => h(Login),
}).$start({
  getRootView(self) {
    return self.$el.nativeView;
  },
})