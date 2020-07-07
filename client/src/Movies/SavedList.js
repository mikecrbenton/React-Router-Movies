import React from 'react';
import { Link, useHistory } from 'react-router-dom';


function SavedList(props){

   const history = useHistory();
   console.log("SAVED LIST: " , props.list)
return(
  <div className="saved-list">

     <h3>Saved Movies:</h3>

       {props.list.map(movie => (
       <Link to={`/movies/${movie.id}`} > 
          <span key={movie.id} className="saved-movie">{movie.title}</span>
       </Link>
      ))}

      <div className="home-button" onClick={ ()=> history.push('/') }>Home</div>
      
  </div> )
};

export default SavedList;
