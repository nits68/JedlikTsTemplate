namespace MyApp {

    class Program {

        constructor() {
            require("http").createServer(this.Content).listen(8080);
        }

        Content(req: any, res: any): void {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });   
            res.write("<html><head><title>MyApp</title></head>");
            res.write("<body><pre style='font-family: Courier';>");

            res.write("<h1>Hello World!</h1>");

            res.write("</pre></body>");
            res.end();
        }
    }

    new Program();
}