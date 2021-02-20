import Axios from "axios";
import { Urls } from "./Urls";

const GET = 'get'
const POST = 'post'

export class RestDataSource {

    constructor(err_handler) {
        this.error_handler = err_handler || (() => { });
    }
  
    GetData = (dataType, params = []) =>{
        var url = this.deriveUrl(dataType, params)
        return this.SendRequest(GET, url)
    }

    PostData = (dataType, data, params = []) => {
        var url = this.deriveUrl(dataType, params)
        return this.SendRequest(POST, url, data)
    }

    deriveUrl = (dataType, params) => {
        var url = Urls[dataType]
        url += params.reduce((parameters,param) => parameters += `/${param}` , '')
        return url
    }

    SendRequest = (method, url, data) => {
        return Axios.request({method, url, data})
    };
}