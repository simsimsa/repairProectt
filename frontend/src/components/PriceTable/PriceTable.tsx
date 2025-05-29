import React from 'react';
import styles from './PriceTable.module.css';
import { priceData } from '../../ExportInfo/Prices';

export function PriceTable() {
    
  return (
    <div className={styles.priceTableContainer}>
        <div className={styles.priceNotice}>
          <p>ВСЕ РАСЦЕНКИ ЯВЛЯЮТСЯ МИНИМАЛЬНЫМИ, их изменение связано со сложностью проведения работ и качеством используемого материала, стесненность помещения.</p>
          <p>МИНИМАЛЬНЫЙ ЗАКАЗ от 40000 рублей.</p>
        </div>
      
      <div className={styles.tableWrapper}>
        <table className={styles.priceTable}>
          <thead>
            <tr>
              <th className={styles.categoryHeader}>Виды работ</th>
              <th className={styles.priceHeader}>Цена</th>
              <th className={styles.unitHeader}>Ед.изм.</th>
            </tr>
          </thead>
          <tbody>
            {priceData.map((item, index) => (
              <React.Fragment key={index}>
                {index === 0 || priceData[index-1].category !== item.category ? (
                  <tr className={styles.categoryRow}>
                    <td colSpan={3} className={styles.categoryTitle}>{item.category}</td>
                  </tr>
                ) : null}
                <tr className={styles.dataRow}>
                  <td className={styles.workCell}>{item.work}</td>
                  <td className={styles.priceCell}>{item.price}</td>
                  <td className={styles.unitCell}>{item.unit}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}