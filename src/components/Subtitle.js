import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { containerStyle, textStyle, plusStyle } = styles;

    return (
      <div style={ containerStyle }>
        <h3 style={ textStyle }>{ this.props.children }</h3>
      </div>
    );
  }
}

var styles = {
  containerStyle: {
    textAlign: 'left',
    margin: '14px 0px',
  },
  textStyle: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '24px',
    margin: '0px',
    color: '#636b6f',
    fontWeight: '500',
    display:'inline-block'
  },
};

export default Subtitle;
