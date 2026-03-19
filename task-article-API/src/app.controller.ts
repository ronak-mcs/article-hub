import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { appService } from './app.service';
import { Response } from 'express';
import { sessionRequest } from './types/extended-request';
@Controller()
export class appController {
  private appService: appService;
  constructor() {
    // Manually instantiate AppService and LoggerService
    this.appService = new appService(); // Manually instantiate AppService
  }

  @Get()
  @Render('index')
  getHello(): object {
    return { status: '', message: '' };
  }

  @Get('logout')
  async(@Req() req: sessionRequest, @Res() res: Response) {
    try {
      req.session?.destroy((err: Error | null) => {
        if (err) {
          return res.status(500).json({ status: false, message: 'Error logging out' });
        }

        res.redirect('/v1');
      });
    } catch (error) {
      return res.status(500).json({ status: false, message: 'Error logging out' });
    }
  }
}
