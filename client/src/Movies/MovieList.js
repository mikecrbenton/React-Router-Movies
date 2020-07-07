import React from 'react';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard';
//import App from '../App';

const MovieList = props => {

  return (
    <div className="movie-list">

      { props.movie ? 
      <div>
         { props.movie.map( eachMovie => (
               <MovieDetails key={ eachMovie.id } movie={ eachMovie } />
         ) ) }
      </div> :
      <p>LOADING</p> }


    </div>
  );
}

// ***THIS IS A NEW CONCEPT*** - A COMPONENT CAN BE DEFINED WITHIN ANOTHER
// IT DOESN'T HAVE TO BE IN A SEPARATE FILE

function MovieDetails({ movie }) {

  return ( 
   <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />        
   </Link>
  );
}

export default MovieList;


