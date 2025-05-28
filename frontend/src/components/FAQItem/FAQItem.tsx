import styles from './FAQItem.module.css';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  isClosing: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick, isClosing }: FAQItemProps) {
    return (
        <div className={`${styles.faqItem} ${isOpen ? styles.active : ''} ${isClosing ? styles.closing : ''}`}>
          <button className={styles.question} onClick={onClick} aria-expanded={isOpen}>
            <h3>{question}</h3>
            <span className={styles.arrow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </button>
          
          <div className={styles.answerWrapper}>
            <div className={styles.answer}>
              <div>{answer}</div>
            </div>
          </div>
        </div>
      );
};

export default FAQItem;