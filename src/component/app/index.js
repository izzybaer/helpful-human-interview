import React from 'react';
import Sidebar from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import {BrowserRouter, Route} from 'react-router-dom';
import DashboardContainer from '../dashboard-container';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import helpfulHumanSVG from '../../assets/logo-symbol.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component{
  render(){

    const styles = {
      title: {
        cursor: 'pointer',
      },
      logo: {
        width: '46px',
        height: '46px',
        marginTop: '10px',
        marginLeft: '15px',
      },
      appBar: {
        height: '85px',
        backgroundColor: '#373C3C',
      },
    };
    const muiTheme = getMuiTheme({
      inputs: {
        padding: '1px',
        margin: '0 auto',
        marginTop: '10px',
        marginRight: '30px',
        color: '#DDDDDD',
        borderRadius: '8px',
        backgroundColor: 'white',
        fontFamily: 'Source Serif Pro',
        fontColor: '#E7E7E7',
      },
    });
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='app'>
          <AppBar
            iconElementLeft={
              <img src='src/assets/logo-symbol.svg'
                style={styles.logo}
              />
            }
            style={styles.appBar}
            iconElementRight={
              <div>
                <TextField
                  hintText='Search'
                  hintStyle={{marginLeft: '20px', fontSize: '21px'}}
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
