import styles from './Services.module.css';
import Title from '../Title/Title';

interface ServicesProps {
    header: string;
    title: string;
    text: string;
    description: string;
    image?: string;
  }

export function Services({ 
    header,
    title, 
    text, 
    description
  }: ServicesProps) {
  return (
    <section className={styles.servicesSection}>
        <Title>{header}</Title>
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.text}>
                    <strong>{title}</strong>
                </p>
                
                <p className={styles.text}>
                {text}
                </p>
                
                <p className={styles.text}>
                    <strong>{description}</strong>
                </p>
            </div>
            
            <div className={styles.imageWrapper}>
                <div className={styles.image}></div>
            </div>
        </div>
    </section>
  );
}