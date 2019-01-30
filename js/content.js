"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as url from "url"; // űrlapokhoz, input kiolvasás
// import * as fs from "fs"; // file-kezelés
class Content {
    Content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1 style='color: red;'>Hello Node.js!</h1>");
        res.write("<h1 style='color: green;'>Hello TypeScript!</h1>");
        res.write("<h1 style='color: blue;'>Hello Heroku!</h1>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map