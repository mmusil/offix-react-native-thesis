/**
 * File based on the official documentation
 * https://offix.dev/docs/offix-0.15.0/offix-cache#mutation-cache-helpers
 */

import { CacheOperation } from 'offix-cache';
import { findNotes } from '../graphql/gql';

const options = {
  updateQuery: findNotes,
  returnType: 'Note',
};

// use offix-client helpers to create the required
// mutation options for an `add` event
export const add = {
  ...options,
  mutationName: 'createNote',
  operationType: CacheOperation.ADD,
};

// use offix-client helpers to create the required
// mutation options for an `edit` event
export const edit = {
  ...options,
  mutationName: 'updateNote',
  operationType: CacheOperation.REFRESH,
};

// use offix-client helpers to create the required
// mutation options for an `delete` event
export const remove = {
  ...options,
  mutationName: 'deleteNote',
  operationType: CacheOperation.DELETE,
};
