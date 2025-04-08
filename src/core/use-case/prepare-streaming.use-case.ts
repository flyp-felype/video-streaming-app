import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/persistence/prismaservice/prisma.service';

@Injectable()
export class PrepareStreamingUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(id: string) {
    return await this.prismaService.video.findUnique({
      where: {
        id,
      },
    });
  }
}
