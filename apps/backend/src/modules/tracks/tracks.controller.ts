import { Body, Controller, Get, Post } from '@nestjs/common';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private readonly service: TracksService) {}
  @Get() list() { return this.service.list(); }
  @Post() create(@Body() body: Record<string, unknown>) { return this.service.create(body); }
}
