import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DashboardContainer from '../dashboard-container';

class App extends React.Component{
  render(){
    return (
      <div className='root'>
        <BrowserRouter>
          <MuiThemeProvider>
            <main>
              <Route exact path='/' component={DashboardContainer} />
            </main>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
