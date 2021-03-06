// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();
import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import { createDataSyncAPI } from '@graphback/datasync';
// eslint-disable-next-line @typescript-eslint/tslint/config
import cors from 'cors';
// eslint-disable-next-line @typescript-eslint/tslint/config
import express from 'express';
import { loadConfigSync } from 'graphql-config';
import { connectDB } from './db';
import { noteResolvers } from './resolvers/noteResolvers';

async function start() {
  const app = express();

  app.use(cors());

  const graphbackExtension = 'graphback';
  const config = loadConfigSync({
    extensions: [
      () => ({
        name: graphbackExtension
      })
    ]
  });
  const projectConfig = config.getDefault();
  const graphbackConfig = projectConfig.extension(graphbackExtension);
  const modelDefs = projectConfig.loadSchemaSync(graphbackConfig.model);

  const db = await connectDB();

  const { typeDefs, resolvers, contextCreator } = createDataSyncAPI(modelDefs, {
    db,
    conflictConfig: {
      models: {
        Note: {
          enabled: true
        }
      }
    }
  });

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: [resolvers, noteResolvers],
    context: contextCreator,
    uploads: false
  });

  apolloServer.applyMiddleware({ app });

  const httpServer = http.createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen({ port: 4000 }, () => {
    console.log(`🚀  Server ready at http://localhost:4000/graphql`);
  });
}

start().catch((err: any) => console.log(err));
