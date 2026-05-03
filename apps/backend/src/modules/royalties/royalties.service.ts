import { Injectable } from '@nestjs/common';

@Injectable()
export class RoyaltiesService {
  calculate(payload: Record<string, any>) {
    const gross = Number(payload.gross ?? 0);
    const tdsRate = 0.1;
    const gstRate = 0.18;
    return {
      gross,
      tds: gross * tdsRate,
      gst: gross * gstRate,
      net: gross - gross * tdsRate,
      currency: payload.currency ?? 'INR',
    };
  }
  statements() { return { items: [] }; }
}
