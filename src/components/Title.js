import React from 'react';

class Title extends React.Component {
  render() {
    const { containerStyle, textStyle, plusStyle } = styles;

    return (
      <div style={ containerStyle }>
        <h1 style={plusStyle}>+</h1>
        <h2 style={ textStyle }>{ this.props.label }</h2>
        <hr />
      </div>
    );
  }
}

var styles = {
  containerStyle: {
    textAlign: 'left',
  },
  textStyle: {
    fontSize: '32px',
    margin: '0px',
    color: '#1F2018',
    fontWeight: '500',
    display:'inline-block'
  },
  plusStyle: {
    margin: '0px',
    marginRight: '5px',
    color: '#30A4DC',
    fontSize: '34px',
    display:'inline-block'
  }
};

export default Title;
