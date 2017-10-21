"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const content_1 = require("./content");
class Program {
    constructor() {
        http.createServer(new content_1.Content().Content).listen(process.env.PORT || 8080);
    }
}
new Program();
//# sourceMappingURL=app.js.map