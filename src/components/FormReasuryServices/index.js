import "./style.css"
import Header from "./header";
import CustomerInformation from "./CustomerInformation";
import RelatedEntity from "./RelatedEnity";
import ServiceRequested from "./ServicesRequested";
function FormReasuryServices() {
    return ( 
        <div>
            <Header/>
            <CustomerInformation/>
            <RelatedEntity/>
            <ServiceRequested/>
        </div>
    );
}

export default FormReasuryServices;