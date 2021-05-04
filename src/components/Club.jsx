import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


import {CollapsibleTable} from './CollapsibleTable'
import FriendsGrid from './FriendsGrid'

export default function Club(props) {

    const {name, users, posts} = props



    return <div>
        <h1>{`Welcome to ${name} club!`}</h1>
        <CollapsibleTable tableName="Recent Activity" items={posts}/>
        <FriendsGrid />

    </div>
}