import * as http from "http";
import { read } from "fs";
// import * as url from "url"; // űrlapokhoz, input kiolvasás
// import * as fs from "fs"; // file-kezelés

export default class Content {

    Content(req: http.IncomingMessage, res: http.ServerResponse): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1 style='color: red;'>Hello Node.js!</h1>");
        res.write("<h1 style='color: green;'>Hello TypeScript!</h1>");
        res.write("<h1 style='color: blue;'>Hello Heroku!</h1>");

        res.write("<b>Forráskód GitHub repository:</b><br>");
        res.write("<a href='https://github.com/nitslaszlo/JedlikTsTemplate' target='_blank'>" +
            "https://github.com/nitslaszlo/JedlikTsTemplate</a><br>");
        res.end();
    }
}

