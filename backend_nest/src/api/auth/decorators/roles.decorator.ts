import { SetMetadata } from '@nestjs/common';
import UserRoleEnum from '../interfaces/UserRoleEnum';

/**
 * Metadata key for roles array
 */
export const ROLES_KEY = 'roles';
/**
 * Decorator for setting specified roles in endpoints
 */
export const Roles = (...roles: UserRoleEnum[]) => SetMetadata(ROLES_KEY, roles);
