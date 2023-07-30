# Sample LaunchDarkly React Native application
Sample React Native application using [LaunchDarkly React Native SDK](https://docs.launchdarkly.com/sdk/client-side/react/react-native)

## Requirements
* React Native versions >=0.69 <0.72, the minimum iOS deployment target is 11.0, and the minimum Android SDK version is 21. Builds are tested with XCode 12.5+.
* Node >= 18.x
* LaunchDarkly React Native SDK >= 7.1.6
* [LaunchDarkly Account](https://launchdarkly.com/start-trial/)
* [LaunchDarkly Mobile SDK Key ](https://docs.launchdarkly.com/sdk/concepts/client-side-server-side#keys?q=react%20nati)


## Building instructions 
1. Create React Native project 
```
npx react-native init sampleReactNative --version 0.71.12
```

2. Install LaunchDarkly React native SDK

```
npm install launchdarkly-react-native-client-sdk@7.1.6
```

> For iOS, set up the native module dependencies by running `npx pod-install`.



3. Download the files in this repo and copy them into your project folder.

```
* index.js
* ./components
* ./img

```


4. Login to your LaunchDarkly accounts and create the following feature flags.

```
Flags:["show-like-button", "show-ui-debug"]
Type: Boolean
```

```
Flags:["get-launcher-details"]
Type: JSON

Name: Light Launcher
Value1:
{
  "backgroundImage": "ThumbsUpLight.png",
  "heroImage": "ThumbsUpLight.png",
  "heroName": "Light Launcher"
}

Name: Dark Launcher
{
  "backgroundImage": "ThumbsUpDark.png",
  "heroImage": "ThumbsUpDark.png",
  "heroName": "Dark Launcher"
}

Name: Toggle
{
  "backgroundImage": "Toggle.png",
  "heroImage": "Toggle.png",
  "heroName": "Toggle"
}

Name: Toggle Thumbsup
{
  "backgroundImage": "ToggleThumbsUp.png",
  "heroImage": "ToggleThumbsUp.png",
  "heroName": "Toggle Thumbsup"
}
```



5. Copy the mobile key from your account settings page from your LaunchDarkly dashboard into `index.js`.

```
const config={
    mobileKey: "<Mobile SDK Key>"
}
```

# Running the app

  
###  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd sampleReactNative && npx react-native run-android
      - or -
    • cd sampleReactNative && npm run android
  
### Run instructions for iOS:
    • cd sampleReactNative && npx react-native run-ios
      - or -
    • cd sampleReactNative && npm run ios
      - or -
    • Open sampleReactNative/ios/sampleReactNative.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button
    
### Run instructions for macOS:
    • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.

![](./img/rn-demo.gif)

