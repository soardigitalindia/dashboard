import { Module } from '@nestjs/common';
import { DdexService } from './ddex.service';

@Module({ providers: [DdexService], exports: [DdexService] })
export class DdexModule {}
