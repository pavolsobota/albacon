import http, { IncomingMessage, ServerResponse } from "http";

export const startListener = (ipAddress: string, port: number): void => {
  // Function to handle incoming requests
  const handleRequest = async (req: IncomingMessage, res: ServerResponse) => {
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
    } else {
      // Handle non-POST requests
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method Not Allowed");
    }
  };

  // Create the server
  const server = http.createServer(handleRequest);

  // Start listening on the specified IP and port
  server.listen(port, ipAddress, () => {
    console.log(`Listener running at http://${ipAddress}:${port}`);
  });
};
