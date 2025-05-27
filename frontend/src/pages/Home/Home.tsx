import Button from "../../components/Button/Button";
import CalculatorForm from "../../components/CalculatorForm/CalculatorForm";
import Header from "../../components/Header/Header";
import Hr from "../../components/HR/Hr";
import styles from './Home.module.css'

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
            <Hr/>
        </div>
    )
}