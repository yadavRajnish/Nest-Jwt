import { Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { authService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { constant } from './constant';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: authService
  ) { }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    return this.authService.generateToken(req.user)
  }

  @Get('web-dev')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(constant.ROLES.Web_Dev))
  webDeveloper(@Request() req): string {
    return 'Web Developer ' + JSON.stringify(req.user)
  }

  @Get('game-dev')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(constant.ROLES.Game_Dev))
  gameDeveloper(@Request() req): string {
    return 'Game Developer ' + JSON.stringify(req.user)
  }

}
