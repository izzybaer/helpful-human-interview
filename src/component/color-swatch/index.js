// individual color swatch (color top 80%, hex value bottom 20%)
import React from 'react';
import randomColor from 'randomcolor';
import {GridList, GridTile} from 'material-ui/GridList';


class ColorSwatch extends React.Component{
  constructor(props){
    super(props);
    this.state = props.color
      ? {...props.color}
      : {name: '', color: []};

    this.handleRandomColorSwatch = this.handleRandomColorSwatch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleRandomColorSwatch() {
    var color = randomColor({
      count: 100,
      luminosity: 'random',
      hue: 'green',
    });

    color.push(this.state.colors);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  //
  // handleClick(e){
  //   e.preventDefault();
  //   this.props.onComplete(this.state);
  //   if(!this.props.colors)
  //     this.setState({colors:[]});
  // }

  render(){
    return(
      <div className='color-swatch-container'>


      </div>
    );
  }
}

export default ColorSwatch;
