import Hr from "../../components/HR/Hr";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Services } from "../../components/Services/Services";
import Title from "../../components/Title/Title";
import { constructionServices } from "../../ExportInfo/Opportunities/constructionServices";
import { ServicesInfo } from "../../ExportInfo/ServicesInfo";
import styles from './construction.module.css'

export function Consultation() {
    return (
    <div className={styles.container}>
        <Services header={ServicesInfo[2].header} title={ServicesInfo[2].title} text={ServicesInfo[2].text} description={ServicesInfo[2].description}/>
        <Hr/>
        <Title>Варианты услуг</Title>
        <div className={styles.cartContainer}>
                    {constructionServices.map((service, index) => (
                        <ServiceCard 
                        key={index}
                        title={service.title}
                        price={service.price}
                        duration={service.duration}
                        buttonText={service.buttonText}
                        image={service.image}
                        features={service.features}
                    />
                    ))}
        </div>
    </div>
    )
}