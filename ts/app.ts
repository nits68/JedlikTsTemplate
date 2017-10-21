import * as http from "http";
import { Content } from "./content";

class Program {
    constructor() {
        http.createServer(new Content().Content).listen(process.env.PORT || 8080);
    }
}

new Program();