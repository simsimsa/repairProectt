import Hr from '../HR/Hr';
import Title from '../Title/Title';
import Description from '../Description/Description';
import { FeatureItems } from '../../ExportInfo/FeatureItems';
import FeatureItem from '../FeatureItem/FeatureItem';
import styles from './ServiceInfo.module.css'

export function ServiceInfo() {
  return (
    <section className={styles.companyInfo}>
      <div className={styles.header}>
        <Title>«НАЗВАНИЕ» - ВСЕГДА РЯДОМ</Title>
        <Hr />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <Description>
            <strong>Наша компания с 1997 года специализируется на выполнении ремонта квартир и строительстве зданий в Сыктывкаре.</strong>
          </Description>
          
          <p className={styles.description}>
            В наше время только ленивый не «бросает камень» в сторону строителей и отделочников. Но мы ясно представляем все возможные проблемы заказчика, знаем пути их решения и обязуемся приложить все усилия для быстрого и качественного проведения вашего ремонта.
          </p>

          <ul className={styles.featuresList}>
          {FeatureItems.map((item, index) => (
          <FeatureItem key={index}>{item}</FeatureItem>
        ))}
          </ul>

          <div className={styles.ctaBlock}>
            <p className={styles.ctaText}>Давайте вместе создадим уют в вашем доме!</p>
            <div className={styles.contactBox}>
              <p className={styles.contactText}>Сделать заказ на услуги нашей компании вы можете по тел.:</p>
              <a href="tel:+79052223360" className={styles.phoneLink}>
                <span className={styles.phoneIcon}>📞</span>
                +7 (905) 222-33-60
              </a>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}><img src='/serviceExample.jpg'className={styles.image}/></div>
        </div>
      </div>
    </section>
  );
}