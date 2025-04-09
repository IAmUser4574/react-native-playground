import React from 'react';
import type { WidgetTaskHandlerProps, registerWidgetTaskHandler } from 'react-native-android-widget';
import HelloWidget from './helloWidget';

const nameToWidget = {
  // Hello will be the **name** with which we will reference our widget.
  HelloWidget: HelloWidget,
};

export default async function helloWidgetTaskHandler(props: WidgetTaskHandlerProps) {
  const widgetInfo = props.widgetInfo;
  console.log(`widget name: ${widgetInfo.widgetName}`);
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

  switch (props.widgetAction) {
    case 'WIDGET_ADDED':
        console.log(`widget added`);
        props.renderWidget(<Widget />);
        break;

    case 'WIDGET_UPDATE':
        // Not needed for now
        console.log(`widget updated`);
        // props.renderWidget(<Widget />);
        break;

    case 'WIDGET_RESIZED':
        // Not needed for now
        break;

    case 'WIDGET_DELETED':
      // Not needed for now
      break;

    case 'WIDGET_CLICK':
      // Not needed for now
      break;

    default:
      break;
  }
}