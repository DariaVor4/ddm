// import assert from '@common/assert';
// import { UnauthorizedException } from '@nestjs/common';
// import {
//   Args, Context, Mutation, Resolver,
// } from '@nestjs/graphql';
// import { JwtService } from '@nestjs/jwt';
// import type { Request, Response } from 'express';
// import ms from 'ms';
// import { ConfigService } from '../../config/config.service';
// import { PrismaService } from '../../prisma/prisma.service';
// import { SecurityService } from '../../security/security.service';
// import { CookieKeys } from './cookie-keys';
// import { AuthService } from './auth.service';
// import { PublicEndpoint } from './decorators/public.decorator';
// import { Roles } from './decorators/roles.decorator';
// import { IAccessTokenPayload } from './interfaces/access-token-payload.interface';
// import UserRoleEnum from './interfaces/UserRoleEnum';
//
// /**
//  * Resolver of authorization
//  */
// @Resolver()
// export default class AuthResolver {
//   constructor(
//     private readonly prisma: PrismaService,
//     public readonly jwtService: JwtService,
//     public readonly securityService: SecurityService,
//     private readonly configService: ConfigService,
//     private readonly authService: AuthService,
//   ) {}
//
//   /**
//    * Authentication by email and password.
//    */
//   @PublicEndpoint()
//   @Roles(UserRoleEnum.Any)
//   @Mutation(() => String, {
//     description: 'Login by email and password, returns accessToken',
//   })
//   async loginByPassword(
//     @Context('res') res: Response,
//     @Args('email') email: string,
//     @Args('password') password: string,
//   ):Promise<string> {
//     // Get User
//     const user = await this.prisma.user.findFirst({
//       where: {
//         email,
//         deletedAt: null,
//       },
//     });
//     assert(user, new UnauthorizedException('User not found'));
//     // Check Password
//     assert(
//       await this.securityService.passwordCheck(password, user.password),
//       new UnauthorizedException('Invalid password'),
//     );
//     // Generate new tokens pair & put hashed token into user
//     const { accessToken, refreshToken } = await this.authService.generateTokens(user);
//     // Put refresh token into cookies
//     this.securityService.putTextIntoCookies({
//       res,
//       key: CookieKeys.RefreshTokenKey,
//       text: refreshToken,
//       expires: new Date(Date.now() + ms(this.configService.config.refreshTokenExpires)),
//     });
//     // Return response result
//     return accessToken;
//   }
//
//   /**
//    * Updates tokens pair, depending on the previous pair.
//    */
//   @PublicEndpoint()
//   @Roles(UserRoleEnum.Any)
//   @Mutation(() => String, {
//     description: 'Refresh tokens pair, returns new accessToken',
//   })
//   async refreshTokens(
//     @Context('res') res: Response,
//     @Context('req') req: Request,
//   ): Promise<string> {
//     const oldAccessToken = req.headers.authorization?.split(' ').at(1);
//     const oldRefreshToken = req.cookies[CookieKeys.RefreshTokenKey];
//     // Validate
//     assert(oldAccessToken, new UnauthorizedException('AccessToken required'));
//     assert(oldRefreshToken, new UnauthorizedException('RefreshToken required'));
//     // Verify tokens, decode access token
//     const [payload] = await Promise.all([
//       this.jwtService.verifyAsync(oldAccessToken, {
//         secret: this.configService.config.accessTokenSecret,
//         ignoreExpiration: true,
//       }).catch(() => {
//         throw new UnauthorizedException('Invalid access token');
//       }) as Promise<IAccessTokenPayload>,
//       this.jwtService.verifyAsync(oldRefreshToken, {
//         secret: this.configService.config.refreshTokenSecret + oldAccessToken,
//         ignoreExpiration: false,
//       }).catch(() => {
//         throw new UnauthorizedException('Invalid refresh token');
//       }),
//     ]);
//     const user = await this.prisma.user.findFirst({
//       where: {
//         id: payload.userId,
//         tokenHash: { not: null },
//         deletedAt: null,
//       },
//     });
//     assert(user, new UnauthorizedException('User not found or was not authorized'));
//     // Generate new tokens & put hashed token into user
//     const { accessToken, refreshToken } = await this.authService.generateTokens(user);
//     // Put refreshToken into cookies
//     this.securityService.putTextIntoCookies({
//       res,
//       key: CookieKeys.RefreshTokenKey,
//       text: refreshToken,
//       expires: new Date(Date.now() + ms(this.configService.config.refreshTokenExpires)),
//     });
//     // Return accessToken
//     return accessToken;
//   }
// }
