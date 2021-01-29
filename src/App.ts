import http from "http";
import Content from "./Content";
// import Content2 from "./Content2";

class Program {
    constructor() {
        http.createServer(Content.content).listen(process.env.PORT || 8080);
        // http.createServer(Content2.content).listen(process.env.PORT || 8080);
    }
}

new Program();
