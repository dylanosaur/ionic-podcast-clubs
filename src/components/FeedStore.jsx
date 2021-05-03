import {createStore} from "reusable";
import {useState} from 'react';


function createData(name) {
    return {name};
  }

const rows = [
    createData('JRE'),
    createData('Startalk'),
    createData('Radiolab'),
  ];


export const useFeed = createStore(() => {
    const [setup, setSetup] = useState(true)
    const [feed, setFeed] = useState({})
    if (setup) {
        setFeed(rows)
        setSetup(false)
    }
    return feed
});