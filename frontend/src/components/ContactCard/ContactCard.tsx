import React from 'react';
import styles from './ContactCard.module.css';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export default function ContactCard({ icon, title, children }: ContactCardProps) {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactIcon}>{icon}</div>
      <h3>{title}</h3>
      <div className={styles.contactContent}>
        {children}
      </div>
    </div>
  );
};