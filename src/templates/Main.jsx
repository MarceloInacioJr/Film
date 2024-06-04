import "./styles/main.css";

const Main = () => {
  // functions

  // Arrow Right Scroll button
  const arrowRightScroll = (componentId) => {
    const component = document.querySelector(componentId);
    component.scrollLeft += 1000;
  };

  // Arrow Left Scroll button
  const arrowLeftScroll = (componentId) => {
    const component = document.querySelector(componentId);
    component.scrollLeft -= 1000;
  };

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

      <div id="bar">
        <div id="btn-search">
          <img
            src={`${process.env.PUBLIC_URL}/assets/bar/icon-search.svg`}
            alt="icon search"
          />
        </div>
        <div id="btn-films" className="btns-bar">
          <img
            src={`${process.env.PUBLIC_URL}/assets/bar/icon-films.svg`}
            alt="icon films"
          />
          <p>Filmes</p>
        </div>

        <div id="btn-series" className="btns-bar">
          <img
            src={`${process.env.PUBLIC_URL}/assets/bar/icon-series.svg`}
            alt="icon series"
          />
          <p>Series</p>
        </div>

        <div id="btn-documentary" className="btns-bar">
          <img
            src={`${process.env.PUBLIC_URL}/assets/bar/icon-documentary.svg`}
            alt="icon documentary"
          />
          <p>Documentário</p>
        </div>
      </div>

      {/* container */}
      <div id="container">
        <div id="cover-highlights">
          <img
            src={`${process.env.PUBLIC_URL}/assets/container/cover-highlights/example.jpg`}
            alt="Cover"
          />
          {/* 
<img src="https://source.unsplash.com/random/?sig=1" /> */}
          {/* content-highlights */}
          <div id="content-highlights">
            <p id="title-highlights">Nome do Filme: teste para fazer nome</p>
            <div id="btns-content-highlights">
              <div id="btn-play">
                <div className="icon-play">
                  <div className="icon-triangle"></div>
                </div>
                <p id="legend-btn-play">Assistir</p>
              </div>

              <div id="btn-information-more">
                <p>Mais informações</p>
              </div>
            </div>
          </div>
        </div>

        {/* content-films */}

        <div id="container-films">
          {/* films-highlights - component-scroll */}
          <div className="content-films">
            <div className="title-content">
              <p># Mais assistidos</p>
            </div>
            <div id="films-highlights" className="component-scroll">
              {/* button arrow left */}
              <div
                className="btn-scroll btn-scroll-left"
                onClick={() => arrowLeftScroll("#films-highlights")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-left-arrow.svg`}
                  alt="arrow left"
                />
              </div>

              {/* list films */}
              <div className="item-films">
                <div className="item-films-img">
                  <img src="https://source.unsplash.com/random/?sig=2" />
                </div>
                <div className="item-films-most-about">
                  <div className="play-movie">
                    <div className="btn-play-movie">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/dowload.png`}
                        alt=""
                      />
                      <p>Assistir</p>
                    </div>
                  </div>
                  <div className="most-info">
                    <p> Mais informação</p>
                  </div>
                </div>
              </div>

              
              {/* button arrow right */}
              <div
                className="btn-scroll btn-scroll-right"
                onClick={() => arrowRightScroll("#films-highlights")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-right-arrow.svg`}
                  alt="arrow right"
                />
              </div>
            </div>
          </div>

          {/* films-2 - component-scroll */}
          <div className="content-films">
            <div className="title-content">
              <p># Em destaque</p>
            </div>
            <div id="films-2" className="component-scroll">
              {/* button arrow left */}
              <div
                className="btn-scroll btn-scroll-left"
                onClick={() => arrowLeftScroll("#films-2")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-left-arrow.svg`}
                  alt="arrow left"
                />
              </div>

              {/* list films */}
              <div className="item-films item-films-most-watched">
                <img src="https://source.unsplash.com/random/?sig=51" />
              </div>
              <div className="item-films item-films-most-watched">
                <img src="https://source.unsplash.com/random/?sig=52" />
              </div>
              <div className="item-films item-films-most-watched">
                <img src="https://source.unsplash.com/random/?sig=53" />
              </div>
              <div className="item-films item-films-most-watched">
                <img src="https://source.unsplash.com/random/?sig=54" />
              </div>
              <div className="item-films item-films-most-watched">
                <img src="https://source.unsplash.com/random/?sig=55" />
              </div>
              <div className="item-films item-films-most-watched">
                <img src="https://source.unsplash.com/random/?sig=56" />
              </div>
              <div className="item-films item-films-most-watched">
                <img src="https://source.unsplash.com/random/?sig=57" />
              </div>
              <div className="item-films item-films-most-watched">
                <img src="https://source.unsplash.com/random/?sig=58" />
              </div>
              <div className="item-films item-films-most-watched">
                <img src="https://source.unsplash.com/random/?sig=59" />
              </div>
              <div className="item-films item-films-most-watched">
                <img src="https://source.unsplash.com/random/?sig=60" />
              </div>

              {/* button arrow right */}
              <div
                className="btn-scroll btn-scroll-right"
                onClick={() => arrowRightScroll("#films-2")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-right-arrow.svg`}
                  alt="arrow right"
                />
              </div>
            </div>
          </div>

          {/* films-3 - component-scroll */}
          <div className="content-films">
            <div className="title-content">
              <p># Filmes</p>
            </div>
            <div id="films-3" className="component-scroll">
              {/* button arrow left */}
              <div
                className="btn-scroll btn-scroll-left"
                onClick={() => arrowLeftScroll("#films-3")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-left-arrow.svg`}
                  alt="arrow left"
                />
              </div>

              {/* list films */}
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=17" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=16" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=19" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=21" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=22" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=23" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=24" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=25" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=26" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=27" />
              </div>

              {/* button arrow right */}
              <div
                className="btn-scroll btn-scroll-right"
                onClick={() => arrowRightScroll("#films-3")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-right-arrow.svg`}
                  alt="arrow right"
                />
              </div>
            </div>
          </div>

          {/* films-4 - component-scroll */}
          <div className="content-films">
            <div className="title-content">
              <p># Séries </p>
            </div>
            <div id="films-4" className="component-scroll">
              {/* button arrow left */}
              <div
                className="btn-scroll btn-scroll-left"
                onClick={() => arrowLeftScroll("#films-4")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/container/icon-buttons/icon-left-arrow.svg`}
                  alt="arrow left"
                />
              </div>

              {/* list films */}
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=28" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=29" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=30" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=31" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=32" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=33" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=34" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=35" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=36" />
              </div>
              <div className="item-films">
                <img src="https://source.unsplash.com/random/?sig=37" />
              </div>

              {/* button arrow right */}
              <div
                className="btn-scroll btn-scroll-right"
                onClick={() => arrowRightScroll("#films-4")}
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
  );
};

export default Main;
