import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Home from './pages/Home'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    console.log(data)
  }

  

  render() {
    return (
      <MuiThemeProvider>
        <section>
          <Home></Home>
        </section>
      </MuiThemeProvider>
    );
  }
  
}

export default App;
