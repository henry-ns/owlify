import { AppRegistry } from 'react-native';

import { getStorybookUI, configure } from '@storybook/react-native';

import './decorators';

// import stories
configure(() => {
  // eslint-disable-next-line global-require
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ port: 7007, host: 'localhost' });

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;