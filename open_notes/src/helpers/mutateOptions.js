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
};

export const edit = {
  ...options,
  mutationName: 'updateNote',
  operationType: CacheOperation.REFRESH,
};

export const remove = {
  ...options,
  mutationName: 'deleteNote',
  operationType: CacheOperation.DELETE,
};
