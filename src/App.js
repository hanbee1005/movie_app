import React from 'react';
import axios from 'axios';

import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  
  render() {
    const { isLoading, movies } = this.state;
    return <section class="container">
      {isLoading 
        ? (<div class="loader">
            <span class="loader_text">Loading...</span>
          </div>)
        : (
          <div class="movies">
            {movies.map(movie => {
              return (
                <Movie 
                  key={movie.id}
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )
      }
    </section>;
  }

  getMovies = async () => {
    const {data: {data: { movies }}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }
}

export default App;
