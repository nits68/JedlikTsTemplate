/// <reference types="node" />
import http from "http";
export default class Content {
    content(req: http.IncomingMessage, res: http.ServerResponse): void;
}
