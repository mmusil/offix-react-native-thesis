# offix-react-native-thesis

##Server
Server side was created with [Graphback](https://graphback.dev/) from the [MongoDB+Apollo+DataSync template](https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-mongodb-datasync-backend).


###Prerequisites
- Node.js 14 or latest
- Docker
- Yarn package manager - recommended, not necessary

###How to run

To run the server, follow the steps below:
- navigate to `server` folder
- Start the database
```
docker-compose up -d
```

- Inspect your schema in the `model/datamodel.graphql` file.
- Install dependencies
  
```
npm install
```
Or , if using yarn
```
yarn install
```

- Start the server

```
npm run develop
```

Or, if using yarn

```
yarn develop
```

##Client Application
Client Application uses deprecated version of Offix Client. It is not fully functional.
Implementation is based on the [Offix Clien Documentation](https://offix.dev/docs/offix-0.15.0/getting-started) and [official example application](https://github.com/aerogear/offix/tree/master/examples/react-native).

###Prerequisites
- Node.js 14 or latest
- Android Studio
- Android SDK 29
- Android Emulator or real device
- Yarn package manager - optional

###How to run

To run the app, follow the steps below:
- navigate to `open_notes` folder
- Check configuration in `scr/clientConfig.js` on line 11 and make sure it corresponds with the IP address of your server. In case you use Android Emulator, go to Wi-Fi settings and look for default gateway.
- Install dependencies

```
npm install
```
Or , if using yarn
```
yarn install
```
- Start the Metro bundler
```
npm start
```
Or , if using yarn
```
yarn start
```
- Run the application

```
npm run android
```

Or, if using yarn

```
yarn android
```