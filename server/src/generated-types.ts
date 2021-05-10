/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphbackObjectID: string;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  GraphbackTimestamp: number;
};

export type BooleanInput = {
  ne?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
};

export type CreateItemInput = {
  position?: Maybe<Scalars['Int']>;
  completed?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type CreateNoteInput = {
  title?: Maybe<Scalars['String']>;
  type: NoteTypes;
  version: Scalars['Int'];
  completed?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
};


export type GraphbackObjectIdInput = {
  ne?: Maybe<Scalars['GraphbackObjectID']>;
  eq?: Maybe<Scalars['GraphbackObjectID']>;
  le?: Maybe<Scalars['GraphbackObjectID']>;
  lt?: Maybe<Scalars['GraphbackObjectID']>;
  ge?: Maybe<Scalars['GraphbackObjectID']>;
  gt?: Maybe<Scalars['GraphbackObjectID']>;
  in?: Maybe<Array<Scalars['GraphbackObjectID']>>;
  between?: Maybe<Array<Scalars['GraphbackObjectID']>>;
};


export type GraphbackTimestampInput = {
  ne?: Maybe<Scalars['GraphbackTimestamp']>;
  eq?: Maybe<Scalars['GraphbackTimestamp']>;
  le?: Maybe<Scalars['GraphbackTimestamp']>;
  lt?: Maybe<Scalars['GraphbackTimestamp']>;
  ge?: Maybe<Scalars['GraphbackTimestamp']>;
  gt?: Maybe<Scalars['GraphbackTimestamp']>;
  in?: Maybe<Array<Scalars['GraphbackTimestamp']>>;
  between?: Maybe<Array<Scalars['GraphbackTimestamp']>>;
};

export type IntInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  between?: Maybe<Array<Scalars['Int']>>;
};

/**
 * @model
 * @datasync(
 *   ttl: 5184000
 * )
 */
export type Item = {
  __typename?: 'Item';
  _id: Scalars['GraphbackObjectID'];
  position?: Maybe<Scalars['Int']>;
  completed?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  /** @manyToOne(field: 'list', key: 'itemId') */
  item?: Maybe<Note>;
};

export type ItemFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  position?: Maybe<IntInput>;
  completed?: Maybe<BooleanInput>;
  text?: Maybe<StringInput>;
  itemId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<ItemFilter>>;
  or?: Maybe<Array<ItemFilter>>;
  not?: Maybe<ItemFilter>;
};

export type ItemResultList = {
  __typename?: 'ItemResultList';
  items: Array<Maybe<Item>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type ItemSubscriptionFilter = {
  and?: Maybe<Array<ItemSubscriptionFilter>>;
  or?: Maybe<Array<ItemSubscriptionFilter>>;
  not?: Maybe<ItemSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  position?: Maybe<IntInput>;
  completed?: Maybe<BooleanInput>;
  text?: Maybe<StringInput>;
};

export type MutateItemInput = {
  _id: Scalars['GraphbackObjectID'];
  position?: Maybe<Scalars['Int']>;
  completed?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateNoteInput = {
  _id: Scalars['GraphbackObjectID'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<NoteTypes>;
  version?: Maybe<Scalars['Int']>;
  completed?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote?: Maybe<Note>;
  updateNote?: Maybe<Note>;
  deleteNote?: Maybe<Note>;
  createItem?: Maybe<Item>;
  updateItem?: Maybe<Item>;
  deleteItem?: Maybe<Item>;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationUpdateNoteArgs = {
  input: MutateNoteInput;
};


export type MutationDeleteNoteArgs = {
  input: MutateNoteInput;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationUpdateItemArgs = {
  input: MutateItemInput;
};


export type MutationDeleteItemArgs = {
  input: MutateItemInput;
};

/**
 * @model
 * @versioned
 * @datasync(
 *   ttl: 5184000
 * )
 */
export type Note = {
  __typename?: 'Note';
  _id: Scalars['GraphbackObjectID'];
  title?: Maybe<Scalars['String']>;
  type: NoteTypes;
  version: Scalars['Int'];
  completed?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  /**
   * @oneToMany(field: 'item', key: 'itemId')
   * @db(type: 'json')
   * @oneToMany(field: 'item')
   */
  list?: Maybe<Array<Maybe<Item>>>;
  /** @createdAt */
  createdAt?: Maybe<Scalars['GraphbackTimestamp']>;
  /** @updatedAt */
  updatedAt?: Maybe<Scalars['GraphbackTimestamp']>;
};


/**
 * @model
 * @versioned
 * @datasync(
 *   ttl: 5184000
 * )
 */
export type NoteListArgs = {
  filter?: Maybe<ItemFilter>;
};

export type NoteFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  title?: Maybe<StringInput>;
  type?: Maybe<StringInput>;
  version?: Maybe<IntInput>;
  completed?: Maybe<BooleanInput>;
  text?: Maybe<StringInput>;
  and?: Maybe<Array<NoteFilter>>;
  or?: Maybe<Array<NoteFilter>>;
  not?: Maybe<NoteFilter>;
  createdAt?: Maybe<GraphbackTimestampInput>;
  updatedAt?: Maybe<GraphbackTimestampInput>;
};

export type NoteResultList = {
  __typename?: 'NoteResultList';
  items: Array<Maybe<Note>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type NoteSubscriptionFilter = {
  and?: Maybe<Array<NoteSubscriptionFilter>>;
  or?: Maybe<Array<NoteSubscriptionFilter>>;
  not?: Maybe<NoteSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  title?: Maybe<StringInput>;
  type?: Maybe<StringInput>;
  version?: Maybe<IntInput>;
  completed?: Maybe<BooleanInput>;
  text?: Maybe<StringInput>;
};

export enum NoteTypes {
  List = 'List',
  Text = 'Text'
}

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getDraftNotes?: Maybe<Array<Maybe<Note>>>;
  getNote?: Maybe<Note>;
  findNotes: NoteResultList;
  getItem?: Maybe<Item>;
  findItems: ItemResultList;
};


export type QueryGetNoteArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindNotesArgs = {
  filter?: Maybe<NoteFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetItemArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindItemsArgs = {
  filter?: Maybe<ItemFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newNote: Note;
  updatedNote: Note;
  deletedNote: Note;
  newItem: Item;
  updatedItem: Item;
  deletedItem: Item;
};


export type SubscriptionNewNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionUpdatedNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionDeletedNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionNewItemArgs = {
  filter?: Maybe<ItemSubscriptionFilter>;
};


export type SubscriptionUpdatedItemArgs = {
  filter?: Maybe<ItemSubscriptionFilter>;
};


export type SubscriptionDeletedItemArgs = {
  filter?: Maybe<ItemSubscriptionFilter>;
};
