import React from 'react';
import Sidebar from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {BrowserRouter, Route} from 'react-router-dom';
import DashboardContainer from '../dashboard-container';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import helpfulHumanSVG from '../../assets/logo-symbol.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component{
  render(){

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
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
      sidebar: {
        float: 'left',
        height: '1100px',
        width: '275px',
        backgroundColor: '#D6D8D8',
        textAlign: 'center',
        display: 'inline-block',
      },
      menu: {
        fontSize: 20,
        display: 'inline-block',
        margin: '16px 32px 16px 0',
        fontFamily: 'Source Serif Pro',
        fontWeight: 'bolder',
        color: '#373C3C',
      },
      button: {
        margin: 15,
        marginTop: '75px',
        borderRadius: 10,
        fontFamily: 'Source Serif Pro',
        fontSize: 20,
        labelStyle: {
          fontFamily: 'Source Serif Pro',
          fontSize: '22px',
          textTransform: 'none',
          fontWeight: 'bolder',
          color: '#373C3C',
        },
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
          <Sidebar
            style={styles.sidebar}
            zDepth={1}>
            <RaisedButton
              label='Random Color'
              labelStyle={styles.button.labelStyle}
              style={styles.button}
              buttonStyle={{borderRadius: '10px', width: '225px', height: '55px', border: '1px solid #373C3C'}}
            />
            <Menu>
              <MenuItem primaryText='Red' style={styles.menu}/>
              <MenuItem primaryText='Orange' style={styles.menu}/>
              <MenuItem primaryText='Yellow' style={styles.menu}/>
              <MenuItem primaryText='Green' style={styles.menu}/>
              <MenuItem primaryText='Blue' style={styles.menu}/>
              <MenuItem primaryText='Purple' style={styles.menu}/>
              <MenuItem primaryText='Brown' style={styles.menu}/>
              <MenuItem primaryText='Gray' style={styles.menu}/>
            </Menu>
          </Sidebar>

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
