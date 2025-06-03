import Hr from "../../components/HR/Hr";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Services } from "../../components/Services/Services";
import Title from "../../components/Title/Title";
import { designServices } from "../../ExportInfo/Opportunities/DesignServices";
import { ServicesInfo } from "../../ExportInfo/ServicesInfo";
import styles from './design.module.css'

export function Design() {
    return (
        <div className={styles.container}>
            <Services header={ServicesInfo[1].header} title={ServicesInfo[1].title} text={ServicesInfo[1].text} description={ServicesInfo[1].description}/>
            <Hr/>
            <Title>Варианты услуг</Title>
            <div className={styles.cartContainer}>
                    {designServices.map((service, index) => (
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