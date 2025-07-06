import Hr from "../HR/Hr";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.mainTitle}>РЕМОНТ	&nbsp;</h1>
      <h2 className={styles.subTitle}>И СТРОИТЕЛЬСТВО</h2>
      <h2 className={styles.subTitle}>В СЫКТЫВКАРЕ</h2>
      <Hr/>
      <div className={styles.companyName}>«НАЗВАНИЕ - всегда рядом»</div>
    </header>
  );
};

export default Header;