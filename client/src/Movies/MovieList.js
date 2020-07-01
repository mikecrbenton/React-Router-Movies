import React from 'react';
import {Link} from 'react-router-dom';
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
  const { title, director, metascore, stars } = movie;

  return (
   
   <Link to={`/movies/${movie.id}`}>
      <div className="movie-card">

            <h2>{title}</h2>

            <div className="movie-director">
            Director: <em>{director}</em>
            </div>

            <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
            </div>

            <h3>Actors</h3>

            {stars.map(star => (
            <div key={star} className="movie-star">
               {star}
            </div>
            ))}

      </div>
   </Link>
  );
}

export default MovieList;


