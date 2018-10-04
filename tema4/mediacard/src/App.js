import React, { Component } from 'react';
import we from './we.jpg';
import './App.css';

class App extends Component {
  render() {
    const header = (
        <div className = "header" >
          <img src = {we} alt = "we" className = "we" / >
          <div className="encabezado">
            <h1 className = "weAI" > Anna e Irene: ) < /h1>
            <p className = "fecha" > Lunes 23 de julio 2018 < /p>
          </div>
      </div>
    );
    const main = (
        <div className = "explicacion" >
        <p className = "nosotras" > Odio blandit consequat duis ad exerci laoreet lobortis minim crisare hendrerit luptatum molestie et, nisl facilisi ad vel.Magna ut in esse delenit in nisl nibh, molestie nulla eu eum lobortis at iriure nisl.Dolore, nulla hendrerit ea consequat ut sciurus ea eros, ut delenit eum delenit crisare.Luptatum minim wisi nostrud praesent dolor elit odio vero erat consequatvel hendrerit commodo ? Nisl sciurus exerci tation illum enim in sciurus ad dolor amet ea ut.Vero dolore luptatum erat feugiat euismod, nisl nonummy lorem volutpat delenit erat, ut dignissim erat iusto facilisis in velit eum.Nulla, vel aliquam feugiat, te quis lobortis eros et ad magna et ad praesent iriuredolor enim. < /p>
      </div>
    );
    const footer = (  <div className = "footer" >
        <p className = "lee" > leer mas... < /p>
        <p className = "numero" > 30 <i className = "fas fa-heart heart"> < /i> < /p>
      </div>
    );
  const all = (
    <div className="container" >
      {header}
      {main}
      {footer}
    </div>
)
    return all;
  }
}

export default App;
