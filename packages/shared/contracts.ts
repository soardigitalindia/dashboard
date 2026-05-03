export interface Release {
  id: string;
  title: string;
  language: string;
  territory: string[];
  status: 'draft' | 'qc' | 'scheduled' | 'distributed' | 'archived';
}

export interface RoyaltyInput {
  gross: number;
  currency: 'INR' | 'USD' | 'EUR';
}
