import Button from "../../components/Button/Button";
import CalculatorForm from "../../components/CalculatorForm/CalculatorForm";
import CostRecommended from "../../components/CostRecommended/CostRecommended";
import Description from "../../components/Description/Description";
import Features from "../../components/Features/Features";
import Header from "../../components/Header/Header";
import Hr from "../../components/HR/Hr";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Title from "../../components/Title/Title";
import styles from './Home.module.css'

    const services = [
      {
        title: 'КОСМЕТИЧЕСКИЙ РЕМОНТ',
        price: 'от 9 900 ₽/м²',
        duration: 'от 30 дней',
        buttonText: 'оставить заявку',
        image: '/repairExample.jpg',
        features: [
          'Выравнивание стен и потолков',
          'Оклейка обоями',
          'Укладка ламината',
          'Замена сантехники',
          'Монтаж светильников'
        ]
      },
      {
        title: 'КАПИТАЛЬНЫЙ РЕМОНТ',
        price: 'от 16 900 ₽/м²',
        duration: 'от 45 дней',
        buttonText: 'оставить заявку',
        image: '/repairExample.jpg',
        features: [
          'Полная перепланировка',
          'Замена электропроводки',
          'Замена труб водоснабжения',
          'Черновая отделка',
          'Утепление помещений'
        ]
      },
      {
        title: 'СТРОИТЕЛЬСТВО ДОМОВ',
        price: 'от 32 900 ₽/м²',
        duration: 'от 4 месяцев',
        buttonText: 'оставить заявку',
        image: '/repairExample.jpg',
        features: [
          'Каркасные технологии',
          'Дома из бруса',
          'Кирпичные коттеджи',
          'Полный цикл работ',
          'Авторский надзор'
        ]
      },
      {
        title: 'ЭЛИТНЫЙ РЕМОНТ',
        price: 'от 29 900 ₽/м²',
        duration: 'от 60 дней',
        buttonText: 'оставить заявку',
        image: '/repairExample.jpg',
        features: [
          'Дизайн-проект',
          'Премиальные материалы',
          'Авторский надзор',
          'Комплексная отделка',
          'Умный дом'
        ]
      }
    ];

export function Home() {
    return (
        <div className={styles['layout']}>
            <div>
                <div className={styles.h1Header}>
                    <div className={styles.H1HeaderContainer}>
                        <div className={styles.textH1}>Помогаем людям и компаниям уже 29 лет!</div>
                        <Hr/>
                    </div>
                    <div className={styles.H1HeaderContainer}>
                        <div className={styles.textH1}>Принимаем звонки в любой день с 10:00 до 22:00</div>
                        <Button>позвонить</Button>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <Header/>
                <CalculatorForm/>
            </div>
            <Features/>
            <Hr/>
            <section>
                <Title>РЕМОНТ И СТРОИТЕЛЬСТВО В СЫКТЫВКАРЕ</Title>
                <div className={styles.intro}>
                    <Description>
                    Вам необходим качественный ремонт или строительство? Наша компания предлагает полный спектр услуг в Сыктывкаре. 
                    Оставьте заявку на сайте или позвоните нам - мы возьмем на себя все заботы по реализации вашего проекта.
                    </Description>
                    <Description>
                    Компания «СТРОЙ-КОМФОРТ» специализируется на ремонте квартир и строительстве зданий. В нашем штате - профессиональные строители, отделочники, проектировщики и инженеры с многолетним опытом работы в условиях сыктывкарского климата.
                    </Description>
                </div>
                <div className={styles.cartContainer}>
                    {services.map((service, index) => (
                        <ServiceCard 
                        key={index}
                        title={service.title}
                        price={service.price}
                        duration={service.duration}
                        buttonText={service.buttonText}
                        image={service.image}
                        features={service.features}
                    />
                    ))}
                </div>
            </section>
            <Hr/>
            <section>
                <CostRecommended/>
            </section>
            <Hr/>
        </div>
    )
}