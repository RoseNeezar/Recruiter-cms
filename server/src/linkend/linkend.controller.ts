import { Controller, Post, Query } from '@nestjs/common';
import { LinkendService } from './linkend.service';

@Controller('linkend')
export class LinkendController {
  constructor(private readonly linkendService: LinkendService) {}

  @Post('/find')
  search(@Query('url') title: string) {
    return this.linkendService.search(title);
  }
}
