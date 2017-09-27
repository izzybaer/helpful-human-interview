import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import helpfulHumanSVG from '../../assets/logo-symbol.svg';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DashboardContainer from '../dashboard-container';

class App extends React.Component{
  render(){
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };
    const muiTheme = getMuiTheme({
      inputs: {
        margin: '0 auto',
        backgroundColor: 'white',
        color: '#DDDDDD',
        fontFamily: 'Source Serif Pro',
        borderRadius: '5px',
        padding: '1px',
      },
    });
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='app'>
          <AppBar
            iconElementLeft={<img src='src/assets/logo-symbol.svg'/>}
            style={{backgroundColor: '#373C3C'}}
            iconElementRight={
              <div>
                <TextField
                  hintText='Search'
                  hintStyle={{marginLeft: '20px'}}
                  style={muiTheme.inputs}
                  underlineShow={false}

                />
              </div>
            }
          />
          <BrowserRouter>
            <main>
              <Route exact path='/' component={DashboardContainer} />
            </main>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
