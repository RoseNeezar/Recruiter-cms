import { Module } from '@nestjs/common';
import { LinkendController } from './linkend.controller';
import { LinkendService } from './linkend.service';

@Module({
  controllers: [LinkendController],
  providers: [LinkendService]
})
export class LinkendModule {}
