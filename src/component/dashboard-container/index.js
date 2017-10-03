import React from 'react';
import ListView from '../list-view';
import DetailView from '../detail-view';
import randomColor from 'randomcolor';
// import ColorSwatch from '../color-swatch';

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
    const clicked = this.state.clicked;
    return(
      <div className='dashboard-container'>
        {!clicked ? (
          <ListView
            colors={this.state.colors}
            visible={true}
            clicked={false}
            onClick={this.handleToggleClick} />
        ) : (
          <DetailView
            colors={this.state.colors}
            visible={false}
            clicked={true}
            onClick={this.handleToggleClick} />
        )}
      </div>
    );
  }
}

export default DashboardContainer;
