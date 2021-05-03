import {createStore} from "reusable";
import {useState} from 'react';
import icon1 from '../resources/PNG/PNG_Color/heroes-and-villains-01.png'
import icon2 from '../resources/PNG/PNG_Color/heroes-and-villains-02.png'
import icon3 from '../resources/PNG/PNG_Color/heroes-and-villains-03.png'
import icon4 from '../resources/PNG/PNG_Color/heroes-and-villains-04.png'
import icon5 from '../resources/PNG/PNG_Color/heroes-and-villains-05.png'
import icon6 from '../resources/PNG/PNG_Color/heroes-and-villains-06.png'
import icon7 from '../resources/PNG/PNG_Color/heroes-and-villains-07.png'
import icon8 from '../resources/PNG/PNG_Color/heroes-and-villains-08.png'
import icon9 from '../resources/PNG/PNG_Color/heroes-and-villains-09.png'


export const useIcons = createStore(() => {
    const [setup, setSetup] = useState(true)
    const [icons, setIcons] = useState([])

    function pad(num, size) {
        var s = "000000000" + num;
        return s.substr(s.length-size);
    }
    if (setup) {
        let _icons = []
        _icons.push(icon1)
        _icons.push(icon2)
        _icons.push(icon3)
        _icons.push(icon4)
        _icons.push(icon5)
        _icons.push(icon6)
        _icons.push(icon7)
        _icons.push(icon8)
        _icons.push(icon9)
        setIcons(_icons)
        setSetup(false)
    }
    return icons
});