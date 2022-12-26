import styles from './Button.module.scss';

const __STYLES__ = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline"
];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle
}) => {

  const checkButtonStyle = __STYLES__.includes(styles.buttonStyle)
    ? styles.buttonStyle
    : __STYLES__[0];

  return (
    <button
      className={`btn styles.${checkButtonStyle}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};








// function Button({ type, onClick, children }) {
//   return (
//     <button
//       className={`${styles.btn} ${styles.btn_primary_solid}`}  
//       onClick={onClick} 
//       type={type}
//     >
//       {children}
//     </button>
//   );
// }

// export default Button;


// TODO: https://codesandbox.io/s/strange-sun-lnwvz?file=/src/components/button.css