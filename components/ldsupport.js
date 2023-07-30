import React, {useState, useEffect, createContext} from 'react';
import LDClient from 'launchdarkly-react-native-client-sdk';

const AppLDContext = createContext();

function initializeLDClient({
  mobileKey,
  userKey,
  ldClient,
  updateFlagHandler,
  flags = {},
}) {
  const ldConfig = {
    mobileKey: mobileKey,
    pollUri: 'https://app.launchdarkly.com',
    streamUri: 'https://clientstream.launchdarkly.com',
    eventsCapacity: 100,
    eventsFlushIntervalMillis: 30000,
    connectionTimeoutMillis: 10000,
    pollingIntervalMillis: 300000,
    backgroundPollingIntervalMillis: 3600000,
    useReport: false,
    stream: true,
    disableBackgroundUpdating: false,
    offline: false,
    debugMode: true,
  };

  const context = {
    kind: 'multi',
    user: {
      key: userKey || 'mobileuser@tester.com',
      name: 'Keagan Olive',
      state: 'Georgia',
      city: 'Atlana',
      country: 'United States of America',
    },
    device: {
      key: 'iphone-13-simulator',
      type: 'iPhone 13',
    },

    group: {
      key: 'dark-launcher',
      name: 'Dark Launcher',
    },
    application: {
      key: 'Mobility',
      version: '0.0.1',
    },
    department: {
      key: 'Electronics',
    },
    company: {
      key: 'Ober, Meyer and Sons',
    },
  };

  return ldClient
    .configure(ldConfig, context)
    .then(_ => {
      if (updateFlagHandler) {
        ldClient.registerAllFlagsListener('allFlagsListener', modList => {
          updateList(ldClient, modList, flags).then(flags => {
            updateFlagHandler(flags);
          });
        });
      }
      return ldClient.allFlags();
    })
    .then(allFlags => {
      for (let [key, value] of Object.entries(allFlags)) {
        if (flags[key] != undefined) {
          flags[key] = value;
        }
      }
      updateFlagHandler(flags);
    });
}

function isBoolean(value) {
  return typeof value == 'boolean';
}
function isString(value) {
  return typeof value == 'string';
}
function isJson(value) {
  try {
    let y = Object.entries(value);
    return y.length > 0;
  } catch (e) {
    return false;
  }
  return true;
}

function getVariation(ldClient, key, value) {
  if (isJson(value)) {
    return ldClient.jsonVariation(key, value);
  }
  if (isBoolean(value)) {
    return ldClient.boolVariation(key, value);
  }
  if (isString(value)) {
    return ldClient.stringVariation(key, value);
  }

  return null;
}

function updateList(ldClient, updateFlags, flags) {
  let promises = [];
  let matchFlagList = [];
  for (let modKey of updateFlags) {
    if (flags[modKey] != undefined) {
      matchFlagList.push(modKey);
      promises.push(getVariation(ldClient, modKey, flags[modKey]));
    }
  }

  return Promise.all(promises)
    .then(values => {
      for (let i = 0; i < matchFlagList.length; i++) {
        let key = matchFlagList[i];
        flags[key] = values[i];
      }
      return flags;
    })
    .catch(({message}) => {
      console.error(message);
    });
}

const AppLDProvider = props => {
  const [flags, setFlags] = useState(AppToggles);
  let [likeCount, setLikeCount] = useState(0);
  const ldClient = new LDClient();

  const updateFlagHandler = function (props) {
    setFlags({...props});
  };
  const likeButtonClickHandler = function (data) {
    setLikeCount(++likeCount);
    // console.log(`likeButtonClickHandler: ${likeCount}`);
    ldClient.track('likes', {likeCount});
    ldClient.flush();
  };

  useEffect(() => {
    initializeLDClient({
      ...props.config,
      ldClient,
      updateFlagHandler,
      flags,
    }).catch(({message}) => {
      ldClient.flush();
      ldClient.close();
      // console.log(`${message}`)
      initializeLDClient({
        ...props.config,
        ldClient,
        updateFlagHandler,
        flags,
      }).catch(({message}) => {
        console.error(`Fatal error ${message}`);
      });
    });
  }, []);

  return (
    <AppLDContext.Provider
      value={{...flags, likeButtonClickHandler, likeCount}}>
      {props.children}
    </AppLDContext.Provider>
  );
};

const AppToggles = {
  'get-launcher-details': {
    backgroundImage: '',
    heroImage: 'Toggle.png',
    heroName: 'Toggle',
  },
  'show-like-button': false,
  'show-ui-debug': false,
};

export {AppLDContext, AppLDProvider};
