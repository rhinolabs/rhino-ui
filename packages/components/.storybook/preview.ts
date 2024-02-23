import type { Preview } from "@storybook/react";
import rhinoUITheme from "./rhino-ui-theme";

import '../src/styles/utilities.scss';
import '../src/styles/variables/index.scss';
import '../src/styles/reset.scss';
import '../src/styles/fonts.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: rhinoUITheme,
    },
    options: {
      storySort: {
        order: [
          'About',
          ['Introduction', 'Get Started', 'Contributing'],
          'Foundation',
          ['Design Principles', 'Design Tokens'],
          'Theming',
          ['Overview', 'Form Controls'],
          'Components',
          'Patterns',
        ],
      },
    },
  },
};

export default preview;
