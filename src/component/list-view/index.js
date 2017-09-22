// default view
// displays a nav/search bar
// displays a random color sidebar with list of colors
// displays a grouping of color swatches, 12 per page, 100 swatches total

import React from 'react';
import {renderIf} from '../../lib/util.js';
import ColorSwatch from '../color-swatch';

class ListView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: true,
    };
  }

  render(){
    return(
      <div className='color-swatch'>
        {renderIf(!this.state.visible,
          <div onClick={() => this.setState({visible: false})}>
            <div> {color} </div>
            <div> {color.name} </div>
          </div>
        )}
      </div>
    )
  }
}
