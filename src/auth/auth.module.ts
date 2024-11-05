import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { authService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [PassportModule, UserModule,
        JwtModule.register({
            secret: 'key',
            signOptions: { expiresIn: '60s' }
        })
    ],
    controllers: [],
    providers: [LocalStrategy, authService, JwtStrategy],
    exports: [authService]
})
export class AuthModule { }
