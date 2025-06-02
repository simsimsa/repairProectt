import Hr from "../../components/HR/Hr";
import { Services } from "../../components/Services/Services";
import { ServicesInfo } from "../../ExportInfo/ServicesInfo";

export function Consultation() {
    return (
    <div>
        <Services header={ServicesInfo[2].header} title={ServicesInfo[2].title} text={ServicesInfo[2].text} description={ServicesInfo[2].description}/>
        <Hr/>
    </div>
    )
}