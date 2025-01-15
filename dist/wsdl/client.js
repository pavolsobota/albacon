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
const axios_1 = __importDefault(require("axios"));
// The SOAP endpoint URL
const endpointUrl = 'http://192.168.0.25/axis2/services/BrueBoxService?wsdl'; // Replace with your URL
// XML string for the SOAP request
const createSoapRequest = (id, seqNo, sessionId, optionType, requireVerificationType) => {
    return `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bru="http://www.glory.co.jp/bruebox.xsd">
       <soapenv:Header/>
       <soapenv:Body>
          <bru:StatusRequest>
             <bru:Id>${id}</bru:Id>
             <bru:SeqNo>${seqNo}</bru:SeqNo>
             ${sessionId ? `<bru:SessionID>${sessionId}</bru:SessionID>` : ''}
             ${optionType ? `<Option bru:type="${optionType}"/>` : ''}
             ${requireVerificationType ? `<RequireVerification bru:type="${requireVerificationType}"/>` : ''}
          </bru:StatusRequest>
       </soapenv:Body>
    </soapenv:Envelope>
  `;
};
// Send SOAP request
const sendSoapRequest = () => __awaiter(void 0, void 0, void 0, function* () {
    const soapRequest = createSoapRequest('123', '456', '789', 'someOptionType', 'someVerificationType');
    try {
        const response = yield axios_1.default.post(endpointUrl, soapRequest, {
            headers: {
                'Content-Type': 'text/xml', // SOAP requests use XML format
            },
        });
        console.log('Response:', response.data); // Process the response here
    }
    catch (error) {
        console.error('Error sending SOAP request:', error);
    }
});
// Execute the request
sendSoapRequest();
//# sourceMappingURL=client.js.map