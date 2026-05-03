import { Injectable } from '@nestjs/common';

@Injectable()
export class PublishingService {
  works() { return { items: [] }; }
  setSplits(payload: Record<string, unknown>) { return { saved: true, payload }; }
}
