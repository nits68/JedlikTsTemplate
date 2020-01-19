import fs from "fs";
import http from "http";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
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

        // Kezd a kódolást innen -->

        res.write("Egyszerű Hello World!\n");

        // Tetszőleges html teg-ek beépítése:
        res.write("<span style='color: blue;'><i>Színes és dőlt Hello World'</i></span>\n");

        // Egyszerű input JSON állományból:
        const input: InputInterface = JSON.parse(fs.readFileSync("input.json", "utf-8"));

        // String template használata
        res.write(`1. feladat: ${input.name} kora: ${input.age}\n`);

        // Változó definiálása:
        let neme = "";
        neme = input.male ? "férfi" : "nő";
        res.write(`2. feladat: ${input.name} neme: ${neme}\n`);

        // <---- Fejezd be a kodolást

        res.write("</pre></body>");
        res.write("</html>");
        res.end();
    }
}
