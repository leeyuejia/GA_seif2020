import React, { Component } from 'react';

class Notices extends Component {
  render () {
    return (
      <>
      {this.props.notices.map( notice => {
       return  (
         <div key={notice.id} className="notice">
            <h3>{ notice.title }</h3>
            <p>{ notice.content }</p>
            <small>{notice.author }</small>
          </div>
       )
      })}
      </>
    )
  }
}

export default Notices;
