import * as http from "http";
import Content from "./content";

class Program {
    constructor() {
        // tslint:disable-next-line: max-line-length
        http.createServer(new Content().Content).listen(process.env.PORT || 8080);
    }
}

new Program();