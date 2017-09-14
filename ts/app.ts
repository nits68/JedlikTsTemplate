import { Content } from "./Content";

class Program {
    constructor() {
        require("http").createServer(new Content().Content).listen(8080);
    }
}
new Program();