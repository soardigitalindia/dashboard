import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublishingService } from './publishing.service';

@Controller('publishing')
export class PublishingController {
  constructor(private readonly service: PublishingService) {}
  @Get('works') works() { return this.service.works(); }
  @Post('splits') setSplits(@Body() body: Record<string, unknown>) { return this.service.setSplits(body); }
}
