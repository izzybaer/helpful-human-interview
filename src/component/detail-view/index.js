// holds the detail view for the color swatches
// has nav / search bar and also random color side bar

import React from 'react';
import randomColor from 'randomcolor';
import {renderIf} from '../../lib/util.js';
import DashboardContainer from '../dashboard-container';
import {GridList, GridTile} from 'material-ui/GridList';
// import ColorSwatch from '../color-swatch';

class DetailView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      clicked: true,
    };
  }
  render(){
    const clicked = this.state.clicked;
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridTile: {
        titleStyle: {
          color: '#373C3C',
          backGroundColor: '#FFFFFF',
          fontSize: '20px',
        },
      },
      gridList: {
        float: 'right',
        marginTop: 20,
        marginLeft: 30,
        width: '75%',
        height: '600px',
        overflowY: 'auto',
        fontFamily: 'Source Serif Pro',
      },
      gridListDetailBottom: {
        display: 'flex',
        flexWrap: 'wrap',
        float: 'right',
        marginTop: 20,
        marginLeft: 30,
        width: '75%',
        height: '600px',
        overflowX: 'auto',
        fontFamily: 'Source Serif Pro',
      },
      gridListDetail: {
        float: 'right',
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
        width: '75%',
        height: '600px',
        overflowY: 'auto',
        fontFamily: 'Source Serif Pro',
      },
    };
    let {colors} = this.props;
    return(
      <div className='detail-view'>
        <GridList
          cols={1}
          padding={50}
          cellHeight={200}
          style={styles.gridListDetail}>
          {this.props.colors.map(color => {
            return (
              <GridTile
                cols={2}
                rows={2.5}
                key={color}
                title={color}
                titlePosition='bottom'
                titleBackground='white'
                onClick={this.handleToggleClick}
                titleStyle={styles.gridTile.titleStyle}
                style={{backgroundColor: color, borderRadius: '10px', border: '1px solid grey', paddingBottom: '4px', color: '#373C3C'}}
              />
            );
          })}
        </GridList>
        <GridList
          cols={5}
          padding={1}
          style={styles.gridListDetailBottom}>
          {this.props.colors.map(color => {
            return (
              <GridTile
                key={color}
                title={color}
                titlePosition='bottom'
                titleBackground='white'
                onClick={this.handleToggleClick}
                titleStyle={styles.gridTile.titleStyle}
                style={{backgroundColor: color, borderRadius: '10px', border: '1px solid grey', paddingBottom: '4px', color: '#373C3C'}}
              />
            );
          })}
        </GridList>
      </div>
    );
  }
}
export default DetailView;
