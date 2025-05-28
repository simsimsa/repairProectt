import styles from './Features.module.css'

interface FeatureItem {
  title: string;
  description?: string;
}

function Features() {
  const features: FeatureItem[] = [
    { 
        title: 'Опыт работы с 2000 года',
        description: '22 года безупречной работы' 
      },
      { 
        title: 'Строгий контроль качества',
        description: '3-уровневая система проверки' 
      },
      { 
        title: 'Гарантия низкой цены',
        description: 'Вернем разницу, если найдете дешевле' 
      },
      { 
        title: 'Индивидуальный подход',
        description: 'Персональный прораб для каждого клиента' 
      },
      { 
        title: 'Профессиональная команда',
        description: 'Мастера с опытом от 7 лет' 
      },
      { 
        title: 'Прозрачное ценообразование',
        description: 'Никаких скрытых платежей' 
      }
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