/**
 * This file is from the example from official Offix repository
 * https://github.com/aerogear/offix/blob/master/examples/react-native/src/clientConfig.js
 */

import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import AsyncStorage from '@react-native-community/async-storage';
import { Platform } from 'react-native';
import { ReactNativeNetworkStatus } from './helpers/ReactNativeNetworkStatus';

const appDomain =
  Platform.OS === 'ios' ? 'localhost:4000' : '10.0.2.2:4000';

const wsLink = new WebSocketLink({
  uri: `ws://${appDomain}/graphql`,
  options: {
    reconnect: true,
    lazy: true,
  },
});

const httpLink = new HttpLink({
  uri: `http://${appDomain}/graphql`,
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

// Create cache wrapper
const cacheStorage = {
  getItem: async key => {
    const data = await AsyncStorage.getItem(key);
    if (typeof data === 'string') {
      return JSON.parse(data);
    }
    return data;
  },
  setItem: async (key, value) => {
    let valueStr = value;
    if (typeof valueStr === 'object') {
      valueStr = JSON.stringify(value);
    }
    return AsyncStorage.setItem(key, valueStr);
  },
  removeItem: async key => {
    return AsyncStorage.removeItem(key);
  },
};

const networkStatus = new ReactNativeNetworkStatus();

export const clientConfig = {
  link,
  cache: new InMemoryCache(),
  offlineStorage: cacheStorage,
  cacheStorage,
  networkStatus,
};
