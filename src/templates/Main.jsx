import "./styles/main.css"



const Main = () => {
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
          <img src={`${process.env.PUBLIC_URL}/assets/bar/icon-search.svg`} alt="icon search" />
        </div>
        <div id="btn-films">
          <img src={`${process.env.PUBLIC_URL}/assets/bar/icon-films.svg`} alt="icon films" />
          <p>Filmes</p>
        </div>

        <div id="btn-series">
          <img src={`${process.env.PUBLIC_URL}/assets/bar/icon-series.svg`} alt="icon series" />
          <p>Series</p>
        </div>

        <div id="btn-documentary">
          <img src={`${process.env.PUBLIC_URL}/assets/bar/icon-documentary.svg`} alt="icon documentarty" />
          <p>Documentário</p>
        </div>


      </div>
      {/* container */}
      <div id="container">
        <div id="cover-highlights">
          <img src={`${process.env.PUBLIC_URL}/assets/container/cover-highlights/example.jpg`} alt="Cover" />
        </div>
        <div id="content-films">
          <div id="films-highlights" className="component-scroll">
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;