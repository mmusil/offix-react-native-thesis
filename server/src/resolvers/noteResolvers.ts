import { QueryFilter } from "graphback";
import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'apollo-server-express';
//import { TextNoteFilter } from '../generated-types';
import { GraphQLContext } from '../customContext';
//Edited manually
//import { GraphQLUpload } from 'graphql-upload';

//Edited manually
export const noteResolvers: IResolvers = {
  Query: {
    // getDraftNotes: async (parent: any, args: any, context: GraphQLContext, info: GraphQLResolveInfo) => {
    //   const filter: QueryFilter<TextNoteFilter> = {
    //     title: {
    //       startsWith: '[DRAFT]'
    //     }
    //   }
    //
    //   const results = await context.graphback.TextNote.findBy({ filter }, context, info);
    //
    //   return results.items;
    // },
  }
}
