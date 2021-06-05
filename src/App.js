import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js'
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <section>
        <div className="Header-background">
          <div style={{"width":"80%", "margin": "0 auto"}}>
            <div className="Header-main">
              <Title title="Places"></Title>
              <button >Crear cuenta gratuita</button>
              <img className="Header-illustration" src={process.env.PUBLIC_URL + '/images/slondotpics.jpg' } alt=""/>
            </div>
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
