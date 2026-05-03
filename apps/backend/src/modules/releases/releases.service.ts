import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ReleasesService {
  list() { return { items: [], lifecycle: ['draft','qc','scheduled','distributed','archived'] }; }
  get(id: string) { return { id, status: 'draft' }; }
  create(payload: Record<string, unknown>) { return { id: randomUUID(), ...payload }; }
}
