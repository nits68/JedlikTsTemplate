"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as url from "url"; // űrlapokhoz, input kiolvasás
// import * as fs from "fs"; // file-kezelés
class Content {
    Content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p style='color: red;'>Hello Node.js!</p>");
        res.write("<p style='color: green;'>Hello TypeScript!</p>");
        res.write("<p style='color: blue;'>Hello Heroku!</p>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map