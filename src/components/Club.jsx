import {CollapsibleTable} from './CollapsibleTable'
import FriendsGrid from './FriendsGrid'
import './ExploreContainer.css';

export default function Club(props) {

    const {name, users, posts} = props
    return <div className='container'>
        <h1>{`Welcome to ${name} club!`}</h1>
        <div className="d-inline-flex col-example secondary">
          {"Message Board"}<CollapsibleTable tableName="Recent Activity" items={posts}/>
        </div>
        <div className="d-inline-flex col-example secondary">
            {"Club Members"}<FriendsGrid />
        </div>

    </div>
}