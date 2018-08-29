import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';

// const movies = [
//   {
//     title: "Maxtrix",
//     poster: 'http://placehold.it/300x200/f1f'
//   },
//   {
//     title: "Oldboy",
//     poster: 'http://placehold.it/300x200/666'
//   },
//   {
//     title: "Star Wars",
//     poster: 'http://placehold.it/300x200/660'
//   },
//   {
//     title: "Fan Boy",
//     poster: 'http://placehold.it/300x200/f90'
//   }
// ]

class App extends Component {

  state = {
    greeting: "Hello!",
  }

  componentDidMount(){
    console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'))
  }

  _renderMovies = ()=>{
    const movies = this.state.movies.map((movie, index)=>{
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      // 부모 컴포넌트가 자식컴포넌트에게 속성(props)를 전달
      <div className="App">
        {this.state.movies ? this._renderMovies(): 'Loading...'}
      </div>
    );
  }
}

export default App;
