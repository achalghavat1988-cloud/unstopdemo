const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif"
};

const server = http.createServer((req, res) => {

    let filePath =
        req.url === "/"
            ? "./index.html"
            : "." + req.url;

    const ext = path.extname(filePath);

    const contentType =
        mimeTypes[ext] || "text/plain";

    fs.readFile(filePath, (err, content) => {

        if (err) {

            res.writeHead(404);

            res.end("File Not Found");

        } else {

            res.writeHead(200, {
                "Content-Type": contentType
            });

            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(
        `Server running on http://localhost:${PORT}`
    );
});