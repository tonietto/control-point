/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import AppBar from './AppBar';


const stories = storiesOf('Test', module);

stories.addDecorator(withKnobs);

stories
  .add('UI', () => (
    <AppBar />
  ))
 ;
