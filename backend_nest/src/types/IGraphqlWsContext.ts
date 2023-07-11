/* eslint-disable @typescript-eslint/no-empty-interface */
import { Context } from 'graphql-ws';
import { ISessionContext } from '../api/auth/decorators/current-session.decorator';

interface IExtra {
  user: ISessionContext
}

export interface IGraphqlWsContext extends Context<Record<string, string>, IExtra> {}
