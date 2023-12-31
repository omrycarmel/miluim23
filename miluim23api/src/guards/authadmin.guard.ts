import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";
import { Request } from "express";

@Injectable()
export class AuthAdminGuard implements CanActivate {
    constructor(private authService: AuthService) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request  =  context.switchToHttp().getRequest<Request>();
        const password = this.authService.parsePasswordFromBasicAuth(request.headers.authorization);
        const adminPassword = await this.authService.getAdminPassword();
        return password == adminPassword;
    }
}