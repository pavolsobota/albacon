// xmlGenerator.ts
export class XMLGenerator {



    // Function to generate a GetStatusRequest XML
    static createGetStatusRequest(requestId: string): string {
      return `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bru="http://www.glory.co.jp/bruebox.xsd">
          <soapenv:Header/>
          <soapenv:Body>
            <bru:StatusRequest>
              <bru:Id>${requestId}</bru:Id>
              <bru:SeqNo>?</bru:SeqNo>
              <bru:SessionID>?</bru:SessionID>
              <Option bru:type="?"/>
              <RequireVerification bru:type="?"/>
            </bru:StatusRequest>
          </soapenv:Body>
        </soapenv:Envelope>
      `.trim();
    }
  
    // Function to generate another type of XML if needed
    static createChangeRequest(param: string): string {
      return `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bru="http://www.glory.co.jp/bruebox.xsd">
   <soapenv:Header/>
   <soapenv:Body>
      <bru:ChangeRequest>
         <!--Optional:-->
         <bru:Id>?</bru:Id>
         <bru:SeqNo>?</bru:SeqNo>
         <!--Optional:-->
         <bru:SessionID>?</bru:SessionID>
         <bru:Amount>?</bru:Amount>
         <!--Optional:-->
         <Option bru:type="?"/>
         <!--Optional:-->
         <Cash bru:type="?" bru:note_destination="?" bru:coin_destination="?">
            <!--Zero or more repetitions:-->
            <Denomination bru:cc="?" bru:fv="?" bru:rev="?" bru:devid="?">
               <bru:Piece>?</bru:Piece>
               <bru:Status>?</bru:Status>
            </Denomination>
         </Cash>
         <!--Optional:-->
         <ForeignCurrency bru:cc="?">
            <Rate>?</Rate>
         </ForeignCurrency>
      </bru:ChangeRequest>
   </soapenv:Body>
</soapenv:Envelope>
      `.trim();
    }
 
  //registerEventRequest
    static registerEventRequest(param: string): string{
        return `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bru="http://www.glory.co.jp/bruebox.xsd">
   <soapenv:Header/>
   <soapenv:Body>
      <bru:RegisterEventRequest>
         <!--Optional:-->
         <bru:Id>?</bru:Id>
         <bru:SeqNo>?</bru:SeqNo>
         <!--Optional:-->
         <bru:SessionID>?</bru:SessionID>
         <bru:Url>?</bru:Url>
         <!--Optional:-->
         <bru:Port>?</bru:Port>
         <!--Optional:-->
         <DestinationType bru:type="?"/>
         <!--Optional:-->
         <Encryption bru:type="?"/>
         <!--Optional:-->
         <RequireEventList>
            <!--Zero or more repetitions:-->
            <RequireEvent bru:eventno="?"/>
         </RequireEventList>
         <!--Optional:-->
         <bru:TillID>?</bru:TillID>
      </bru:RegisterEventRequest>
   </soapenv:Body>
</soapenv:Envelope>
        `.trim();
    }


}




  
  