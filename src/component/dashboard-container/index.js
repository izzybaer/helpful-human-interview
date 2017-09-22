// holds app state / view state
// conditionally renders list view / detail view based on whether or not a swatch has been clicked.
// list view is the default view
import React from 'react';
import DetailView from '../detail-view';
import ColorSwatch from '../color-swatch';

class DashboardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listView: true,
    };
  }
  render(){
    return(
      <div className='main'>
        <ColorSwatch />
      </div>
    );
  }
}

export default DashboardContainer;
