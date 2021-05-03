import {createStore} from "reusable";
import {useState} from 'react';
import axios from 'axios';



function convertEpochToSpecificTimezone(timeEpoch:any, offset: any){
    var d = new Date(timeEpoch*1000);
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);  //This converts to UTC 00:00
    var nd = new Date(utc + (3600000*offset));
    return nd.toLocaleString();
}

export const useHistory = createStore(() => {
    const [setup, setSetup] = useState(true)
    const [history, setHistory] = useState({'t': [], 't_uwcu': [], 'y': [], 'y_uwcu': []})
    const [times, setTimes] = useState([])
    const [series, setSeries] = useState([])
    let _series:any = []
    let _series_uwcu:any = []
    let _times:any = []
    let _times_uwcu:any = []
    if (setup) {
        setSetup(false)
        axios.get("http://192.168.1.22:5000/history").then( res => {
            console.log('store 1', res["data"], res["data"][0], Object.keys(res["data"]))
            res.data.cb.forEach(function(item:any) {
                _times.push(item.time)
                _series.push(item.BTC)
            })
            res.data.uwcu.forEach(function(item:any) {
                if (item["Deposit Accounts"] > 10) {
                    _times_uwcu.push(convertEpochToSpecificTimezone(item.time, 3))
                    _series_uwcu.push(item["Deposit Accounts"])
                }
            })
            setSeries(_series)
            setTimes(_times)
            setHistory({'t': _times, 'y':_series, 't_uwcu':_times_uwcu, 'y_uwcu':_series_uwcu})
            console.log('store 2', _times, _series)
        }).catch( err => {
            console.log(err)
        })
    }
    console.log(times, series)
    return history
});