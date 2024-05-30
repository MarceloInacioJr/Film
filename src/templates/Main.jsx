import "./styles/main.css";

const Main = () => {
  // functions

  // Arrow Right Scroll button
  const arrowRightScroll = (componentId) => {
    const component = document.querySelector(componentId);
    component.scrollLeft += 1200;
  };

  // Arrow Left Scroll button
  const arrowLeftScroll = (componentId) => {
    const component = document.querySelector(componentId);
    component.scrollLeft -= 1200;
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
        <div id="btn-films">
          <img
            src={`${process.env.PUBLIC_URL}/assets/bar/icon-films.svg`}
            alt="icon films"
          />
          <p>Filmes</p>
        </div>

        <div id="btn-series">
          <img
            src={`${process.env.PUBLIC_URL}/assets/bar/icon-series.svg`}
            alt="icon series"
          />
          <p>Series</p>
        </div>

        <div id="btn-documentary">
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
        <div id="content-films">
          {/* films-highlights - component-scroll */}
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
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>

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

          {/* films-2 - component-scroll */}
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
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>

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

          {/* films-3 - component-scroll */}
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
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>

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

          {/* films-4 - component-scroll */}
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
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>
            <div className="item-films"></div>

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
  );
};

export default Main;
