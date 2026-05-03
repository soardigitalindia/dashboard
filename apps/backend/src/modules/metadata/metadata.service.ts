import { Injectable } from '@nestjs/common';

@Injectable()
export class MetadataService {
  async autofetch(query: { isrc?: string; upc?: string; locale?: string }) {
    return { source: 'adapter-placeholder', locale: query.locale ?? 'en-IN', data: query };
  }
}
