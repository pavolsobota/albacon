import axios from "axios";
import { XMLGenerator } from "./wsdl/xmlGenerator";
import { createHeaders } from "./wsdl/headerGenerator";
import { startListener } from "./wsdl/listener";
import { XMLParser } from "./wsdl/xmlParser";

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
      const parsedResponse = XMLParser.parseChangeResponse(response.data.toString());
      if (parsedResponse) {
        console.log(parsedResponse);
      }
    } catch (error) {
      console.error("Error occurred while sending the request:", error);
    }
  }
}

const IP_ADDRESS = "192.168.0.1";
const PORT = 55561;

// Start the listener
startListener(IP_ADDRESS, PORT);

(async () => {
  // Generate a GetStatusRequest XML
  const xml = XMLGenerator.createChangeRequest("?");

  // Send the request with a variable SOAPAction
  await Sender.sendRequest("ChangeOperation", xml);
})();

