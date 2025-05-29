import ContactCard from '../../components/ContactCard/ContactCard';
import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
import Title from '../../components/Title/Title';
import { EmailIcon, MessengersIcon, PhoneIcon, TgIcon, VkIcon, WhatsAppIcon } from '../../ExportInfo/Icons';
import styles from './contacts.module.css'

export function Contacts() {
    return (
        <div className={styles.contactsPage}>
          <div className={styles.header}>
            <Title>КОНТАКТЫ ДЛЯ СВЯЗИ</Title>
            <div className={styles.divider}></div>
            <div className={styles.subtitle}>Мы всегда на связи и готовы ответить на ваши вопросы</div>
          </div>
    
          <div className={styles.contactBlocks}>
        <ContactCard 
          icon={PhoneIcon}
          title="Телефоны"
        >
          <p className={styles.infoTitle}>Контроль качества:</p>
          <a href="tel:+7903026313" className={styles.phone}>8 (88) 888-88-88</a>
          
          <p className={styles.infoTitle}>Основной номер:</p>
          <a href="tel:+7967561905" className={styles.phone}>8 (77) 777-77-77</a>
          
          <p className={styles.workTime}>Работаем ежедневно с 10:00 до 22:00</p>
        </ContactCard>

        <ContactCard 
          icon={MessengersIcon}
          title="Мессенджеры"
        >
          <p className={styles.infoText}>Быстрый ответ в популярных мессенджерах:</p>
          
          <div className={styles.messengers}>
            <a href="https://vk.com" className={styles.messengerLink}>
              {VkIcon}
              <span>ВКонтакте</span>
            </a>
            
            <a href="https://telegram.org" className={styles.messengerLink}>
              {TgIcon}
              <span>Telegram</span>
            </a>
            
            <a href="https://whatsapp.com" className={styles.messengerLink}>
              {WhatsAppIcon}
              <span>WhatsApp</span>
            </a>
          </div>
          
          <p className={styles.responseTime}>Среднее время ответа: 45-90 минут</p>
        </ContactCard>

        <ContactCard 
          icon={EmailIcon}
          title="Электронная почта">
          <p className={styles.infoTitle}>Основная почта для связи:</p>
          <a href="mailto:info@example.ru" className={styles.email}>info@example.ru</a>
          <p className={styles.infoTitle}>Для коммерческих предложений:</p>
          <a href="mailto:commercial@info.ru" className={styles.email}>commercial@info.ru</a>
          <p className={styles.responseTime}>Ответ в течение 1 рабочего дня</p>
        </ContactCard>
      </div>
        <InfoBlock/>
        </div>
      );
    
}