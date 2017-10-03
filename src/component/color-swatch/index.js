import React from 'react';
import Menu from 'material-ui/Menu';
import randomColor from 'randomcolor';
import Sidebar from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DashboardContainer from '../dashboard-container';
import {GridList, GridTile} from 'material-ui/GridList';

class ColorSwatch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      colors: [],
      clicked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(e){
    e.preventDefault();
    this.setState(prevState => ({clicked: !prevState.clicked}));
  }

  handleChange(e){
    this.setState({colors: e.target.value});
  }

  render(){
    const clicked = this.state.clicked;
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        float: 'right',
        marginTop: 20,
        marginLeft: 30,
        width: '73%',
        height: '600px',
        overflowY: 'auto',
        fontFamily: 'Source Serif Pro',
      },
      gridListDetailBottom: {
        display: 'flex',
        flexWrap: 'wrap',
        float: 'right',
        marginTop: 20,
        marginLeft: 30,
        width: '73%',
        height: '600px',
        overflowX: 'auto',
        fontFamily: 'Source Serif Pro',
      },
      gridListDetail: {
        float: 'right',
        marginTop: 8,
        marginLeft: 25,
        marginRight: 25,
        width: '73%',
        height: '600px',
        overflowY: 'auto',
        fontFamily: 'Source Serif Pro',
      },
      sidebar: {
        float: 'left',
        height: '1100px',
        width: '270px',
        backgroundColor: '#D6D8D8',
        textAlign: 'left',
        display: 'inline-block',
      },
      menu: {
        fontSize: 20,
        display: 'inline-block',
        margin: '2px 2px 2px 2px',
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
      gridTile: {
        titleStyle: {
          color: '#373C3C',
          backGroundColor: '#FFFFFF',
          fontSize: '20px',
        },
      },
    };

    return(
      <div className='color-swatch-container' style={{height: '100%'}}>
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
        <br />
        <br />
        <br />
        {!clicked ? (
          <GridList
            cellHeight={200}
            cols={4}
            padding={1}
            style={styles.gridList}>
            {this.props.colors.map(color => {
              return (
                <GridTile
                  cols={1}
                  rows={1.5}
                  key={color}
                  title={color}
                  onClick={this.handleToggleClick}
                  titlePosition='bottom'
                  titleBackground='white'
                  titleStyle={styles.gridTile.titleStyle}
                  style={{backgroundColor: color, height: '225px', width: '200px', borderRadius: '10px', border: '1px solid #B2B2B2', paddingBottom: '4px', color: '#373C3C'}}
                />
              );
            })}
          </GridList>
        ) : (
          <div className='detail-view'>
            <GridList
              cols={1}
              padding={50}
              cellHeight={200}
              style={styles.gridListDetail}>
              {this.props.colors.map(color => {
                return (
                  <GridTile
                    cols={2}
                    rows={2.5}
                    key={color}
                    title={color}
                    titlePosition='bottom'
                    titleBackground='white'
                    onClick={this.handleToggleClick}
                    titleStyle={styles.gridTile.titleStyle}
                    style={{backgroundColor: color, borderRadius: '10px', border: '1px solid grey', paddingBottom: '4px', color: '#373C3C'}}
                  />
                );
              })}
            </GridList>
            <GridList
              cols={5}
              padding={1}
              style={styles.gridListDetailBottom}>
              {this.props.colors.map(color => {
                return (
                  <GridTile
                    key={color}
                    title={color}
                    titlePosition='bottom'
                    titleBackground='white'
                    onClick={this.handleToggleClick}
                    titleStyle={styles.gridTile.titleStyle}
                    style={{backgroundColor: color, borderRadius: '10px', border: '1px solid grey', paddingBottom: '4px', color: '#373C3C'}}
                  />
                );
              })}
            </GridList>
          </div>
        )}
      </div>
    );
  }
}

export default ColorSwatch;
