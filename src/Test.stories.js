/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

const stories = storiesOf('Test', module);

stories.addDecorator(withKnobs);

stories
  .add('default view', () => (
    <h1>
      {text('alohaine', 'aloha')}
    </h1>
  ))
 ;
