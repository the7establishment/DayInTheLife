import { DataMap } from "../data/Constants"
import { RestDataSource } from "../data/RestDataSource"

var dataSource = new RestDataSource()

export const HandlerFactory = {
    AccountProfile: Handler,
    JobProfile: Handler,
    HomePage: Handler,
    SearchResults: Handler,
    Create: Handler
}

function Handler(paths, param, updateData) {
    let dataLoad = []
    let parameters = []
    let paramPropertyName, paramPropertyValue
    for (var index in paths) {
        parameters = []
        for( var i in param){
            paramPropertyName = Object.keys(param[i])[0]
            if( paramPropertyName === paths[index]){
                paramPropertyValue = Object.values(param[i])[0] 
                parameters.push(paramPropertyValue)
            }
        }
        dataLoad.push(dataSource.GetData(paths[index], parameters))
    }
    Promise.all(dataLoad)
        .then((responses) => {
            let data = responses.reduce((obj, res, i) => {
                obj[paths[i]] = res.data
                return obj
            }, {})
            updateData(data, false)
        })
        .catch(error => {
            console.log(error)
            updateData(param[0], false)
        })
    
}

export function AccountProfile() {

}

