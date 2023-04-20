import { SetMetadata } from '@nestjs/common';

/**
 * Metadata key for public endpoints
 */
export const IS_PUBLIC_KEY = 'isPublic';
/**
 * Decorator for resolvers to skip authorization
 */
export const PublicEndpoint = () => SetMetadata(IS_PUBLIC_KEY, true);
