"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var Content = (function () {
    function Content() {
    }
    Content.prototype.content = function (req, res) {
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
        res.write("Egyszerű Hello World!\n");
        res.write("<span style='color: blue;'><i>Színes és dőlt Hello World'</i></span>\n");
        var input = JSON.parse(fs_1.default.readFileSync("input.json", "utf-8"));
        res.write("1. feladat: " + input.name + " kora: " + input.age + "\n");
        var neme = "";
        neme = input.male ? "férfi" : "nő";
        res.write("2. feladat: " + input.name + " neme: " + neme + "\n");
        res.write("</pre></body>");
        res.write("</html>");
        res.end();
    };
    return Content;
}());
exports.default = Content;
//# sourceMappingURL=content.js.map