import { ServiceInfo } from "../../components/ServiceInfo/ServiceInfo";
import Hr from "../../components/HR/Hr";
import { RepairCalculator } from "../../components/RepairCalculator/RepairCalculator";

export function Service() {
    return (
        <div>
            <ServiceInfo/>
            <Hr/>
            <RepairCalculator/>
        </div>
    )
}