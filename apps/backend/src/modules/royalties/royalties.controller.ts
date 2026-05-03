import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoyaltiesService } from './royalties.service';

@Controller('royalties')
export class RoyaltiesController {
  constructor(private readonly service: RoyaltiesService) {}
  @Post('calculate') calculate(@Body() body: Record<string, unknown>) { return this.service.calculate(body); }
  @Get('statements') statements() { return this.service.statements(); }
}
