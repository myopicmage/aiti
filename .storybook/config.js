import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

addParameters({
  options: {
    theme: create({
      base: 'dark',
      brandTitle: 'Aiti'
    })
  }
});

// automatically import all files ending in *.stories.js
configure([
  require.context('../stories/Setting', true, /\.mdx$/),
  require.context('../stories/Races', true, /\.mdx$/),
  require.context('../stories/Classes', true, /\.mdx$/),
  require.context('../stories/Spells', true, /\.mdx$/),
  require.context('../stories/Tables', true, /\.mdx$/),
], module);