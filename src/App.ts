import http from "http";
import Content from "./Content";
// import Content2 from "./Content2";

class Program {
    constructor() {
        http.createServer(new Content().content).listen(process.env.PORT || 8080);
        // http.createServer(new Content2().content).listen(process.env.PORT || 8080);
    }
}

new Program();
