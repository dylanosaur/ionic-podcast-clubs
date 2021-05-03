import './ExploreContainer.css';
import {useState} from 'react'
import {CollapsibleTable} from './CollapsibleTable'
import Login from './Login'
import FriendsGrid from './FriendsGrid'
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const [page, setPage] = useState('login')
  

  return (
    <div className="container">
      {(page=='login')?
        <Login submitFunction={setPage}/>:
        <div>
          <div className="d-inline-flex col-example secondary">
            <CollapsibleTable/>
          </div>
          <div className="d-inline-flex col-example secondary">
            <FriendsGrid />
          </div>
        </div>
      }
    </div>
  );
};

export default ExploreContainer;
