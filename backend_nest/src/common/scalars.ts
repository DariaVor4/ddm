import { GraphQLEmailAddress, GraphQLURL, GraphQLUUID } from 'graphql-scalars';

export const UUID = () => GraphQLUUID;
export const EmailAddress = () => GraphQLEmailAddress;
export const URL = () => GraphQLURL;
