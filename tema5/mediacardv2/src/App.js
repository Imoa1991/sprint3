import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import image from './we.jpg';
class App extends Component {
  render() {
    const weNosotras = 'Anna e Irene :)';
    const fech = 'Lunes 23 de julio 2018';
    const text = 'Odio blandit consequat duis ad exerci laoreet lobortis minim crisare hendrerit luptatum molestie et, nisl facilisi ad vel.Magna ut in esse delenit in nisl nibh, molestie nulla eu eum lobortis at iriure nisl.Dolore, nulla hendrerit ea consequat ut sciurus ea eros, ut delenit eum delenit crisare.Luptatum minim wisi nostrud praesent dolor elit odio vero erat consequatvel hendrerit commodo ? Nisl sciurus exerci tation illum enim in sciurus ad dolor amet ea ut.Vero dolore luptatum erat feugiat euismod, nisl nonummy lorem volutpat delenit erat, ut dignissim erat iusto facilisis in velit eum.Nulla, vel aliquam feugiat, te quis lobortis eros et ad magna et ad praesent iriuredolor enim.';
    const number = 30;
    const heart = true;
    return (
      <div className = 'container'>
      <Header image = {image} nosotras = {weNosotras} date = {fech}/>
      <Main text = {text}/>
      <Footer number = {number} heart = {heart}/>
      </div>
    )
  }
}

export default App;
