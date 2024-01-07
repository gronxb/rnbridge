import {
  createRandomId,
  createResolver,
  type EventEmitter,
  type Procedure,
  timeout,
} from "@rnbridge/util";
import WebView from "react-native-webview";

export const handleRegisterWebMethod = (
  emitter: EventEmitter,
  webview: WebView,
  bridgeNames: string[],
  responseTimeout: number,
) => {
  return bridgeNames.reduce(
    (acc, method) => {
      acc[method] = async (...args: unknown[]) => {
        const eventId = createRandomId();

        return Promise.race([
          createResolver(emitter, method, eventId, () => {
            webview.injectJavaScript(
              `
              window.webEmitter.emit('${method}', '${eventId}', ${JSON.stringify(
                args,
              )});
            
              true;
              `,
            );
          }),
          timeout(responseTimeout),
        ]);
      };

      return acc;
    },
    {} as Record<string, Procedure>,
  );
};
