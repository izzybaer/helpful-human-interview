// holds the detail view for the color swatches
// has nav / search bar and also random color side bar

import React from 'react';
import ColorSwatch from '../color-swatch';

class DetailView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    };
  }
}
export default DetailView;
