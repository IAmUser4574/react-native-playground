import { ExpoConfig, ConfigContext } from 'expo/config';
import { WithAndroidWidgetsParams } from 'react-native-android-widget';

// Widget configuration
const widgetConfig: WithAndroidWidgetsParams = {
  fonts: ['./assets/fonts/SpaceMono-Regular.ttf'],
  widgets: [
    {
      name: 'HelloWidget',  // This name will be the name with which we will reference our widget.
      label: 'My Hello Widget',
      minWidth: '320dp',
      minHeight: '120dp',
      targetCellWidth: 5,
      targetCellHeight: 2,
      description: 'This is my first widget',
      previewImage: './assets/images/hello_preview.png',
      updatePeriodMillis: 1800000,

    // https://saleksovski.github.io/react-native-android-widget/docs/tutorial/make-widget-configurable
    //   widgetFeatures: 'reconfigurable',
    },
  ],
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'react-native-playground',
  slug: 'react-native-playground',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  newArchEnabled: false, // bad workaround https://github.com/sAleksovski/react-native-android-widget/issues/65#issuecomment-2772648358
  jsEngine: 'jsc',
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.anonymous.reactnativeplayground',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.anonymous.reactnativeplayground',
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash-icon.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
    ],
    [
      'expo-notifications',
      {
        icon: './assets/images/adaptive-icon.png',
        color: '#ffffff',
      },
    ],
    [
      'react-native-android-widget',
      widgetConfig,
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});



