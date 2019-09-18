"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Content {
    content(req, res) {
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1 style='color: red;'>Hello Node.js</h1>");
        res.write("<h1 style='color: green;'>Hello TypeScript!</h1>");
        res.write("<h1 style='color: blue;'>Hello Heroku!</h1>");
        res.write("<h1 style='color: black;'>Hello Jedlik!</h1>");
        res.write("<b>Fejlesztői környezet telepítésének leírása, forráskód GitHub repository:</b><br>");
        res.write("<a href='https://github.com/nitslaszlo/JedlikTsTemplate' target='_blank'>" +
            "https://github.com/nitslaszlo/JedlikTsTemplate</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map