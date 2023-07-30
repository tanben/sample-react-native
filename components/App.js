import React, { useContext } from "react";

import { Text, ImageBackground, View, Image } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { AppLDContext } from "./ldsupport";
import { styles } from "./styles";

const ToggleThumbsUp = require("../img/ToggleThumbsUp.png");
const Toggle = require("../img/Toggle.png");
const ThumbsUpDark = require("../img/ThumbsUpDark.png");
const ThumbsUpLight = require("../img/ThumbsUpLight.png");
const likeButton = require("../img/likeButton.png");

const bgImages = {
  Toggle,
  ToggleThumbsUp,
  ThumbsUpDark,
  ThumbsUpLight,
};

const App = (props) => {
  const ldContext = useContext(AppLDContext);
  const {
    "get-launcher-details": launcherDetails,
    "show-like-button": showLikeButton,
    "show-ui-debug": showDebug,
    likeCount,
    likeButtonClickHandler,
  } = ldContext;
  const bgImage = bgImages[launcherDetails.backgroundImage.split(".")[0]];
  // console.log(bgImages);
  // console.log(launcherDetails.backgroundImage);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode='cover'
        style={styles.bgImage}
      >
        <LikeButtonView
          likes={likeCount}
          display={showLikeButton}
          likeButtonClickHandler={likeButtonClickHandler}
          likeButtonImage={likeButton}
        />
        <DebugView debug={showDebug} message={`debug=${showDebug}`} />
      </ImageBackground>
    </View>
  );
};

const Badge = ({ likes = 0 }) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{likes}</Text>
    </View>
  );
};

const LikeButtonView = ({
  likes = 0,
  display = false,
  likeButtonClickHandler,
  likeButtonImage,
}) => {
  const elem = (
    <View style={styles.imageContainer}>
      <Badge likes={likes} />
      <Pressable onPressOut={likeButtonClickHandler}>
        <Image style={styles.tinyImage} source={likeButtonImage} />
      </Pressable>
    </View>
  );
  return display ? elem : null;
};

const DebugView = ({ debug = false, message = "no message" }) => {
  const printMessage = (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
  return debug ? printMessage : null;
};

export default App;
