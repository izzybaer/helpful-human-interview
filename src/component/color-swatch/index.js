import React from 'react';
import Paper from 'material-ui/Paper';
import randomColor from 'randomcolor';
import {renderIf} from '../../lib/util.js';
import DashboardContainer from '../dashboard-container';
import {GridList, GridTile} from 'material-ui/GridList';

class ColorSwatch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      colors: [],
      clicked: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(index, e){
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
        marginTop: 30,
        width: 900,
        height: 600,
        overflowY: 'auto',
        fontFamily: 'Source Serif Pro',
      },
      gridTile: {
        titleStyle: {
          color: '#373C3C',
          backGroundColor: '#FFFFFF',
        },
      },
    };

    return(
      <div className='color-swatch-container'>
        <br />
        <br />
        <br />
        {clicked ? ( // if the tile has  been clicked
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
                  onClick={this.handleToggleClick(this, index)}
                  titlePosition='bottom'
                  titleBackground='white'
                  titleStyle={styles.gridTile.titleStyle}
                  style={{backgroundColor: color, height: '225px', width: '175px', borderRadius: '10px', border: '1px solid grey', paddingBottom: '4px', color: '#373C3C'}}
                />
              );
            })}
          </GridList>
        ) : (
          <div className='detail-view'>
            <GridList
              cols={1}
              padding={1}
              style={styles.gridList}>
              {this.props.colors.map(color => {
                return (
                  <GridTile
                    cols={1}
                    rows={1.5}
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
              style={styles.gridList}>
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

// height: '225px', width: '175px',
