// default view
// displays a nav/search bar
// displays a random color sidebar with list of colors
// displays a grouping of color swatches, 12 per page, 100 swatches total

import React from 'react';
import {renderIf} from '../../lib/util.js';
import ColorSwatch from '../color-swatch';
import {GridList, GridTile} from 'material-ui';



class ListView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: true,
    };
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
    return(
      <div className='color-swatch'>
        {renderIf(!this.state.visible,
          <div onClick={() => this.setState({visible: false})}>
            <GridList>
              <GridTile title="lfksjhdkjfhdkl" />
            </GridList>
          </div>
        )}
      </div>
    );
  }
}
