import React from 'react';

class DetailList extends React.Component {
  renderList(){
    const { data } = this.props;

    if(data){
      return data.map((element, i) => {
        const background = !(i % 2) ? { backgroundColor: '#E2E2E2' } : {};

        if(element.value){
          return (
            <div key={element.key} style={{
              ...styles.listItemStyle,
              ...background,
              ...{ width: this.props.itemWidth }
            }}>
              <div className="col span_1_of_2">
                { element.key } :
              </div>
              <div className="col span_1_of_2">
                { element.value }
              </div>
            </div>);
        }
      });
    }
  }

  render(){
    return (
      <div className="section group">
        { this.renderList() }
      </div>
    );
  }
}

DetailList.defaultProps = {
  itemWidth: '100%',
};

const styles = {
  listItemStyle: {
    width: '100%',
    height: '40px',
    padding: '5px',
    fontSize: '18px',
    boxSizing: 'border-box',
    display: 'inline-block',
  }
};

export default DetailList;
