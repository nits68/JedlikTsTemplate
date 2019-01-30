import * as http from "http";
import { read } from "fs";
// import * as url from "url"; // űrlapokhoz, input kiolvasás
// import * as fs from "fs"; // file-kezelés

export default class Content {

    Content(req: any, res: http.ServerResponse): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<p style='color: red;'>Hello Node.js!</p>");
        res.write("<p style='color: green;'>Hello TypeScript!</p>");
        res.write("<p style='color: blue;'>Hello Heroku!</p>");

        res.end();
    }
}

