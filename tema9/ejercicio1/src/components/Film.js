import React from 'react';

class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      genero: ''
    };
    this.filmName = this.filmName.bind(this);
    this.filmDescription = this.filmDescription.bind(this);
    this.filmGenero = this.filmGenero.bind(this);
  }

  filmName(event) {
    this.setState (
      {name: event.target.value}
    );
  }
  filmDescription(event) {
    this.setState (
      {description: event.target.value}
    );
  }
  filmGenero(event) {
    this.setState (
      {genero: event.target.value}
    );
  }
  render() {
    return (
      <form className="App">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={this.state.name} onChange={this.filmName}/>
        <label htmlFor="description">Descripción</label>
        <textarea name="description" id="description" cols="30" rows="1" value={this.state.description} onChange={this.filmDescription}></textarea>
        <label htmlFor="genero">Genero</label>
        <select name="genero" id="genero" value={this.state.genero} onChange={this.filmGenero}>
          <option value="drama">Drama</option>
          <option value="comedia">Comedia</option>
          <option value="infantil">Infantil</option>
        </select>
      </form>
    );
  }
}
export default Film;
