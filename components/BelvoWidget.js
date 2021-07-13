import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { URL } from 'react-native-url-polyfill';

export default function BelvoWidget({
  token,
  payload,
  onExit,
  onError,
  onSuccess,
}) {
  const [belvoURI, setBelvoURI] = useState('');

  let belvoWidgetURL = `https://widget.belvo.io/?access_token=${token}`;
  let receivedPayload;

  if (payload) {
    receivedPayload = Object.keys(payload)
      .map((key) => key + '=' + payload[key])
      .join('&');
    belvoWidgetURL += `&${receivedPayload}`;
  }

  useEffect(() => {
    setBelvoURI(belvoWidgetURL);
  });

  const handleBelvoEvent = (event) => {
    let webviewEvent = new URL(event.url);

    if (webviewEvent.protocol == 'belvowidget:') {

      let parseParams = Object.fromEntries(webviewEvent.searchParams);

      switch (webviewEvent.hostname) {
        case 'success':
          if (onSuccess) onSuccess(parseParams);
          return false;
        case 'exit':
          if (onExit) onExit(parseParams);
          return false;
        case 'error':
          if (onError) onError(parseParams);
          return false;
      }
      return false;
    }
    return true;
  };

  return (
    <WebView
      source={{
        uri: belvoURI,
      }}
      originWhitelist={['https://*', 'belvowidget://*', 'about://*']}
      onShouldStartLoadWithRequest={handleBelvoEvent}
    />
  );
}
