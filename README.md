# LaunchDarkly React Native Sample App

This is a sample React Native application that demonstrates how to use the [LaunchDarkly React Native SDK](https://docs.launchdarkly.com/sdk/client-side/react/react-native) to manage feature flags in your mobile app.

![](./img/rn-demo.gif)
Explore the code and experiment with different feature flag configurations to see how they affect the app's behavior.

## Prerequisites

- React Native version: 0.71.12
- iOS deployment target: 11.0 or higher
- Android SDK version: 21 or higher
- Node.js version: 18.x or higher
- LaunchDarkly React Native SDK version: 7.1.6 or higher
- A [LaunchDarkly Account](https://launchdarkly.com/start-trial/)
- A [LaunchDarkly Mobile SDK Key](https://docs.launchdarkly.com/sdk/concepts/client-side-server-side#keys?q=react%20nati)

## Installation
To ensure you have the latest React Native libraries, create a new project using the React Native CLI by following these steps:


1. Create a new React Native project:
   ```
   npx react-native init sampleReactNative --version 0.71.12
   ```

2. Install the LaunchDarkly React Native SDK:
   ```
   cd sampleReactNative
   npm install launchdarkly-react-native-client-sdk@7.1.6
   ```

   For iOS, set up the native module dependencies:
   ```
   cd ios
   npx pod-install
   ```

3. Copy the necessary files from this repository into your project:
   - `index.js`
   - `./components`
   - `./img`

4. Create the following feature flags in your LaunchDarkly account:
   - Flags: `show-like-button`, `show-ui-debug`
     - Type: Boolean

   - Flag: `get-launcher-details` 
     - Type: JSON
     - Variations:
       - Light Launcher
         ```
            {
              "backgroundImage": "ThumbsUpLight.png",
              "heroImage": "ThumbsUpLight.png",
              "heroName": "Light Launcher"
            }
          ```
       - Dark Launcher
          ```
            {
              "backgroundImage": "ThumbsUpDark.png",
              "heroImage": "ThumbsUpDark.png",
              "heroName": "Dark Launcher"
            }
          ```
       - Toggle
          ```
            {
              "backgroundImage": "Toggle.png",
              "heroImage": "Toggle.png",
              "heroName": "Toggle"
            }
          ``` 
       - Toggle Thumbsup
          ``` 
            {
              "backgroundImage": "ToggleThumbsUp.png",
              "heroImage": "ToggleThumbsUp.png",
              "heroName": "Toggle Thumbsup"
            }
          ``` 

5. Copy your LaunchDarkly mobile SDK key from your account settings and add it to `index.js`:
   ```javascript
   const config = {
     mobileKey: "<Mobile SDK Key>"
   };
   ```

## Running the App

### Android
- Have an Android emulator running or a device connected
- Run `cd sampleReactNative && npx react-native run-android` or `cd sampleReactNative && npm run android`

### iOS
- Run `cd sampleReactNative && npx react-native run-ios` or `cd sampleReactNative && npm run ios`
- Alternatively, open `sampleReactNative/ios/sampleReactNative.xcworkspace` in Xcode and hit the Run button

### macOS
- See the [official guide](https://aka.ms/ReactNativeGuideMacOS) for the latest instructions



