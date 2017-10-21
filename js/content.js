"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    Content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p>Hello TypeScript!</p>");
        res.end();
    }
}
exports.Content = Content;
//# sourceMappingURL=content.js.map