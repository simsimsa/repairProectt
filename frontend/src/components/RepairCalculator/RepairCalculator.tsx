import { useState } from 'react';
import styles from './RepairCalculator.module.css';

const repairTypes = [
    { id: 'cosmetic', name: 'Косметический ремонт', price: 1500 },
    { id: 'capital', name: 'Капитальный ремонт', price: 3000 },
    { id: 'euro', name: 'Евроремонт', price: 4500 }
  ];

  const extraServices = [
    { id: 'demolition', name: 'Демонтажные работы', price: 500 },
    { id: 'flooring', name: 'Напольные покрытия', price: 800 },
    { id: 'painting', name: 'Покраска стен', price: 400 },
    { id: 'plumbing', name: 'Сантехнические работы', price: 1200 },
    { id: 'electrical', name: 'Электромонтажные работы', price: 900 },
    { id: 'ceiling', name: 'Потолочные работы', price: 700 }
  ];

export function RepairCalculator() {
  const [area, setArea] = useState<number>(50);
  const [rooms, setRooms] = useState<number>(1);
  const [repairType, setRepairType] = useState<string>('cosmetic');
  const [extras, setExtras] = useState<string[]>([]);

  const calculateTotal = () => {
    const basePrice = repairTypes.find(t => t.id === repairType)?.price || 0;
    const extrasPrice = extras.reduce((sum, id) => {
      const service = extraServices.find(s => s.id === id);
      return sum + (service?.price || 0);
    }, 0);
    return (basePrice + extrasPrice) * area;
  };

  const toggleExtra = (id: string) => {
    setExtras(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className={styles.calculatorSection}>
      <div className={styles.calculatorHeader}>
        <h2 className={styles.calculatorTitle}>ОНЛАЙН КАЛЬКУЛЯТОР СТОИМОСТИ РЕМОНТА</h2>
        <p className={styles.calculatorSubtitle}>Получите предварительную стоимость ремонта за 2 минуты</p>
      </div>

      <div className={styles.calculatorBody}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Площадь помещения (м²)</label>
          <div className={styles.rangeContainer}>
            <input
              type="range"
              min="1"
              max="200"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className={styles.rangeInput}
            />
            <div className={styles.rangeValue}>{area} м²</div>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Количество комнат</label>
          <div className={styles.roomSelector}>
            <button
              className={styles.roomButton}
              onClick={() => setRooms(prev => Math.max(1, prev - 1))}
            >
              −
            </button>
            <span className={styles.roomCount}>{rooms} комната{rooms > 1 ? 'ы' : ''}</span>
            <button
              className={styles.roomButton}
              onClick={() => setRooms(prev => prev + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Тип ремонта</label>
          <div className={styles.radioOptions}>
            {repairTypes.map(type => (
              <div key={type.id} className={styles.radioOption}>
                <input
                  type="radio"
                  id={type.id}
                  name="repairType"
                  checked={repairType === type.id}
                  onChange={() => setRepairType(type.id)}
                  className={styles.radioInput}
                />
                <label htmlFor={type.id} className={styles.radioLabel}>
                  <span className={styles.radioCustom}></span>
                  <span className={styles.radioText}>{type.name}</span>
                  <span className={styles.radioPrice}>{type.price} ₽/м²</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Дополнительные услуги</label>
          <div className={styles.checkboxOptions}>
            {extraServices.map(service => (
              <div key={service.id} className={styles.checkboxOption}>
                <input
                  type="checkbox"
                  id={`extra-${service.id}`}
                  checked={extras.includes(service.id)}
                  onChange={() => toggleExtra(service.id)}
                  className={styles.checkboxInput}
                />
                <label htmlFor={`extra-${service.id}`} className={styles.checkboxLabel}>
                  <span className={styles.checkboxCustom}></span>
                  <span className={styles.checkboxText}>{service.name}</span>
                  <span className={styles.checkboxPrice}>+{service.price} ₽/м²</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.resultContainer}>
          <div className={styles.resultHeader}>Предварительная стоимость</div>
          <div className={styles.resultValue}>
            {calculateTotal().toLocaleString('ru-RU')} ₽
          </div>
          <div className={styles.resultDetails}>
            <span>{area} м²</span>
            <span>•</span>
            <span>{rooms} комната{rooms > 1 ? 'ы' : ''}</span>
          </div>
        </div>
      </div>
    </section>
  );
}