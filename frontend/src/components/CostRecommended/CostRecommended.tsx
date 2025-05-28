import Button from '../Button/Button';
import styles from './CostRecommended.module.css';

function CostRecommended() {
  return (
    <div className={styles.calculationBlock}>
      <div className={styles.content}>
        <h2 className={styles.title}>УЗНАЙТЕ ТОЧНУЮ СТОИМОСТЬ<br />ВАШЕГО РЕМОНТА</h2>
        
        <div className={styles.qualityControl}>
          <div className={styles.qualityIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                    stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className={styles.qualityTitle}>КОНТРОЛЬ КАЧЕСТВА</h3>
        </div>

        <div className={styles.benefits}>
          <h4 className={styles.benefitsTitle}>ВЫ СМОЖЕТЕ БЕСПЛАТНО:</h4>
          <ul className={styles.benefitsList}>
            <li>Получить консультацию по ремонту квартир у нашего прораба</li>
            <li>Получить расчет сметы на ремонт</li>
            <li>Подобрать материалы с учетом вашего бюджета</li>
            <li>Получить рекомендации по эксплуатации после ремонта</li>
          </ul>
        </div>

        <p className={styles.callToAction}>Позвоните нам для ознакомления с нашими предложениями!</p>
        <div className={styles.buttonContainer}>
            <Button>позвонить</Button>
        </div>
      </div>
    </div>
  );
};

export default CostRecommended;