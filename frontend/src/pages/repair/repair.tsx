import Hr from "../../components/HR/Hr";
import { Services } from "../../components/Services/Services";
import { ServicesInfo } from "../../ExportInfo/ServicesInfo";

export function Repair() {
    return (
    <div>
        <Services header={ServicesInfo[0].header} title={ServicesInfo[0].title} text={ServicesInfo[0].text} description={ServicesInfo[0].description}/>
        <Hr/>
    </div>
    )
}