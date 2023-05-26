import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

// interface Props {
//   onSubmit: (cred: { email: string; password: string }) => void;
// }
// type Submit =(email:string, password:string) =>void

interface Props{

onSubmit:(cred: {email:string, password:string})=> void
    // onSubmit: Submit;
}

console.log('ss')
export default function Form({ onSubmit }:Props) {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const h1Ref = useRef<HTMLHeadingElement>(null);

// const inputRef = document.querySelector('input');

// console.log(inputRef)
  useLayoutEffect(() => {
    console.log(h1Ref)
    const  changeInnerText =(el: HTMLElement, value: string)=> {
  el.innerText = value;
}
    if (null !== h1Ref.current) {

changeInnerText(h1Ref.current, 'hello world');
}
    
    
  },[])
  
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

  return (
    <form autoComplete='off' onSubmit={handleSubmit}  >
      <h1 ref={h1Ref}>Lol</h1>
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