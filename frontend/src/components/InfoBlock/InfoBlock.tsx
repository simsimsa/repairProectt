import styles from './InfoBlock.module.css';

export function InfoBlock() {
  return (
    <div className={styles.additionalInfo}>
      <h3>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h3>
      <div className={styles.infoBlocks}>
        <div className={styles.infoBlock}>
          <h4>Реквизиты компании</h4>
          <p>ООО "ТУТ-БУДЕТ-ООО"</p>
          <p>ИНН: 1234567890</p>
          <p>ОГРН: 1234567890123</p>
        </div>
        
        <div className={styles.infoBlock}>
          <h4>Режим приема звонков</h4>
          <p>Пн-Пт: 10:00-22:00</p>
          <p>Сб: 10:00-21:00</p>
          <p>Вс: 12:00-20:00</p>
        </div>
        
        <div className={styles.infoBlock}>
          <h4>Способы оплаты</h4>
          <p>Наличные</p>
          <p>Безналичный расчет</p>
          <p>Перевод по частям</p>
        </div>
      </div>
    </div>
  );
}