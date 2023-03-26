import { RefObject } from 'react';

export interface FormCard {
  type: string;
  name: string;
  availibility: string;
  date: string;
  image: string;
}

export interface FormPropsI {
  newCard: (card: FormCard) => void;
}

export interface FormStateI {
  errors: {
    type: string;
    pcname: string;
    date: string;
    image: string;
    verify: string;
  };
  validate: string;
}

export const nameValid = (value: string): boolean => {
  const parts = value.split(' ').map((part) => part.trim());
  return (
    parts.every((part) => part.length >= 3 && part[0] === part[0].toUpperCase()) &&
    parts.length === 2
  );
};

export const dateValid = (value: string): boolean => {
  const parts = value.split('-');
  return !!value && +parts[0] >= 2020;
};

export const createImage = (ref: RefObject<HTMLInputElement>): string => {
  const input = ref.current as HTMLInputElement;
  const file: File | null = input?.files ? input.files[0] : null;
  return file ? URL.createObjectURL(file) : '';
};
