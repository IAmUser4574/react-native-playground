// import React from 'react';
// import type { WidgetTaskHandlerProps } from 'react-native-android-widget';
// import CounterWidget from './counterWidget';

// const nameToWidget = {
//   // Hello will be the **name** with which we will reference our widget.
//   Hello: CounterWidget,
// };

// export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
//   const widgetInfo = props.widgetInfo;
//   const Widget =
//     nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

//   switch (props.widgetAction) {
//     case 'WIDGET_ADDED':
//       props.renderWidget(<Widget count={0} />);
//       break;

//     case 'WIDGET_UPDATE':
//       // Not needed for now
//       break;

//     case 'WIDGET_RESIZED':
//       // Not needed for now
//       break;

//     case 'WIDGET_DELETED':
//       // Not needed for now
//       break;

//     case 'WIDGET_CLICK':
//       // Not needed for now
//       break;

//     default:
//       break;
//   }
// }