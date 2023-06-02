import { QueryOptions } from '@apollo/client/core/watchQueryOptions';
import type { SetRequired } from 'type-fest';
import { client } from '../apollo-client.tsx';
import { EmailAvailabilityDocument, GEmailAvailabilityQuery, GEmailAvailabilityQueryVariables } from '../generated.ts';

export async function emailAvailabilityQuery(options: SetRequired<Partial<QueryOptions<GEmailAvailabilityQueryVariables, GEmailAvailabilityQuery>>, 'variables'>) {
  return client.query<GEmailAvailabilityQuery, GEmailAvailabilityQueryVariables>({
    query: EmailAvailabilityDocument,
    fetchPolicy: 'no-cache',
    ...options,
  });
}
