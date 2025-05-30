import styles from './VacancyCard.module.css';
import Button from '../Button/Button';

interface VacancyCardProps {
  title: string;
  salary: string;
  description: string;
  requirements: string[];
  contacts: string;
  image?: string;
}

export function VacancyCard({ 
  title, 
  salary, 
  description, 
  requirements, 
  contacts
}: VacancyCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        
        <div className={styles.salary}>{salary}</div>
        
        <p className={styles.description}>{description}</p>
        
        <ul className={styles.requirements}>
          {requirements.map((req, i) => (
            <li key={i} className={styles.requirement}>
              <span className={styles.requirementMarker}>•</span>
              {req}
            </li>
          ))}
        </ul>
        
        <div className={styles.contacts}>
          <span className={styles.contactsLabel}>Контакты:</span>
          <span className={styles.contactsValue}>{contacts}</span>
        </div>
      </div>
      
      <div className={styles.buttonWrapper}>
        <Button>откликнуться</Button>
      </div>
    </div>
  );
}