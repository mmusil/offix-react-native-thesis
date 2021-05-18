/**
 * File based on the official documentation
 * https://offix.dev/docs/offix-0.15.0/offix-cache#multiple-subscriptions
 */

import { createSubscriptionOptions } from 'offix-client';
import { CacheOperation } from 'offix-cache';
import { findNotes, newNote, updatedNote, deletedNote } from '../graphql/gql';

// use offix-client helpers to create the required
// subscription options for an `add` event
export const add = createSubscriptionOptions({
  subscriptionQuery: newNote,
  cacheUpdateQuery: findNotes,
  operationType: CacheOperation.ADD,
  returnField: 'items',
});

// use offix-client helpers to create the required
// subscription options for an `update` event
export const edit = createSubscriptionOptions({
  subscriptionQuery: updatedNote,
  cacheUpdateQuery: findNotes,
  operationType: CacheOperation.REFRESH,
  returnField: 'items',
});

// Custom options for delete subscription event
// since offix expects the return type to
// be the full object on not id only
export const remove = {
  document: deletedNote,
  updateQuery: (prev, { subscriptionData }) => {
    if (!subscriptionData.data) {
      return prev.items;
    }

    const { data } = subscriptionData;

    // get the object key for the todo list
    // in this case `findNotes`
    const [queryField] = Object.keys(prev);

    // get the object key for the mutated
    // item, in this case `deletedNote`
    const [key] = Object.keys(data);

    // Get the `prev` object and replace
    // the `findNotes` array with
    // filtered note list
    return {
      ...prev,
      [queryField]: prev[queryField].filter(note => note._id !== data[key]),
    };
  },
};
