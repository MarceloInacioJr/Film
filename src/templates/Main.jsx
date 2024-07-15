import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./styles/main.css"
import { useEffect } from "react"



const Main = () => {
  const [moviesPopular, setMoviesPopular] = useState([])
  const [moviesAction, setMoviesAction] = useState([])
  const [moviesDramaRomance, setMoviesDramaRomance] = useState([])
  const [moviesScienceFiction, setMoviesScienceFiction] = useState([])
  const [moviesAll, setMoviesAll] = useState([])
  const [movieSearch, setMovieSearch] = useState([])
  const [inputSearchLength, setInputSearchLength] = useState()
  const [stateBtnSearch, setStateBtnSearch] = useState(false)
  const [stateBtnBarActice, setStateBtnBarActive] = useState(false)

  const linkImage = "https://image.tmdb.org/t/p/w500/"

  //credentials movie api the movies db 
  const credential= process.env.REACT_APP_CREDENTIAL


  // popular movies credentials
  const optionsMoviesPopularAndMovies = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:credential
    },
  }



  // search movies option credentials
  const optionsSearch = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:credential,
    },
  }

  // use navigate
  const navigate = useNavigate()

  // popular movies
  async function fetchPagesMoviesPopular() {
    try {
      const result = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=2",
        optionsMoviesPopularAndMovies
      )
      if (!result.ok) {
        throw new Error("ERRO fetch movies POPULAR [The movie db]")
      }
      const data = await result.json()

      setMoviesPopular(data.results)
    } catch (err) {
      console.log(err.message)
      return []
    }
  }

  // fetch pages
  const fetchPages = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?language=pt-BR`,
        optionsMoviesPopularAndMovies
      )

      if (!response.ok) {
        throw new Error("Erro fetch movies in api [the movies db]")
      }

      const data = await response.json()
      return data.results
    } catch (err) {
      console.log(err.message)
      return []
    }
  }

  // Update Movies
  async function updateMovies() {
    let arrayMovies = []
    // amount pages movies fetch
   
    arrayMovies.push(...(await fetchPages(1)))

    setMoviesAll(arrayMovies)
    await updateActionAdventureMovies(arrayMovies)
    await updateDramaRomance(arrayMovies)
    await updateScienceFiction(arrayMovies)
  }

  async function updateActionAdventureMovies(arrayMovies) {
    // filtering genre action
    const uniqueMovie = new Set()
    const filterMovieActionAdventure = arrayMovies.filter((movie) => {
      if (
        (movie.genre_ids.includes(28) && !uniqueMovie.has(movie.id)) ||
        (movie.genre_ids.includes(12) && !uniqueMovie.has(movie.id))
      ) {
        uniqueMovie.add(movie.id)
        return true
      }
      return false
    })

    setMoviesAction(filterMovieActionAdventure)
  }

  async function updateDramaRomance(arrayMovies) {
    const uniqueMovie = new Set()
    const filterMovieDramaRomance = arrayMovies.filter((movie) => {
      if (
        (movie.genre_ids.includes(10749) && !uniqueMovie.has(movie.id)) ||
        (movie.genre_ids.includes(18) && !uniqueMovie.has(movie.id))
      ) {
        uniqueMovie.add(movie.id)
        return true
      }
      return false
    })
    setMoviesDramaRomance(filterMovieDramaRomance)
  }

  async function updateScienceFiction(arrayMovies) {
    const uniqueMovie = new Set()
    const filterMovieScienceFiction = arrayMovies.filter((movie) => {
      if (movie.genre_ids.includes(35) && !uniqueMovie.has(movie.id)) {
        uniqueMovie.add(movie.id)
        return true
      }
      return false
    })
    setMoviesScienceFiction(filterMovieScienceFiction)
  }
  function updateSearchMovie(value) {
    setInputSearchLength(value.length)
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${value}&language=pt-BR&page=1`,
      optionsSearch
    )
      .then((response) => {
        if (!response.ok) {
          console.log('Error GET movie search')
        }
        return response.json()
      })
      .then((data) => setMovieSearch(data.results))
  }

  function goInfoMovie(movie) {
    navigate("/moviesinfo", { state: { movie } })
  }

  useEffect(() => {
    updateMovies()
    fetchPagesMoviesPopular()
  }, [])

  // functions

  // loading movies

  // Arrow Right Scroll button
  const arrowRightScroll = (componentId) => {
    const component = document.querySelector(componentId)
    component.scrollLeft += 1000
  }

  // Arrow Left Scroll button
  const arrowLeftScroll = (componentId) => {
    const component = document.querySelector(componentId)
    component.scrollLeft -= 1000
  }

  return (
    <div id="body-content">
      {/* cover */}

      <div id="cover">
        <div id="item1" className="item"></div>
        <div id="item2" className="item"></div>
        <div id="item3" className="item"></div>
        <div id="item4" className="item"></div>
        <div id="item5" className="item"></div>
        <div id="item6" className="item"></div>
      </div>

      <div
        id="btn-menu"
        className={stateBtnBarActice ? "menu-active" : ""}
        onClick={() => {
          stateBtnBarActice
            ? setStateBtnBarActive(false)
            : setStateBtnBarActive(true)
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/bar/menu.svg`}
          alt="icon menu"
        />
      </div>
      <div id="bar" className={stateBtnBarActice ? "bar-active-mobile" : ""}>
        <div id="content-btn-search">
          <div id="btn-search" onClick={() => setStateBtnSearch(true)}>
            {/* btn-search */}
            <img
              src={`${process.env.PUBLIC_URL}/assets/bar/icon-search.svg`}
              alt="icon search"
            />
            <div className="btn-input-search"></div>
          </div>

          {stateBtnSearch ? (
            <div className="btn-input-search" id="btn-input-search-active">
              <input
                type="text"
                placeholder="Procurar"
                id="input-search"
                onChange={(e) => {
                  updateSearchMovie(e.target.value)
                }}
              />
              <div
                id="btn-close-input-search"
                onClick={() => setStateBtnSearch(false)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/bar/icon-close.png`}
                  alt="icon close bar"
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

        {/* component result search */}
        {stateBtnSearch ? (
          <div id="component-result-search">
            <div id="result-search-scroll" className="component-scroll">
              {/* list movies */}

              {movieSearch.length > 0 ? (
                movieSearch.map((movie, index) =>
                  movie.poster_path ? (
                    <div id="movie-results-search" key={index}>
                      <div
                        id="item-movie-results-search"
                        onClick={() => goInfoMovie(movie)}
                      >
                        <img
                          src={`${linkImage}${movie.poster_path}`}
                          alt="img-movie"
                          title={movie.title}
                        />
                      </div>
                    </div>
                  ) : (
                    <></>
                  )
                )
              ) : (
                <div id="content-result-not-found">
                  {!inputSearchLength ? (
                    <p>Por favor insira um título.</p>
                  ) : (
                    <p>Nenhum resultado encontrado.</p>
                  )}
                </div>
              )}
            </div>

            {/* buttom scroll results */}

            <div id="buttons-results">
              {/* scroll-left */}
              <div
                className="button-scroll-results"
                onClick={() => arrowLeftScroll("#result-search-scroll")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-left-arrow.svg`}
                  alt="arrow left"
                />
              </div>

              {/* scroll-right */}
              <div
                className="button-scroll-results"
                onClick={() => arrowRightScroll("#result-search-scroll")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-right-arrow.svg`}
                  alt="arrow left"
                />
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* container  cover*/}

      <div id="container">
        <div id="cover-highlights">
          <img
            src={`https://s2-globo-play.glbimg.com/wc1BrxQnAsovlM7RuV86XcMFENk=/0x720/https://s2-globo-play.glbimg.com/4LNm9wmuSdo1ezzVX6PGeZuFGao=/https://s2.glbimg.com/XWBZYvhG0_nv3GJc0L3qlB__H98=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2024/M/U/Sr0RRWRmaGWbGfjZ11eg/oppenheimer.jpg`}
            alt="Cover"
          />

          {/* content-highlights */}
          <div id="content-highlights"></div>
          <div id="border-backdrop-bottom"></div>
        </div>

        {/* content-movies */}

        <div id="container-movies">
          {/* popular-movies - component-scroll */}
          <div className="content-movies">
            <div className="title-content">
              <p># Populares</p>
            </div>
            <div id="popular-movies" className="component-scroll">
              {/* button arrow left */}
              <div
                className="btn-scroll btn-scroll-left"
                onClick={() => arrowLeftScroll("#popular-movies")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-left-arrow.svg`}
                  alt="arrow left"
                />
              </div>

              {/* button arrow right */}
              <div
                className="btn-scroll btn-scroll-right"
                onClick={() => arrowRightScroll("#popular-movies")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-right-arrow.svg`}
                  alt="arrow right"
                />
              </div>
              <>
                {/* popular*/}
                {moviesPopular.map((movie, index) => (
                  <div className="item-movies" key={index}>
                    <div className="item-movies-img">
                      <img
                        src={`${linkImage}${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </div>
                    <div className="item-movies-most-about">
                      <div className="most-info">
                        <div
                          className="btn-info-movie"
                          onClick={() => {
                            goInfoMovie(movie)
                          }}
                        >
                          <p>Mais informações</p>
                        </div>
                      </div>
                      <div className="assessment-content">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/item-star-assessment.png`}
                          alt="star-assessment"
                        />
                        <p>{movie.vote_average.toFixed(1).replace(".", ",")}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            </div>
          </div>

          {/* movies action and adventure */}
          <div className="content-movies">
            <div className="title-content">
              <p># Ação e Aventura</p>
            </div>
            <div id="movies-2" className="component-scroll">
              {/* button arrow left */}
              <div
                className="btn-scroll btn-scroll-left"
                onClick={() => arrowLeftScroll("#movies-2")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-left-arrow.svg`}
                  alt="arrow left"
                />
              </div>

              {/* list movies */}
              <>
                {moviesAction.map((movie, index) => (
                  <div className="item-movies" key={index}>
                    <div className="item-movies-img">
                      <img
                        src={`${linkImage}${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </div>
                    <div className="item-movies-most-about">
                      <div className="most-info">
                        <div
                          className="btn-info-movie"
                          onClick={() => {
                            goInfoMovie(movie)
                          }}
                        >
                          <p>Mais informações</p>
                        </div>
                      </div>
                      <div className="assessment-content">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/item-star-assessment.png`}
                          alt="star-assessment"
                        />
                        <p>{movie.vote_average.toFixed(1).replace(".", ",")}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
              {/* button arrow right */}
              <div
                className="btn-scroll btn-scroll-right"
                onClick={() => arrowRightScroll("#movies-2")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-right-arrow.svg`}
                  alt="arrow right"
                />
              </div>
            </div>
          </div>

          {/* movies-3 - component-scroll */}
          {/* movies drama and romance */}
          <div className="content-movies">
            <div className="title-content">
              <p># Drama e Romance</p>
            </div>
            <div id="movies-3" className="component-scroll">
              {/* button arrow left */}
              <div
                className="btn-scroll btn-scroll-left"
                onClick={() => arrowLeftScroll("#movies-3")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-left-arrow.svg`}
                  alt="arrow left"
                />
              </div>

              {/* list movies */}
              <>
                {moviesDramaRomance.map((movie, index) => (
                  <div className="item-movies" key={index}>
                    <div className="item-movies-img">
                      <img
                        src={`${linkImage}${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </div>
                    <div className="item-movies-most-about">
                      <div className="most-info">
                        <div
                          className="btn-info-movie"
                          onClick={() => {
                            goInfoMovie(movie)
                          }}
                        >
                          <p>Mais informações</p>
                        </div>
                      </div>
                      <div className="assessment-content">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/item-star-assessment.png`}
                          alt="star-assessment"
                        />
                        <p>{movie.vote_average.toFixed(1).replace(".", ",")}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
              {/* button arrow right */}
              <div
                className="btn-scroll btn-scroll-right"
                onClick={() => arrowRightScroll("#movies-3")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-right-arrow.svg`}
                  alt="arrow right"
                />
              </div>
            </div>
          </div>

          {/* movies-4 - component-scroll */}
          <div className="content-movies">
            <div className="title-content">
              <p># Ficção Científica</p>
            </div>
            <div id="movies-4" className="component-scroll">
              {/* button arrow left */}
              <div
                className="btn-scroll btn-scroll-left"
                onClick={() => arrowLeftScroll("#movies-4")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-left-arrow.svg`}
                  alt="arrow left"
                />
              </div>

              {/* list movies */}
              <>
                {moviesScienceFiction.map((movie, index) => (
                  <div className="item-movies" key={index}>
                    <div className="item-movies-img">
                      <img
                        src={`${linkImage}${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </div>
                    <div className="item-movies-most-about">
                      <div className="most-info">
                        <div
                          className="btn-info-movie"
                          onClick={() => {
                            goInfoMovie(movie)
                          }}
                        >
                          <p>Mais informações</p>
                        </div>
                      </div>
                      <div className="assessment-content">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/item-star-assessment.png`}
                          alt="star-assessment"
                        />
                        <p>{movie.vote_average.toFixed(1).replace(".", ",")}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>

              {/* button arrow right */}
              <div
                className="btn-scroll btn-scroll-right"
                onClick={() => arrowRightScroll("#movies-4")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-right-arrow.svg`}
                  alt="arrow right"
                />
              </div>
            </div>
          </div>

          {/* movies-5 -movies- component-scroll */}
          <div className="content-movies">
            <div className="title-content">
              <p># Outros</p>
            </div>
            <div id="movies-5" className="component-scroll">
              {/* button arrow left */}
              <div
                className="btn-scroll btn-scroll-left"
                onClick={() => arrowLeftScroll("#movies-5")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-left-arrow.svg`}
                  alt="arrow left"
                />
              </div>

              {/* list movies */}
              <>
                {moviesAll.map((movie, index) => (
                  <div className="item-movies" key={index}>
                    <div className="item-movies-img">
                      <img
                        src={`${linkImage}${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </div>
                    <div className="item-movies-most-about">
                      <div className="most-info">
                        <div
                          className="btn-info-movie"
                          onClick={() => {
                            goInfoMovie(movie)
                          }}
                        >
                          <p>Mais Informações</p>
                        </div>
                      </div>
                      <div className="assessment-content">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/item-star-assessment.png`}
                          alt="star-assessment"
                        />
                        <p>{movie.vote_average.toFixed(1).replace(".", ",")}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>

              {/* button arrow right */}
              <div
                className="btn-scroll btn-scroll-right"
                onClick={() => arrowRightScroll("#movies-5")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-right-arrow.svg`}
                  alt="arrow right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
