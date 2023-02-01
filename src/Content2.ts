import fs from "fs";
import http from "http";
import url from "url";

export default class Content2 {
    public static content(req: http.IncomingMessage, res: http.ServerResponse): void {
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

        // Bootstrap 5 core CSS
        res.write("<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' rel='stylesheet'>");

        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre class='m-3'>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const params = new url.URL(req.url as string, `http://${req.headers.host}/`).searchParams;

        // Kezd a kódolást innen -->
        res.write("<h1>Egyszerű Hello World!</h1>");

        // Tetszőleges html teg-ek és attribútumok beépítése:
        res.write("<span style='color: blue;'><i>Színes és dőlt Hello World!'</i></span>\n");

        // Próbáljuk számra konvertálni a "kor" paraméter (http://localhost:8080/?kor=16) értékét:
        let korod = parseInt(params.get("kor") as string);
        // Ha nincs "kor" paraméter megadva, vagy nem lehet számra konvertálni értékét,
        // akkor a "korod" változóba NaN érték kerül, ilyenkor legyen 18 év az értéke:
        if (isNaN(korod)) korod = 18;

        res.write(`Kérem a korod: <input type='number' name='kor' value=${korod} style='max-width:100px;' onChange='this.form.submit();'>\n`);
        res.write(`Te ${korod} éves vagy!\n`);

        res.write("<button type='button' class='btn btn-primary'>Primary</button>");

        // <---- Fejezd be a kódolást

        res.write("</pre></form>");

        res.write("<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'></script>");

        res.write("</body></html>");
        res.end();
    }
}
