import React, { useState, useEffect } from 'react';
import styles from './CalculatorForm.module.css'

type HousingType = 'Новостройка' | 'Вторичное' | 'Загородный дом';
type RepairType = 'Косметический' | 'Капитальный' | 'Дизайнерский';

interface CalculatorData {
  housingType: HousingType;
  repairType: RepairType;
  area: number;
}

const CalculatorForm: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    housingType: 'Новостройка',
    repairType: 'Косметический',
    area: 50
  });

  const [priceAnimation, setPriceAnimation] = useState<boolean>(false);

  const repairPrices: Record<RepairType, number> = {
    'Косметический': 9000,
    'Капитальный': 15000,
    'Дизайнерский': 25000
  };

  const housingCoefficients: Record<HousingType, number> = {
    'Новостройка': 1.0,
    'Вторичное': 1.2,
    'Загородный дом': 1.5
  };

  const calculatePrice = (): number => {
    const basePrice = repairPrices[calculatorData.repairType];
    const coefficient = housingCoefficients[calculatorData.housingType];
    return Math.round(basePrice * coefficient * calculatorData.area);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setCalculatorData(prev => ({
      ...prev,
      [name]: name === 'area' ? Number(value) : value
    }));
  };

  useEffect(() => {
    setPriceAnimation(true);
    const timer = setTimeout(() => setPriceAnimation(false), 500);
    return () => clearTimeout(timer);
  }, [calculatorData.housingType, calculatorData.repairType, calculatorData.area]);

  return (
    <section className={styles.calculator}>
      <h3>РАССЧИТАЙТЕ СТОИМОСТЬ РЕМОНТА</h3>
      <p className={styles.subtitle}>без учета материалов и скидок</p>
      
      <div className={styles.formContainer}>
        <table className={styles.paramsTable}>
          <thead>
            <tr>
              <th>Тип жилья</th>
              <th>Вид ремонта</th>
              <th>Общая площадь (м²)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select 
                  name="housingType" 
                  value={calculatorData.housingType}
                  onChange={handleChange}
                >
                  {Object.keys(housingCoefficients).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </td>
              <td>
                <select 
                  name="repairType" 
                  value={calculatorData.repairType}
                  onChange={handleChange}
                >
                  {Object.keys(repairPrices).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </td>
              <td>
                <input 
                  type="number" 
                  name="area" 
                  value={calculatorData.area}
                  onChange={handleChange}
                  min="1"
                />
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className={styles.calculationResult}>
          <span>Предварительный расчет</span>
          <span className={`price ${priceAnimation ? 'price-updated' : ''}`}>
            {calculatePrice().toLocaleString()} ₽
          </span>
        </div>

        <p className="disclaimer">
          *Сумма данного расчета не является окончательной, точную стоимость укажет прораб.
        </p>
      </div>
    </section>
  );
};

export default CalculatorForm;