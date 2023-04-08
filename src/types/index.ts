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
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: Array<string>;
  aliases: Array<string>;
  father: string;
  mother: string;
  spouse: string;
  allegiances: Array<string>;
  books: Array<string>;
  povBooks: Array<string>;
  tvSeries: Array<string>;
  playedBy: string;
}
