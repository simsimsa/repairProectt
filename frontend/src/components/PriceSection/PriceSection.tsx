import styles from './PriceSection.module.css';
import Button from '../Button/Button';
import Title from '../Title/Title';

export function PriceSection() {
  return (
    <section className={styles.priceSection}>
        <Title>Цены на ремонт и строительство</Title>
        <div className={styles.blockContent}>
        <div className={styles.imageContainer}>
            <div 
              className={styles.image}
              style={{ backgroundImage: "url('repairExample.jpg')" }}
            />
          </div>
        <div className={styles.content}>
          <p className={styles.text}>
            <strong>Одно из ключевых преимуществ нашей компании - прозрачность расчета сметы на ремонт и строительство в Сыктывкаре.</strong>
          </p>
          
          <p className={styles.text}>
            Каждый договор сопровождает подробная смета со списком материалов и работ, требуемых для реализации проекта. Наши специалисты составят ее согласно результатам замеров и вашим пожеланиям, с учетом озвученного бюджета.
          </p>
          
          <p className={styles.text}>
            Перед началом работ на указанный адрес приезжает прораб, который оценит:
          </p>
          
          <ul className={styles.features}>
            <li>Состояние помещения или строительной площадки</li>
            <li>Коммуникации и инженерные системы</li>
            <li>Необходимость дополнительных работ</li>
            <li>Особенности сыктывкарского климата</li>
          </ul>
          
          <p className={styles.text}>
            Затем вместе с вами выберем оптимальный вариант ремонта или строительства, порекомендуем лучшие материалы. <strong>Расчет проводится бесплатно!</strong> Цены в Сыктывкаре могут отличаться в зависимости от типа объекта и сезона, поэтому мы всегда проводим предварительный осмотр.
          </p>
        </div>
        </div>
        
        <div className={styles.consultation}>
          <Button>позвонить</Button>
        </div>
    </section>
  );
}