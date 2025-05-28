import { useRef, useState } from 'react';
import styles from './FAQSection.module.css';
import FAQItem from '../FAQItem/FAQItem';
import Title from '../Title/Title';

const faqItems = [
    {
      question: "Можно ли в процессе ремонта внести изменения?",
      answer: "Да, мы предусмотрели гибкую систему изменений. После согласования с прорабом и перерасчёта стоимости изменения будут внедрены. Обычно это занимает 1-2 рабочих дня."
    },
    {
      question: "От чего зависит цена ремонта за 1 кв/м?",
      answer: "Стоимость формируется из: типа ремонта (косметический от 4 900 ₽/м², капитальный от 8 900 ₽/м²), выбранных материалов (эконом, стандарт, премиум), сложности планировки и дополнительных услуг."
    },
    {
      question: "Включены ли материалы в общую стоимость?",
      answer: "Мы предлагаем 3 варианта: 1) Только работа (материалы вы покупаете сами), 2) Работа + базовые материалы, 3) Под ключ (включая дизайн-проект и премиальные материалы)."
    },
    {
      question: "Как происходит оплата?",
      answer: "Без предоплат! Оплата только за выполненные этапы: 30% после черновых работ, 40% после чистовой отделки, 30% после сдачи объекта. Принимаем наличные, безнал и рассрочку."
    },
    {
      question: "Почему лучше заказывать дизайн, ремонт и материалы в одной компании?",
      answer: "Это даёт: 1) Единую гарантию на весь проект, 2) Экономию до 25% за счёт оптовых цен на материалы, 3) Полное соответствие дизайн-проекта и реализации, 4) Ответственного подрядчика за весь цикл."
    },
    {
      question: "Присылаете ли вы фотоотчёты о проделанной работе?",
      answer: "Да, мы ежедневно отправляем: 1) Фотоотчёт в WhatsApp/Telegram, 2) Видеообзор раз в неделю, 3) Онлайн-доступ к камере на объекте (по желанию). Вы всегда в курсе прогресса!"
    },
    {
      question: "Даёте ли вы гарантию на ремонтные услуги?",
      answer: "Предоставляем гарантию: 2 года на косметический ремонт, 5 лет на капитальный, 7 лет на инженерные системы. Все условия прописаны в договоре."
    },
    {
      question: "Как быстро можно начать ремонт после заявки?",
      answer: "Стандартно — через 3-5 дней. В срочных случаях организуем выезд в день обращения. Имеем 12 бригад в Сыктывкаре, поэтому задержек не бывает."
    },
    {
      question: "Работаете ли вы с дизайн-проектами от других студий?",
      answer: "Да, выполняем ремонт по любым проектам. Наши инженеры предварительно проверят проект на реализуемость и предложат оптимизации для экономии бюджета."
    },
    {
      question: "Что делать, если что-то не понравилось в процессе работы?",
      answer: "1) Сообщите прорабу — исправим в течение 24 часов, 2) Если вопрос не решён — позвоните директору, 3) В крайнем случае — расторгаем договор без штрафов."
    }
  ];

function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [closingIndex, setClosingIndex] = useState<number | null>(null);
    const timeoutRef = useRef<number | null>(null);

    const handleItemClick = (index: number) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        if (activeIndex === index) {
          setActiveIndex(null);
          setClosingIndex(null);
        } else {
          if (activeIndex !== null) {
            setClosingIndex(activeIndex);
            timeoutRef.current = setTimeout(() => {
              setClosingIndex(null);
              setActiveIndex(index);
            }, 10);
          } else {
            setActiveIndex(index);
          }
        }
      };

  return (
    <section className={styles.faqSection} id='faq'>
      <Title>ВОПРОСЫ И ОТВЕТЫ</Title>
      <div className={styles.divider}></div>
      <div className={styles.sectionSubtitle}>НАС ЧАСТО СПРАШИВАЮТ:</div>
      
      <div className={styles.faqContainer}>
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            isClosing={closingIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;