/* eslint-disable import/no-extraneous-dependencies, no-undefined */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TestSui from './TestSui';


const stories = storiesOf('SUI', module);

stories.add('Test SUI', () => (
  <TestSui />
));
