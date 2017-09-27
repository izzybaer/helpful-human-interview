// default view
// displays a nav/search bar
// displays a random color sidebar with list of colors
// displays a grouping of color swatches, 12 per page, 100 swatches total

import React from 'react';
import randomColor from 'randomcolor';
import ColorSwatch from '../color-swatch';
import {renderIf} from '../../lib/util.js';
import {GridList, GridTile} from 'material-ui';
import DashboardContainer from '../dashboard-container';

class ListView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({visible: e.target.value});
  }


  render(){
    let {colors} = this.props;
    // {this.handleRandomColorSwatch();}
    // console.log(ColorSwatch, 'color-swatch');
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
        {/* {renderIf(!this.state.visible, */}
        <div className='color-swatch'>
          {/* <ColorSwatch  /> */}
          <div>
            {/* <GridList>
              {this.state.colors.map((item, i) => {
                return <GridTile
                  key={i}
                  title="#cffff1"
                  backgroundColor={item.colors.name}
                  titleBackground={'white'}
                  onClick={this.handleChange}
                />;
              })}
            </GridList> */}
          </div>
        </div>
        {/* // )} */}
      </div>
    );
  }
}

export default ListView;
