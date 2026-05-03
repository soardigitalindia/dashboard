import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReleasesModule } from './modules/releases/releases.module';
import { TracksModule } from './modules/tracks/tracks.module';
import { PublishingModule } from './modules/publishing/publishing.module';
import { RoyaltiesModule } from './modules/royalties/royalties.module';
import { WorkflowModule } from './modules/workflow/workflow.module';
import { MetadataModule } from './modules/metadata/metadata.module';
import { DdexModule } from './modules/ddex/ddex.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ReleasesModule,
    TracksModule,
    PublishingModule,
    RoyaltiesModule,
    WorkflowModule,
    MetadataModule,
    DdexModule,
  ],
})
export class AppModule {}
