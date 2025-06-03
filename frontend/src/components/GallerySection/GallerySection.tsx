import { useState, useEffect, useRef } from 'react';
import styles from './GallerySection.module.css';
import Hr from '../HR/Hr';
import GalleryCard from '../GalleryCard/GalleryCard';

interface Project {
  title: string;
  address: string;
  images: string[];
}

const projects: Project[] = [
    {
      title: "Ремонт двухкомнатной квартиры",
      address: "ул. Среднерогатская",
      images: ["/serviceExample.jpg", "/repairExample.jpg", "/roomExample.jpg"]
    },
    {
      title: "Капитальный ремонт квартиры", 
      address: "ул. Парфёновская",
      images: ["/serviceExample.jpg", "/repairExample.jpg", "/roomExample.jpg"]
    },
    {
      title: "Ремонт спальни",
      address: "ул. Примерная",
      images: ["/serviceExample.jpg", "/repairExample.jpg"]
    }
  ];

export const GallerySection = () => {

  const [imageIndices, setImageIndices] = useState<number[]>(projects.map(() => 0));
  const timerRefs = useRef<(number | null)[]>(projects.map(() => null));

  useEffect(() => {
    projects.forEach((_, index) => {
      timerRefs.current[index] = window.setInterval(() => {
        setImageIndices(prev => {
          const newIndices = [...prev];
          newIndices[index] = (newIndices[index] + 1) % projects[index].images.length;
          return newIndices;
        });
      }, 4000);
    });

    return () => {
      timerRefs.current.forEach(timer => {
        if (timer !== null) window.clearInterval(timer);
      });
    };
  }, []);

  const resetTimer = (index: number) => {
    if (timerRefs.current[index] !== null) {
      window.clearInterval(timerRefs.current[index] as number);
    }
    timerRefs.current[index] = window.setInterval(() => {
      setImageIndices(prev => {
        const newIndices = [...prev];
        newIndices[index] = (newIndices[index] + 1) % projects[index].images.length;
        return newIndices;
      });
    }, 4000);
  };

  const navigateImage = (projectIndex: number, direction: 'prev' | 'next') => {
    setImageIndices(prev => {
      const newIndices = [...prev];
      const imagesCount = projects[projectIndex].images.length;
      newIndices[projectIndex] = direction === 'prev'
        ? (newIndices[projectIndex] - 1 + imagesCount) % imagesCount
        : (newIndices[projectIndex] + 1) % imagesCount;
      return newIndices;
    });
    resetTimer(projectIndex);
  };

  return (
    <section className={styles.gallery}>
      <div className={styles.header}>
        <Hr />
        <h2 className={styles.title}>ЖИЛЫЕ ПОМЕЩЕНИЯ</h2>
        <Hr />
      </div>

      <div className={styles.cardsContainer}>
        {projects.map((project, index) => (
          <GalleryCard
            key={index}
            project={project}
            currentImageIndex={imageIndices[index]}
            onPrev={() => navigateImage(index, 'prev')}
            onNext={() => navigateImage(index, 'next')}
            onHover={() => resetTimer(index)}
          />
        ))}
      </div>
    </section>
  );
};