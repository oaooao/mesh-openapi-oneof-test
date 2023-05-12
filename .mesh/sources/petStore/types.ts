// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace PetStoreTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjMap: any;
};

export type Query = {
  pets_by_id?: Maybe<Pet>;
  dogs_by_id?: Maybe<Dog>;
  cats_by_id?: Maybe<Cat>;
};


export type Querypets_by_idArgs = {
  id: Scalars['String'];
};


export type Querydogs_by_idArgs = {
  id: Scalars['String'];
};


export type Querycats_by_idArgs = {
  id: Scalars['String'];
};

export type Pet = {
  name: Scalars['String'];
  petType?: Maybe<Scalars['String']>;
};

export type Dog = Pet & {
  name: Scalars['String'];
  petType?: Maybe<Scalars['String']>;
  dog_exclusive?: Maybe<Scalars['String']>;
};

export type Cat = Pet & {
  name: Scalars['String'];
  petType?: Maybe<Scalars['String']>;
  cat_exclusive?: Maybe<Scalars['String']>;
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** undefined **/
  pets_by_id: InContextSdkMethod<Query['pets_by_id'], Querypets_by_idArgs, MeshContext>,
  /** undefined **/
  dogs_by_id: InContextSdkMethod<Query['dogs_by_id'], Querydogs_by_idArgs, MeshContext>,
  /** undefined **/
  cats_by_id: InContextSdkMethod<Query['cats_by_id'], Querycats_by_idArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["petStore"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
