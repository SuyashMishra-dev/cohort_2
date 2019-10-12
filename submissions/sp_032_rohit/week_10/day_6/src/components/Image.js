import React from 'react';
export default class Image extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} height="600px" className="mx-auto d-block mt-5 mb-5" />
      </div>
    );
  }
}
