import { Module } from '@nestjs/common';
import { RoyaltiesController } from './royalties.controller';
import { RoyaltiesService } from './royalties.service';

@Module({ controllers: [RoyaltiesController], providers: [RoyaltiesService] })
export class RoyaltiesModule {}
