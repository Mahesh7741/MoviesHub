

const MoviesPoster = ({movie})=>{
    return(
        <div className="movie">
          <div>{movie.Year}</div>
          <div><img src={movie.Poster !== 'N/A'? movie.Poster:'http://via.placeholder.com/400' } alt={movie.Title}></img></div>
          <div><span>{movie.Type}</span><h3>{movie.Title}</h3></div>
        </div>
    )

}

export default MoviesPoster;