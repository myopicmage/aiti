import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Aiti'
    })
  }
});

import 'bootstrap/dist/css/bootstrap.css';

configure([
  require.context('../stories/Intro', true, /\.mdx$/),
  require.context('../stories/Setting', true, /\.mdx$/),
  require.context('../stories/Races', true, /\.mdx$/),
  require.context('../stories/Tweaks', true, /\.mdx$/),
  require.context('../stories/Spells', true, /\.mdx$/),
  require.context('../stories/Tables', true, /\.mdx$/),
], module);