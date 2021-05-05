import Row from 'react-bootstrap/Row'
import {useIcons} from './IconStore'
import './FriendsGrid.css';
import {Link} from 'react-router-dom'


export default function FriendsGrid(props) {

    const {items} = props
    const icons = useIcons()
    const data = items||icons
    console.log(data)
    return (
        data.length<1?<div>"Loading"</div>:
        <div>
            {data.map((item) => (
              <a href="/club">
                <img key={item} src={item}></img>
              </a>
              ))}
        </div>
    );
  }