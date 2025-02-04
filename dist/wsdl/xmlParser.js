"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLParser = void 0;
const xmldom_1 = require("xmldom");
class XMLParser {
    static parseChangeResponse(xml) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        try {
            const parser = new xmldom_1.DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            const responseNode = xmlDoc.getElementsByTagName("n:ChangeResponse")[0];
            if (!responseNode) {
                throw new Error("Invalid response structure.");
            }
            const Amount = ((_b = (_a = responseNode.getElementsByTagName("n:Amount")[0]) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "";
            const ManualDeposit = ((_d = (_c = responseNode.getElementsByTagName("n:ManualDeposit")[0]) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim()) || "";
            const result = responseNode.getAttribute("n:result") || "";
            const Id = ((_f = (_e = responseNode.getElementsByTagName("n:Id")[0]) === null || _e === void 0 ? void 0 : _e.textContent) === null || _f === void 0 ? void 0 : _f.trim()) || "";
            const SeqNo = ((_h = (_g = responseNode.getElementsByTagName("n:SeqNo")[0]) === null || _g === void 0 ? void 0 : _g.textContent) === null || _h === void 0 ? void 0 : _h.trim()) || "";
            const User = ((_k = (_j = responseNode.getElementsByTagName("n:User")[0]) === null || _j === void 0 ? void 0 : _j.textContent) === null || _k === void 0 ? void 0 : _k.trim()) || "";
            // Extract Status Code
            const Code = ((_m = (_l = responseNode.getElementsByTagName("n:Code")[0]) === null || _l === void 0 ? void 0 : _l.textContent) === null || _m === void 0 ? void 0 : _m.trim()) || "";
            // Extract DevStatus elements into an array
            const devStatusNodes = responseNode.getElementsByTagName("DevStatus");
            const devStatuses = [];
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
            const cashTypes = [];
            for (let i = 0; i < cashNodes.length; i++) {
                const node = cashNodes[i];
                cashTypes.push({
                    type: node.getAttribute("n:type") || "",
                });
            }
            return { result, Amount, ManualDeposit, Id, SeqNo, User, Code, DevStatuses: devStatuses, CashTypes: cashTypes };
        }
        catch (error) {
            console.error("Error parsing SOAP response:", error);
            return null;
        }
    }
    static parseStatusResponse(xml) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        try {
            const parser = new xmldom_1.DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            const responseNode = xmlDoc.getElementsByTagName("n:StatusResponse")[0];
            if (!responseNode) {
                throw new Error("Invalid response structure.");
            }
            const result = responseNode.getAttribute("n:result") || "";
            const Id = ((_b = (_a = responseNode.getElementsByTagName("n:Id")[0]) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "";
            const SeqNo = ((_d = (_c = responseNode.getElementsByTagName("n:SeqNo")[0]) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim()) || "";
            const User = ((_f = (_e = responseNode.getElementsByTagName("n:User")[0]) === null || _e === void 0 ? void 0 : _e.textContent) === null || _f === void 0 ? void 0 : _f.trim()) || "";
            // Extract Status Code
            const StatusCode = ((_h = (_g = responseNode.getElementsByTagName("n:Code")[0]) === null || _g === void 0 ? void 0 : _g.textContent) === null || _h === void 0 ? void 0 : _h.trim()) || "";
            // Extract DevStatus elements into an array
            const devStatusNodes = responseNode.getElementsByTagName("DevStatus");
            const devStatuses = [];
            for (let i = 0; i < devStatusNodes.length; i++) {
                const node = devStatusNodes[i];
                devStatuses.push({
                    devid: node.getAttribute("n:devid") || "",
                    val: node.getAttribute("n:val") || "",
                    st: node.getAttribute("n:st") || "",
                });
            }
            return { result, Id, SeqNo, User, StatusCode, DevStatuses: devStatuses };
        }
        catch (error) {
            console.error("Error parsing SOAP response:", error);
            return null;
        }
    }
    static parseUnRegisterEventResponse(xml) {
        var _a, _b, _c;
        try {
            const parser = new xmldom_1.DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            const responseNode = xmlDoc.getElementsByTagName("n:UnRegisterEventResponse")[0];
            if (!responseNode) {
                throw new Error("Invalid response structure.");
            }
            // Extract the "result" attribute
            const result = responseNode.getAttribute("n:result") || "";
            // Extract values from child nodes
            const Id = ((_a = responseNode.getElementsByTagName("n:Id")[0]) === null || _a === void 0 ? void 0 : _a.textContent) || "";
            const SeqNo = ((_b = responseNode.getElementsByTagName("n:SeqNo")[0]) === null || _b === void 0 ? void 0 : _b.textContent) || "";
            const User = ((_c = responseNode.getElementsByTagName("n:User")[0]) === null || _c === void 0 ? void 0 : _c.textContent) || "";
            return { result, Id, SeqNo, User };
        }
        catch (error) {
            console.error("Error parsing UnRegisterEventResponse:", error);
            return null;
        }
    }
    static parseChangeCancelResponse(xml) {
        var _a, _b, _c;
        try {
            const parser = new xmldom_1.DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            const responseNode = xmlDoc.getElementsByTagName("n:ChangeCancelResponse")[0];
            if (!responseNode) {
                throw new Error("Invalid response structure.");
            }
            // Extract the "result" attribute
            const result = responseNode.getAttribute("n:result") || "";
            // Extract values from child nodes
            const Id = ((_a = responseNode.getElementsByTagName("n:Id")[0]) === null || _a === void 0 ? void 0 : _a.textContent) || "";
            const SeqNo = ((_b = responseNode.getElementsByTagName("n:SeqNo")[0]) === null || _b === void 0 ? void 0 : _b.textContent) || "";
            const User = ((_c = responseNode.getElementsByTagName("n:User")[0]) === null || _c === void 0 ? void 0 : _c.textContent) || "";
            return { result, Id, SeqNo, User };
        }
        catch (error) {
            console.error("Error parsing ChangeCancelResponse:", error);
            return null;
        }
    }
    static parseRegisterEventResponse(xml) {
        var _a, _b, _c;
        try {
            const parser = new xmldom_1.DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            const responseNode = xmlDoc.getElementsByTagName("n:RegisterEventResponse")[0];
            if (!responseNode) {
                throw new Error("Invalid response structure.");
            }
            // Extract values from child nodes
            const Id = ((_a = responseNode.getElementsByTagName("n:Id")[0]) === null || _a === void 0 ? void 0 : _a.textContent) || "";
            const SeqNo = ((_b = responseNode.getElementsByTagName("n:SeqNo")[0]) === null || _b === void 0 ? void 0 : _b.textContent) || "";
            const User = ((_c = responseNode.getElementsByTagName("n:User")[0]) === null || _c === void 0 ? void 0 : _c.textContent) || "";
            return { Id, SeqNo, User };
        }
        catch (error) {
            console.error("Error parsing RegisterEventResponse:", error);
            return null;
        }
    }
}
exports.XMLParser = XMLParser;
//# sourceMappingURL=xmlParser.js.map