/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./components/App";

import { name as appName } from "./app.json";
import { AppLDProvider } from "./components/ldsupport";
import config from "./config.json";

AppRegistry.registerComponent(appName, () => App);
AppRegistry.setWrapperComponentProvider(function () {
  return (props) => {
    return <AppLDProvider config={config}>{props.children}</AppLDProvider>;
  };
});
