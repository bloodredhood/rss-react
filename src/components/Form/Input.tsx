import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useMemo } from 'react';

interface Props {
  name: string;
  type: string;
  label: string;
  options: object;
  className: string;
  text: string;
  role: string;
}

const Input = ({ name, type, label, options = {}, className, text }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const displayMessage = useMemo(() => `${label} ${text}`, [label, text]);

  return (
    <>
      <label>{label}</label>
      <input className={className} type={type} id={name} {...register(name, { ...options })} />
      {errors && errors[name] && <span className="formError">{displayMessage}</span>}
    </>
  );
};

export default Input;
