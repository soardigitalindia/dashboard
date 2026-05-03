import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class TracksService {
  list() { return { items: [] }; }
  create(payload: Record<string, unknown>) { return { id: randomUUID(), ...payload }; }
}
