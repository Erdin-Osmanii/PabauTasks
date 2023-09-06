import './App.css';
import { Link } from 'react-router-dom';

function MainContent(prop) {
  return (
    <div className="MainContent">
     <Link className='MainLink' to={prop.link}>
      <div>
        <img className='MainImage' src={'./images/'+prop.image+'.jpg'}/>
        <p>{prop.text}</p>
       </div>
       <p>&gt;</p>
      </Link>
    </div>
  );
}

export default MainContent;
