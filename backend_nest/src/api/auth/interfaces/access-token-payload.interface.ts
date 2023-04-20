import UserRoleEnum from './UserRoleEnum';

/**
 * Payload of access token.
 */
export interface IAccessTokenPayload {
  userId: string;
  roles: UserRoleEnum[];
  // The following fields are automatically inserted when creating a token.
  // Maybe someday they will be needed, but for now, there is no need to interact with them manually.
  // iat: number;
  // exp: number;
}
