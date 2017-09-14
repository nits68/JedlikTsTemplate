import * as http from "http";
import * as url from "url";
import * as fs from "fs";

export class Content {

    Content(req: http.ServerRequest, res: http.ServerResponse): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p>Hello TypeScript!</p>");


        res.end();
    }
}

