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
  DateTime: any;
  GraphbackObjectID: string;
};

export type BooleanInput = {
  ne?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
};

export type ContentType = File | List | Text;

export type CreateNoteInput = {
  title?: Maybe<Scalars['String']>;
  type: NoteTypes;
  version: Scalars['Int'];
  completed?: Maybe<Scalars['Boolean']>;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};


export type DateTimeInput = {
  ne?: Maybe<Scalars['DateTime']>;
  eq?: Maybe<Scalars['DateTime']>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  between?: Maybe<Array<Scalars['DateTime']>>;
};

export type File = {
  __typename?: 'File';
  content?: Maybe<Scalars['String']>;
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

export type List = {
  __typename?: 'List';
  _id: Scalars['GraphbackObjectID'];
  /** @oneToMany(field: 'list') */
  content?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MutateNoteInput = {
  _id: Scalars['GraphbackObjectID'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<NoteTypes>;
  version?: Maybe<Scalars['Int']>;
  completed?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['DateTime']>;
  updated?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote?: Maybe<Note>;
  updateNote?: Maybe<Note>;
  deleteNote?: Maybe<Note>;
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

/**
 * @model
 * @datasync(
 * ttl: 5184000
 * )
 */
export type Note = {
  __typename?: 'Note';
  _id: Scalars['GraphbackObjectID'];
  title?: Maybe<Scalars['String']>;
  type: NoteTypes;
  version: Scalars['Int'];
  completed?: Maybe<Scalars['Boolean']>;
  content?: Maybe<ContentType>;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

export type NoteFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  title?: Maybe<StringInput>;
  type?: Maybe<StringInput>;
  version?: Maybe<IntInput>;
  completed?: Maybe<BooleanInput>;
  created?: Maybe<DateTimeInput>;
  updated?: Maybe<DateTimeInput>;
  and?: Maybe<Array<NoteFilter>>;
  or?: Maybe<Array<NoteFilter>>;
  not?: Maybe<NoteFilter>;
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
  created?: Maybe<DateTimeInput>;
  updated?: Maybe<DateTimeInput>;
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
  getNotes?: Maybe<Array<Maybe<Note>>>;
  getNote?: Maybe<Note>;
  findNotes: NoteResultList;
};


export type QueryGetNoteArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindNotesArgs = {
  filter?: Maybe<NoteFilter>;
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

export type Text = {
  __typename?: 'Text';
  _id: Scalars['GraphbackObjectID'];
  content?: Maybe<Scalars['String']>;
};
