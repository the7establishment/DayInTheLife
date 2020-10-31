import Axios from "axios";
import { Urls } from "./Urls";

export class RestDataSource {

    constructor(err_handler) {
        this.error_handler = err_handler || (() => {});
    }

    GetData = (dataType) => this.SendRequest("get", Urls[dataType]);
    
    SendRequest = (method, url) => Axios.request({method,url});
}