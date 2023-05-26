import React, { useLayoutEffect, useRef } from 'react';

import styles from './FormAttempt.module.css';

const FormAttempt = () => {

  const inputGroupRef = useRef();
  const inputRef = useRef();

  useLayoutEffect(() => {
    const { current  } = inputRef;

    const handleFocus = () => inputGroupRef.current.classList.add(styles.active);
    const handleBlur = () => {
      if (!current.value.length) {
        inputGroupRef.current.classList.remove(styles.active)
      }
    };
    current.addEventListener('focus', handleFocus);
    current.addEventListener('blur', handleBlur);
    return () => {
      current.removeEventListener('focus', handleFocus);
      current.removeEventListener('blur', handleBlur);
    }
  }, [])

  return (
    <div className={styles.container}>
      <div ref={inputGroupRef} className={styles.inputGroup}>
        <label className={styles.label}>
          Your name
        </label>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          autoComplete="off"/>
        <div className={styles.border}/>
      </div>
    </div>
  )
}

export default FormAttempt