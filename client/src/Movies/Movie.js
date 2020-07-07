import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard'
import axios from 'axios';
import styled from 'styled-components';

function Movie(){

   const params = useParams();
   const [movie, setMovie] = useState();

   useEffect( () => {

      const id = params.id;
   
      axios
         .get(`http://localhost:5000/api/movies/${id}`)
         .then(response => {
         setMovie(response.data);
         console.log("TEST AXIOS CALL",response.data)
         })
         .catch(error => {
         console.error(error);
         });
  
    },[]);

   // Uncomment this only when you have moved on to the stretch goals
   const saveMovie = () => {
    //const addToSavedList = props.addToSavedList;
    //addToSavedList(movie)
  }

    if (!movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">  
        <MovieCard movie={movie} />
        <div className="save-button" onClick={saveMovie}>Save</div>
      </div>
    );
}

export default Movie;