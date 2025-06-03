import styles from './GalleryCard.module.css';

interface GalleryCardProps {
  project: {
    title: string;
    address: string;
    images: string[];
  };
  currentImageIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onHover: () => void;
}

export const GalleryCard = ({ project, currentImageIndex, onPrev, onNext, onHover }: GalleryCardProps) => {
  return (
    <div 
      className={styles.card}
      onMouseEnter={onHover}
    >
      <div className={styles.imageContainer}>
        {project.images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`${project.title} - ${project.address}`}
            className={`${styles.image} ${
              index === currentImageIndex ? styles.active : ''
            }`}
          />
        ))}
        
        <div className={styles.imageNavButtons}>
          <button 
            className={styles.navButton}
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            ‹
          </button>
          <button 
            className={styles.navButton}
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            ›
          </button>
        </div>
      </div>
      
      <div className={styles.info}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectAddress}>{project.address}</p>
      </div>
    </div>
  );
};

export default GalleryCard;