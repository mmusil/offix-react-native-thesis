import { CacheOperation } from 'offix-cache';
import { findNotes } from '../graphql/gql';

const options = {
  updateQuery: findNotes,
  returnType: 'Note',
};

export const add = {
  ...options,
  operationType: CacheOperation.ADD,
};

export const edit = {
  ...options,
  operationType: CacheOperation.REFRESH,
};

export const remove = {
  ...options,
  operationType: CacheOperation.DELETE,
};
