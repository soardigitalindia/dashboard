import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkflowService {
  readonly transitions = {
    draft: ['qc'],
    qc: ['scheduled', 'draft'],
    scheduled: ['distributed'],
    distributed: ['archived'],
  };
}
