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
            return this.SendRequest("get", Urls[dataType] + `/${parameters}`);
        }
        else {
            return this.SendRequest("get", Urls[dataType])    
        }
    }

    SendRequest = (method, url) => {
        return Axios.request({method,url})
    };
}