import axios from "axios";
import { XMLGenerator  } from "./wsdl/xmlGenerator";
import { createHeaders } from "./wsdl/headerGenerator";

export class Sender {
    private static soapEndpoint = "http://192.168.0.25/axis2/services/BrueBoxService";; // Replace with actual SOAP endpoint
  
    // Function to send the XML and receive the response
    static async sendRequest(soapAction: string, xml: string): Promise<void> {
      const config = createHeaders(soapAction); // Dynamically create headers
  
      try {
        console.log(this.soapEndpoint)
        console.log(xml)
        console.log(config)
        const response = await axios.post(this.soapEndpoint, xml, config);
        console.log("Response received:");
        console.log(response.data);
      } catch (error) {
        console.error("Error occurred while sending the request:", error);
      }
    }
  }

  (async () => {
    // Generate a GetStatusRequest XML
    const xml = XMLGenerator.registerEventRequest("?");
  
    // Send the request with a variable SOAPAction
    await Sender.sendRequest("RegisterEventOperation", xml);
  })();

  