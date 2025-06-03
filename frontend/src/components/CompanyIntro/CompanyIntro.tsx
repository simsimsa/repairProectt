import Button from '../Button/Button';
import Description from '../Description/Description';
import Title from '../Title/Title';
import styles from './CompanyIntro.module.css';

export function CompanyIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Title>«КОМПАНИЯ» – ПРОФЕССИОНАЛЫ РЕМОНТА!</Title>
          <Description>
            Прорабы нашей фирмы – профессиональные инженеры-строители, до мельчайших тонкостей 
            разбирающиеся в строительных и отделочных технологиях.
          </Description>
          <Description >
            Наш офис-менеджер никогда не оставит без внимания все Ваши вопросы, 
            профессионально разъяснит каждому клиенту особенности работы компании.
          </Description>
          <div className={styles.buttonWrapper}>
            <Button>консультация</Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.image}></div>
        </div>
      </div>
    </section>
  );
}