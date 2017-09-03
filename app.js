var MyApp;
(function (MyApp) {
    var Program = (function () {
        function Program() {
            require("http").createServer(this.Content).listen(8080);
        }
        Program.prototype.Content = function (req, res) {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.write("<h1>Hello World!</h1>");
            res.end();
        };
        return Program;
    }());
    new Program();
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.js.map