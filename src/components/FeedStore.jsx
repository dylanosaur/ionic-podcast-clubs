import {createStore} from "reusable";
import {useState} from 'react';


function createData(name, text) {
    return {name, text};
  }

const rows = [
    createData('JRE', 'Lots of conspiracy stuff'),
    createData('Startalk', 'NDGT and guests'),
    createData('Radiolab', 'Some art and some science'),
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