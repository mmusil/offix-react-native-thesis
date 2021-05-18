/**
 * File generated using Graphback library
 */

import gql from 'graphql-tag';

export const NoteFields = gql`
  fragment NoteFields on Note {
    _id
    title
    type
    version
    completed
    text
    createdAt
    updatedAt
  }
`;

export const NoteExpandedFields = gql`
  fragment NoteExpandedFields on Note {
    _id
    title
    type
    version
    completed
    text
    list {
      _id
      position
      completed
      text
    }
    createdAt
    updatedAt
  }
`;

export const ItemFields = gql`
  fragment ItemFields on Item {
    _id
    position
    completed
    text
  }
`;

export const ItemExpandedFields = gql`
  fragment ItemExpandedFields on Item {
    _id
    position
    completed
    text
    item {
      _id
      title
      type
      version
      completed
      text
      createdAt
      updatedAt
    }
  }
`;

export const findNotes = gql`
  query findNotes(
    $filter: NoteFilter
    $page: PageRequest
    $orderBy: OrderByInput
  ) {
    findNotes(filter: $filter, page: $page, orderBy: $orderBy) {
      items {
        ...NoteExpandedFields
      }
      offset
      limit
      count
    }
  }
  ${NoteExpandedFields}
`;

export const getNote = gql`
  query getNote($id: GraphbackObjectID!) {
    getNote(id: $id) {
      ...NoteExpandedFields
    }
  }
  ${NoteExpandedFields}
`;

export const findItems = gql`
  query findItems(
    $filter: ItemFilter
    $page: PageRequest
    $orderBy: OrderByInput
  ) {
    findItems(filter: $filter, page: $page, orderBy: $orderBy) {
      items {
        ...ItemExpandedFields
      }
      offset
      limit
      count
    }
  }
  ${ItemExpandedFields}
`;

export const getItem = gql`
  query getItem($id: GraphbackObjectID!) {
    getItem(id: $id) {
      ...ItemExpandedFields
    }
  }
  ${ItemExpandedFields}
`;

export const createNote = gql`
  mutation createNote($input: CreateNoteInput!) {
    createNote(input: $input) {
      ...NoteFields
    }
  }
  ${NoteFields}
`;

export const updateNote = gql`
  mutation updateNote($input: MutateNoteInput!) {
    updateNote(input: $input) {
      ...NoteFields
    }
  }
  ${NoteFields}
`;

export const deleteNote = gql`
  mutation deleteNote($input: MutateNoteInput!) {
    deleteNote(input: $input) {
      ...NoteFields
    }
  }
  ${NoteFields}
`;

export const createItem = gql`
  mutation createItem($input: CreateItemInput!) {
    createItem(input: $input) {
      ...ItemFields
    }
  }
  ${ItemFields}
`;

export const updateItem = gql`
  mutation updateItem($input: MutateItemInput!) {
    updateItem(input: $input) {
      ...ItemFields
    }
  }
  ${ItemFields}
`;

export const deleteItem = gql`
  mutation deleteItem($input: MutateItemInput!) {
    deleteItem(input: $input) {
      ...ItemFields
    }
  }
  ${ItemFields}
`;

export const newNote = gql`
  subscription newNote($filter: NoteSubscriptionFilter) {
    newNote(filter: $filter) {
      ...NoteFields
    }
  }
  ${NoteFields}
`;

export const updatedNote = gql`
  subscription updatedNote($filter: NoteSubscriptionFilter) {
    updatedNote(filter: $filter) {
      ...NoteFields
    }
  }
  ${NoteFields}
`;

export const deletedNote = gql`
  subscription deletedNote($filter: NoteSubscriptionFilter) {
    deletedNote(filter: $filter) {
      ...NoteFields
    }
  }
  ${NoteFields}
`;

export const newItem = gql`
  subscription newItem($filter: ItemSubscriptionFilter) {
    newItem(filter: $filter) {
      ...ItemFields
    }
  }
  ${ItemFields}
`;

export const updatedItem = gql`
  subscription updatedItem($filter: ItemSubscriptionFilter) {
    updatedItem(filter: $filter) {
      ...ItemFields
    }
  }
  ${ItemFields}
`;

export const deletedItem = gql`
  subscription deletedItem($filter: ItemSubscriptionFilter) {
    deletedItem(filter: $filter) {
      ...ItemFields
    }
  }
  ${ItemFields}
`;
