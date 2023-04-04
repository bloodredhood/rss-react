import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Card, FormCard } from '../../types';
import Input from '../Form/Input';

import './CardForm.css';

interface Props {
  addNewCard: (card: Card) => void;
}

const CardForm: React.FC<Props> = ({ addNewCard }) => {
  const methods = useForm<FormCard>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: FormCard) => {
    let objectUrl = '';
    if (data.image[0]) {
      objectUrl = URL.createObjectURL(data.image[0]);
    }
    addNewCard({ ...data, image: objectUrl });
    reset();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <FormProvider {...methods}>
      <form className="newCardForm" onSubmit={handleSubmit(onSubmit)}>
        <h2>Add new computer</h2>
        <div>Computer type</div>
        <select
          id="type"
          {...register('type', {
            required: true,
          })}
        >
          <option value="">---- choose computer type ----</option>
          <option value="PC">PC</option>
          <option value="Laptop">Laptop</option>
        </select>
        <span className="formError">{errors?.type && 'you should to pick one option'}</span>

        <Input
          className="textInput"
          type="text"
          label="Computer name"
          name="name"
          options={{ required: true, pattern: /^[A-Z][a-z]+\s[A-Z][a-z]+$/ }}
          text="shouldn't be empty, each word starts with capital letters"
          role="textinput"
        />
        <div>Choose availibility</div>
        <div className="switch">
          <div className="green">
            <input
              type="radio"
              id="avail"
              {...register('avail', {
                required: 'choose one option',
              })}
              defaultValue="avail"
            />
            <label htmlFor="avail">Availible</label>
          </div>
          <div className="red">
            <input
              type="radio"
              id="unavail"
              {...register('avail', {
                required: true,
              })}
              defaultValue="unavail"
            />
            <label htmlFor="unavail">Unavailible</label>
          </div>
        </div>
        <span className="formError">{errors?.avail && 'choose one option'}</span>
        <Input
          className="date"
          type="date"
          label="Publication date"
          name="date"
          options={{ required: true }}
          text="shouldn't be empty, each word starts with capital letters"
          role="dateinput"
        />
        <Input
          className="upload"
          type="file"
          label="Product image"
          name="image"
          options={{ required: true }}
          text="must be uploaded"
          role="imageinput"
        />
        <div className="checkboxWrapper">
          <Input
            label="check all fields"
            type="checkbox"
            className="checkbox"
            name="verify"
            options={{ required: true }}
            role="checkbox"
            text="must be signed"
          />
        </div>
        <button className="submitButton inputItem" type="submit" role="button">
          submit
        </button>
        {isSubmitted && <p style={{ color: 'green' }}>Submitted</p>}
      </form>
    </FormProvider>
  );
};

export default CardForm;
