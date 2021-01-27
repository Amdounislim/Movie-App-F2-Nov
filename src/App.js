import React, {useState} from "react"
import './App.css';
import {moviesData} from './components/MoviesData'
import Main from './components/Main'

function App() {
  const [movies, setMovies] = useState(moviesData)

  const AddNewMovie=(x)=>{
    setMovies([...movies, x])
  }

  return (
    <div className="App">
      <Main movies={movies} AddNewMovie={AddNewMovie}/>
    </div>
  );
}

export default App;
