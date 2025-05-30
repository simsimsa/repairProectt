import { vacancies } from '../../ExportInfo/Vacancies';
import Hr from '../HR/Hr';
import { VacancyCard } from '../VacancyCard/VacancyCard';
import styles from './VacanciesSection.module.css';

export function VacanciesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Hr />
        <h2 className={styles.title}>СТАНЬ ЧАСТЬЮ НАШЕЙ КОМАНДЫ</h2>
        <h3 className={styles.subtitle}>ОТКРЫТЫЕ ВАКАНСИИ</h3>
      </div>
      
      <div className={styles.grid}>
        {vacancies.map((vacancy, index) => (
          <VacancyCard 
            key={index}
            title={vacancy.title}
            salary={vacancy.salary}
            description={vacancy.description}
            requirements={vacancy.requirements}
            contacts={vacancy.contacts}
          />
        ))}
      </div>
    </section>
  );
}