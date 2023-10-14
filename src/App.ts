import http from "http";
import content from "./Content";

class Program {
    constructor() {
        http.createServer(content).listen(process.env.PORT || 8080);
    }
}

new Program();
