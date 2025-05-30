import { CompanyIntro } from "../../components/CompanyIntro/CompanyIntro";
import { CooperationSection } from "../../components/CooperationSection/CooperationSection";
import { VacanciesSection } from "../../components/VacanciesSection/VacanciesSection";
import styles from './company.module.css'

export function Company() {
    return (
        <div className={styles.aboutPage}>
        <CompanyIntro />
        <VacanciesSection />
        <CooperationSection />
      </div>
    )
}