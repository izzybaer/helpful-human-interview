// individual color swatch (color top 80%, hex value bottom 20%)
import React from 'react';
import randomColor from 'randomcolor';
import {GridList, GridTile} from 'material-ui/GridList';


class ColorSwatch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      colors: [],
    };

    this.handleRandomColorSwatch = this.handleRandomColorSwatch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }


  handleRandomColorSwatch() {
    var color = [...randomColor({
      count: 100,
      luminosity: 'random',
      hue: 'green',
    })];
    console.log(color, 'color');

    // var newStateArray = this.state.colors.slice();
    // this.state.colors.push(color);
    this.setState({colors: color});
    console.log(this.state.colors, 'STATE____colors');
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  render(){
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
      },
    };
    let {colors} = this.props;
    // console.log('scott was here', colors)
    return(

      <div className='color-swatch-container'>
        <GridList>
          {this.state.colors.map(color => {

            <GridTile
              title="#cffff1"
              key={color}
              backgroundColor={color}
              titleBackground={'white'}
              onChange={this.handleRandomColorSwatch}
            />;
          })}
          {/* <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/> */}
        </GridList>
        <button onClick={this.handleRandomColorSwatch}> Hi </button>
      </div>
    );
  }
}

export default ColorSwatch;
