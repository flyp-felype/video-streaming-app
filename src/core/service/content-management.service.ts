import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/persistence/prismaservice/prisma.service';
import { randomUUID } from 'crypto';

export interface CreateContentData {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  sizeInKb: number;
}

@Injectable()
export class ContentManagmenetService {
  constructor(private readonly prismaService: PrismaService) {}

  async createContent(createContentData: CreateContentData) {
    const { title, description, url, thumbnailUrl, sizeInKb } =
      createContentData;

    const createdVideo = await this.prismaService.video.create({
      data: {
        id: randomUUID(),
        title,
        description,
        url,
        thumbnailUrl,
        sizeInKb,
        duration: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return createdVideo;
  }
}
