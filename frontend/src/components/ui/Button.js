import styles from './Button.module.scss';

export const Button = ({ 
    type,
    onClick,
    children
  }) => {

  return (
    <button
      className={`${styles.btn} ${styles.btn_primary_solid}`}  
      onClick={onClick} 
      type={type}
    >
      {children}
    </button>
  )
}


// TODO: https://codesandbox.io/s/strange-sun-lnwvz?file=/src/components/button.css