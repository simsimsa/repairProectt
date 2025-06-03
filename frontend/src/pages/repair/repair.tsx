import Hr from "../../components/HR/Hr";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Services } from "../../components/Services/Services";
import Title from "../../components/Title/Title";
import { RepairServices } from "../../ExportInfo/Opportunities/RepairServices";
import { ServicesInfo } from "../../ExportInfo/ServicesInfo";
import styles from './repair.module.css'


export function Repair() {
    return (
    <div className={styles.container}>
        <Services header={ServicesInfo[0].header} title={ServicesInfo[0].title} text={ServicesInfo[0].text} description={ServicesInfo[0].description}/>
        <Hr/>
        <Title>Варианты услуг</Title>
        <div className={styles.cartContainer}>
                    {RepairServices.map((service, index) => (
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