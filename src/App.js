import { Component } from 'react';
import './App.css';
import Search from './components/search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//mui theme provider is used to use all the material-ui designs at once 

class App extends Component{
  render(){
    return(
      <MuiThemeProvider> 
        <div>
          <Search />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
