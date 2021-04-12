import { DataMap } from "../data/Constants"
import { RestDataSource } from "../data/RestDataSource"
import { Templates, DayType } from '../components/AccountProfile/DayDisplay/Templates'

var dataSource = new RestDataSource()

export const HandlerFactory = {
    AccountProfile: AccountProfile,
    JobProfile: JobProfile,
    HomePage: Handler,
    SearchResults: Handler,
    Create: Handler
}

function Handler(param, updateData, paths) {
    let dataLoad = []
    for (var index in paths) {
        // if user goes to homepage and browser still has userId stored, add userId param
        if(paths[index] === 'user' && Object.keys(param).length === 0) param = { user: localStorage.getItem('userId') }
        dataLoad.push(dataSource.GetData(paths[index], param))
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
            console.log(error.message)
            updateData(error.response.data, false)
        })
    
}

export function JobProfile(param, updateData, paths) {
    let dataLoad = []
    let { description, salary, location } = param
    dataLoad.push(dataSource.GetData('jobDescription', {description, location}))
    dataLoad.push(dataSource.GetData('jobSalary', {salary, location}))
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

export function AccountProfile(param, updateData, paths) {
    let dataLoad = []
    dataLoad.push(dataSource.GetData('day', param))
    dataLoad.push(dataSource.GetData('user', param))
    dataLoad.push(dataSource.GetData('product'))
    Promise.all(dataLoad)
    .then((responses) => {
        let data = responses.reduce((obj, res, i) => {
            obj[paths[i]] = res.data
            if(paths[i] === 'day') formatDay(obj['day'])
            return obj
        }, {})
        updateData(data, false)
    })
    .catch(error => {
        console.log(error)
        updateData(param[0], false)
    })
}

function formatDay(days) {
    days.forEach(day => {
        let type = 'STANDARD'
        let templates = DayType[type].values()
        day.items = []
        for(const template of templates) {
            let item = {
                label: template,
                body: Templates[template](day)
            }
            day.items.push(item)
        }
    })
}



