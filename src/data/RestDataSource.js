import Axios from "axios";
import { Urls } from "./Urls";

export class RestDataSource {

    constructor(err_handler) {
        this.error_handler = err_handler || (() => {});
    }

    GetData = (dataType, params = "") =>{
        var parameters = ''
        if(params.length > 0){
            params.forEach(param => parameters += `${param}`)
            this.SendRequest("get", Urls[dataType] + `/${parameters}`);
        }
        else {
            this.SendRequest("get", Urls[dataType])    
        }
    }

    SendRequest = (method, url) => Axios.request({method,url});
}