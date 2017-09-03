namespace MyApp {

    class Program {

        constructor() {
            require("http").createServer(this.Content).listen(8080);
        }

        Content(req: any, res: any): void {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.write("<h1>Hello World!</h1>");
            res.end();
        }
    }

    new Program();
}