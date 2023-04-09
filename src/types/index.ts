export interface ProductI {
  id: string;
  name: string;
  processor: string;
  ram: string;
  disk: string;
  graphics: string;
  isAvailible: boolean;
  price: string;
  image: string;
}

interface CardBase {
  type: string;
  name: string;
  avail: string;
  date: string;
  verify: boolean;
}

export interface FormCard extends CardBase {
  image: FileList;
}

export interface Card extends CardBase {
  image: string;
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
}
