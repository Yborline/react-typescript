import React, { useState } from 'react';
import './ColorPicker.css';

type Object = {
  label: string;
  color: string;
};

interface Props {
  options: Object[];
  initialOptionPos?: number;
}

const ColorPicker = ({ options, initialOptionPos = 1 }: Props) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(initialOptionPos - 1);
  const [backgroundColor ,setBackgroundColor] = useState('')

  const setActiveIdx = (index: number) => setActiveOptionIdx(index);

  const makeOptionClassName = (index: number , color: string) => {
    const optionClasses = ['ColorPickerOption'];
 

    if (index === activeOptionIdx) {
      optionClasses.push('ColorPickerOptionActive');
      if (backgroundColor !== color) {
       setBackgroundColor(color)
      }

    }

    return optionClasses.join(' ');
  };

  const { label } = options[activeOptionIdx];

  return (
    <div className="ColorPicker" style={{backgroundColor:backgroundColor}}>
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index ,color)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;



//



