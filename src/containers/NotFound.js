import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>The page you're looking does not exist. Go back to <Link to='/'>Home</Link></div>
    )
}

export default NotFound;

