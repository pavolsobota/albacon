"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sender = void 0;
const axios_1 = __importDefault(require("axios"));
const xmlGenerator_1 = require("./wsdl/xmlGenerator");
const headerGenerator_1 = require("./wsdl/headerGenerator");
const listener_1 = require("./wsdl/listener");
const xmlParser_1 = require("./wsdl/xmlParser");
class Sender {
    ; // Replace with actual SOAP endpoint
    // Function to send the XML and receive the response
    static sendRequest(soapAction, xml) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = (0, headerGenerator_1.createHeaders)(soapAction); // Dynamically create headers
            try {
                console.log(this.soapEndpoint);
                console.log(xml);
                console.log(config);
                const response = yield axios_1.default.post(this.soapEndpoint, xml, config);
                console.log("Response received:");
                console.log(response.data);
                const parsedResponse = xmlParser_1.XMLParser.parseChangeResponse(response.data.toString());
                if (parsedResponse) {
                    console.log(parsedResponse);
                }
            }
            catch (error) {
                console.error("Error occurred while sending the request:", error);
            }
        });
    }
}
exports.Sender = Sender;
Sender.soapEndpoint = "http://192.168.0.25/axis2/services/BrueBoxService";
const IP_ADDRESS = "192.168.0.1";
const PORT = 55561;
// Start the listener
(0, listener_1.startListener)(IP_ADDRESS, PORT);
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Generate a GetStatusRequest XML
    const xml = xmlGenerator_1.XMLGenerator.createChangeRequest("?");
    // Send the request with a variable SOAPAction
    yield Sender.sendRequest("ChangeOperation", xml);
}))();
//# sourceMappingURL=index.js.map