import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class AuthRefreshJwtGuard extends AuthGuard('jwt-refresh') {}
