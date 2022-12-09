import React from 'react';
import './App.css';

class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if(!DataisLoaded) return <div>
      <h1>Por favor espera un momento... </h1>
    </div>;
    return (
      <div className="App">
        <h1 className="titulo">Datos obtenidos de la API</h1> {
        items.map((item) => (
          <ol key={item.id}>
            <li><b>Nombre del Usuario:</b> {item.username}<br /></li>
            <li><b>Nombre Completo:</b> {item.name}<br /></li>
            <li><b>Correo Electrónico:</b> {item.email}<br /></li>
            {/* Correo Electrónico: {item.address} */}

          </ol>
        ))
      }
      </div>
    );
  }
}

export default App;