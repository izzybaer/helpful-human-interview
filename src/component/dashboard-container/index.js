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
      listViewVisible: true,
      detailViewVisible: false,
    };
  }
  render(){
    return(
      <div className='main'>
        {renderIf(!this.state.listViewVisible,
          <div onClick={() => this.setState({listViewVisible: false, detailViewVisible: true})}>
            <ColorSwatch
              onClick={this.handleRandomColorSwatch}/>
            <DetailView
              onChange={this.handleChange}
            />
          </div>
        )}
        {renderIf(this.state.listViewVisible,
          <div>
            <ColorSwatch
              onClick={this.handleRandomColorSwatch}/>
            <ListView
              onChange={this.handleChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default DashboardContainer;
