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
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<title>JedlikTsTemplate</title>");
        res.write("<style>input, pre {font-size:1.3vw; font-family:monospace; font-weight:bold;}</style>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        res.write("Egyszerű Hello World (new)!\n");

        // Tetszőleges html teg-ek és attributumok beépítése:
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
        // URL paraméterek (fordulo) ellenőrzése,  kiolvasása:
        const u: url.UrlWithParsedQuery = url.parse(req.url as string, true);
        // ha "kor" paraméter nincs megadva vagy "kor" paraméter üres string,
        // akkor legyen 18 az értéke, egyébként konvertáljuk számra a "kor" paraméter értékét:
        let kor: number = u.query.kor === undefined || u.query.kor === "" ? 3 : parseInt(u.query.kor as string);
        if (!kor || kor < 1 || kor > 99) kor = 18;
        res.write(`3. feladat: Kérem a korod [1-99]: <input type='number' name='kor' value=${kor} onChange='this.form.submit()'>\n`);

        // <---- Fejezd be a kodolást

        res.write("</pre></form></body>");
        res.write("</html>");
        res.end();
    }
}
