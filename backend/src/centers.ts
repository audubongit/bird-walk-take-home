import centers from '../data/centers.json';

interface Centers {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  fax: string;
  openTime: string;
  closeTime: string;
  timeZone: string;
}

export async function getCenters(): Promise<Centers[]> {
  return centers;
}
