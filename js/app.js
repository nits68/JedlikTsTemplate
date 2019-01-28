"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const content_1 = require("./content");
class Program {
    constructor() {
        // tslint:disable-next-line: max-line-length
        http.createServer(new content_1.default().Content).listen(process.env.PORT || 8080);
    }
}
new Program();
//# sourceMappingURL=app.js.map