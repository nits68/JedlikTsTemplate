import fs from "fs";
import http from "http";
import url from "url";

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
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>JedlikTsTemplate</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        res.write("Egyszerű Hello World!\n");

        // Tetszőleges html teg-ek és attribútumok beépítése:
        res.write("<span style='color: blue;'><i>Színes és dőlt Hello World!'</i></span>\n");

        // Egyszerű input JSON állományból:
        const input: InputInterface = JSON.parse(fs.readFileSync("input.json", "utf-8"));

        // String template használata
        res.write(`1. feladat: ${input.name} kora: ${input.age}\n`);

        // Változó definiálása:
        let neme = "";
        neme = input.male ? "férfi" : "nő";
        res.write(`2. feladat: ${input.name} neme: ${neme}\n`);

        // Input form-al és <input type='number'>-el:
        // URL paraméter(ek) (itt kor) ellenőrzése,  kiolvasása, alapértelmezett értéke 18:
        const u = url.parse(req.url as string, true).query;
        // ha "kor" paraméter nincs megadva vagy "kor" paraméter üres string,
        // akkor legyen 18 az értéke, egyébként konvertáljuk számra a "kor" paraméter értékét:
        // let kor: number = u.kor === undefined || u.kor === "" ? 18 : parseInt(u.kor as string);
        let kor: number = parseInt(u.kor as string);
        if (isNaN(kor) || kor < 0 || kor > 99) kor = 18; // egy kis ellenőrzés
        res.write(`3. feladat: Kérem a korod [0-99]: <input type='text' name='kor' value=${kor} style='width:3em;'>\n`);
        res.write(`4. feladat: Te ${kor} éves vagy!\n`);

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
