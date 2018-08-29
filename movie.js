import React, { Component } from 'react';
import './movie.css';

// class Movie extends Component{
// 	render(){
// 		// console.log(this.props);
// 		return (
// 			<div>
// 				<MoviePoster poster={this.props.poster} />
// 				<h1>{this.props.title}</h1>
// 			</div>
// 		)
// 	}
// }

function Movie({title, poster}){
			return (
				<div>
					<MoviePoster poster={poster} />
					<h1>{title}</h1>
				</div>
			)
}



// 클래스 콤포넌트
// class MoviePoster extends Component{
// 	render(){
// 		return (
// 			<img src={this.props.poster} />
// 		)
// 	}
// }

// 함수 콤포넌트
function MoviePoster({poster}){
	return (
		<img src={poster} alt="Movie Poster" />
	)
}

export default Movie;
