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

        <div className='color-swatch'>

          <div>

          </div>
        </div>

      </div>
    );
  }
}

export default ListView;
