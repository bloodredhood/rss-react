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
