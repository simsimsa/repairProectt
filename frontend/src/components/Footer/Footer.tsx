import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const services = [
    { name: "Ремонт и отделка", path: "repair" },
    { name: "Дизайн помещений", path: "design" },
    { name: "Консультация по ремонту", path: "consultation" }
  ];

function Footer () {

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>ЛОГОТИП</div>
          <p className={styles.slogan}>Помогаем людям и компаниям уже 29 лет!</p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}><NavLink 
                  to="/" 
                  className={styles.navLink}>Услуги</NavLink></h4>
            <ul>
              {services.map((service) => (
                <li key={service.path}>
                  <NavLink 
                    to={service.path} 
                    className={({isActive}) => 
                      isActive ? styles.activeNavLink : styles.navLink
                    }
                  >
                    {service.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Навигация</h4>
            <ul>
              <li>
                <NavLink 
                  to="/prices" 
                  className={({isActive}) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Цены
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/gallery" 
                  className={({isActive}) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Галерея
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/service" 
                  className={({isActive}) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Сервис
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/company" 
                  className={({isActive}) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  О компании
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contacts" 
                  className={({isActive}) => 
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.linkTitle}>Контакты</h4>
            <ul className={styles.contacts}>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H19C11.83 20.92 3.08 12.17 3.08 5V3C3.08 2.45 3.53 2 4.08 2H7.08C7.63 2 8.08 2.45 8.08 3V5C8.08 5 8.08 8.92 8.08 9C8.08 9.31 7.96 9.61 7.75 9.83L5.25 12.33C6.49 14.94 9.06 17.51 11.67 18.75L14.17 16.25C14.39 16.04 14.69 15.92 15 15.92C15 15.92 18.92 15.92 19 15.92C19.55 15.92 20 16.37 20 16.92V16.92Z" stroke="#B8860B" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <span>Принимаем до 22:00</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#B8860B" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="#B8860B" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:info@example.com" className={styles.mailLink}>info@example.com</a>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#B8860B" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M12 11C13.1 11 14 10.1 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11Z" stroke="#B8860B" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                г. Сыктывкар
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Название компании. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;