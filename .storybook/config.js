import { configure, addDecorator } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';


setOptions({
  name: 'Control-Point',
  url: 'https://storybooks.js.org/docs/react-storybook/basics/introduction/',
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

const req = require.context('../src/', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
