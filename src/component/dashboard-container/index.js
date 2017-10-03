import React from 'react';
import randomColor from 'randomcolor';
import ColorSwatch from '../color-swatch';

class DashboardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      colors: [],
      clicked: false,
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleRandomColorSwatch = this.handleRandomColorSwatch.bind(this);
  }
  handleToggleClick(index, e){
    e.preventDefault();
    this.setState(prevState => ({clicked: true}));
  }

  componentWillMount(){
    var colors = [...randomColor({
      count: 100,
      luminosity: 'random',

    })];
    this.setState({colors: colors});
  }

  handleRandomColorSwatch() {
    var colors = [...randomColor({
      count: 100,
      luminosity: 'random',
    })];
    this.setState({colors: colors});
  }

  render(){

    return(
      <div className='dashboard-container'>
        <ColorSwatch colors={this.state.colors} />
      </div>
    );
  }
}

export default DashboardContainer;
