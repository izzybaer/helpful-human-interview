// individual color swatch (color top 80%, hex value bottom 20%)
import React from 'react';
import randomColor from 'randomcolor';
import DashboardContainer from '../dashboard-container';
import {GridList, GridTile} from 'material-ui/GridList';


class ColorSwatch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      colors: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({colors: e.target.value});
  }


  render(){

    console.log(this.props.colors, 'array of random colors');
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 900,
        height: 600,
        overflowY: 'auto',
        fontFamily: 'Source Serif Pro',
      },
    };
    return(
      <div className='color-swatch-container'>
        <GridList
          cellHeight={200}
          cols={4}
          padding={1}
          style={styles.gridList}>
          {this.props.colors.map(color => {
            return (
              <GridTile
                title={color}
                titleStyle={{backGroundColor: 'white', color: '#373C3C'}}
                key={color}
                style={{backgroundColor: color, height: '225px', width: '175px', borderRadius: '10px', border: '1px solid grey', paddingBottom: '4px', color: '#373C3C'}}
                cols={1}
                rows={1.5}
                titlePosition='bottom'
                titleBackground='white'
              />
            );
          })}
        </GridList>
      </div>
    );
  }
}

export default ColorSwatch;
