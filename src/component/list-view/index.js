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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  render(){
    let {colors} = this.props;
    console.log('colors', colors);
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
      <div className='main' style={styles.root}>
        {/* {renderIf(!this.state.visible,
          <div className='color-swatch'>
            <ColorSwatch onClick={() => this.setState({visible: false})} />
            <div>
              <GridList>
                {colors.map(color =>

                  <GridTile
                    title="#cffff1"
                    key={color}
                    backgroundColor={colors[0]}
                    titleBackground={colors.name}
                    onClick={this.handleChange}
                  />
                )}
              </GridList> */}
            {/* </div> */}
          {/* </div> */}
        )}
      </div>
    );
  }
}

export default ListView;
