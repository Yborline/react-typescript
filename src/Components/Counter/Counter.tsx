import React, { useState } from "react";
import s from './Counter.module.css'





// const Counter: React.FC<Props> = ({ initialValue = 0, initialStep = 1 }) => {
  const Counter= ({initialValue = 0 ,initialStep = 1}) => {

    const [value, setValue] = useState<number>(initialValue);


  const changeIncrement = () => {
    setValue(value => value + initialStep);
    setValue(value => value + initialStep);
        setValue(value =>value + initialStep);
  };

  const changeDecrement = () => {
    if (value === 0) {
      return;
    }
    setValue(value => value - initialStep);
    
  };

  return (
    <div className={s.Counter}>
      <p className={s.Counter__value}>{value}</p>
      <div className={s.Counter__controls}>
        <button className={s.button} onClick={changeDecrement}>-</button>
        <button className={s.button} onClick={changeIncrement}>+</button>
      </div>
    </div>
  );
};

export default Counter;



// import React, { useState } from 'react';


// interface Props {
//   initialValue?: number;
//   step?: number;
// }
// // const Counter = ({ initialValue = 0, step = 1 }: Props) => {

// const Counter:React.FC<Props> = ({ initialValue = 0, step = 1 }: Props) => {

//   const [value, setValue] = useState(initialValue);

//   const increment = () => setValue(value => value + step);

//   const decrement = () => setValue(value => value - step);

//   return (
//     <div className="Counter">
//       <span className="Counter__value">{value}</span>

//       <div className="Counter__controls">
//         <button type="button" onClick={increment}>
//           Увеличить на {step}
//         </button>
//         <button type="button" onClick={decrement}>
//           Уменьшить на {step}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Counter;