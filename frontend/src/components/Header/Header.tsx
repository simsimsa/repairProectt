import Hr from "../HR/Hr";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>РЕМОНТ</h1>
      <h2>И СТРОИТЕЛЬСТВО</h2>
      <h3>В СЫКТЫВКАРЕ</h3>
      <Hr/>
      <div className={styles.companyName}>«НАЗВАНИЕ - всегда рядом»</div>
    </header>
  );
};

export default Header;