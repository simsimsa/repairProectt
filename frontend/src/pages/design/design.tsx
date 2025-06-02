import Hr from "../../components/HR/Hr";
import { Services } from "../../components/Services/Services";
import { ServicesInfo } from "../../ExportInfo/ServicesInfo";

export function Design() {
    return (
        <div>
            <Services header={ServicesInfo[1].header} title={ServicesInfo[1].title} text={ServicesInfo[1].text} description={ServicesInfo[1].description}/>
            <Hr/>
        </div>
    )
}