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
exports.startListener = void 0;
const http_1 = __importDefault(require("http"));
const startListener = (ipAddress, port) => {
    // Function to handle incoming requests
    const handleRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (req.method === "POST") {
            let body = "";
            // Collect data from the incoming request
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", () => {
                console.log("Received XML:");
                console.log(body); // Print the raw XML to the console
                // Respond to the sender
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("XML received successfully.");
            });
        }
        else {
            // Handle non-POST requests
            res.writeHead(405, { "Content-Type": "text/plain" });
            res.end("Method Not Allowed");
        }
    });
    // Create the server
    const server = http_1.default.createServer(handleRequest);
    // Start listening on the specified IP and port
    server.listen(port, ipAddress, () => {
        console.log(`Listener running at http://${ipAddress}:${port}`);
    });
};
exports.startListener = startListener;
//# sourceMappingURL=listener.js.map