"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = tslib_1.__importDefault(require("http"));
var content_1 = tslib_1.__importDefault(require("./content"));
var Program = (function () {
    function Program() {
        http_1.default.createServer(new content_1.default().content).listen(process.env.PORT || 8080);
    }
    return Program;
}());
new Program();
//# sourceMappingURL=app.js.map