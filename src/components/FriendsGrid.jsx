import Row from 'react-bootstrap/Row'
import {useIcons} from './IconStore'
import './FriendsGrid.css';
export default function FriendsGrid(props) {


    const icons = useIcons()
    console.log(icons)
    return (
        icons.length<1?<div>"Loading"</div>:
        <div>
            <Row>
                {Array.from(Array(10).keys()).map((item) => (<img key={item} src={icons[item]}></img>))}
            </Row>
            <Row>
                {Array.from(Array(7).keys()).map((item) => (<img key={item} src={icons[item]}></img>))}
            </Row>
            <Row>

            </Row>
      </div>
    );
  }