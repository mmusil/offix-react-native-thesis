import { CacheOperation } from 'offix-cache';
import { findNotes } from '../graphql/gql';

const options = {
  updateQuery: findNotes,
  returnType: 'Note',
};

export const add = {
  ...options,
  mutationName: 'createNote',
  operationType: CacheOperation.ADD,
  returnField: 'items',
};

export const edit = {
  ...options,
  mutationName: 'updateNote',
  operationType: CacheOperation.REFRESH,
  returnField: 'items',
};

export const remove = {
  ...options,
  mutationName: 'deleteNote',
  operationType: CacheOperation.DELETE,
  returnField: 'items',
};
