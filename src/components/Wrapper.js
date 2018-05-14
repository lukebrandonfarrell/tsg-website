import React from 'react';

class Wrapper extends React.Component {
  render(){
    //Responsiveness
    let width = '1200px'; let padding = '30px 0px';
    if (matchMedia('only screen and (max-width: 1260px)').matches){ width = '90%'; padding = '30px 0px'; }
    if (matchMedia('only screen and (max-width: 880px)').matches){ width = '90%'; padding = '22px 0px'; }
    if (matchMedia('only screen and (max-width: 550px)').matches){ width = '95%'; padding = '12px 0px'; }
    
    const verticalPaddingObject = this.props.verticalPadding ? { padding } : {};

    return (
      <div style={{ ...styles.wrapperStyle, ...verticalPaddingObject, ...{ width }, ...this.props.style }}>
        { this.props.children }
      </div>
    );
  }
}

var styles = {
  wrapperStyle: {
    margin: '0 auto',
  },
};

export default Wrapper;
