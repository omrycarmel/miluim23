import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/db/dbinit';
import { CredentialsDbModel } from './credentials.dbmodel';

@Injectable()
export class AuthService {
    private readonly repo = AppDataSource.getRepository(CredentialsDbModel);

    async getDefaultPassword(): Promise<string> {
        const c =  await this.repo.findOneBy({
            user: 'default'
        });
        return c.password;
    }

    async getAdminPassword(): Promise<string> {
        const c =  await this.repo.findOneBy({
            user: 'admin'
        });
        return c.password;
    }

    parsePasswordFromBasicAuth(basicAuth: string): string {
        const basicVal = basicAuth.split(' ')[1];
        const decoded = Buffer.from(basicVal, 'base64').toString('binary');
        return decoded.split(':')[1];
    }
}
