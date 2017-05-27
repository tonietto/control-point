/* eslint-disable import/no-extraneous-dependencies, global-require */

import { configure, addDecorator } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import 'semantic-ui-css/semantic.min.css';

import CenterDecorator from './decorators/CenterDecorator';
import '../src/assets/bundled-styles.css';


addDecorator(CenterDecorator);

setOptions({
  name: 'COC',
  url: 'https://getstorybook.io/docs',
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

const req = require.context('../src/app/modules/', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
