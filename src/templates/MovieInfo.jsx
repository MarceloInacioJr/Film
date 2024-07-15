import "./styles/movieInfo.css";
import { useLocation, useNavigate } from "react-router-dom";

const MovieInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movie } = location.state || {};
  

  let date = movie.release_date
  let dateFormat = new Date(date).getFullYear()
  
  const returnGenre = (codes) => {
    const genreArray = []
    let formatGenreArray = ''
    const codesLegends = [
        { id: 28, name: "Ação" },
        { id: 12, name: "Aventura" },
        { id: 16, name: "Animação" },
        { id: 35, name: "Comédia" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentário" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Família" },
        { id: 14, name: "Fantasia" },
        { id: 36, name: "História" },
        { id: 27, name: "Terror" },
        { id: 10402, name: "Música" },
        { id: 9648, name: "Mistério" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Ficção Científica" },
        { id: 10770, name: "Filme para TV" },
        { id: 53, name: "Suspense" },
        { id: 10752, name: "Guerra" },
        { id: 37, name: "Faroeste" }
    ]

    for(let i = 0; i<codes.length; i++){
        const genre = codesLegends.find((g)=> g.id === codes[i]) 
        if(genre){
            genreArray.push(genre.name)
        }
    }

    formatGenreArray = genreArray.join(', ').concat('.')

    return(formatGenreArray)


  }

  return (
    <div id="container-movie-info">
      <div id="content-movie-info-cover">
        <div id="cover-movie">
          <div id="shadow-img"></div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path?movie.backdrop_path:movie.poster_path}`}
            alt="Img-cover"
          />
        </div>
        {/* info movie */}
        <div id="info-movie">
          <p id="title-movie">{movie.title}</p>
          {/* info genre date release and assessment */}
          <div id="genre-date-assessment-container">
            <div id="title-genre-content" className="title-legend-content">
              <div id="title-genre" className="title-genre-date">
                <p>Gênero</p>
              </div>
              <p className="legend-genre-date">
                {returnGenre(movie.genre_ids)}
              </p>
            </div>
            <div id="title-date-content" className="title-legend-content">
              <div id="title-date" className="title-genre-date">
                <p>Lançamento</p>
              </div>
              <p className="legend-genre-date">{dateFormat?dateFormat:'-'}</p>
            </div>

            <div id="assessment-content">
              <img
                src={`${process.env.PUBLIC_URL}/assets/movieInfo/star-assessment.png`}
                alt="star img"
              />
              <p>{movie.vote_average?movie.vote_average.toFixed(1).replace(".", ","):'-'}</p>
            </div>
          </div>
          <div id="description-content">
            <p id="title-description">Descrição</p>
            <p id="description">{`${movie.overview? movie.overview:`O filme ${movie.title}, ano de lançamento ${dateFormat}, é do gênero ${returnGenre(movie.genre_ids)} e tem uma avaliação de ${movie.vote_average.toFixed(1).replace(".", ",")} pelo público. `} `}</p>
          </div>
        </div>
      </div>
      <div id="btn-back-container" onClick={() => navigate("/")}>
        <div id="btn-back">
          <p>Voltar</p>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo;
