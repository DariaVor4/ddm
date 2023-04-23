import UserRoleEnum from './user-role.enum';

/**
 * Creating payload of access token.
 */
export interface IAccessTokenPayloadCreate {
  userId: string;
  roles: UserRoleEnum[];
}

/**
 * Payload of access token.
 */
export interface IAccessTokenPayload extends IAccessTokenPayloadCreate {
  /* The following fields are automatically inserted when creating a token. */
  // Issued at: Seconds from Unix epoch.
  iat: number;
  // Expiration time: Seconds from Unix epoch.
  exp: number;
}
