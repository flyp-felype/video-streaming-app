import { Module } from '@nestjs/common';
import { ContentController } from './http/controller/content.controller';
import { PrismaService } from '@src/persistence/prismaservice/prisma.service';
import { MediaPlayerService } from './core/service/media-player.service';
import { ContentManagmenetService } from './core/service/content-management.service';

@Module({
  imports: [],
  controllers: [ContentController],
  providers: [PrismaService, ContentManagmenetService, MediaPlayerService],
})
export class AppModule {}
