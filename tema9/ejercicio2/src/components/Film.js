import React from 'react';
const fr =new FileReader(); //permite leer el tipo de archivos file

class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      genero: '',
      caratula: 'https://via.placeholder.com/300x300/cccccc/666666/?text=IMAGE'
    };
    this.filmName = this.filmName.bind(this);
    this.filmDescription = this.filmDescription.bind(this);
    this.filmGenero = this.filmGenero.bind(this);
    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.writeImages = this.writeImages.bind(this);
  }
  handleSubmit(event) {
    //En event.target tenemos la referencia al DOM del objeto sobre el que se ha hecho el evento, en este caso el input de tipo file. en el event.target.files tenemos los archivos que ha seleccionado el usuario como solo es uno accedemos a la posición 0 directamente. Esto no nos da el contenido del archivo que hemos seleccionado solo nos da una ruta. Para cargar el contenido del archivo cargaremos la clase FileReader
      const file = event.target.files[0];
      // cuando FileReader termine de cargar un archivo llamará a esta función
      fr.addEventListener('load', this.writeImages);
      //Le decimos a FileReader que cargue el archivo de la ruta que hemos obtenido del input
      fr.readAsDataURL(file);
      //cuando termine de cargarla se lanzará el evento load y llamará a la función de antes addEventListener
  }
  writeImages() {
    this.setState({caratula:fr.result});
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
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={this.state.name} onChange={this.filmName}/>
        <label htmlFor="description">Descripción </label>
        <textarea name="description" id="description" cols="30" rows="1" value={this.state.description} onChange={this.filmDescription}></textarea>
        <label htmlFor="genero">Genero </label>
        <select name="genero" id="genero" value={this.state.genero} onChange={this.filmGenero}>
          <option value="drama">Drama</option>
          <option value="comedia">Comedia</option>
          <option value="infantil">Infantil</option>
        </select>
        <label htmlFor="poster">Elige imagen </label>
        <input type="file" onChange={this.handleSubmit} ref={this.fileInput}/>
        <img src={this.state.caratula} alt="poster" className="poster"/>
      </form>
    );
  }
}
export default Film;
