import './App.css';

import { Link } from 'react-router-dom';

function GoBackButton() {
  return (
    <div className='Home'>
       <Link className='button' to='/'>Go Back</Link>
    </div>
  );
}

export default GoBackButton;
