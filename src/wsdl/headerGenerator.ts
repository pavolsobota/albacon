export function createHeaders(soapAction: string): { headers: Record<string, string> } {
    return {
      headers: {
        "Content-Type": "text/xml;charset=UTF-8", // Matches SoapUI
        "SOAPAction": soapAction,                // Variable SOAPAction value
        "Accept-Encoding": "gzip,deflate",       // Matches SoapUI
        "Host": "192.168.0.25",                  // Matches the Host header
        "Connection": "Keep-Alive",              // Matches the Connection header
        "User-Agent": "Apache-HttpClient/4.5.5 (Java/17.0.12)", // Matches SoapUI
      },
    };
  }



//Content-Length: 1001 // for changeoperation, not know if needed

//"GetStatus"
//"ChangeOperation"
//"RegisterEventOperation"
