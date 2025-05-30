import Hr from '../HR/Hr';
import styles from './CooperationSection.module.css';

export function CooperationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>ПРИГЛАШАЕМ К СОТРУДНИЧЕСТВУ</h2>
          <Hr />
          <p className={styles.description}>
            Приглашаем к партнёрству всех, кто заинтересован в долговременном, 
            взаимовыгодном сотрудничестве и нацелен на результат!
          </p>
          
          <div className={styles.steps}>
            <h3 className={styles.subtitle}>Как начать сотрудничество:</h3>
            <ol className={styles.stepsList}>
              <li className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <span className={styles.stepText}>Пришлите информацию о Вас или Вашей компании</span>
              </li>
              <li className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <span className={styles.stepText}>Договоритесь о встрече и проведите переговоры</span>
              </li>
              <li className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <span className={styles.stepText}>Заключите договор о сотрудничестве</span>
              </li>
            </ol>
          </div>
          
          <div className={styles.benefits}>
            <h3 className={styles.subtitle}>Наши преимущества для партнеров:</h3>
            <ul className={styles.benefitsList}>
              <li className={styles.benefit}>Гибкие условия сотрудничества</li>
              <li className={styles.benefit}>Своевременные выплаты</li>
              <li className={styles.benefit}>Постоянный поток заказов</li>
              <li className={styles.benefit}>Профессиональная поддержка</li>
              <li className={styles.benefit}>Возможность роста и развития</li>
            </ul>
          </div>
          
          <div className={styles.contacts}>
            <p className={styles.contactsTitle}>Для обсуждения условий сотрудничества:</p>
            <a href="tel:+79052223360" className={styles.contactLink}>+7 (905) 222-33-60</a>
            <a href="mailto:partner@example.ru" className={styles.contactLink}>partner@example.ru</a>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.image}></div>
        </div>
      </div>
    </section>
  );
}