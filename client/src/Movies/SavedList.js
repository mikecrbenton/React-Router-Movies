import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../index.css';


function SavedList(props){

   const history = useHistory();
   console.log("SAVED LIST: " , props.list)
return(
  <div className="saved-list">

     <h3>Saved Movies:</h3>

       {props.list.map(movie => (
       <NavLink activeClassName="current" to={`/movies/${movie.id}`} > 
          <span key={movie.id} className="saved-movie">{movie.title}</span>
       </NavLink>
      ))}

      <div className="home-button" onClick={ ()=> history.push('/') }>Home</div>
      
  </div> )
};

export default SavedList;
