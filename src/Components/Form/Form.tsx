import React, { useRef, useState } from 'react';

// interface Props {
//   onSubmit: (cred: { email: string; password: string }) => void;
// }
// type Submit =(email:string, password:string) =>void

interface Props{

onSubmit:(cred: {email:string, password:string})=> void
    // onSubmit: Submit;
}


export default function Form({ onSubmit }:Props) {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formRef = useRef(null);




  const onChange = (evt:  React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Неизвестное имя поля - ${name}`);
    }
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({ email, password });
  };
  console.log(formRef)
  return (
    <form onSubmit={handleSubmit} ref={formRef} >
      <label>
        Почта
        <input type="mail" name="email" onChange={onChange} value={email} />
      </label>

      <label>
        Пароль
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={password}
        />
      </label>
      <button type="submit">Войти</button>
    </form>
  );
}