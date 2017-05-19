/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import MaterialUI from './MaterialUI';


const stories = storiesOf('Test', module);

stories.addDecorator(withKnobs);

stories
  .add('Material UI', () => (
    <MaterialUI />
  ))
 ;
