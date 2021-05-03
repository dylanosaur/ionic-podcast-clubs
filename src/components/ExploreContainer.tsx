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
          <div className="container d-inline-flex p-2 col-example">
            <CollapsibleTable/>
          </div>
          <div className="container d-inline-flex p-2 col-example">
            <FriendsGrid />
          </div>
        </div>
      }
    </div>
  );
};

export default ExploreContainer;
