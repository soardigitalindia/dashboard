import { Injectable } from '@nestjs/common';
import { create } from 'xmlbuilder2';

@Injectable()
export class DdexService {
  generateERN(payload: { releaseId: string; title: string; label: string }) {
    const doc = create({ version: '1.0', encoding: 'UTF-8' })
      .ele('ern:NewReleaseMessage', { 'xmlns:ern': 'http://ddex.net/xml/ern/43' })
      .ele('Release')
      .ele('ReleaseId').txt(payload.releaseId).up()
      .ele('Title').txt(payload.title).up()
      .ele('LabelName').txt(payload.label).up()
      .doc();

    return doc.end({ prettyPrint: true });
  }
}
