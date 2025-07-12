import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './roles.enum';
import { Request } from 'express';

interface User {
  rol?: Role;
  roles?: Role[];
  // ...otras propiedades si las necesitas
}

interface AuthenticatedRequest extends Request {
  user?: User;
}

// Archivo eliminado: roles.guard.ts
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<Role[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const user = request.user;
    return user?.roles?.some((role) => roles.includes(role)) ?? false;
  }
}
