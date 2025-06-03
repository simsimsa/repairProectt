import { GallerySection } from "../../components/GallerySection/GallerySection";
import Title from "../../components/Title/Title";
import styles from './gallery.module.css'

export function Gallery() {
    return (
        <div>
            <div className={styles.titleContainer}>
                <Title>Галерея работ</Title>
            </div>
            <GallerySection/>
        </div>
    )
}