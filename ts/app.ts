import http from "http";
import Content from "./content";

class Program {
    constructor() {
        http.createServer(new Content().content).listen(process.env.PORT || 8080);
    }
}

new Program();
