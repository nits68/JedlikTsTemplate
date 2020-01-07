"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
class Content {
    content(req, res) {
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs_1.default.createReadStream("favicon.ico").pipe(res);
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head><title>JedlikTsTemplate</title></head>");
        res.write("<body><pre style='font-size:18px;font-weight:bold;'>");
        res.write("<h1 style='color: red;'>Hello Node.js</h1>");
        res.write("<h2 style='color: green;'>Hello TypeScript!</h2>");
        res.write("<p style='color: blue;'>Hello Heroku!</p>");
        res.write("<h1 style='color: black;'>Hello Jedlik!</h1>");
        let a = 0;
        const input = JSON.parse(fs_1.default.readFileSync("input.json", "utf-8"));
        a = a + input.age * 2;
        res.write(`${a}. feladat:lll\n`);
        res.write("\n");
        res.write("<b>Fejlesztői környezet telepítésének leírása, forráskód GitHub repository:</b><br>");
        res.write("<a href='https://github.com/nitslaszlo/JedlikTsTemplate' target='_blank'>https://github.com/nitslaszlo/JedlikTsTemplate</a><br>");
        res.write("</pre></body>");
        res.write("</html>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map