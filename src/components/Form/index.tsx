import React from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  onSubmit: SubmitHandler<FieldValues>;
  children: () => JSX.Element;
}

const Form = ({ onSubmit, children }: Props) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children()}</form>
    </FormProvider>
  );
};

export default Form;
