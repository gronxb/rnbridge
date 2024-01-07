import { Component } from "react";
import WebView, { WebViewProps } from "react-native-webview";

export type RNBridgeWebView = Pick<
  WebView,
  Exclude<keyof WebView, keyof Component<WebViewProps>>
>;
