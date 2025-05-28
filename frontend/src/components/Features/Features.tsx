import styles from './Features.module.css'

interface FeatureItem {
  title: string;
  description?: string;
}

function Features() {
  const features: FeatureItem[] = [
    { title: 'Опыт работы с 2000 года' },
    { title: 'Строгий контроль качества' },
    { title: 'Гарантия низкой цены' },
    { title: 'Индивидуальный подход к каждому' },
    { title: 'Профессиональная команда мастеров' },
    { title: 'Прозрачное ценообразование'}
  ];

  return (
    <section className={styles.features}>
      {features.map((feature, index) => (
        <div key={index} className={styles.feature}>
          <h4>{feature.title}</h4>
          {feature.description && <div>{feature.description}</div>}
        </div>
      ))}
    </section>
  );
};

export default Features;