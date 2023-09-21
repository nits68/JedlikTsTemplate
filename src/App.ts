import http from "http";
import content from "./Content";
// import content2 from "./Content2";

class Program {
    constructor() {
        http.createServer(content).listen(process.env.PORT || 8080);
        // http.createServer(Content2.content).listen(process.env.PORT || 8080);
    }
}

new Program();
