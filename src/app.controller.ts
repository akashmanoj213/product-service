import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  healthCheck(): string {
    return "Service running successfully...";
  }

  @Get('startup')
  startupCheck(): string {
    return "Service started successfully!";
  }
}
