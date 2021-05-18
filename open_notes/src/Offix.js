/**
 * This file is a modified version of
 * https://github.com/aerogear/offix/blob/master/examples/react-native/src/Offix.js
 */
import React, { useState, useEffect } from 'react';
import { ApolloOfflineClient } from 'offix-client';
import { ApolloOfflineProvider } from 'react-offix-hooks';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  ActivityIndicator,
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import App from './App';
import { Text, useColorScheme } from 'react-native';
import { clientConfig } from './clientConfig';
import { Loading } from './components';

const client = new ApolloOfflineClient(clientConfig);

export const Offix = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    client.init().then(() => setInitialized(true));
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  // If client is still initializing,
  // display loading screen
  if (!initialized) {
    return <Loading />;
  }

  const theme = {
    ...(isDarkMode === true ? DarkTheme : DefaultTheme),
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      primary: '#ffa000',
      primary_darker: '#b27000',
      primary_lighter: '#ffb333',
      accent: '#3d5afe',
      secondary_darker: '#2a3eb1',
      secondary_lighter: '#637bfe',
    },
  };

  return (
    <ApolloOfflineProvider client={client}>
      <ApolloProvider client={client}>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </ApolloProvider>
    </ApolloOfflineProvider>
  );
};
