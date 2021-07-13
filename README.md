# Connect Widget on React Native demo

Unofficial demo displaying how to run Belvo Connect Widget (webview version) for React Native. 

## How to run

 1. Install React Native following [the official setup page](https://reactnative.dev/docs/environment-setup);
 2. Make sure you already have [your Belvo credentials created](https://developers.belvo.com/docs/get-your-belvo-api-keys);
 3. Clone this repo;
 4. Run a `npm install` inside this folder;
 5. [Generate a Belvo access token for widget](https://developers.belvo.com/docs/widget-for-web#2-generate-an-access_token);
 6. Change the "`< INSERT-YOUR-TOKEN >`" on **config.js** file for your generated access token;
 7. Run `npx react-native start` (or `run-ios` or `run-android`);

## BelvoWidget component

```jsx
<BelvoWidget
	payload={{ locale: 'pt' }}
	onError={e  =>  errorMsg(e)}
	onExit={e  =>  exitMsg(e)}
	onSuccess={e  =>  successMsg(e)}
	token={Config.BELVO_TOKEN}
/>
```

**payload (object)**: you can send the same parameters from [Widget's Startup configuration](https://developers.belvo.com/docs/widget-startup-configuration) page as object (instead send them as queryString) 🤟

**onError (callback)**: will receive an error event as object [based on this params](https://developers.belvo.com/docs/widget-for-webviews#success-event)

**onExit (callback)**: will receive an error event as object [based on this params](https://developers.belvo.com/docs/widget-for-webviews#exit-event)

**onSuccess (callback)**: will receive an error event as object [based on this params](https://developers.belvo.com/docs/widget-for-webviews#error-event)

**token (string)**: access token generated from `{environment}.belvo.com/api/token/` as linked above