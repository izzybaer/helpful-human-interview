// holds app state / view state
// conditionally renders list view / detail view based on whether or not a swatch has been clicked.
// list view is the default view
import React from 'react';
import randomColor from 'randomcolor';
import ColorSwatch from '../color-swatch';
import ListView from '../list-view';
import DetailView from '../detail-view';
import {renderIf} from '../../lib/util.js';
import {GridList, GridTile} from 'material-ui';

class DashboardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      colors: [],
      listView: true,
      listViewVisible: true,
      detailViewVisible: false,
    };
    this.handleRandomColorSwatch = this.handleRandomColorSwatch.bind(this);
  }

  handleRandomColorSwatch() {
    var colors = [...randomColor({
      count: 100,
      luminosity: 'random',
      hue: 'green',
    })];
    console.log(colors, 'color');
    this.setState({colors: colors});
  }


  componentWillMount(){
    // this.handleRandomColorSwatch();
    var colors = [...randomColor({
      count: 100,
      luminosity: 'random',
      hue: 'green',
    })];
    // console.log(colors, 'color');
    this.setState({colors: colors});
    // console.log('color', this.state.colors);
    // console.log('__componentWillMount__', this.state.colors);
  }

  render(){
    console.log('color', this.state.colors);

    return(
      <div className='dashboard-container'>
        <h1>Helpful Human</h1>
        <ColorSwatch colors={this.state.colors}/>
        {/* <ListView onClick={this.handleChange} /> */}
      </div>


      // <div className='main'>
      //   {renderIf(!this.state.listViewVisible,
      //     <div onClick={() => this.setState({listViewVisible: false, detailViewVisible: true})}>
      //       <ColorSwatch
      //         onClick={this.handleRandomColorSwatch}/>
      //       <DetailView
      //         onChange={this.handleChange}
      //       />
      //     </div>
      //   )}
      //   {renderIf(this.state.listViewVisible,
      //     <div>
      //       <ColorSwatch
      //         onClick={this.handleRandomColorSwatch}/>
      //       <ListView
      //         onChange={this.handleChange}
      //       />
      //     </div>
      //   )}
      // </div>
    );
  }
}

export default DashboardContainer;
