// individual color swatch (color top 80%, hex value bottom 20%)
import React from 'react';
import randomColor from 'randomcolor';
// import DashboardContainer from '../dashboard-container';
import {GridList, GridTile} from 'material-ui/GridList';


class ColorSwatch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      colors: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({colors: e.target.value});
  }


  render(){
    // let {colors} = this.props.colors;
    console.log(this.props.colors, 'something');
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
      // <div>
      //   {this.props.colors.map((color,i) => {
      //     return (
      //       <p key={i}>{color}</p>
      //     );
      //   })}
      // </div>
      <div className='color-swatch-container'>
        <GridList
          cellHeight={180}
          style={styles.gridList}>
          {this.props.colors.map(color => {
            return (
              <GridTile
                title="#cffff1"
                key={color}
                style={{backgroundColor: color}}
                titleBackground={'white'}
              />
            );
          })}
          {/* <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/>
          <GridTile title="#cffff1"/> */}
        </GridList>
      </div>
    );
  }
}

export default ColorSwatch;
