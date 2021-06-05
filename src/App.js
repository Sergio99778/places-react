import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js'
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numero: 0
    };
    
    this.updateNumero = this.updateNumero.bind(this);
    
  }

  updateNumero() {
    this.setState({
      numero: this.state.numero + 1
    });
  }

  render() {
    return (
      <section>
        <div>
          <div>
            <Title title="Places"></Title>
            <h2>{this.state.numero}</h2>
            <button onClick={this.updateNumero}>Crear cuenta gratuita</button>
            <img src={process.env.PUBLIC_URL + '/images/slondotpics.jpg' } alt="" height="300"/>
            <div>
              <ul>
                <li>
                  <h3>Calificaciones con emociones</h3>
                  <p>Califica tus lugares con experiencias, no con numeros</p>
                </li>
                <li>
                  <h3>¿Sin internet? Sin problemas</h3>
                  <p>Places funciona sin internet o en conexiones lentas</p>
                </li>
                <li>
                  <h3>Tus lugares favoritos</h3>
                  <p>Define la lista de tus lugares favoritos</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
}

export default App;
