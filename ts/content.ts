import fs from "fs";
import http from "http";

interface InputInterface {
    name: string;
    age: number;
    gender: string;
    department: string;
    car: string;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head><title>JedlikTsTemplate</title></head>");
        res.write("<body><pre style='font-size:18px;font-weight:bold;'>");

        res.write("<h1 style='color: red;'>Hello Node.js</h1>");
        res.write("<h2 style='color: green;'>Hello TypeScript!</h2>");
        res.write("<p style='color: blue;'>Hello Heroku!</p>");
        res.write("<h1 style='color: black;'>Hello Jedlik!</h1>");
        let a = 0;
        const input: InputInterface = JSON.parse(fs.readFileSync("input.json", "utf-8"));
        a = a + input.age * 2;
        res.write(`${a}. feladat:\n`);
        res.write("\n");
        res.write("Fejlesztői környezet telepítésének leírása, forráskód GitHub repository:\n");
        res.write("<a href='https://github.com/nitslaszlo/JedlikTsTemplate' target='_blank'>https://github.com/nitslaszlo/JedlikTsTemplate</a><br>");

        res.write("</pre></body>");
        res.write("</html>");
        res.end();
    }
}
