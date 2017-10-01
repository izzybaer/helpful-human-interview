import React from 'react';
import randomColor from 'randomcolor';
// import ColorSwatch from '../color-swatch';
import {renderIf} from '../../lib/util.js';
import {GridList, GridTile} from 'material-ui';
import DashboardContainer from '../dashboard-container';

class ListView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: true,
      clicked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  // handleToggleClick(index, e){
  //   e.preventDefault();
  //   this.setState(prevState => ({clicked: true}));
  // }

  handleChange(e){
    this.setState({colors: e.target.value});
  }

  render(){
    const clicked = this.state.clicked;
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
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
      gridTile: {
        titleStyle: {
          color: '#373C3C',
          backGroundColor: '#FFFFFF',
          fontSize: '20px',
        },
      },
    };

    let {colors} = this.props;
    return(
      <div className='list-view'>
        <GridList
          cellHeight={200}
          cols={4}
          padding={1}
          style={styles.gridList}>
          {this.props.colors.map(color => {
            return (
              <GridTile
                cols={1}
                rows={1.5}
                key={color}
                title={color}
                // onClick={this.handleToggleClick}
                titlePosition='bottom'
                titleBackground='white'
                titleStyle={styles.gridTile.titleStyle}
                style={{backgroundColor: color, height: '225px', width: '200px', borderRadius: '10px', border: '1px solid #B2B2B2', paddingBottom: '4px', color: '#373C3C'}}
              />
            );
          })}
        </GridList>
        <div className='color-swatch'>

          <div>

          </div>
        </div>

      </div>
    );
  }
}

export default ListView;
