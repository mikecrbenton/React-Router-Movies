import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {

  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  //GET MOVIES -> LOCAL SERVER 5000==============
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  //============================================

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };



  return (
    <div>
      <SavedList list={savedList} />

      <Route exact path="/">
         <MovieList movie={movieList} />
      </Route>

      <Route exact path="/movies/:id" component={Movie}/>
    </div>
  );
};

export default App;
