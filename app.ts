class Versenyző {
    vk: string; // alapértelmezett a public láthatósági szint
    vv: string;

    static helyesMegoldás: string = ""; // minden pédányban közös mező

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this.vk = m[0];
        this.vv = m[1];
    }

    HelyesenVálaszolt(index: number): any {
        if (this.vv[index] === undefined) return false;
        return Versenyző.helyesMegoldás[index] === this.vv[index];
    }

    VálaszMinta(): any {
        let minta: string = "";
        for (let i: number = 0; i < this.vv.length; i++) {
            minta += this.HelyesenVálaszolt(i) ? "+" : " ";
        }
        return minta;
    }

    Pontszám(): any {
        let szum: number = 0;
        const pontok: number[] = [3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 6];
        for (let i: number = 0; i < this.vv.length; i++) {
            if (this.HelyesenVálaszolt(i)) szum += pontok[i];
        }
        return szum;
    }
}

class Program {

    constructor() {
        const server: any = require("http").createServer(this.Content);
        server.listen(8080);
    }

    Content(req: any, res: any): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<form style='font-size:16px; background: LightGray'>");
        res.write("<pre style='font-family: Courier'>");
        res.write("<p>1. feladat: Az adatok beolvasása</p>");

        // input:
        const query: any = require("url").parse(req.url, true).query;
        let vazon: string = "AB123"; // alapértelmezett versenyző
        let sorszam: string = "10"; // alapértelmezett feladat
        if (query.vazon !== undefined) {vazon = query.vazon; }
        if (query.sorszam !== undefined) {sorszam = query.sorszam; }

        const v: Versenyző[] = [];
        const fs: any = require("fs"); // fájlkezeléshez (node.js)
        const sorok: any = fs.readFileSync("valaszok.txt").toString().split("\r\n");
        Versenyző.helyesMegoldás = sorok[0];
        for (let i: number = 1; i < sorok.length; i++) {
            if (sorok[i].length > 0) v.push(new Versenyző(sorok[i]));
        }

        res.write("<p>2. feladat: A vetélkedőn " + v.length + " versenyző indult.</p>");

        res.write("<p>3. feladat: A versenyző azonosítója = " +
            "<input type='text' name='vazon' style='font-family:Courier; font-size: inherit; " +
            "background:LightGray; border: none' value='" + vazon + "'><br />");

        let tmp: Versenyző;
        for (let i: number = 0; i < v.length; i++) {
            if (v[i].vk === vazon) { tmp = v[i]; break; }
        }
        if (tmp === undefined) { res.end(); return; } // ha nincs a megadott versenyző, akkor kilép
        res.write(tmp.vv + " (a versenyző válasza)</p>");

        res.write("<p>4. feladat:<br />");
        res.write(Versenyző.helyesMegoldás + " (a helyes megoldás)<br />");
        res.write(tmp.VálaszMinta() + " (a versenyző helyes válaszai)</p>");

        if (parseInt(sorszam) === undefined) {
            res.end(); return; // ha a "sorszam" paraméter nem szám, akkor kilép
        }

        res.write("<p>5. feladat: A feladat sorszáma = " +
            "<input type='text' name='sorszam' style='font-family:Courier; font-size: inherit; " +
            "background:LightGray; border: none' value='" + sorszam + "'><br />");
        let dbHelyes: number = 0;
        v.forEach((i) => {
            if (i.HelyesenVálaszolt(parseInt(sorszam) - 1)) dbHelyes++;
        });
        res.write("A feladatra " + dbHelyes + " fő, a versenyzők " +
        (dbHelyes / v.length * 100).toFixed(2) + "%-a adott helyes választ.</p>");

        res.write("<p>6. feladat: A versenyzők pontszámának meghatározása</p>");
        const ws: any = fs.createWriteStream("pontok.txt"); // noed.js - szövges file írása
        v.forEach((i) => {
            ws.write(i.vk + " " + i.Pontszám() + "\n");
        });
        ws.end();

        res.write("<p>7. feladat:  A verseny legjobbjai:<br />");
        v.sort((a, b) => { return b.Pontszám() - a.Pontszám(); });
        let díj: number = 0;
        let pontElőző: number = -1;
        for (let i: number = 0; i < v.length; i++) {
            if (pontElőző !== v[i].Pontszám()) {
                díj++;
                if (díj === 4) break;
            }
            res.write(díj + ".díj (" + v[i].Pontszám() + "pont): " + v[i].vk + "<br />");
            pontElőző = v[i].Pontszám();
        }
        res.write("</p><input type='submit' value='Frissítés'></pre></form>");
        res.end();
    }

}

new Program();