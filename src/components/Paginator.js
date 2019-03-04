import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

class Paginator extends React.Component {

  renderPages(){
    const { itemStyle, itemSelected, firstItemStyle, lastItemStyle, linkStyle } = styles;
    const { url, page, count } = this.props;
    const totalPages = parseInt(count / 16, 10) + 1;
    let paginator = [];

    for(var i=1; i<=totalPages; i++){
      const selected = (page === i) ? itemSelected : {};

      paginator.push(
        <li key={i} style={ linkStyle }>
          <Link to={`${url}?page=${i}`} style={{
            ...itemStyle,
            ...selected,
          }}>
            { i }
          </Link>
        </li>
      );
    }

    //Variables
    let padding = 4;
    let firstButtonText = 'First Page';
    let lastButtonText = 'Last Page';
    
    //Responsiveness
    if (matchMedia('only screen and (max-width: 550px)').matches){ 
      firstButtonText = '<<'; lastButtonText = '>>'; padding = 3;
    }
    
    //Calculations
    const frontPadding = (page < padding) ? 0 : page - padding;
    const backPadding = (page > (totalPages - (padding - 1))) ? totalPages : page + (padding - 1);
    paginator = paginator.slice(frontPadding, backPadding);

    paginator.unshift(
      <li key='first' style={ linkStyle }>
        <Link to={`${url}?page=1`} style={{
          ...itemStyle,
          ...firstItemStyle
        }}>
          { firstButtonText }
        </Link>
      </li>
    );

    paginator.push(
      <li key='last' style={ linkStyle }>
        <Link to={`${url}?page=${totalPages}`} style={{
          ...itemStyle,
          ...lastItemStyle

        }}>
          { lastButtonText }
        </Link>
      </li>
    );

    return paginator;
  }

  render() {
    const { listStyle } = styles;

    return (
      <div>
        <ul style={listStyle}>
          { this.renderPages() }
  		  </ul>
      </div>
    );
  }
}

var styles = {
  listStyle: {
    padding: '0px',
    textAlign: 'center',
  },
  linkStyle: {
    listStyle: 'none',
    display: 'inline-block',
  },
  firstItemStyle : {
    borderBottomLeftRadius: '4px',
    borderTopLeftRadius: '4px',
  },
  lastItemStyle : {
    borderBottomRightRadius: '4px',
    borderTopRightRadius: '4px',
  },
  itemSelected: {
    color: '#fff',
    backgroundColor: '#30A3DC',
    borderColor: '#30A3DC',
    cursor: 'default',
  },
  itemStyle: {
    padding: '6px 12px',
    margin: '20px 0px',
    lineHeight: '1.6',
    textDecoration: 'none',
    color: '#30A3DC',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderColor: '#ddd',
    marginLeft: '-1px',
    cursor: 'pointer',
    display: 'inline-block',

    ':hover': {
      color: '#216a94',
      backgroundColor: '#eeeeee',
      borderColor: '#ddd',
    }
  }
};

export default Radium(Paginator);
