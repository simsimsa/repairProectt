import Button from '../Button/Button';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  price: string;
  duration: string;
  buttonText: string;
  image: string;
  features?: string[];
}

function ServiceCard ({ title, price, duration, buttonText, image, features=[] }: ServiceCardProps) {
  return (
    <div className={styles.card}>
        <div className={styles.imageContainer}>
            <img 
            src={image} 
            alt={title} 
            className={styles.image}
            />
        </div>
        <h3 className={styles.title}>{title}</h3>
        {features.length > 0 && (
            <ul className={styles.features}>
            {features.map((feature, i) => (
                <li key={i}>{feature}</li>
            ))}
            </ul>
        )}
        <div className={styles.details}>
            <div className={styles.priceDuration}>
                <span className={styles.price}>{price}</span>
                <span className={styles.duration}>{duration}</span>
            </div>
            <Button>{buttonText}</Button>
        </div>
    </div>
  );
};

export default ServiceCard;