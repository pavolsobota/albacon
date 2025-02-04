import { DOMParser } from "xmldom";

export interface ChangeCancelResponse {
    result: string;
    Id: string;
    SeqNo: string;
    User: string;
}

export interface RegisterEventResponse {
    Id: string;
    SeqNo: string;
    User: string
}

export interface UnRegisterEventResponse {
    result: string;
    Id: string;
    SeqNo: string;
    User: string;
}

export interface DevStatus {
    devid: string;
    val: string;
    st: string;
}

export interface Cash {
    type: string;
}

export interface StatusResponse {
    result: string;
    Id: string;
    SeqNo: string;
    User: string;
    StatusCode: string;
    DevStatuses: DevStatus[];
}

export interface ChangeResponse {
    result: string;
    Id: string;
    SeqNo: string;
    User: string;
    Amount: string;
    ManualDeposit: string;
    Code: string;
    DevStatuses: DevStatus[];
    CashTypes: Cash[];
}

export class XMLParser {

    static parseChangeResponse(xml: string): ChangeResponse | null {
        try {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            const responseNode = xmlDoc.getElementsByTagName("n:ChangeResponse")[0];
            if (!responseNode) {
                throw new Error("Invalid response structure.");
            }

            const Amount = responseNode.getElementsByTagName("n:Amount")[0]?.textContent?.trim() || "";
            const ManualDeposit = responseNode.getElementsByTagName("n:ManualDeposit")[0]?.textContent?.trim() || "";

            const result = responseNode.getAttribute("n:result") || "";
            const Id = responseNode.getElementsByTagName("n:Id")[0]?.textContent?.trim() || "";
            const SeqNo = responseNode.getElementsByTagName("n:SeqNo")[0]?.textContent?.trim() || "";
            const User = responseNode.getElementsByTagName("n:User")[0]?.textContent?.trim() || "";

            // Extract Status Code
            const Code = responseNode.getElementsByTagName("n:Code")[0]?.textContent?.trim() || "";

            // Extract DevStatus elements into an array
            const devStatusNodes = responseNode.getElementsByTagName("DevStatus");
            const devStatuses: DevStatus[] = [];

            for (let i = 0; i < devStatusNodes.length; i++) {
                const node = devStatusNodes[i];
                devStatuses.push({
                    devid: node.getAttribute("n:devid") || "",
                    val: node.getAttribute("n:val") || "",
                    st: node.getAttribute("n:st") || "",
                });
            }
            // Extract Cash elements into an array
            const cashNodes = responseNode.getElementsByTagName("Cash");

            const cashTypes: Cash[] = [];

            for (let i = 0; i < cashNodes.length; i++) {
                const node = cashNodes[i];
                cashTypes.push({
                    type: node.getAttribute("n:type") || "",
                });
            }



            return { result, Amount, ManualDeposit, Id, SeqNo, User, Code, DevStatuses: devStatuses, CashTypes: cashTypes };
        } catch (error) {
            console.error("Error parsing SOAP response:", error);
            return null;
        }
    }

    static parseStatusResponse(xml: string): StatusResponse | null {
        try {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            const responseNode = xmlDoc.getElementsByTagName("n:StatusResponse")[0];
            if (!responseNode) {
                throw new Error("Invalid response structure.");
            }

            const result = responseNode.getAttribute("n:result") || "";
            const Id = responseNode.getElementsByTagName("n:Id")[0]?.textContent?.trim() || "";
            const SeqNo = responseNode.getElementsByTagName("n:SeqNo")[0]?.textContent?.trim() || "";
            const User = responseNode.getElementsByTagName("n:User")[0]?.textContent?.trim() || "";

            // Extract Status Code
            const StatusCode = responseNode.getElementsByTagName("n:Code")[0]?.textContent?.trim() || "";

            // Extract DevStatus elements into an array
            const devStatusNodes = responseNode.getElementsByTagName("DevStatus");
            const devStatuses: DevStatus[] = [];

            for (let i = 0; i < devStatusNodes.length; i++) {
                const node = devStatusNodes[i];
                devStatuses.push({
                    devid: node.getAttribute("n:devid") || "",
                    val: node.getAttribute("n:val") || "",
                    st: node.getAttribute("n:st") || "",
                });
            }

            return { result, Id, SeqNo, User, StatusCode, DevStatuses: devStatuses };
        } catch (error) {
            console.error("Error parsing SOAP response:", error);
            return null;
        }
    }

    static parseUnRegisterEventResponse(xml: string): UnRegisterEventResponse | null {
        try {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            const responseNode = xmlDoc.getElementsByTagName("n:UnRegisterEventResponse")[0];
            if (!responseNode) {
                throw new Error("Invalid response structure.");
            }

            // Extract the "result" attribute
            const result = responseNode.getAttribute("n:result") || "";

            // Extract values from child nodes
            const Id = responseNode.getElementsByTagName("n:Id")[0]?.textContent || "";
            const SeqNo = responseNode.getElementsByTagName("n:SeqNo")[0]?.textContent || "";
            const User = responseNode.getElementsByTagName("n:User")[0]?.textContent || "";

            return { result, Id, SeqNo, User };
        } catch (error) {
            console.error("Error parsing UnRegisterEventResponse:", error);
            return null;
        }
    }

    static parseChangeCancelResponse(xml: string): ChangeCancelResponse | null {
        try {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            const responseNode = xmlDoc.getElementsByTagName("n:ChangeCancelResponse")[0];
            if (!responseNode) {
                throw new Error("Invalid response structure.");
            }

            // Extract the "result" attribute
            const result = responseNode.getAttribute("n:result") || "";

            // Extract values from child nodes
            const Id = responseNode.getElementsByTagName("n:Id")[0]?.textContent || "";
            const SeqNo = responseNode.getElementsByTagName("n:SeqNo")[0]?.textContent || "";
            const User = responseNode.getElementsByTagName("n:User")[0]?.textContent || "";

            return { result, Id, SeqNo, User };
        } catch (error) {
            console.error("Error parsing ChangeCancelResponse:", error);
            return null;
        }
    }

    static parseRegisterEventResponse(xml: string): RegisterEventResponse | null {
        try {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            const responseNode = xmlDoc.getElementsByTagName("n:RegisterEventResponse")[0];
            if (!responseNode) {
                throw new Error("Invalid response structure.");
            }

            // Extract values from child nodes
            const Id = responseNode.getElementsByTagName("n:Id")[0]?.textContent || "";
            const SeqNo = responseNode.getElementsByTagName("n:SeqNo")[0]?.textContent || "";
            const User = responseNode.getElementsByTagName("n:User")[0]?.textContent || "";

            return { Id, SeqNo, User };
        } catch (error) {
            console.error("Error parsing RegisterEventResponse:", error);
            return null;
        }
    }
}







